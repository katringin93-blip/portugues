// Supabase client initialization
// Replace these with your Supabase project credentials
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

let supabaseClient = null;
let useLocalStorage = true;

export function initSupabase() {
  if (SUPABASE_URL === 'YOUR_SUPABASE_URL' || !window.supabase) {
    console.warn('Supabase not configured — using localStorage fallback');
    useLocalStorage = true;
    return null;
  }
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    useLocalStorage = false;
    return supabaseClient;
  } catch (e) {
    console.warn('Supabase init failed — using localStorage fallback', e);
    useLocalStorage = true;
    return null;
  }
}

export function getClient() {
  return supabaseClient;
}

export function isLocalMode() {
  return useLocalStorage;
}
