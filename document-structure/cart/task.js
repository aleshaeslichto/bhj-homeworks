const cart = document.querySelector(".cart__products");

// Загрузка данных корзины из кэша
cart.innerHTML = localStorage.getItem("cartHTML");

const deleteButtons = cart.querySelectorAll(".cart__product-delete");

// Перебираем кнопки удаления, вешаем обработчик
deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.closest(".cart__product").remove();
        updateCart();
    });
});

// Инициализируем кнопки кол-ва
const quantityControls = document.querySelectorAll(
    ".product__quantity-control"
);

// Обработчик на +-
quantityControls.forEach((control) => {
    control.addEventListener("click", () => {
        const valueElement = control.parentElement.querySelector(
            ".product__quantity-value"
        );
        // Парсим кол-во
        const value = Number(valueElement.textContent);

        // inc dec обработчик
        if (
            control.classList.contains("product__quantity-control_dec") &&
            value > 1
        ) {
            valueElement.textContent = value - 1;
        } else if (
            control.classList.contains("product__quantity-control_inc")
        ) {
            valueElement.textContent = value + 1;
        }
    });
});

// Инициализируем кнопку "добавить в корзину"
const addButtons = document.querySelectorAll(".product__add");

addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.closest(".product");
        const id = product.dataset.id;
        const value = Number(
            product.querySelector(".product__quantity-value").textContent
        );

        let item = cart.querySelector(`.cart__product[data-id="${id}"]`);

        if (item) {
            updateCount(item, value);
        } else {
            item = createItem(product, value);
            cart.append(item);
        }

        updateCart();
    });
});

// Обновление кол-ва товара
function updateCart() {
    localStorage.setItem("cartHTML", cart.innerHTML);
}

// Обновление кол-ва товара
function updateCount(item, value) {
    const countElement = item.querySelector(".cart__product-count");
    const prevValue = Number(countElement.textContent);
    countElement.textContent = prevValue + value;
}

// Создание элемента корзины
function createItem(product, value) {
    const item = document.createElement("div");
    item.className = "cart__product";
    item.dataset.id = product.dataset.id;

    const img = document.createElement("img");
    img.className = "cart__product-image";
    img.src = product.querySelector(".product__image").src;

    const count = document.createElement("div");
    count.className = "cart__product-count";
    count.textContent = value;

    const deleteBtn = document.createElement("div");
    deleteBtn.className = "cart__product-delete";
    deleteBtn.textContent = "Удалить из корзины";

    deleteBtn.addEventListener("click", () => {
        deleteBtn.closest(".cart__product").remove();
        updateCart();
    });

    item.append(img, count, deleteBtn);

    return item;
}
