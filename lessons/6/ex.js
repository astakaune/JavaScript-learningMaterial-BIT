console.log('-------1ex----------');
/*
DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END

DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END

DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END

DIDELIS START
B
B
B
DIDELIS MID
C
C
C
DIDELIS END
*/

// let kint1 = 'DIDELIS START';
// let kint2 = 'B';
// let kint1 = 'DIDELIS MID';
// let kint4 = 'C';
// let kint3 = 'DIDELIS END';

// for (let i = 0; i < 4; i++) {
//     console.log(kint1);
//     for (let j = 0; j < 3; j++) {
//         console.log(kint2, j);
//     }
//     console.log(kint3);
//     for (let f)
//     kint4++;
// }

for (let i = 1; i < 4; i++) {
    console.log('DIDELIS START');
    for (let j = 1; j <= 7; j++) {
        if (j <= 3) {
            console.log('B');
        }
        if (j == 4) {
            console.log('DIDELIS MID');
        } else {
            console.log('C');
        }
    }
    console.log('DIDELIS END');
}

console.log(' ');
console.log('-------2ex----------');

/*
AAAAA
AAAAA
AAAAA
AAAAA
AAAAA
*/

let A = 'A';

for (let i = 0; i < 5; i++) {
    let eilute = '';
    for (let j = 0; j < 5; j++) {
        eilute += A;
    }
    console.log(i + 1, eilute);
}


console.log(' ');
console.log('-------3ex----------');
/*
A AA AAA AAAA AAAAA
*/

let A3 = 'A';
let B3 = 5;
let eilute = '';

for (let i = 0; i < 5; i++) {
    console.log('eiluciu ciklas');
    for (let j = 0; j < B3; j++) {
        eilute += A3;
    }
    eilute += ' '; B3++;
}
console.log('Atsakymas', eilute);



console.log(' ');
console.log('-------4ex----------');
/*
A AA AAA AAAA AAAAA AAAA AAA AA A
*/

let A1 = 'A';

for (let i = 0; i < 5; i++) {
    let eilute1 = '';
    for (let j = 0; j < 5; j++) {
        eilute1 += A1;
    }
    console.log(i + 1, eilute);
}

let eilute1 = '';
let kiekis = 1;
let pirmyn = true;
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < kiekis; j++) {
        eilute += A1;
    }
    eilute += ' ';
    if (i % 5 === 0) {
        pirmyn = !pirmyn;
    }
    pirmyn ? kiekis++ : kiekis--;
}
console.log(eilute1);