# Тестовое задание для компани КРАФТТЕК

[Задание](./_README.md)

### 🚀 Технологии

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Prettier](https://prettier.io/)
- [EsLint](https://eslint.org/)
- [SCSS](https://sass-scss.ru/guide/)

### 📦 Установка

1. Склонировать репозиторий:
   `git clone https://github.com/punchalaken/crafttech-rich-test`

2. Перейти в директорию прокта:
   `cd crafttech-rich-test`

3. Установите зависимости:
   `npm install
или
yarn install`

### 🔨 Запуск проекта

1. Для разработки (локально):
   `npm run dev
или
yarn dev`

2. Для сборки проекта:
   `npm run build
или
yarn build`

3. Для запуска тестирования:
   `npm run test 
   или
   yarn test`

### 📂 Структура проекта

    src/
      ├── app/                      # Основные файлы проекта
      │   └── styles                   # Стили для проекта
      │   │   └── variables               # Константы стилей
      │   │   │   └── global.scss            # Переменные стилей
      │   │   └── normalize.scss          # Нормализация стилей
      │   └── App.tsx                  # Главный компонент приложения
      ├── entities/                 # Сущности приложения
      ├── pages/                    # Страницы приложения
      │   └── MainPage/                # Главная страница
      ├── shared/                   # Переиспользуемые компоненты и изолированная бизнес-логика
      │   └── Navbar/                  # Переиспользуемые компоненты Navbar
      ├── widgets                   # Самостоятельные виджеты приложения
      ├── main.tsx                  # Точка входа