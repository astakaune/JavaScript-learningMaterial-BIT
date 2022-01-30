let ezerai = [
    [2, 'Didelis'],
    [44, 'Ilgas'],
    [11, 'Trumpas'],
    [9, 'Apvalus'],
    [1, 'Gilus']
];

console.log('a:', ezerai[2][1]);
console.log('b:', ezerai[1][1]);

console.log('SORTAS', ezerai.sort());

console.log(masyvas.slice());

function lygintuvas(a, b) {
    console.log('a:', a, 'b: ', b);
    if (a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else {
        return 0;
    }
}

function ezeretuvas(a, b) {
    console.log('a:', a, 'b: ', b);
    if (a[1] > b[1]) {
        return 1;
    } else if (a[1] < b[1]) {
        return -1;
    } else {
        return 0;
    }
}

function ezeretuvas1(a, b) {
    return a[0] - b[0];
}




foto.sort(lygintuvas);

console.log(ezerai.slice().sort(ezeretuvas));
console.log(ezerai.sort(ezeretuvas1));




// console.log('---- sort number function------');
// let masyvas = [5, 1, 4, 2, 8];
// console.log(masyvas.slice());
// function lygintuvas(a, b) {
//     console.log('a:', a, 'b:', b);
//     return a - b; //return 0 - nieko nedaro, -1 turim reverse, 1 - nieko nekeicia
// } // return b-a max-min; a-b min-max;
// masyvas.sort(lygintuvas); //lygintuvas yra funkcijos pavadinimas
// console.log(masyvas);


// console.log('----sort strings function------');
// let masyvas1 = ['a', 'c', 'd', 'b', 'h'];
// console.log(masyvas1.slice());
// function lygintuvas1(a, b) {
//     console.log('a:', a, 'b:', b);
//     if (a > b) {
//         return 1;
//     } else if (a < b) {
//         return -1;
//     } else {
//         return 0;
//     }
// }
// masyvas1.sort(lygintuvas1);
// console.log(masyvas1);


// console.log('----sort strings.length function------');
// let masyvas2 = ['auu', 'casxasx', 'dds', 'b', 'hsdcsdfsdf'];
// console.log(masyvas2.slice());
// function lygintuvas2(a, b) {
//     if (a.length > b.length) {
//         return 1;
//     } else if (a.length < b.length) {
//         return -1;
//     } else {
//         return 0;
//     }
// }
// masyvas2.sort(lygintuvas2);
// console.log(masyvas2);



// console.log('----1ex------');
// // surikiuoti pagal abecele ir pagal numerius
// let ezerai = [
//     [2, 'Didelis'],
//     [44, 'Ilgas'],
//     [11, 'Trumpas'],
//     [9, 'Apvalus'],
//     [1, 'Gilus']
// ]
// // console.log(ezerai.slice());
// // console.log('a:', ezerai[2][1]);
// // console.log('a:', ezerai[1][1]);


// function ezeretuvas(a, b) {
//     console.log('a:', a[1], 'b: ', b[1]);
//     if (a[1] > b[1]) {
//         return 1;
//     } else if (a[1] < b[1]) {
//         return -1;
//     } else {
//         return 0;
//     }
// }
// ezerai.sort(ezeretuvas);
// console.log(ezerai.sort(ezeretuvas));

// function ezeretuvas1(a, b) {
// return a[0] - b[0];
// }
// ezerai.sort(ezeretuvas1);
// console.log(ezerai.sort(ezeretuvas1));



// console.log('----2ex------');
