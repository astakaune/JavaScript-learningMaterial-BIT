function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('------objektai 1ex----------');
// savybes atskiriamos kableliais

let daiktas = {
    name: 'Pjuklas', //savybe
    type: 'Medzio pjuklas', //savybe
    teethQuantity: 45, //savybe
    cut: function () { console.log('dziru dziru'); } //metodas
}
console.log(daiktas);
console.log(daiktas.teethQuantity);

daiktas.cut();
// iskvieciamas pjauti metoda, 
// kuris consoleje paleis 'dziru dziru' veiksma;
// veiksmas yra funkcija.
// console yra objektas.
// log yra consoles metodas, kuris moka kazka atvaizduoti.


console.log('----String 2ex----------');
// stringas yra primityvas
let str = 'Labasaskrabas'; //stringas
console.log(typeof str);

// galime paprasyti, kad stringas pasielgtu kaip objektas,
// pvz., pasakytu savo ilgi.

console.log(str.length); //pagrindine stringo savybe yra jo ilgis


console.log('--STRING quotes-- 3ex---');

let vardas = 'Bobikai';
let str1 = `Labas, ${vardas}`; //naudojami backtics (klaviaturoje prie 1)
console.log(str1);
console.log(str1.length);


console.log('----UNICODE 4ex----------');
// unicode simboliai
let vp = 'Jonas Jonaitis';
console.log(vp);
let vp1 = 'Jonas\nJonaitis';
console.log(vp1);
let vp2 = 'Jonas Jon\taitis \u{1F60D}';
console.log(vp2);


console.log('---- 5ex----------');
let grazus = 'Labai grazus';
console.log(grazus);
console.log(grazus.length); //12 simboliu
console.log(grazus[9] + grazus[10] + grazus[12]);
//lauztiniuose pateikiame simbolio numeri is eiles
// 12 simbolio nera, nes skaiciavimai prasideda nuo 0;
console.log(grazus.charAt(9) + grazus.charAt(100)); //taas pats kaip 60 eilutej




console.log('---- 5a ex----------');
// atskirai atspausdinti visas raides.

// let zuikis = 'Zuikis puikis Ilgaausis eina namo miegot';

// for (let i = 0; i < zuikis.length; i++) {
//     if (zuikis[i] != ' ') {
//         console.log(zuikis[i], zuikis.length);
//             }

}
console.log('---- 5b ex----------');
// spausdinti be tarpu su continue

// for (let i = 0; i < zuikis.length; i++) {
//     if (i == ' ') {
//         continue;

// console.log(zuikis[i]);
// }

console.log('---- 5c ex----------');
// suskaiciuoti a raides

// let pirstukas = 0;

// for (let i = 0; i < zuikis.length; i++) {
//     if (zuikis[i] == ' ') {
//         continue;
//     }
//         if (zuikis[i] == 'a') {
//             pirstukas++;
//         }

// console.log(zuikis[i]);


console.log('---- methods: toUpperCase---------');
// ka moka daryti stringas
// moka pakeisti mazasias raides i didziasias
//pacio zuikispuikis nekeicia, tik grazina nauja stringa.
//pats zuikispuikis lieka tas pats

let zuikispuikis = 'Zuikis Puikis';
console.log(zuikispuikis[5].toUpperCase());

console.log('---- methods: indexOf---------');
let zuikis = 'Zuikis puikis Ilgaausis eina namo miegot';
console.log(zuikis.indexOf('i'));
// jei neranda nurodyto simbolio, console rodo '-1'

console.log('---- methods: lastIndexOf----');


console.log('---- methods: slice----');

let zod = 'Zirafa';
// nupjauna tiek koki skaiciu parasom
//skliausteliuose (kiek nupjaunam nuo priekio, 
// iki kelinto pjaunam)
console.log('pilnas zodis:', zod);

console.log(zod.slice(2), 'nuo 2');
console.log(zod.slice(0, 4), 'nuo 0, 4 gabalai');
console.log(zod.slice(2, 4), 'nuo 2, 4 gabalai');
console.log(zod.slice(1, 2), 'nuo 1, 2 gabalai');


console.log('---- methods: substring----');
// DESTYTOJAS SAKO, KAD neaisku kaip veikia ir 
// neaisku kur galima panaudot
let zod1 = 'Begemotas';
console.log('pilnas zodis:', zod1);
console.log(zod1.substring(1, 4), '(1, 4)');

console.log('---- methods: substr----');
//ispjauna gabaliuka is kazkurios vietos
// jei - tai pradedam pjauti nuo galo
let zod2 = 'Dramblys';
console.log('pilnas zodis:', zod2);
console.log(zod2.substr(2, 4), '2, 4');
console.log(zod2.substr(4, 2), '4, 2');
console.log(zod2.substr(-5, 2), '-5, 2');


