# Деплой Portuguese Course

Приложение — статический сайт (HTML + CSS + JS), без сборки. Можно разместить на любом хостинге статики.

---

## Локальная разработка

ES-модули не работают через `file://`. Нужен локальный сервер:

```bash
# Python (самый простой способ)
cd Portuguese/course
py -m http.server 8080
# Откройте http://localhost:8080

# Или Node.js
npx serve .

# Или VS Code: установите расширение "Live Server",
# правый клик на index.html → Open with Live Server
```

---

## Варианты деплоя

### 1. GitHub Pages (бесплатно)

1. Создайте репозиторий на GitHub
2. Загрузите содержимое папки `course/` в корень репозитория
3. Перейдите в **Settings → Pages**
4. Source: **Deploy from a branch**, Branch: **main**, Folder: **/ (root)**
5. Нажмите Save — через 1-2 минуты сайт будет доступен по адресу `https://username.github.io/repo-name/`

### 2. Netlify (бесплатно)

1. Зайдите на [netlify.com](https://netlify.com)
2. Перетащите папку `course/` на дашборд (drag & drop deploy)
3. Сайт будет доступен сразу по сгенерированному URL
4. (Опционально) Подключите свой домен в **Domain settings**

### 3. Vercel (бесплатно)

1. Зайдите на [vercel.com](https://vercel.com)
2. Импортируйте GitHub-репозиторий
3. Framework Preset: **Other**
4. Output Directory: `.` (корень)
5. Нажмите Deploy

### 4. Любой веб-сервер (VPS, shared hosting)

Просто скопируйте содержимое папки `course/` в директорию веб-сервера (обычно `/var/www/html/` или `public_html/`).

---

## Настройка Supabase для продакшена

Если вы используете Supabase (а не localStorage):

1. Убедитесь, что URL и ключ в `js/services/supabase.js` указывают на ваш Supabase-проект
2. В Supabase Dashboard → **Authentication → URL Configuration** добавьте URL вашего сайта в **Site URL** и **Redirect URLs**
3. Проверьте, что RLS-политики настроены (см. `supabase/SETUP.md`)

---

## Структура файлов для деплоя

Нужно загружать только содержимое папки `course/`:

```
course/
├── index.html          ← точка входа
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── components/     ← Vue-компоненты
│   ├── data/           ← контент уроков
│   └── services/       ← логика (auth, progress, TTS)
└── supabase/
    ├── schema.sql      ← SQL-схема (не для деплоя, для справки)
    └── SETUP.md        ← инструкции по Supabase
```

Папка `supabase/` не нужна на сервере — она нужна только для настройки базы данных.

---

## Проверка после деплоя

1. Откройте сайт — должна появиться страница авторизации
2. Зарегистрируйтесь (в localStorage-режиме работает без Supabase)
3. Откройте любой урок — проверьте теорию, упражнения, карточки
4. Нажмите кнопку аудио — должно воспроизводиться произношение (если браузер поддерживает Web Speech API)
5. Проверьте на мобильном устройстве — адаптивная верстка
