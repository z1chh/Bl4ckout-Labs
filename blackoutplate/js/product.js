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
                priceLabel.textContent = '$165 USD';
                buyNowLink.href = 'https://buy.stripe.com/bIY6q92Afg8o6oE6op';
                document.querySelector('.main-image').src = thumbnails[0].src;
                break;
            case 'na2':
                priceLabel.textContent = '$239 USD';
                buyNowLink.href = 'https://buy.stripe.com/5kA8yhgr51du6oEaEG';
                document.querySelector('.main-image').src = thumbnails[1].src;
                break;
            case 'eu':
                priceLabel.textContent = '$174 USD';
                buyNowLink.href = 'https://buy.stripe.com/5kA01Lb6LbS828o003';
                document.querySelector('.main-image').src = thumbnails[2].src;
                break;
            case 'usmoto':
                priceLabel.textContent = '$140 USD';
                buyNowLink.href = 'https://buy.stripe.com/dR63dXcaP4pG7sI28c';
                document.querySelector('.main-image').src = thumbnails[3].src;
                break;
            default:
                priceLabel.textContent = '$165 USD';
                buyNowLink.href = 'https://buy.stripe.com/bIY6q92Afg8o6oE6op';
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



function nextImage() {
    const images = document.querySelectorAll('.thumb');
    const mainImage = document.querySelector('.main-image');
    let currentIndex = Array.from(images).findIndex(image => image.src === mainImage.src);

    if (currentIndex === images.length - 1) {
        currentIndex = -1;
    }

    mainImage.src = images[currentIndex + 1].src;
}

function previousImage() {
    const images = document.querySelectorAll('.thumb');
    const mainImage = document.querySelector('.main-image');
    let currentIndex = Array.from(images).findIndex(image => image.src === mainImage.src);

    if (currentIndex === 0) {
        currentIndex = images.length;
    }

    mainImage.src = images[currentIndex - 1].src;
}

document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', (e) => {
        document.querySelector('.main-image').src = e.target.src;
    });
});

function updateViewers() {
            const viewers = Math.floor(Math.random() * 10) + 3;
            document.getElementById('viewers-count').textContent = viewers;
        }

        updateViewers();
        setInterval(updateViewers, 5000);