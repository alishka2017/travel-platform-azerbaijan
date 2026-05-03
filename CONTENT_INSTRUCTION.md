# Инструкция по управлению контентом Smartholiday.az

Эта инструкция для владельцев сайта, которые не знают код. Все изменения делаются через GitHub интерфейс.

## Структура контента

```
/public/content/
├── settings.json          # Контакты и настройки сайта
├── cities/
│   └── cities.json        # Все города Азербайджана
└── tours/
    └── categories/
        └── tours.json     # Все туры
```

## 1. Как поменять фото тура

### Через GitHub:
1. Откройте репозиторий: https://github.com/alishka2017/travel-platform-azerbaijan
2. Перейдите в папку `public/content/tours/categories/`
3. Откройте файл `tours.json`
4. Найдите нужный тур по названию (например, "Baku City Tour")
5. Измените поле `"image"` на новый URL фото:
   ```json
   {
     "id": "baku-city-tour",
     "name": "Baku City Tour",
     "image": "https://новый-url-фото.com/photo.jpg"  // ← Измените здесь
   }
   ```
6. Нажмите "Commit changes"

### Через загрузку файлов:
1. В папке `/public/images/tours/` создайте папку с названием тура (например, `baku-city-tour`)
2. Загрузите фото с названием `main.jpg`
3. В `tours.json` измените image на `/images/tours/baku-city-tour/main.jpg`

## 2. Как поменять текст описания тура

1. Откройте `public/content/tours/categories/tours.json`
2. Найдите тур по `id` (например, "baku-city-tour")
3. Измените поля:
   - `"name"` — название тура
   - `"description"` — описание
   - `"program"` — программа по часам
   - `"includes"` — что включено
4. Нажмите "Commit changes"

Пример:
```json
{
  "id": "baku-city-tour",
  "name": "Баку Сити Тур",
  "description": "Идеальное знакомство с Баку...",
  "program": [
    "09:00 - Забор из отеля",
    "09:30 - Старый город"
  ]
}
```

## 3. Как добавить новый тур

1. Откройте `public/content/tours/categories/tours.json`
2. Добавьте новый объект в нужную категорию (city-tours, day-trips, multi-day, adventure, food-wine)

Пример нового тура:
```json
{
  "id": "new-tour-slug",
  "name": "Название нового тура",
  "slug": "new-tour-slug",
  "duration": "8 hours",
  "price": "50 AZN",
  "category": "City Tours",
  "program": [
    "09:00 - Начало"
  ],
  "includes": ["Гид", "Транспорт"],
  "description": "Описание нового тура",
  "image": "https://images.unsplash.com/photo-..."
}
```

3. Нажмите "Commit changes"

## 4. Как поменять контакты

1. Откройте `public/content/settings.json`
2. Измените нужные поля:
   - `"phone"` — телефон
   - `"whatsapp"` — WhatsApp
   - `"email"` — email
   - `"address"` — адрес

Пример:
```json
{
  "contacts": {
    "phone": "+994 55 123 45 67",
    "whatsapp": "+994 55 123 45 67",
    "email": "new-email@example.com"
  }
}
```

3. Нажмите "Commit changes"

## 5. Как поменять фото города

### Через URL:
1. Откройте `public/content/cities/cities.json`
2. Найдите город по `id` (например, "baku")
3. Измените поле `"heroImage"`:
   ```json
   {
     "id": "baku",
     "name": "Baku",
     "heroImage": "https://новый-url-фото.com/photo.jpg"
   }
   ```
4. Нажмите "Commit changes"

### Через загрузку файлов:
1. В папке `/public/images/cities/` создайте папку с названием города (например, `baku`)
2. Загрузите фото с названием `hero.jpg`
3. В `cities.json` измените heroImage на `/images/cities/baku/hero.jpg`

## Автоматическое обновление сайта

После каждого коммита в GitHub сайт автоматически обновляется на Netlify в течение 1-2 минут.

Проверить статус деплоя: https://app.netlify.com/projects/smartholiday-az/deploys

## Ссылки

- Сайт: https://smartholiday-az.netlify.app
- GitHub: https://github.com/alishka2017/travel-platform-azerbaijan
- Netlify Dashboard: https://app.netlify.com/projects/smartholiday-az

## Поддержка

Если что-то пошло не так:
1. Проверьте синтаксис JSON (должен быть валидным)
2. Убедитесь, что URL фото доступны публично
3. Проверьте логи деплоя в Netlify Dashboard