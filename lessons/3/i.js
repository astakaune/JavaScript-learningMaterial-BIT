function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(2, 10);
let b = rand(2, 10);
let c = rand(2, 10);
console.log('Kintamieji:', a, b, c);


// Surasti ir i console.log išvesti dviejų mažesnių kintamųjų sumą

// destytojo trumpasis sprendimas
if (a >= b && a >= c) {
    console.log('b+c:', b + c);
} else if (b >= c) {
    console.log('a+c:', a + c);
} else {
    console.log('Dviejų mažesnių kintamųjų suma yra:', a + b);
}

// destytojo ilgasis sprendimas
// if (a >= b) {
//     if (a >= c) {
//         console.log('b + c', b + c);
//     }
// }

// if (b > a) {
//     if (b >= c) {
//         console.log('a + c', a + c);
//     }
// }

// if (c > a) {
//     if (c > b) {
//         console.log('a + b', a + b);
//     }
// }



