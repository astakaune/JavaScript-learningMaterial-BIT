function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('----- ARREY----');
/*
 ARREY - MASYVAS - OBJEKTAS
pvz. Kitamasis PJUKLAS yra dezeje K1
ARRAY yra dezeje K2, kurioje vienu metu gali guleti:
pjuklas, plaktukas, reples, atsuktuvas ir t.t.
K2 dezeje esantys daiktai yra sunumeruoti
nuo 0 iki begalybe
0 - reples
1 - ...
2 - plaktukas
Reiksmes priskyrimas:
A = K1 (A tampa pjuklu)
A = K2[0] (A yra reples)
B = K2[2] (B yra plaktukas)

consoleje vaiazdavimas:
[]
length - arejaus kintamuju kiekis

*/

console.log('----- ARREY. 1pav----');

let a1 = ['atsuktuvas', 'pjuklas', 'plaktukas', 'reples'];
console.log(a1);

// nnorint paimti pjukla, reikia imti nr1
console.log(a1[1]);

a1[2] = 'kirvis';
a1[50] = 'durklas';

console.log('----metodas push----');
a1.push('kaltas'); // prideda elementa i pabaiga
// galima sukurti tuscia masyva, o veliau viska push

console.log('----metodas unshift----');
a1.unshift('graztas'); //prideda elementa i pradzia

console.log('----metodas shift----');
a1.shift(); //isima pirma elementa is pradzios

console.log('----metodas pop----');
a1.pop(); //isima paskutini elementa

console.log('----metodas slice----');
a1.slice(); //padaro kopija ir ja uzfiksuoja 
// tuo momentu visam laikui
console.log(a1.slice());


console.log('----ex1----');
//atspausdinti consoleje visus elementus atskirai
let a2 = ['atsuktuvas', 'pjūklas', 'plaktukas', 'replės'];
for (i = 0; i < a2.length; i++) {
    console.log(a1[i]);
}

console.log('----ex2----');
//sukurti masyva, kurio ilgis 22,
// o jo reiksmes rand(5, 15)

let a3 = [];

for (let j = 0; j < 22; j++) {
    a3.push(rand(5, 15));
}
console.log(a3);

console.log('----ex3----');
//sukurti masyva, kurio ilgis 22,
// o jo reiksmes lygines is rand(5, 15)
let a4 = [];
while (a4.length < 22) {
    let kint = rand(5, 15);
    if (kint % 2 == 1) {
        a4.push(kint);
    }
}
console.log('nelyginis masyvas:', a4);


console.log('---priskyrimas pagal reiksme----');
let d1 = 5;
let d2 = d1; //priskyrimas pagal reiksme
d1 = 7;
console.log(d1, d2);

console.log('---priskyrimas pagal nuoroda----');
let m1 = [77, 99];
let m2 = m1; //priskyrimas pagal nuoroda i objekta
let m3 = m2;
//masyvas yra tas pats, tik turi 2 vardus.
//koreguojant viena, keiciasi ir kitas
// m2 yra shortcut i m1
m1.push(11);
m2.push(55);
m3.push('kate');

m3 = 5; //priskyrimas pagal reiksme

console.log(m1, m2, m3);
