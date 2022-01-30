function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}



// destytojo paprastas sprendimas No1



// let a1 = rand(0, 2);
// let a2 = rand(0, 2);
// let a3 = rand(0, 2);
// let a4 = rand(0, 2);
// console.log(a1, a2, a3, a4);

// let _0 = 0;
// let _1 = 1;
// let _2 = 2;

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

// console.log(_0, _1, _2);

// destytojo 2 variantas:


// if (a1 == 0) _0++;
// else if (a1 == 1) _1++;
// else _2++;


// if (a1 == 1) 1++;
// if (a2 == 1) 1++;
// if (a3 == 1) 1++;
// if (a4 == 1) 1++;

// if (a1 == 2) _2++;
// if (a2 == 2) _2++;
// if (a3 == 2) _2++;
// if (a4 == 2) _2++;

// console.log(_0, _1, _2);




// destytojo sudetingesnis budas
let a1 = rand(0, 2);
let a2 = rand(0, 2);
let a3 = rand(0, 2);
let a4 = rand(0, 2);
console.log('skaičiai:', a1, a2, a3, a4);

let __2 = 0;

if (a1 == 2) __2++;
if (a2 == 2) __2++;
if (a3 == 2) __2++;
if (a4 == 2) __2++;

let __1 = a1 + a2 + a3 + a4 - (2 * __2);

let __0 = 4 - __1 - __2;

console.log('0 yra:', __0);
console.log('1 yra:', __1);
console.log('2 yra:', __2);





// mano 

// let a = rand(0, 2);
// let b = rand(0, 2);
// let c = rand(0, 2);
// let d = rand(0, 2);
// console.log('Skaičiai:', a, b, c, d);
// console.log('------');

// let kiekis0 = 'none';
// let kiekis1 = 1;
// let kiekis2 = 2;
// let kiekis3 = 3;
// let kiekis4 = 4;

// // 0 counting

// if (a != 0 && b != 0 && c != 0 && d != 0) {
    //     console.log('0 kiekis = ', kiekis0);
    // }
    // else if ((a == 0 && b != 0 && c != 0 && d != 0) ||
    //     (a != 0 && b == 0 && c != 0 && d != 0) ||
    //     (a != 0 && b != 0 && c == 0 && d != 0) ||
    //     (a != 0 && b != 0 && c != 0 && d == 0)) {
//     console.log('0 kiekis = ', kiekis1);
// }
// else if ((((a == 0 && ((b == 0 && c != 0 && d != 0) || (b != 0 && c == 0 && d != 0) || (b != 0 && c != 0 && d == 0))) ||
//     (b == 0 && ((a == 0 && c != 0 && d != 0) || (a != 0 && c == 0 && d != 0) || (a != 0 && c != 0 && d == 0))) ||
//     (c == 0 && ((a == 0 && b != 0 && d != 0) || (a != 0 && b == 0 && d != 0) || (a != 0 && b != 0 && d == 0))) ||
//     (d == 0 && ((a == 0 && b != 0 && c != 0) || (a != 0 && b == 0 && c != 0) || (a != 0 && b != 0 && c == 0)))))) {
//     console.log('0 kiekis = ', kiekis2);
// }
// else if ((a == 0 && b == 0 && c == 0 && d != 0) ||
//     (a == 0 && b == 0 && c != 0 && d == 0) ||
//     (a == 0 && b != 0 && c == 0 && d == 0) ||
//     (a != 0 && b == 0 && c == 0 && d == 0)) {
//     console.log('0 kiekis = ', kiekis3);
// }
// else if (a == 0 && b == 0 && c == 0 && d == 0) {
//     console.log('0 kiekis = ', kiekis4);
// }

// // 1 counting

// if (a != 1 && b != 1 && c != 1 && d != 1) {
//     console.log('1 kiekis = ', kiekis0);
// }
// else if ((a == 1 && b != 1 && c != 1 && d != 1) ||
//     (a != 1 && b == 1 && c != 1 && d != 1) ||
//     (a != 1 && b != 1 && c == 1 && d != 1) ||
//     (a != 1 && b != 1 && c != 1 && d == 1)) {
//     console.log('1 kiekis = ', kiekis1);
// }
// else if ((((a == 1 && ((b == 1 && c != 1 && d != 1) || (b != 1 && c == 1 && d != 1) || (b != 1 && c != 1 && d == 1))) ||
//     (b == 1 && ((a == 1 && c != 1 && d != 1) || (a != 1 && c == 1 && d != 1) || (a != 1 && c != 1 && d == 1))) ||
//     (c == 1 && ((a == 1 && b != 1 && d != 1) || (a != 1 && b == 1 && d != 1) || (a != 1 && b != 1 && d == 1))) ||
//     (d == 1 && ((a == 1 && b != 1 && c != 1) || (a != 1 && b == 1 && c != 1) || (a != 1 && b != 1 && c == 1)))))) {
//     console.log('1 kiekis = ', kiekis2);
// }
// else if ((a == 1 && b == 1 && c == 1 && d != 1) ||
//     (a == 1 && b == 1 && c != 1 && d == 1) ||
//     (a == 1 && b != 1 && c == 1 && d == 1) ||
//     (a != 1 && b == 1 && c == 1 && d == 1)) {
//     console.log('1 kiekis = ', kiekis3);
// }
// else if (a == 1 && b == 1 && c == 1 && d == 1) {
//     console.log('1 kiekis = ', kiekis4);
// }

// // 2 counting

// if (a != 2 && b != 2 && c != 2 && d != 2) {
//     console.log('2 kiekis = ', kiekis0);
// }
// else if ((a == 2 && b != 2 && c != 2 && d != 2) ||
//     (a != 2 && b == 2 && c != 2 && d != 2) ||
//     (a != 2 && b != 2 && c == 2 && d != 2) ||
//     (a != 2 && b != 2 && c != 2 && d == 2)) {
//     console.log('2 kiekis = ', kiekis1);
// }
// else if ((((a == 2 && ((b == 2 && c != 2 && d != 2) || (b != 2 && c == 2 && d != 2) || (b != 2 && c != 2 && d == 2))) ||
//     (b == 2 && ((a == 2 && c != 2 && d != 2) || (a != 2 && c == 2 && d != 2) || (a != 2 && c != 2 && d == 2))) ||
//     (c == 2 && ((a == 2 && b != 2 && d != 2) || (a != 2 && b == 2 && d != 2) || (a != 2 && b != 2 && d == 2))) ||
//     (d == 2 && ((a == 2 && b != 2 && c != 2) || (a != 2 && b == 2 && c != 2) || (a != 2 && b != 2 && c == 2)))))) {
//     console.log('2 kiekis = ', kiekis2);
// }
// else if ((a == 2 && b == 2 && c == 2 && d != 2) ||
//     (a == 2 && b == 2 && c != 2 && d == 2) ||
//     (a == 2 && b != 2 && c == 2 && d == 2) ||
//     (a != 2 && b == 2 && c == 2 && d == 2)) {
//     console.log('2 kiekis = ', kiekis3);
// }
// else if (a == 2 && b == 2 && c == 2 && d == 2) {
//     console.log('2 kiekis = ', kiekis4);
// }