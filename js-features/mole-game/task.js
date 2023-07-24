// Инициализация
let killCount;
let looseCount;

const newGame = () => {
  killCount = 0;
  looseCount = 0;

  document.getElementById('dead').textContent = killCount;
  document.getElementById('lost').textContent = looseCount;
}

newGame();

// Получение элемента норы
const getHole = index => document.getElementById(`hole${index}`);

// Обработчики кликов нор
for (let i = 1; i < 10; i++) {

  getHole(i).onclick = () => {

    if (getHole(i).classList.contains('hole_has-mole')) {
      killCount++;
      document.getElementById('dead').textContent = killCount;

      if (killCount >= 10) {
        alert('Вы победили!');
        newGame();
      }

    } else {
      looseCount++;
      document.getElementById('lost').textContent = looseCount;

      if (looseCount >= 5) {
        alert('Вы проиграли!');
        newGame();
      }
    }

  };

}