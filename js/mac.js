/* -----------------
 functions start
-------------------- */

//  total calculation start
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
// total calculation end

// promo code start
function promoCode() {
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = parseFloat(totalPrice.innerText);
    const total = document.getElementById('total');
    const totalText = parseFloat(total.innerText);
    const promoInput = document.getElementById('inputPassword2');
    const promoValue = promoInput.value;
    const successCode = document.getElementById('success-code');
    const wrongCode = document.getElementById('wrong-code');

    if (promoInput.value == 'stevekaku') {
        const promoDiscount = 0.2 * totalPriceText;
        total.innerText = totalPriceText - promoDiscount;
        successCode.style.display = 'block';
        wrongCode.style.display = 'none';

    }
    else {
        successCode.style.display = 'none';
        wrongCode.style.display = 'block';
    }
    promoInput.value = '';
}
// promo code end

// memory start
function memoryCal(_rate) {
    const extraMemory = document.getElementById('extra-memory');  
    extraMemory.innerText = _rate;  
}
// memory end

// storage start
function storageCal(_storage) {
    const extraStorage = document.getElementById('extra-storage');
    extraStorage.innerText = _storage;
}
// storage end

// delivery start 
function deliveryCal(_delivery) {
    const deliveryCharge = document.getElementById('delivery-charge');    
    deliveryCharge.innerText = _delivery;
}
// delivery end

/* -----------------
 functions end
-------------------- */

// memory button start
document.getElementById('eight-gb-memory').addEventListener('click', function () {   
    memoryCal(0);
    totalCalculation();
})

document.getElementById('sixteen-gb-memory').addEventListener('click', function () { 
    memoryCal(180);
    totalCalculation();
})
// memory button end

// storage button start
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
//storage button end

// delivery button  start
document.getElementById('free-delivery').addEventListener('click', function () {   
    deliveryCal(0);
    totalCalculation();
})
document.getElementById('delivery-with-cost').addEventListener('click', function () {
    deliveryCal(20);
    totalCalculation();
})
// delivery button  end

// promo code start
document.getElementById('apply-btn').addEventListener('click', function () {
    promoCode();
    
})
// promo code end