# Настройка Supabase для Portuguese Course

Приложение работает **без Supabase** (через localStorage). Supabase нужен только если вы хотите серверное хранение прогресса и авторизацию с email-подтверждением.

## 1. Создание проекта

1. Зайдите на [supabase.com](https://supabase.com) и создайте аккаунт
2. Нажмите **New Project**
3. Укажите имя (например, `portuguese-course`), пароль БД и выберите регион
4. Дождитесь создания проекта (~2 минуты)

## 2. Получение ключей

1. Откройте **Settings → API** в панели проекта
2. Скопируйте:
   - **Project URL** — например `https://abcdefgh.supabase.co`
   - **anon public key** — длинный ключ `eyJ...`

## 3. Подключение к приложению

Откройте файл `js/services/supabase.js` и замените плейсхолдеры:

```js
const SUPABASE_URL = 'https://ваш-проект.supabase.co';
const SUPABASE_ANON_KEY = 'eyJ...ваш-anon-ключ';
```

## 4. Создание таблиц

1. В панели Supabase откройте **SQL Editor**
2. Нажмите **New Query**
3. Скопируйте содержимое файла `supabase/schema.sql` и выполните его
4. Убедитесь, что создались 3 таблицы:
   - `user_progress` — прогресс по юнитам
   - `flashcard_state` — состояние флешкарт (SM-2)
   - `exercise_log` — лог выполненных упражнений

## 5. Настройка авторизации

1. Откройте **Authentication → Providers** в панели Supabase
2. Убедитесь, что **Email** провайдер включен
3. (Опционально) Для разработки отключите **Confirm email** в **Authentication → Settings**, чтобы не подтверждать email при регистрации

## 6. Проверка

1. Откройте приложение в браузере
2. Зарегистрируйтесь — новый пользователь должен появиться в **Authentication → Users**
3. Пройдите упражнение — прогресс должен появиться в **Table Editor → user_progress**

## Возврат к localStorage

Чтобы вернуться к локальному режиму, просто верните плейсхолдеры:

```js
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

Приложение автоматически переключится на localStorage.
