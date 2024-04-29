function changeImage(src) {
    document.querySelector('.main-image').src = src;
}

function updateProductDetails() {
    var model = document.getElementById('product-model').value;
    var productName = document.getElementById('product-name');
    var productPrice = document.getElementById('product-price');
    var productDescription = document.getElementById('product-description');
    var buyNowLink = document.getElementById('buy-now-link');

    if (model === 'na1') {
        productName.textContent = 'Car - North America';
        productPrice.textContent = '$199.99';
        productDescription.textContent = 'Description for North American cars, optimized for performance and compliance with local regulations.';
        buyNowLink.href = 'https://buylinkforna1.com';
    } else if (model === 'na2') {
        productName.textContent = 'Car - North America x2';
        productPrice.textContent = '$299.99';
        productDescription.textContent = 'Double the features, double the fun! Enhanced package for North American cars.';
        buyNowLink.href = 'https://buylinkforna2.com';
    } else if (model === 'eu') {
        productName.textContent = 'Car - Europe';
        productPrice.textContent = '$249.99';
        productDescription.textContent = 'European car model, designed with precision and adherence to EU standards.';
        buyNowLink.href = 'https://buylinkforeu.com';
    } else if (model === 'usmoto') {
        productName.textContent = 'Motorcycle - US';
        productPrice.textContent = '$159.99';
        productDescription.textContent = 'Specifically tailored for US motorcycles, ensuring top-notch performance and style.';
        buyNowLink.href = 'https://buylinkforusmoto.com';
    }
}
