# Инструкции по настройке деплоя на Netlify

## Проблема
GitHub Actions workflow завершается с ошибкой на шаге "Deploy to Netlify" из-за отсутствия секретов.

## Необходимые секреты в GitHub

Добавьте следующие секреты в настройках репозитория:
1. Перейдите в `Settings` → `Secrets and variables` → `Actions`
2. Нажмите `New repository secret`
3. Добавьте:

### 1. NETLIFY_AUTH_TOKEN
- Получите токен в Netlify: `https://app.netlify.com/user/applications#personal-access-tokens`
- Нажмите "Generate new token"
- Назовите `NETLIFY_AUTH_TOKEN`
- Права: `Read and write`

### 2. NETLIFY_SITE_ID
- ID сайта: `travel-platform-azerbaijan-cms`
- Или полный ID: `6750a421-7e95-4259-818a-4c536a5b312e`

### 3. SANITY_API_TOKEN
- Токен уже настроен в `.env.local`
- Для GitHub Actions нужен токен с правами `API Read + Write`
- Получить: `https://www.sanity.io/manage` → `Project` → `API` → `Add API token`

### 4. SANITY_PROJECT_ID
- Значение: `mk35mbbk`

### 5. SANITY_DATASET
- Значение: `production`

## Альтернативный вариант: Ручной деплой

Если секреты не могут быть добавлены, можно задеплоить вручную:

1. Установите Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Авторизуйтесь:
   ```bash
   netlify login
   ```

3. Задеплойте:
   ```bash
   cd /root/travel-platform-azerbaijan
   netlify deploy --prod --site travel-platform-azerbaijan-cms
   ```

## Статус

- ✅ Локальная сборка работает
- ✅ GitHub Actions workflow настроен
- ⏳ Ожидание секретов GitHub
- ⏳ Ожидание деплоя на Netlify
