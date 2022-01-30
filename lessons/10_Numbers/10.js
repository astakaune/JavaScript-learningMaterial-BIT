function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('---- Numbers----');
//dvejetaine sistema:   desimtaine
/*
'2'    '7'     '10'    '16'

0       0       0       0
1       1       1       1
10      2       2       2
11      3       3       3
100     4       4       4
101     5       5       5
110     6       6       6
111     7       7       7
1000    10      8       8
1001    11      9       9
1010    12      10      A
1011    13      11      B
1100    14      12      C
1101    15      13      D
1110    16      14      E
1111    17      15      F

*/

// galima paversti kita sistema
// skliausteliuose nurodoma sistema 
// i kuria verciama
let b = 15;
console.log('musu skaicius', b);
console.log(b.toString(2), 'dvejetaine');
console.log(b.toString(8), 'astuntaine');
console.log(b.toString(10), 'desimtaine');
console.log(b.toString(16), 'sesioliktaine');

console.log('---- Rounding----');

let nu = 5.26;
console.log('skaicius', nu);
console.log('matematiskai suapvalintas', Math.round(nu));
// Math.round - objektas. turi savyje metodu
// apvalinimas tik iki sveiko skaiciaus

console.log('suapvalintas i mazesne puse', Math.floor(nu));
console.log('suapvalintas i didesne puse', Math.ceil(nu));

// norint supavalinti iki kazkokio po kablelio,reikia taikyti 
// papildomus sikaiciavimus ir formules
console.log(Math.round(nu * 100) / 100);

console.log('---- toFixed----');
// metodas padaro suformatuota stringa
// naudojas pacioje pabaigoje atlikus visus veiksmus
console.log((0.1 + 0.2).toFixed(5));

console.log('---- parseInt and parseFloat----');
// parse integer - nepriklausoma globali f-ja
// naudojama norint is stringo gauti skaiciu
// jeigu nepavyksta, rodo NaN;
console.log(parseInt('10.100px55'));
console.log(parseFloat('10.5504564460px55'));


console.log('---- Math.random----');
// generuoja skaicius nuo 0 iki 1 (neiskaitant 1)
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('---- Math.max / Math.min----');

console.log(Math.max(3, 5, -10, 1)); //5
console.log(Math.min(3, 5, -10, 1)); // 1