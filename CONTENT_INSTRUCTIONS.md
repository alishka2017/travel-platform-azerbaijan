# Инструкция по управлению контентом Smartholiday.az

Этот сайт использует JSON-систему управления контентом. Вы можете изменять тексты, фото и туры прямо через GitHub без написания кода.

## 📁 Структура контента

```
src/content/
├── cities/
│   └── cities.json          # Все города Азербайджана
├── tours/
│   └── categories/
│       └── tours.json       # Все туры по категориям
├── transfers/
│   └── transfers.json       # Трансферы
└── attractions/
    └── attractions.json     # Достопримечательности
```

## 🏙️ Как изменить текст на главной странице

1. Откройте файл `src/app/page.tsx`
2. Найдите нужный текст и измените его
3. Сделайте коммит и сайт обновится автоматически

## 📸 Как поменять фото города

1. Откройте `src/content/cities/cities.json`
2. Найдите нужный город по `id` (например, `"baku"`)
3. Измените `heroImage` на новый URL фото
4. Сделайте коммит

Пример:
```json
{
  "id": "baku",
  "name": "Baku",
  "heroImage": "https://images.unsplash.com/photo-1574505338056-7718c71c2c35?w=1280"
}
```

## ➕ Как добавить новый город

1. Откройте `src/content/cities/cities.json`
2. Добавьте новый объект в массив `cities`:
```json
{
  "id": "new-city",
  "name": "New City",
  "slug": "new-city",
  "country": "Azerbaijan",
  "region": "Region Name",
  "population": "10,000",
  "description": "Описание города...",
  "heroImage": "https://example.com/photo.jpg",
  "bestTime": "May-September",
  "distanceFromBaku": "100 km",
  "transport": "Bus, car",
  "topAttractions": ["Attraction 1", "Attraction 2"],
  "topRestaurants": ["Restaurant 1"],
  "topHotels": ["Hotel 1"],
  "hiddenGems": ["Hidden gem 1"],
  "mistakesToAvoid": ["Don't do this"]
}
```
3. Сделайте коммит

## ➕ Как добавить новый тур

1. Откройте `src/content/tours/categories/tours.json`
2. Выберите категорию (city-tours, day-trips, multi-day, adventure, food-wine)
3. Добавьте новый тур:
```json
{
  "id": "new-tour",
  "name": "New Tour",
  "slug": "new-tour",
  "duration": "8 hours",
  "price": "50 AZN",
  "category": "Day Trips",
  "program": ["09:00 - Pickup", "10:00 - Activity"],
  "includes": ["Guide", "Transport"],
  "description": "Tour description",
  "image": "https://example.com/photo.jpg"
}
```
4. Сделайте коммит

## 📞 Как изменить контакты

1. Откройте `src/components/layout/Footer.tsx`
2. Найдите секцию Contact и измените данные
3. Сделайте коммит

## 🔍 Как работает поиск

Поиск автоматически ищет по:
- Городам (название, описание)
- Турам (название, категория)

Результаты отображаются на странице `/search?q=query`

## 📱 WhatsApp кнопка

WhatsApp кнопка фиксирована в правом нижнем углу на всех страницах. Номер телефона можно изменить в `src/components/WhatsAppFloat.tsx`.

## ✅ После изменений

1. Сделайте коммит на GitHub
2. Сайт автоматически обновится через 1-2 минуты
3. Проверьте сайт: https://smartholidayaz.netlify.app/

## 🆘 Поддержка

Если что-то не работает, проверьте:
- JSON синтаксис (нет лишних запятых)
- URL фото доступны
- Нет опечаток в slug (только латиница, цифры, дефисы)
