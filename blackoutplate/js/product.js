/*document.addEventListener('DOMContentLoaded', function() {
    var thumbnails = document.querySelectorAll('.thumb');
    var modelSelect = document.getElementById('product-model');
    var priceLabel = document.getElementById('product-price');
    var soldout = document.getElementById('sold-out');
    var acrylicOption = document.getElementById('acrylic-option');
    var siliconeOption = document.getElementById('silicone-option');
    var buyNowLink = document.getElementById('buy-now-link');
    var productTitle = document.getElementById('product-name')

    function onThumbnailClick(event) {
        event.preventDefault();
        var src = this.getAttribute('src');
        document.querySelector('.main-image').setAttribute('src', src);
    }
    
    function updatePrice() {
        var selectedOption = modelSelect.value;
        // If one item is sold out, you have to:
        // - Add Sold Out in the soldout.textContent
        // - Change buyNowLink.classList.remove, change .remove to .add
        // - Go in product.html and remove - Sold Out from the select option
        switch(selectedOption) {
            case 'na1':
                productTitle.textContent = 'BL4CKOUT PLATE - North America V1';
                soldout.textContent = ''; // If it's in stock, leave '' empty, otherwise, write 'SOLD OUT'
                priceLabel.textContent = '$174 USD';
                buyNowLink.href = 'https://buy.stripe.com/3csbKtgr58FW8wMdQZ';
                document.querySelector('.main-image').src = thumbnails[0].src;
                buyNowLink.classList.remove('disabled-link'); // change .remove to .add if it's sold out
                break;
                case 'na1v2':
                productTitle.textContent = 'BL4CKOUT PLATE - North America V2';
                soldout.textContent = 'PRE-ORDERS ONLY';
                priceLabel.textContent = '$179 USD';
                buyNowLink.href = 'https://buy.stripe.com/cN2aGp7Uz8FW9AQeVc';
                document.querySelector('.main-image').src = thumbnails[0].src;
                buyNowLink.classList.remove('disabled-link');
                break;
            case 'na2':
                productTitle.textContent = 'BL4CKOUT PLATE - North America Dual Pack V2';
                soldout.textContent = 'PRE-ORDERS ONLY';
                priceLabel.textContent = '$289 USD';
                buyNowLink.href = 'https://buy.stripe.com/5kA4i10s73lCeVa6oH';
                document.querySelector('.main-image').src = thumbnails[1].src;
                buyNowLink.classList.remove('disabled-link');
                break;
            case 'eu1':
                productTitle.textContent = 'BL4CKOUT PLATE - Europe V2';
                soldout.textContent = 'PRE-ORDERS ONLY';
                priceLabel.textContent = '$209 USD';
                buyNowLink.href = 'https://buy.stripe.com/7sIdSBfn17BS8wM8wM';
                document.querySelector('.main-image').src = thumbnails[2].src;
                buyNowLink.classList.remove('disabled-link');
                break;
                case 'eu2':
                productTitle.textContent = 'BL4CKOUT PLATE - Europe V2';
                soldout.textContent = 'PRE-ORDERS ONLY';
                priceLabel.textContent = '$379 USD';
                buyNowLink.href = 'https://buy.stripe.com/9AQg0J4In6xO5kA5kB';
                document.querySelector('.main-image').src = thumbnails[2].src;
                buyNowLink.classList.remove('disabled-link');
                break;
            case 'usmoto':
                productTitle.textContent = 'BL4CKOUT PLATE - Motorcycle V2';
                soldout.textContent = 'PRE-ORDERS ONLY';
                priceLabel.textContent = '$156 USD';
                buyNowLink.href = 'https://buy.stripe.com/7sI3dXgr5cWcbIYfZd';
                document.querySelector('.main-image').src = thumbnails[3].src;
                buyNowLink.classList.remove('disabled-link');
                break;
            case 'eumoto':
                productTitle.textContent = 'BL4CKOUT PLATE - EU Motorcycle';
                soldout.textContent = 'PRE-ORDERS ONLY';
                priceLabel.textContent = '$189 USD';
                buyNowLink.href = 'https://buy.stripe.com/3cs6q9caP9K04gw28t';
                document.querySelector('.main-image').src = thumbnails[3].src;
                buyNowLink.classList.remove('disabled-link');
                break;
            case 'aus':
                productTitle.textContent = 'BL4CKOUT PLATE - Australia';
                soldout.textContent = 'PRE-ORDERS ONLY';
                priceLabel.textContent = '$208 USD';
                buyNowLink.href = 'https://buy.stripe.com/6oE3dXeiX9K000g3cw';
                document.querySelector('.main-image').src = thumbnails[3].src;
                buyNowLink.classList.remove('disabled-link');
                break;
            default:
                soldout.textContent = '';
                priceLabel.textContent = '$174 USD';
                buyNowLink.href = 'https://buy.stripe.com/3csbKtgr58FW8wMdQZ';
                document.querySelector('.main-image').src = thumbnails[0].src;
                buyNowLink.classList.remove('disabled-link');
        }
    }
    
    function updateShellOptions() {
        var model = modelSelect.value;
        if (model === 'na1' || model === 'na2') {
            acrylicOption.disabled = true;
            acrylicOption.textContent = "Acrylic Shell - Not Available";
            siliconeOption.disabled = false;
            siliconeOption.textContent = "Silicone Shell";
        } else {
            acrylicOption.disabled = false;
            acrylicOption.textContent = "Acrylic Shell";
            siliconeOption.disabled = true;
            siliconeOption.textContent = "Silicone Shell - Out of Stock";
        }
    }

    modelSelect.addEventListener('change', function() {
        updatePrice();
        updateShellOptions();
    });

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', onThumbnailClick);
    });

    modelSelect.value = 'na1';
    updatePrice();
    updateShellOptions();
});

document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', (e) => {
        document.querySelector('.main-image').src = e.target.src;
    });
});*/


// Close icon for modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


