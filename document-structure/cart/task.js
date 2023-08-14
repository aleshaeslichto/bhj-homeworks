const product = document.querySelectorAll('.product');
const dec = document.querySelectorAll('.product__quantity-control_dec');
const inc = document.querySelectorAll('.product__quantity-control_inc');
const productValue = document.querySelectorAll('.product__quantity-value');
const productAdd = document.querySelectorAll('.product__add');
const cart = [];

dec.forEach((item, index) => {
    item.addEventListener('click', () => {
        let count = parseInt(productValue[index].textContent);
        if (count === 1) {
            productValue[index].textContent = 1;
        } else {
            count -= 1;
            productValue[index].textContent = count;
        }
    });
});

inc.forEach((item, index) => {
    item.addEventListener('click', () => {
        let count = parseInt(productValue[index].textContent);
        count += 1;
        productValue[index].textContent = count;
    });
});

productAdd.forEach((item, index) => {
    item.addEventListener('click', () => {
        const prod = product[index];
        const prodId = prod.dataset.id;
        const prodImage = prod.querySelector('.product__image').getAttribute('src');
        const count = parseInt(productValue[index].textContent);
        const idCart = cart.findIndex((item) =>
            item.id === prodId);

        if (idCart !== -1) {
            cart[idCart].quantity += count;
        } else {
            const object = {
                id: prodId,
                image: prodImage,
                quantity: count,
            };
            cart.push(object);
        }
        cartContents();
    });
});

function cartContents() {
    const cartProducts = document.querySelector('.cart__products');
    cartProducts.innerHTML = '';

    cart.forEach((item) => {
        const cartProductsItem = document.createElement('div');
        cartProductsItem.classList.add('cart__product');
        cartProductsItem.dataset.id = item.id;

        const productImg = document.createElement('img');
        productImg.classList.add('cart__product-image');
        productImg.src = item.image;
        cartProductsItem.appendChild(productImg);

        const productCount = document.createElement('div');
        productCount.classList.add('cart__product-count');
        productCount.textContent = item.quantity;
        cartProductsItem.appendChild(productCount);

        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete_btn');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
                cartContents();
            }
        });
        cartProductsItem.appendChild(deleteButton);

        cartProducts.appendChild(cartProductsItem);
    });
}