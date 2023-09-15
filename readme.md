* Smart - Device  - печатные платы .
* Адаптивный, кроссбраузерный сайт, с валидной версткой. 
* Использовалась методология БЭМ и семантика в разметке, делался по Pixel Perfect
* **Сборка** : Node.js, NPM, GULP и использование различных библиотек.
* **JS** : Реализовано открытие и закрытие модального окна, якорь, маска для номера телефона в форме, аккордеон.
* **API**: - .
* **HTML**: grid/flex
* **CSS** : SASS, desktop - first

--------------------------------------------------------------------------------------------

 Краткая инструкция по работе
Для начала работы у вас должент быть установлен **Node.js**

Основные команды для работы
- Установка - `npm i`
- Запуск локального сервера без минификаций - `npm start`
- Запуск локального сервера c минификациями, <br>
данный вариант не используется в разработке, <br>
он нужен только для тестов производительности <br>
на локальном хосте  - `npm run dev`
- Сборка проекта, минификация скриптов <br>
и оптимизация изображений перед деплоем на прод - `npm run build`
- Запуск тестирования на соответствия кодгайдам - `npm test`
- Создание webp изображений в директории source - `npm run webp`

Вся разработка ведётся в директории `source`
Итоговый код попадает в директорию `build`
