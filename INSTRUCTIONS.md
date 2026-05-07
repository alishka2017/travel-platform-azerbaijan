# Smartholiday.az — Инструкция по настройке и запуску

## 🚀 Быстрый старт

### 1. Клонирование репозитория

```bash
git clone <repository-url>
cd travel-platform-azerbaijan
```

### 2. Установка зависимостей

```bash
npm install --legacy-peer-deps
```

### 3. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
SANITY_PROJECT_ID=mk35mbbk
SANITY_DATASET=production
SANITY_API_TOKEN=ваш_токен_Sanity
```

**Где взять токен:**
1. Зайдите в [Sanity.io](https://www.sanity.io)
2. Выберите проект `mk35mbbk`
3. Перейдите в Settings → API
4. Создайте новый токен с правами "Editor"

### 4. Запуск разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

### 5. Запуск Sanity Studio (опционально)

```bash
npm run sanity:studio
```

Откройте [http://localhost:3333](http://localhost:3333)

## 📝 Управление контентом

### Добавление тура

1. Откройте Sanity Studio (http://localhost:3333)
2. Перейдите в раздел "Tours"
3. Нажмите "Create new tour"
4. Заполните поля:
   - **Title** — название тура (на английском)
   - **Slug** — URL-ярлык (автогенерируется)
   - **Image** — загрузите изображение
   - **Duration** — длительность (например, "8 hours")
   - **Description** — описание
   - **Category** — выберите категорию
   - **Featured** — отметьте, если тур рекомендуемый
5. Нажмите "Publish"

### Добавление города

1. Перейдите в раздел "Cities"
2. Нажмите "Create new city"
3. Заполните поля:
   - **Title** — название города
   - **Slug** — URL-ярлык
   - **Image** — загрузите изображение
   - **Description** — полное описание
   - **Short Description** — краткое описание
4. Нажмите "Publish"

### Добавление ресторана

1. Перейдите в раздел "Restaurants"
2. Нажмите "Create new restaurant"
3. Заполните поля:
   - **Name** — название ресторана
   - **Slug** — URL-ярлык
   - **Image** — загрузите изображение
   - **City** — выберите город (ссылка)
   - **Cuisine** — тип кухни
   - **Rating** — рейтинг (0-5)
   - **Description** — описание
4. Нажмите "Publish"

### Добавление поста в блог

1. Перейдите в раздел "Posts"
2. Нажмите "Create new post"
3. Заполните поля:
   - **Title** — заголовок поста
   - **Slug** — URL-ярлык
   - **Image** — загрузите изображение
   - **Excerpt** — краткое описание
   - **Content** — полный текст (используйте редактор)
   - **Author** — автор
   - **Published at** — дата публикации
4. Нажмите "Publish"

## 🔧 Расширение функционала

### Добавление нового типа контента

1. Создайте схему в `src/sanity/schemas/` (например, `rent-car.ts`)
2. Добавьте в `src/sanity/schemas/schema.ts`
3. Создайте функцию запроса в `src/lib/groq-new.ts`
4. Создайте компонент страницы

### Пример: Rent Car

```typescript
// src/sanity/schemas/rent-car.ts
export default {
  name: 'rentCar',
  title: 'Rent Car',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
  ],
}
```

## 🚀 Деплой

### Локальный запуск продакшн-версии

```bash
npm run build
npm start
```

### Деплой на Netlify

1. Подключите GitHub репозиторий к Netlify
2. Установите настройки сборки:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
3. Добавьте переменные окружения в Netlify:
   - `SANITY_PROJECT_ID`
   - `SANITY_DATASET`
   - `SANITY_API_TOKEN`
4. Deploy

### Preview-деплой

Ветка `cms-integration` используется для тестирования функций CMS.
Netlify автоматически создает preview-деплои.

## 🛠️ Устранение проблем

### Ошибки сборки

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Ошибки Sanity API

Проверьте переменные окружения:
```bash
echo $SANITY_API_TOKEN
```

### Данные не загружаются

1. Проверьте Sanity Studio — есть ли данные?
2. Запустите миграционный скрипт:
   ```bash
   node scripts/migrate-to-sanity.js
   ```

## 📋 Чек-лист безопасности

- [ ] Репозиторий GitHub переведен в Private
- [ ] API токены не сохранены в коде
- [ ] Переменные окружения настроены в Netlify
- [ ] Проверены права доступа к репозиторию

## 📞 Поддержка

- Email: info@smartholiday.az
- WhatsApp: +994501234567
- Документация: `CMS_INTEGRATION_DOCS.md`
