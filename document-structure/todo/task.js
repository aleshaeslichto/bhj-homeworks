// Кэшируем элементы в переменные
const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

// Объявляем функции
function addTask() {
  const task = taskInput.value.trim();
  if (!task) {
    alert('Введите текст задачи!');
    return;
  }

  // Добавляем задачу в DOM
  const taskHTML = `
    <div class="task">
      <div class="task__title">
        ${task}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
  `;

  tasksList.insertAdjacentHTML('afterbegin', taskHTML);

  // Очищаем инпут
  taskInput.value = '';
}

function handleClick(e) {
  if (e.target.classList.contains('task__remove')) {
    e.target.parentElement.remove();
  }
}

// Вешаем обработчики событий
tasksAdd.addEventListener('click', e => {
  e.preventDefault();
  addTask();
});

tasksList.addEventListener('click', handleClick);