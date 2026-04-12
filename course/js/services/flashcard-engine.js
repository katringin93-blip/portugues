// SM-2 Spaced Repetition Algorithm
import { getClient, isLocalMode } from './supabase.js';

const LOCAL_FC_KEY = 'pt_course_flashcards';

function getLocalCards(userId) {
  try {
    const all = JSON.parse(localStorage.getItem(LOCAL_FC_KEY)) || {};
    return all[userId] || {};
  } catch (e) { return {}; }
}

function saveLocalCards(userId, cards) {
  const all = JSON.parse(localStorage.getItem(LOCAL_FC_KEY) || '{}');
  all[userId] = cards;
  localStorage.setItem(LOCAL_FC_KEY, JSON.stringify(all));
}

// SM-2: quality 0-3 (again=0, hard=1, good=2, easy=3)
export function sm2(card, quality) {
  let { easeFactor = 2.5, interval = 0, repetitions = 0 } = card;

  if (quality < 2) {
    // Failed — reset
    repetitions = 0;
    interval = 0;
  } else {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 3;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions++;
  }

  // Update ease factor
  easeFactor = easeFactor + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + (interval || 0));

  return {
    easeFactor: Math.round(easeFactor * 100) / 100,
    interval,
    repetitions,
    nextReview: nextReview.toISOString(),
  };
}

export async function loadFlashcardStates(userId) {
  if (isLocalMode()) {
    return getLocalCards(userId);
  }

  const { data, error } = await getClient()
    .from('flashcard_state')
    .select('*')
    .eq('user_id', userId);

  if (error) { console.error('loadFlashcardStates:', error); return {}; }

  const states = {};
  for (const row of data) {
    states[row.card_id] = {
      easeFactor: row.ease_factor,
      interval: row.interval_days,
      repetitions: row.repetitions,
      nextReview: row.next_review,
    };
  }
  return states;
}

export async function saveFlashcardState(userId, cardId, state) {
  if (isLocalMode()) {
    const cards = getLocalCards(userId);
    cards[cardId] = state;
    saveLocalCards(userId, cards);
    return;
  }

  await getClient()
    .from('flashcard_state')
    .upsert({
      user_id: userId,
      card_id: cardId,
      ease_factor: state.easeFactor,
      interval_days: state.interval,
      repetitions: state.repetitions,
      next_review: state.nextReview,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id,card_id' });
}

export function getDueCards(allCards, states) {
  const now = new Date();
  return allCards.filter(card => {
    const state = states[card.id];
    if (!state) return true; // new card
    return new Date(state.nextReview) <= now;
  });
}
