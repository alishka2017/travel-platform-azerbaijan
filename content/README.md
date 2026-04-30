# Контент-система Smartholiday.az

Этот сайт использует JSON-файлы для управления контентом. Вы можете редактировать текст, изображения и данные без изменения кода.

## Структура папок

```
/content/
  cities/          # Данные городов (JSON)
  blog/            # Статьи блога (JSON)
  tours/           # Данные туров (JSON)
  attractions/     # Данные достопримечательностей (JSON)
  restaurants/     # Данные ресторанов (JSON)
  transfers/       # Данные трансферов (JSON)
```

## Как изменить текст на главной странице

1. Откройте файл `/content/homepage.json`.
2. Найдите поле `"title"` или `"description"`.
3. Измените текст и сохраните файл.
4. Сайт обновится автоматически при следующей сборке.

## Как добавить новый город

1. Создайте новый файл в `/content/cities/`, например `shamakhi.json`.
2. Используйте следующую структуру:

```json
{
  "id": "shamakhi",
  "name": "Shamakhi",
  "slug": "shamakhi",
  "country": "Azerbaijan",
  "region": "Shamakhi",
  "population": "100,000",
  "bestTime": "May-June",
  "distanceFromBaku": "120 km",
  "transport": "Bus (2 hours)",
  "description": "Shamakhi is one of the ancient cities of Azerbaijan...",
  "heroImage": "https://example.com/image.jpg",
  "coordinates": {"lat": 40.6316, "lon": 48.6413}
}
```

3. Сохраните файл. Город появится в списке городов автоматически.

## Как добавить статью в блог

1. Создайте новый файл в `/content/blog/`, например `hidden-gems-baku.json`.
2. Используйте структуру:

```json
{
  "id": "hidden-gems-baku",
  "title": "Hidden Gems of Baku",
  "slug": "hidden-gems-baku",
  "author": "Local Expert",
  "date": "2025-04-30",
  "category": "Guides",
  "image": "https://example.com/image.jpg",
  "excerpt": "Discover secret spots in Baku...",
  "content": "Full article content here..."
}
```

## Как обновить фото

Просто замените URL в поле `"image"` или `"heroImage"` на новый URL изображения.
Рекомендуется использовать Unsplash или собственные хостинги изображений.

## Примечания

- Все поля обязательны.
- `slug` должен быть уникальным.
- Изображения должны быть оптимизированы (WebP, 1280px ширина).
- Обновления применяются после деплоя на сервер.