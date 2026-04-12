import { getClient, isLocalMode } from './supabase.js';

const LOCAL_USER_KEY = 'pt_course_user';
const LOCAL_USERS_KEY = 'pt_course_users';

function getLocalUsers() {
  try { return JSON.parse(localStorage.getItem(LOCAL_USERS_KEY)) || {}; }
  catch (e) { return {}; }
}

function saveLocalUsers(users) {
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
}

export async function login(email, password) {
  if (isLocalMode()) {
    const users = getLocalUsers();
    const user = users[email];
    if (!user || user.password !== password) {
      throw new Error('auth.wrongCredentials');
    }
    const session = { id: user.id, email };
    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(session));
    return session;
  }

  const { data, error } = await getClient().auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
  return { id: data.user.id, email: data.user.email };
}

export async function register(email, password) {
  if (isLocalMode()) {
    const users = getLocalUsers();
    if (users[email]) throw new Error('auth.userExists');
    const id = 'local_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    users[email] = { id, password };
    saveLocalUsers(users);
    const session = { id, email };
    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(session));
    return session;
  }

  const { data, error } = await getClient().auth.signUp({ email, password });
  if (error) throw new Error(error.message);
  return { id: data.user.id, email: data.user.email };
}

export async function logout() {
  if (isLocalMode()) {
    localStorage.removeItem(LOCAL_USER_KEY);
    return;
  }
  await getClient().auth.signOut();
}

export async function getSession() {
  if (isLocalMode()) {
    try {
      const session = JSON.parse(localStorage.getItem(LOCAL_USER_KEY));
      return session || null;
    } catch (e) { return null; }
  }

  const { data } = await getClient().auth.getSession();
  if (data && data.session && data.session.user) {
    return { id: data.session.user.id, email: data.session.user.email };
  }
  return null;
}
