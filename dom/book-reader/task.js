// Получаем элементы
const book = document.querySelector(".book");
const controls = document.querySelector(".book__control");

// Вешаем обработчик на родителя кнопок
controls.addEventListener("click", handleClick);

// Обработчик клика
function handleClick(evt) {
    // Проверяем, что клик был на кнопке
    let target = evt.target;
    if (target.matches(".font-size")) {
        // Обновляем активную кнопку и размер шрифта
        setActiveControl(target);
        updateBookFontSize(target);
    } else {
        // Сброс стилей при клике мимо
        resetBookFontSize();
    }

    // Предотвращаем поведение по умолчанию
    evt.preventDefault();
}

// Установка активной кнопки
function setActiveControl(activeControl) {
    // Получаем все кнопки
    let controls = activeControl.parentElement.querySelectorAll(".font-size");

    // Снимаем активный класс со всех
    controls.forEach((control) => {
        control.classList.remove("font-size_active");
    });

    // Ставим активный класс на выбранную кнопку
    activeControl.classList.add("font-size_active");
}

// Установка размера шрифта
function updateBookFontSize(activeControl) {
    // Получаем необходимый размер из data
    let size = activeControl.dataset.size;

    // Устанавливаем класс нужного нам размера размером
    book.className = `book book_fs-${size}`;
}

// Сброс стилей книги
function resetBookFontSize() {
    book.className = "book";
}
