const xhr = new XMLHttpRequest();
const poll = document.querySelector('.poll');
const pollAnswers = document.getElementById('poll__answers');
const title = document.getElementById('poll__title');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.addEventListener('load', () => {
  if (xhr.status === 200) {
    const pollData = JSON.parse(xhr.responseText).data;
    title.innerText = pollData.title;

    let buttonsHTML = '';
    pollData.answers.forEach((answer) => {
      buttonsHTML += `<button class="poll__answer">${answer}</button>`;
    });
    pollAnswers.innerHTML = buttonsHTML;

    const btns = document.querySelectorAll('.poll__answer');
    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
    });
  }
});

xhr.addEventListener('error', () => {
  console.error('Ошибка голосования:', xhr.statusText);
});
xhr.send();