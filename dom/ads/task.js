// const rotatorCases = document.querySelectorAll('.rotator__case');

// let activeIndex = 0;
// let speed = +rotatorCases[0].dataset.speed;

// setInterval(() => {
//     color = rotatorCases[activeIndex].dataset.color; // получаем значение цвета
//     speed = +rotatorCases[activeIndex].dataset.speed; // получаем значение задержки

//     rotatorCases[activeIndex].style.color = color; // устанавливаем цвет

//     rotatorCases[activeIndex].classList.remove('rotator__case_active');

//     activeIndex++;
//     activeIndex = activeIndex >= rotatorCases.length ? 0 : activeIndex;

//     rotatorCases[activeIndex].classList.add('rotator__case_active');
// }, speed);

const rotatorCases = document.querySelectorAll('.rotator__case');

let activeIndex = 0;

function rotate() {

  const currentCase = rotatorCases[activeIndex];

  const color = currentCase.dataset.color;
  const speed = +currentCase.dataset.speed;

  currentCase.style.color = color;

  currentCase.classList.remove('rotator__case_active');

  activeIndex++;
  if (activeIndex >= rotatorCases.length) {
    activeIndex = 0;
  }

  const nextCase = rotatorCases[activeIndex];
  nextCase.classList.add('rotator__case_active');

  setTimeout(rotate, speed);
}

setTimeout(rotate, 1000);