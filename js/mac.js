function totalCalculation() {
    const total = document.getElementById('total');
    const totalText = parseFloat(total.innerText);

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = parseFloat(totalPrice.innerText);
    
    const generalPrice = document.getElementById('general-price');
    const generalPriceText = parseFloat(generalPrice.innerText); 

    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryText = parseFloat(extraMemory.innerText);

    const extraStorage = document.getElementById('extra-storage');
    const extraStorageText = parseFloat(extraStorage.innerText);

    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeText = parseFloat(deliveryCharge.innerText); 

    const totalPriceCalculation = generalPriceText +  extraMemoryText + extraStorageText + deliveryChargeText;

    totalPrice.innerText = totalPriceCalculation;
    total.innerText = totalPriceCalculation;
}

function memoryCal(_rate) {
    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryText = parseFloat(extraMemory.innerText);   
    extraMemory.innerText = _rate;  
    }

function storageCal(_storage) {
    const extraStorage = document.getElementById('extra-storage');
    const extraStorageText = parseFloat(extraStorage.innerText);
    extraStorage.innerText = _storage;
}

function deliveryCal(_delivery) {
    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeText = parseFloat(deliveryCharge.innerText);    
    deliveryCharge.innerText = _delivery;
}

// memory start
document.getElementById('eight-gb-memory').addEventListener('click', function () {   
    memoryCal(0);
    totalCalculation();
})

document.getElementById('sixteen-gb-memory').addEventListener('click', function () { 
    memoryCal(180);
    totalCalculation();
})
// memory end

// storage start
document.getElementById('256-gb-storage').addEventListener('click', function () {    
    storageCal(0);
    totalCalculation();
})

document.getElementById('512-gb-storage').addEventListener('click', function () {
    storageCal(100);
    totalCalculation();
})
document.getElementById('1-tb-storage').addEventListener('click', function () {
    storageCal(180);
    totalCalculation();
})
//storage end

// delivery  start
document.getElementById('free-delivery').addEventListener('click', function () {   
    deliveryCal(0);
    totalCalculation();
})
document.getElementById('delivery-with-cost').addEventListener('click', function () {
    deliveryCal(20);
    totalCalculation();
})
// delivery  end

// promo code start
document.getElementById('apply-btn').addEventListener('click', function () {
    const total = document.getElementById('total');
    const totalText = parseFloat(total.innerText);
    const successCode = document.getElementById('success-code');
    const wrongCode = document.getElementById('wrong-code');

    if (document.getElementById('inputPassword2').value == 'stevekaku') {
        total.innerText = 0.25 * totalText;
        successCode.style.display = 'block';
        wrongCode.style.display = 'none';
        
    }
    else {
        successCode.style.display = 'none';
        wrongCode.style.display = 'block';
    }
    document.getElementById('inputPassword2').value = '';
})
// promo code end