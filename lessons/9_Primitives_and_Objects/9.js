function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('---- 1a ex----');
// su ciklu ir slice padaryti taip:
//Zirafa
//irafa
//rafa
//afa
//fa
//a

let zodis = 'Zirafa';

for (let i = 0; i < zodis.length; i++) {
    console.log(zodis.slice(i));
}

console.log('---- 1b ex----');
// ir dar į priešingą pusę nuo //a iki //Žirafa
let zodis1 = 'Zirafa';
for (let i = 1; i < zodis.length + 1; i++) {
    console.log(zodis.slice(-i));
}


console.log('---- 2a ex----------');
// atskirai atspausdinti visas raides. be tarpu
let zuikis = 'Zuikis puikis Ilgaausis eina namo miegot';
for (let i = 0; i < zuikis.length; i++) {
    if (zuikis[i] != ' ') {
        console.log(zuikis[i]);
    }
}

console.log('---- 2b ex----------');
// spausdinti be tarpu su continue
let zuikis1 = 'Zuikis puikis Ilgaausis eina namo miegot';
for (let i = 0; i < zuikis1.length; i++) {
    if (zuikis1[i] == ' ') {
        continue;
    }
    console.log(zuikis1[i]);
}


console.log('---- 2c ex----------');
// suskaiciuoti a raides
let zuikis2 = 'Zuikis puikis Ilgaausis eina namo miegot';
let counter = 0;
let counterSum = 0;

for (let i = 0; i <= zuikis2.length; i++) {
    if (zuikis2[i] != 'a') {
        continue;
    } else {
        counter++;
        console.log('a', counter);
    }
}