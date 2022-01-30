function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log(' ');
console.log('--------1 ex-----------');



let a1 = rand(0, 2);
let a2 = rand(0, 2);
let a3 = rand(0, 2);
let a4 = rand(0, 2);
console.log(a1, a2, a3, a4);

let _0 = 0;
let _1 = 0;
let _2 = 0;

(a1 == 2) ? _2++ : ((a1 == 1) ? _1++ : _0++);
(a1 == 2) ? _2++ : ((a2 == 1) ? _1++ : _0++);
(a1 == 2) ? _2++ : ((a3 == 1) ? _1++ : _0++);
(a1 == 2) ? _2++ : ((a4 == 1) ? _1++ : _0++);
console.log(_0, _1, _2);

// if (a1 == 0) _0++;
// if (a2 == 0) _0++;
// if (a3 == 0) _0++;
// if (a4 == 0) _0++;

// if (a1 == 1) 1++;
// if (a2 == 1) 1++;
// if (a3 == 1) 1++;
// if (a4 == 1) 1++;

// if (a1 == 2) _2++;
// if (a2 == 2) _2++;
// if (a3 == 2) _2++;
// if (a4 == 2) _2++;

console.log(_0, _1, _2);

console.log(' ');
console.log('--------2 ex-----------');


let egzaminoRezultatas = rand(1, 10);

// console.log('Egzamino rezultatas', egzaminoRezultatas);
// if (egzaminoRezultatas >= 4) {
//     console.log('Egzaminas išlaikytas');
// } else {
//     console.log('Egzaminą reikės perlaikyti');
// }

// arba

console.log('Egzamino rezultatas', egzaminoRezultatas);

(egzaminoRezultatas >= 4) ? console.log('Egzaminas išlaikytas') : console.log('Egzaminą reikės perlaikyti');
// arba standartinis variantas su kintamojo priskyrimu:
let rez = (egzaminoRezultatas >= 4) ? 'Egzaminas išlaikytas' : 'Egzaminą reikės perlaikyti';
console.log(rez);


console.log(' ');
console.log('--------3 ex-----------');

//8.
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", 
// jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. 
// Pranešimą "Pralaimėjo" - priešingu atveju

let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
console.log('Dalyvis1:', dalyvis1, 'Dalyvis2:', dalyvis2);

if (((dalyvis1 + dalyvis2) > 6) || (dalyvis1 == dalyvis2)) {
    console.log('Laimėjo');
} else {
    console.log('Pralaimėjo');
}

// arba

rez = ((((dalyvis1 + dalyvis2) > 6) || (dalyvis1 == dalyvis2))) ? 'Laimėjo' : 'Pralaimėjo';
console.log(rez);


console.log(' ');
console.log('------------------------------');

console.log('palyginimas:');
console.log(1 == 1);
console.log(1 == '1');
console.log(1 == '       1');
console.log(1 == true);

console.log('grieztas palyginimas:');
console.log(1 == 1);
console.log(1 === '1');
console.log(1 !== '1');
console.log(1 !== 1);
console.log(1 === '       1');

