// Getting all buttons id
const btn1 = document.getElementById('first-btn')
const btn2 = document.getElementById('second-btn')
const btn3 = document.getElementById('third-btn')
const btn4 = document.getElementById('fourth-btn')
const btn5 = document.getElementById('fifth-btn')
const btn6 = document.getElementById('sixth-btn')
const btn7 = document.getElementById('seventh-btn')

// Getting cost id
const baseCost = document.getElementById('base-cost')
const memoryCost = document.getElementById('memory-cost')
const storageCost = document.getElementById('storage-cost')
const deliveryCost = document.getElementById('delivery-cost')

const totalCost = document.getElementById('total-cost')
const grandTotal = document.getElementById('grand-total')

// Getting promo class
const promoCode = document.getElementsByClassName('promo-code');
const promoButton = document.getElementsByClassName('promo-button');

// function for memory part
function memoryValue(button) {
    memoryCost.innerText = button.value;

    updateTotal();
}

// function for storage part
function storageValue(button) {
    storageCost.innerText = button.value;

    updateTotal();
}

// function for delivery part
function deliveryValue(button) {
    deliveryCost.innerText = button.value;

    updateTotal();
}

// function for calculate total price
function updateTotal() {
    const basePrice = Number(baseCost.innerText);
    const memoryCharge = Number(memoryCost.innerText);
    const storageCharge = Number(storageCost.innerText);
    const deliveryCharge = Number(deliveryCost.innerText);


    let totalPrice = basePrice + memoryCharge + storageCharge + deliveryCharge;

    totalCost.innerText = totalPrice;

    grandTotal.innerText = totalPrice;

    // add promo code 

    promoButton[0].addEventListener('click', function () {
        if (promoCode[0].value == 'stevekaku') {
            console.log(promoCode)
            const discountTotal = totalPrice - totalPrice / 5;
            grandTotal.innerText = discountTotal;
        }
        else {
            grandTotal.innerText = totalPrice;
        }
    })
}