/* document.getElementById('eight-gb-memory').addEventListener('click', function () {
    // console.log('8 gb memory clicked');

    // general price calculation
    const generalPrice = document.getElementById('general-price');
    const generalPriceText = generalPrice.innerText;
    const generalPriceAmount = parseFloat(generalPriceText);

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceAmount = parseFloat(totalPriceText);

    const finalTotalPrice = document.getElementById('total');
    const finalTotalPriceText = finalTotalPrice.innerText;
    const finalTotalPriceAmount = parseFloat(finalTotalPriceText);

    const finalTotalPriceCalculation = generalPriceAmount + eightGBMemory;

    finalTotalPrice.innerText = finalTotalPriceCalculation;
}) */

document.getElementById('sixteen-gb-memory').addEventListener('click', function () {

    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryText = parseFloat(extraMemory.innerText);
    const extraMemoryPrice = extraMemoryText + 180;
    extraMemory.innerText = extraMemoryPrice;
})

