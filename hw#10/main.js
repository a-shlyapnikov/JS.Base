const containerEl = document.querySelector('.container');

const products = JSON.parse(dataInfo);

products.forEach(function (product) {
    const productItem = document.createElement('div');
    const productTitle = document.createElement('h2');
    const productImg = document.createElement('img');
    const productPrice = document.createElement('p');

    productItem.classList.add('product');

    productTitle.textContent = product.productName;
    productTitle.classList.add('product__title');

    productImg.src = product.image;
    productImg.classList.add('product__img');

    productPrice.textContent = product.price;
    productPrice.classList.add('product__price');

    productItem.appendChild(productTitle);
    productItem.appendChild(productImg);
    productItem.appendChild(productPrice);
    containerEl.appendChild(productItem);
});