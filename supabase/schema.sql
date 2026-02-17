-- ============================================
-- Supabase Schema for Portuguese Course
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. User progress per unit
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  unit_number INT NOT NULL CHECK (unit_number BETWEEN 1 AND 20),
  exercises_completed INT DEFAULT 0,
  exercises_total INT DEFAULT 0,
  score FLOAT DEFAULT 0 CHECK (score BETWEEN 0 AND 100),
  completed BOOLEAN DEFAULT FALSE,
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, unit_number)
);

-- 2. Flashcard spaced repetition state
CREATE TABLE IF NOT EXISTS flashcard_state (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  card_id TEXT NOT NULL,
  ease_factor FLOAT DEFAULT 2.5,
  interval_days INT DEFAULT 0,
  repetitions INT DEFAULT 0,
  next_review TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, card_id)
);

-- 3. Exercise attempt log
CREATE TABLE IF NOT EXISTS exercise_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  unit_number INT NOT NULL,
  exercise_id TEXT NOT NULL,
  answer TEXT,
  correct BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- Row Level Security (RLS)
-- Each user can only see/modify their own data
-- ============================================

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcard_state ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_log ENABLE ROW LEVEL SECURITY;

-- user_progress policies
CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- flashcard_state policies
CREATE POLICY "Users can view own flashcard state"
  ON flashcard_state FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own flashcard state"
  ON flashcard_state FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own flashcard state"
  ON flashcard_state FOR UPDATE
  USING (auth.uid() = user_id);

-- exercise_log policies
CREATE POLICY "Users can view own exercise log"
  ON exercise_log FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own exercise log"
  ON exercise_log FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================
-- Indexes for performance
-- ============================================

CREATE INDEX IF NOT EXISTS idx_user_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_flashcard_state_user ON flashcard_state(user_id);
CREATE INDEX IF NOT EXISTS idx_flashcard_state_review ON flashcard_state(user_id, next_review);
CREATE INDEX IF NOT EXISTS idx_exercise_log_user ON exercise_log(user_id, unit_number);
