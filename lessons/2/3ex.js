function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

console.log('a =', a);
console.log('b =', b);
console.log('c =', c);
console.log('-------');

if ((a + b) <= c, (a + c) <= b, (b + c) <= a) {
    console.log('Trikampis nesusidaro');
}
else {
    console.log('Trikampis gali susidaryti');
}


// if ((a + b) <= c) {
//     console.log('Trikampis nesusidaro');
// }

// else if ((a + c) <= b) {
//     console.log('Trikampis nesusidaro');
// }

// else if ((b + c) <= a) {
//     console.log('Trikampis nesusidaro');
// }

// else {
//     console.log('Trikampis gali susidaryti');
// }