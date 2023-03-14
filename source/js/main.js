import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { Form } from './modules/form-validate/form';
import { initPhoneInput } from './modules/form-validate/init-phone-input';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();


  // Mask-input 

  let parent = document.querySelector(".input-group");

  initPhoneInput(parent);

  // Akkordeon

  const titles = document.querySelectorAll('.footer__title');

  titles.forEach((title) => {
    title.addEventListener('click', () => {
      if (title.classList.contains('footer__title--disable')) {
        title.classList.remove('footer__title--disable');
        title.classList.add('footer__title--active');

      } else {
        title.classList.add('footer__title--disable');
        title.classList.remove('footer__title--active');
      }
    });
  });

  // About-additional

  const button = document.querySelector(".about__button");
  const details = document.querySelector(".about__additional");

  button.addEventListener("click", () => {
    if (details.classList.contains("about__additional--hidden")) {
      details.classList.remove("about__additional--hidden");
      button.textContent = "Свернуть";
    } else {
      details.classList.add("about__additional--hidden");
      button.textContent = "Подробнее";
    }
  });


  // Anchor

  const link = document.querySelector('.hero__button');

  link.addEventListener('click', function (e) {
    e.preventDefault();
    const forma = document.querySelector('#forma');
    forma.scrollIntoView({ behavior: 'smooth' });
  });


  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана

  window.addEventListener('load', () => {
    // Получаем ссылки на кнопку и модальное окно
    const modalButton = document.querySelector(".btn--navigation");
    const modal = document.querySelector(".modal");
    const inputName = document.getElementById("Name");

    // Получаем ссылку на элемент для закрытия модального окна
    const closeButton = modal.querySelector(".modal__close-btn");

    // Инициализируем модальное окно
    initModals();

    // Добавляем обработчик на кнопку
    modalButton.addEventListener("click", function () {
      modal.classList.add('is-active');
      inputName.focus();
    });

    // Добавляем обработчик на кнопку закрытия
    closeButton.addEventListener("click", function () {
      // Закрываем модальное окно
      modal.classList.remove('is-active');
    });

    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)








