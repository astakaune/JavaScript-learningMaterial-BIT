
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let quantity = rand(5, 3000);
console.log('Bought candle quantity:', quantity, 'units');

let price1 = quantity;
let price1000 = quantity * 0.97;
let price2000 = quantity * 0.96;

let priceUnit1 = price1 / quantity;
let priceUnit1000 = price1000 / quantity;
let priceUnit2000 = price2000 / quantity;

let discount1 = '0 %';
let discount1000 = '3 %';
let discount2000 = '4 %';


if (quantity <= 999) {
    console.log('Discount for the quantity:', discount1);
    console.log('Total price:', price1, 'EUR');
    console.log('Unit price:', priceUnit1, 'EUR');
} else if (quantity >= 1000 && quantity <= 1999) {
    console.log('Discount for the quantity:', discount1000);
    console.log('Total price -3%:', price1000, 'EUR');
    console.log('Unit price -3%:', priceUnit1000, 'EUR');
} else {
    console.log('Discount for the quantity:', discount2000);
    console.log('Total price -4%:', price2000, 'EUR');
    console.log('Unit price -4%:', priceUnit2000, 'EUR');
}
