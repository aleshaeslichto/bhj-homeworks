// Инициализируем
const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

// Объединяем в одну функцию ремув классов
const removeActive = (elements, className) => {
    elements.forEach(el => el.classList.remove(className));
}

// Индексиурем массивы табов
const toggleTab = (tab) => {
    const i = tabs.indexOf(tab);
// Убираем классы у табов и контента
    removeActive(tabs, 'tab_active');
    removeActive(contents, 'tab__content_active');
// Добавляем класс к нужному контету по индексу
    tab.classList.toggle('tab_active');
    contents[i].classList.toggle('tab__content_active');

}
// Обработчик
tabs.forEach(tab => {
    tab.addEventListener('click', () => toggleTab(tab));
});
