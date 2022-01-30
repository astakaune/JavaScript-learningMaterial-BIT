// const array0 = ['a', 'b', 'c'];
// // jei su 1 eilute
// array0.forEach(blabla => console.log(blabla));
// // arba , jei daugiau eiluciu pridedame
// array0.forEach(blabla => {
//     console.log(blabla);
// });


console.log('------1ex - start---------');
//paversti suma i 19;
//kiek viso iteraciju ciklu?
const array1 = [3, 6, 10];
let suma1 = 0;
let counter1 = 0;
array1.forEach(bi => {
    suma1 += bi;
    counter1++;
});
// console.log(bi);
console.log('suma', suma1, 'counter', counter1);
console.log('------1ex -end ---------');

console.log(' ');
console.log('------2ex start---------');
//forEach gali pateikti indeksus
//surasti indeksu ir reiksmes sandaugu suma
// ci - reiksme
// i - reiksmes indeksas
const array2 = [3, 6, 10];
let suma2 = 0;
array2.forEach((ci, i) => {
    suma2 += (ci * i);
    console.log(ci, i);
});
console.log('suma=(reiksme*indeksas)', suma2);
console.log('------2ex end---------');


console.log(' ');
//forEach gali pateikti indeksus
//surasti indeksu ir reiksmes sandaugu suma
// trecias - parametras, atiduodantis pati areju array3, pvz
// [3, 6, 10].forEach((ci, i, trecias))
// trecias bus lygus [3, 6, 10]
// trecias yra array3 kopija

console.log('------3ex start---------');
//0 
//3 + 6 = 9 + 0 = 9
//6 + 10 = 16 + 9 = 25
// 10 + <=> 25
let suma55 = 0;
[3, 6, 10].forEach((bi, i, trecias) => {
    if (i < trecias.length - 1) {
        suma55 += bi + trecias[i + 1];
    }
    console.log('bi', bi, 'i', i, 'trecias', trecias);
});
console.log(suma55); //atsk 25

console.log('------2ex 2budas---------');
// destytojo atsakymas
let suma56 = 0;
[3, 6, 10].forEach((bi, i, trecias) => suma55 += trecias[i + 1] ? bi + trecias[i + 1] : 0);
console.log(suma56);


console.log('------2ex end---------');