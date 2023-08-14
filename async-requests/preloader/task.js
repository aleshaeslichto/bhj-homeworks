const loader = document.getElementById('loader');
const list = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.addEventListener('load', () => {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText).response.Valute;
    const fragment = document.createDocumentFragment();

    for (const valute in data) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerHTML = `
        <div class="item__code">
          ${data[valute].CharCode}
        </div>
        <div class="item__value">
          ${data[valute].Value}
        </div>
        <div class="item__currency">
          руб.
        </div>
      `;
      fragment.appendChild(item);
    }

    list.appendChild(fragment);
    loader.classList.remove('loader_active');
  } else {
    console.error('Ошибка загрузки курса:', xhr.statusText);
  }
});
xhr.addEventListener('error', () => {
  console.error('Ошибка загрузки курса:', xhr.statusText);
});
xhr.send();
