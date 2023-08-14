const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);

    xhr.upload.addEventListener("progress", (e) => {
        progress.value = e.loaded / e.total;
    });

    xhr.upload.addEventListener("load", () => {
        alert("Файл успешно загружен");
        form.reset();
    });

    xhr.upload.addEventListener("error", () => {
        alert("Ошибка загрузки файла");
    });

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(formData);
});
