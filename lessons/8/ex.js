// rasti trecia skaicius, nuo 5 iki 100, 
// kuris be liekanos dalijasi is 3

console.log('-----su break-------------');
let skaitiklis3 = 1;

for (let i = 5; i <= 100; i++) {
    if (i % 3 == 0) {
        skaitiklis3++;
    }
    if (skaitiklis3 == 4) {
        console.log(i);
        break;
    }
}


console.log('------su while-----------');

let skaicius = 5;
let counter = -3;
do {} while (++skaicius % 3 || ++counter);
console.log('Mano ieskomas skaicius yra:', skaicius);
// arba  teisingiau. counter1 irasomas kelinta skaiciu reikia rasti
let skaicius = 5;
let counter = 3;
do {} while (++skaicius % 3 || --counter);
console.log('Mano ieskomas skaicius yra:', skaicius);
// neivertina iki 100