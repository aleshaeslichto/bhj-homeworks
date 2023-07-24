const cookie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');

let clicks = 0;

const increment = () => {
    clicks++
    counter.textContent = clicks;

    if (clicks % 2 == 0) {
        cookie.width = '250';
    } else {
        cookie.width = '230';
    }
}

cookie.addEventListener('click', increment);