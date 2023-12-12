const template = document.querySelector('#product-template .product');

const data = JSON.parse(dataInfo);

const productBox = document.querySelector('.product-box');
data.forEach(element => {
    let product = template.cloneNode(true);
    product.querySelector('.product__img').src = element.image;
    product.querySelector('.product__title').innerHTML = element.title;
    product.querySelector('.product__text').innerHTML = element.text;
    productBox.appendChild(product);
});


