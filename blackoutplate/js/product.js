// Changes the price of the product and the link of the buy-now button based on the selected model
document.addEventListener('DOMContentLoaded', function() {
    var thumbnails = document.querySelectorAll('.thumb');
    var modelSelect = document.getElementById('product-model');
    var priceLabel = document.getElementById('product-price');
    var acrylicOption = document.getElementById('acrylic-option');
    var siliconeOption = document.getElementById('silicone-option');
    var buyNowLink = document.getElementById('buy-now-link');

    function onThumbnailClick(event) {
        event.preventDefault();
        var src = this.getAttribute('src');
        document.querySelector('.main-image').setAttribute('src', src);
    }

    function updatePrice() {
        var selectedOption = modelSelect.value;
        switch(selectedOption) {
            case 'na1':
                priceLabel.textContent = '$174 USD';
                buyNowLink.href = 'https://buy.stripe.com/3csbKtgr58FW8wMdQZ';
                document.querySelector('.main-image').src = thumbnails[0].src;
                break;
            case 'na2':
                priceLabel.textContent = '$249 USD';
                buyNowLink.href = 'https://buy.stripe.com/dR6eWFgr59K014k9AL';
                document.querySelector('.main-image').src = thumbnails[1].src;
                break;
            case 'eu':
                priceLabel.textContent = '$204 USD';
                buyNowLink.href = 'https://buy.stripe.com/bIY6q9gr5g8oaEU8wI';
                document.querySelector('.main-image').src = thumbnails[2].src;
                break;
            case 'usmoto':
                priceLabel.textContent = '$149 USD';
                buyNowLink.href = 'https://buy.stripe.com/eVaeWF1wbbS85kAdQY';
                document.querySelector('.main-image').src = thumbnails[3].src;
                break;
            default:
                priceLabel.textContent = '$174 USD';
                buyNowLink.href = 'https://buy.stripe.com/3csbKtgr58FW8wMdQZ';
                document.querySelector('.main-image').src = thumbnails[0].src;
        }
    }
    
    // Disable the 'Silicone Shell' option if the 'na1' or 'na2' model is selected
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
});


// Fake live viewer
function updateViewers() {
    const viewers = Math.floor(Math.random() * 10) + 3;
    document.getElementById('viewers-count').textContent = viewers;
}

updateViewers();
setInterval(updateViewers, 5000);