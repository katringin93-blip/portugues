// Supabase client initialization
// Replace these with your Supabase project credentials
const SUPABASE_URL = 'https://ndgvtjnatfcvawwnlaxa.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kZ3Z0am5hdGZjdmF3d25sYXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNjI0OTksImV4cCI6MjA4NjkzODQ5OX0.Ixc15_m5Nlp8tXYPKoFzJXX0hvxjcHp8GQKECZKFIc4';

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
