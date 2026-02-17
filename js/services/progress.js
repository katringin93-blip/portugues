import { getClient, isLocalMode } from './supabase.js';

const LOCAL_PROGRESS_KEY = 'pt_course_progress';
const LOCAL_EXERCISE_LOG_KEY = 'pt_course_exercise_log';
const STREAK_KEY = 'pt_course_streak';

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

export function loadStreak() {
  try {
    var data = JSON.parse(localStorage.getItem(STREAK_KEY));
    if (!data || !data.lastDate) return { count: 0, lastDate: null };
    var today = getToday();
    if (data.lastDate === today) return data;
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var yesterdayStr = yesterday.toISOString().slice(0, 10);
    if (data.lastDate === yesterdayStr) return data;
    return { count: 0, lastDate: data.lastDate };
  } catch (e) {
    return { count: 0, lastDate: null };
  }
}

export function updateStreak() {
  var today = getToday();
  var streak = loadStreak();
  if (streak.lastDate === today) return streak;
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  var yesterdayStr = yesterday.toISOString().slice(0, 10);
  if (streak.lastDate === yesterdayStr) {
    streak.count++;
  } else {
    streak.count = 1;
  }
  streak.lastDate = today;
  try { localStorage.setItem(STREAK_KEY, JSON.stringify(streak)); } catch (e) { /* ignore */ }
  return streak;
}

function getLocalProgress(userId) {
  try {
    const all = JSON.parse(localStorage.getItem(LOCAL_PROGRESS_KEY)) || {};
    return all[userId] || {};
  } catch (e) { return {}; }
}

function saveLocalProgress(userId, progress) {
  const all = JSON.parse(localStorage.getItem(LOCAL_PROGRESS_KEY) || '{}');
  all[userId] = progress;
  localStorage.setItem(LOCAL_PROGRESS_KEY, JSON.stringify(all));
}

export async function loadProgress(userId) {
  if (isLocalMode()) {
    return getLocalProgress(userId);
  }

  const { data, error } = await getClient()
    .from('user_progress')
    .select('*')
    .eq('user_id', userId);

  if (error) { console.error('loadProgress error:', error); return {}; }

  const progress = {};
  for (const row of data) {
    progress[row.unit_number] = {
      exercisesCompleted: row.exercises_completed,
      exercisesTotal: row.exercises_total,
      score: row.score,
      completed: row.completed,
    };
  }
  return progress;
}

export async function saveUnitProgress(userId, unitNumber, data) {
  if (isLocalMode()) {
    const progress = getLocalProgress(userId);
    progress[unitNumber] = { ...progress[unitNumber], ...data };
    saveLocalProgress(userId, progress);
    return;
  }

  const { error } = await getClient()
    .from('user_progress')
    .upsert({
      user_id: userId,
      unit_number: unitNumber,
      exercises_completed: data.exercisesCompleted,
      exercises_total: data.exercisesTotal,
      score: data.score,
      completed: data.completed,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id,unit_number' });

  if (error) console.error('saveUnitProgress error:', error);
}

export async function logExercise(userId, unitNumber, exerciseId, answer, correct) {
  if (isLocalMode()) {
    try {
      const log = JSON.parse(localStorage.getItem(LOCAL_EXERCISE_LOG_KEY) || '[]');
      log.push({ userId, unitNumber, exerciseId, answer, correct, createdAt: new Date().toISOString() });
      localStorage.setItem(LOCAL_EXERCISE_LOG_KEY, JSON.stringify(log));
    } catch (e) { /* ignore */ }
    return;
  }

  await getClient()
    .from('exercise_log')
    .insert({
      user_id: userId,
      unit_number: unitNumber,
      exercise_id: exerciseId,
      answer,
      correct,
    });
}
