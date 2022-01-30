function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// kopustas, bulve

// let darzove = 'kopustas';
let darzove = 'bulve';
// let darzove = 'pomidoras';
// let darzove = '';

console.log('------if----------');

if (darzove == 'kopustas') {
    console.log('Verdam kopustiene');
}
else if (darzove == 'bulve') {
    console.log('Kepam bulvinius blynus');
}
else if (darzove == 'pomidoras') {
    console.log('Darom pomidoru padaza');
}
else {
    console.log('nieko neturim-nieko nedaromn');
}


// abu kodai vienodi

console.log('------switch paaiskinimas------');
// switch veikia kaip ciklas su skirtinga pradzia

switch (darzove) {
    case 'kopustas':
        console.log('Verdam kopustiene');
        break;
    case 'bulve':
        console.log('Kepam bulvinius blynus');
        break;
    case 'pomidoras':
        console.log('Darom pomidoru padaza');
        break;
    default:
        console.log('nieko neturim-nieko nedaromn');
}

console.log('------switch pavyzdys geras------');

// turime pastomata. priima siuntinius: S, M, L, XL

let siuntinioDydis = 'M';

switch (siuntinioDydis) {
    // console.log('Siuntinio dydis', siuntinioDydis);
    // console.log('Telpa i sias dezutes:');
    case 'S':
        console.log('Ar yra laisvu S');
        if (rand(0, 3)) {
            console.log('Vietu nera');
        } else {
            break;
        }
    case 'M':
        console.log('Ar yra laisvu M');
        if (rand(0, 3)) {
            console.log('Vietu nera');
        } else {
            break;
        }
    case 'L':
        console.log('Ar yra laisvu L');
        if (rand(0, 3)) {
            console.log('Vietu nera');
        } else {
            break;
        }
    default:
        console.log('Ar yra laisvu XL');
        if (rand(0, 3)) {
            console.log('Vietu is viso nera jokiu');
        }
}


console.log('------switch pavyzdys blogas------');



console.log('------break 1ex blogas pav---------');
// keyword - raktazodis, kuris nutraukia ciklo veikima.

// uzdavinys: skaicius nuo 77 iki 777. reikia surasti 
// pirma skaiciu, kuris dalinasi is 23 be liekanos.

// sprendimas nelabai geras, bet labai aiskus.
// geras pavyzdys yra apacioje su while.
for (let i = 77; i <= 777; i++) {
    if (i % 23 === 0) {
        console.log('Mano ieskomas skaicius yra:', i);
        break;
    }
}

console.log('------break 2ex---------');
// uzdavinys: skaicius nuo 77 iki 777. 3 kartus reikia surasti 
// pirma skaiciu, kuris dalinasi is 23 be liekanos.
for (let i = 1; i <= 3; i++) {
    console.log('didelis');
    for (let i = 77; i <= 777; i++) {
        console.log('mazas' + i);
        if (i % 23 === 0) {
            console.log('Mano ieskomas skaicius yra:', i);
            break;
        }
    }
}

console.log('------break 3ex---------');
// LABEL priskyrimas, kad bet kurioje vietoje nutrauktu 
// cikla pagal priskirta LABEL
bigCycle: for (let i = 1; i <= 3; i++) {
    console.log('didelis');
    for (let i = 77; i <= 777; i++) {
        console.log('mazas' + i);
        if (i % 23 === 0) {
            console.log('Mano ieskomas skaicius yra:', i);
            break bigCycle;
        }
    }
}

console.log('------break blogas pav---------');

let counter = 0;
while (true) {
    console.log(counter);
    // true kintamasis reiskia, kad ciklas yra amzinas
    counter++;
    if (counter >= 10) {
        break;
    }
}

console.log('------break GERAS pav---------');
// dauguma break galima pakeisti i while su tinkama salyga
let skaicius = 77;
do {
} while (++skaicius % 23 !== 0);
console.log('Mano ieskomas skaicius yra:', skaicius);



console.log('------continue---------');
// nutraukia ciklo dali. ir tesia toliau.
// pvz praleidzia 5 ir nieko nespausdina.
// toliau tesia nuo 6.
for (let i = 1; i <= 11; i++) {
    if (i === 5) {
        continue;
    }
    console.log('ciklo nr:', i);
}


console.log('------continue 1ex----------');
// Kad console.log spausdintų visus skaičius, kurie nesidalina iš 3 (su continue)
// Kad spausdinimas nutrūktų kai i yra daugiau nei 40 (su break)



for (let i = 0; i <= 111; i++) {

    if (i % 3 == 0) {
        continue;
    }
    
    if (i > 40) {
        break;
    }
    console.log('nesidalina is 3', i);
}
