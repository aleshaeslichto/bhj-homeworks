// Получаем элементы
const value = document.querySelector('.dropdown__value');
const items = document.querySelectorAll('.dropdown__item');

// Обработчик для значения
value.addEventListener('click', e => {
  const list = e.target.closest('.dropdown').querySelector('.dropdown__list');
  list?.classList.toggle('dropdown__list_active');
});

// Обработчик для элементов
items.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    value.textContent = e.target.textContent;
    document.querySelector('.dropdown__list_active')?.classList.remove('dropdown__list_active');
  });
});