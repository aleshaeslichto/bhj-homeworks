// Начальное значение таймера
const timer = document.getElementById('timer');

let totalSeconds = 60;

// Запускаем таймер

let interval = setInterval(() => {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    timer.textContent = `${hours}:${minutes}:${seconds}`;

    totalSeconds--;

    if (totalSeconds < 0) {
        clearInterval(interval);

        alert('Вы победили в конкурсе!')
    }
}, 1000);

