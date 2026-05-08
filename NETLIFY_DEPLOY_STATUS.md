# Netlify Deployment Status

## Preview Deployment

**Сайт:** travel-platform-azerbaijan-cms
**URL:** http://travel-platform-azerbaijan-cms.netlify.app
**Repo:** https://github.com/alishka2017/travel-platform-azerbaijan
**Branch:** cms-integration

## Build Status

Сборка запущена (Build ID: 69fd070b85bf8d7062ff245a).

## Проблема: Переменные окружения

Для работы с Sanity CMS необходимы переменные окружения:
- `SANITY_API_TOKEN`
- `SANITY_PROJECT_ID` (mk35mbbk)
- `SANITY_DATASET` (production)

### Решение

Переменные окружения нужно добавить в Netlify UI:
1. Перейти в [Netlify](https://app.netlify.com)
2. Выбрать сайт `travel-platform-azerbaijan-cms`
3. Перейти в Settings → Environment variables
4. Добавить:
   - `SANITY_API_TOKEN` = skDTatixRKZyEFmHBR8nXnyOGuCyRhPjB7KKbtcwuePMUAVkC2Nv9u1Wj1Vax0hfV0B8gyHvrnMbrLXAH7ofzlP6SKS4V2ZbquAYnEKP2lKDPHKxGUIeQ3OzTV8381izxYmhYooEHKccxvWnUpIWAPvI7yYfYAXoEbFySC28faXxjZ9xKBdx
   - `SANITY_PROJECT_ID` = mk35mbbk
   - `SANITY_DATASET` = production

## Альтернативный вариант

Если добавление переменных через API не удается, можно:
1. Использовать существующий сайт `elegant-frangollo-4b72a6` (но он подключен к другому репозиторию)
2. Добавить переменные вручную через UI Netlify

## Заключение

Сайт создан и настроен для деплоя из ветки `cms-integration`. После добавления переменных окружения сборка завершится автоматически.
