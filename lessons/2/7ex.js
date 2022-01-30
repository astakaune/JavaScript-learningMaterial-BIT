
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let no1 = rand(0, 100);
// let no2 = rand(0, 100);
// let no3 = rand(0, 100);
// console.log('The values:', no1, no2, no3);

// let averageAll = (no1 + no2 + no3) / 3;
// console.log('Average of all values:', averageAll);


// let average1 = (no1 + no2) / 2;
// let average2 = (no2 + no3) / 2;
// let average3 = (no1 + no3) / 2;


// console.log('Average of the values between 10 and 90:');

// if ((no1 < 10 || no1 < 90) && (no2 < 10 || no2 > 90)) {
//     console.log(no3);
// } else if ((no3 < 10 || no3 > 90) && (no2 < 10 || no2 > 90)) {
//     console.log(no1);
// } else if ((no1 < 10 || no1 > 90) && (no3 < 10 || no3 > 90)) {
//     console.log(no2);
// } else if (no1 < 10 || no1 > 90) {
//     console.log(average2);
// } else if (no2 < 10 || no2 > 90) {
//     console.log(average3);
// } else if (no3 < 10 || no3 > 90) {
//     console.log(average1);
// } else {
//     console.log(averageAll); 
// }


// destytojo sprendimas:

let x1 = rand(0, 100);
let x2 = rand(0, 100);
let x3 = rand(0, 100);
console.log('The values:', x1, x2, x3);

let xxx = x1 + x2 + x3;
let xxxVidurkis = xxx / 3;

console.log(xxxVidurkis);

let daliklis = 0;
let kaDalinam = 0;

if (x1 <= 10 || x1 >= 90) {
    kaDalinam -= x1;
    daliklis--
}
if (x2 <= 10 || x2 >= 90) {
    kaDalinam -= x2;
    daliklis--
}
if (x3 <= 10 || x3 >= 90) {
    kaDalinam -= x3;
    daliklis--
}
console.log(kaDalinam / daliklis, kaDalinam, daliklis);