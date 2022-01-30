

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(' ');
console.log('----Functions-----');

console.log('START');
//'betKas' yra funkcijos parametras
function randomSkirtumas(betKas, betKas2) { //funkcijos deklaracija
    let randomas = rand(100, 200);
    console.log(randomas - betKas);
}
console.log('END');

// Kintamieji, kuriuos paduodame i funkcija - ARGUMENTAI
let skaicius1 = 55; //skaicius1 - funkcijos argumentas, 55 - reiksme
let skaicius2 = 88; // funkcijos argumentas
let skaicius3 = 114; // funkcijos argumentas

randomSkirtumas(skaicius1); //funkcijos iskvietimas
randomSkirtumas(skaicius2); //funkcijos iskvietimas
randomSkirtumas(254); //funkcijos iskvietimas

console.log('--------------');

let randomas = rand(100, 200);
console.log(randomas - skaicius1);

randomas = rand(100, 200);
console.log(randomas - skaicius2);

randomas = rand(100, 200);
console.log(randomas - 254);

// jeigu turime kodo gabala, kuri kartojame daugiau nei 1 karta,
// patogu ji iskelti i funkcija

console.log('--------------');
// dvieju skaiciu sumos funkcija

function suma(a, b) {
    let suma = a + b;
    return suma;
}

let suma1 = 5 + 8; //13 arba
let suma2 = suma(5, 8); // 13
console.log(suma1, suma2);

console.log('--------------');

let string = 'žvirblis';
console.log('pilnas zodis:', string);
console.log(string[4]);

function raide5(string) {
    return string[4];
}
let raid1 = raide5(string);
let raid2 = string[4];
console.log(raid1, raid2);


console.log('--------------');

let string1 = 'žvirblis';
console.log('pilnas zodis:', string1);

function raide5(string1, number) {
    return string1[number - 1];
}
let raid3 = raide5(string1, 6);
let raid4 = string1[5];
console.log(raid1, raid2);

