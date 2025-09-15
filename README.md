# Мастерская Куницкой Татьяны — лендинг

React + TypeScript + Vite. Адаптивный лендинг с разделами: услуги, галерея работ, контакты и реквизиты.

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте `http://localhost:5173/leotards-landing/` если используете `base` в Vite, иначе `http://localhost:5173/`.

## Контент

- Заголовок и описание редактируются в `src/App.tsx`.
- Галерея собирается из массива ссылок `images` в `src/App.tsx`. Замените ссылки на свои или загрузите файлы в `public/` и укажите пути `/your-file.jpg`.
- Контакты и данные ИП — в подвале `src/App.tsx`.

## SEO и социальные превью

- Основные мета-теги находятся в `index.html`.
- Картинка превью: `public/social-preview.jpg` (1200x630). Замените своей.

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub (например, `leotards-landing`).
2. Убедитесь, что в `vite.config.ts` указан `base: '/leotards-landing/'`.
3. Запушьте код в ветку `main`.
4. В репозитории зайдите в Settings → Pages и выберите Source: GitHub Actions.
5. Ждите, пока отработает workflow `Deploy to GitHub Pages`. Сайт будет доступен по адресу `https://<username>.github.io/leotards-landing/`.

### Кастомный домен

- Замените содержимое файла `public/CNAME` на ваш домен (например, `example.com`).
- Включите GitHub Pages (Settings → Pages) и настройте DNS:
  - A-записи на IP GitHub Pages: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - или CNAME на `<username>.github.io`

## Структура

```
src/
  App.tsx      # Разметка разделов
  App.css      # Стили секций и сетки
  index.css    # Базовая типографика
public/
  favicon.svg
  social-preview.jpg
  CNAME        # домен (опционально)
```

## Лицензия

MIT
