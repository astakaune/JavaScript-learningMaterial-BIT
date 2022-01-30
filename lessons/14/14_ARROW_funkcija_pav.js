const ezerai = [
    [2, 'Didelis'],
    [44, 'Ilgas'],
    [11, 'Trumpas'],
    [9, 'Apvalus'],
    [1, 'Gilus']
];
function ezeretuvas1(a, b) {
    return a[0] - b[0];
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

//uzrasymas su vardine funkcija
console.log(ezerai.slice().sort(ezeretuvas1));

// kitas naujesnis budas uzrasyti ezeretuvas1 naudojant
//anonimine funkcija be vardo. funkcija is karto istatyta 
//i skliaustus
console.log(ezerai.slice().sort((a, b) => a[0] - b[0]));

//uzrasymas 
console.log(ezerai.slice().sort((a, b) => {
    if (a[1] > b[1]) {
        return 1;
    } else if (a[1] < b[1]) {
        return -1;
    } else {
        return 0;
    }
}));