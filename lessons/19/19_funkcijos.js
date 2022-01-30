console.log('------------');

//deklaravimas 1 karta
function vardas(v = 'John') {
    console.log(`Labas, ${v}`);
    return 'valio';
}

//kvietimas kiek norime kartu
//John yra default, jei kvieciant nenaudojamas argumentas
//argumentai: Jonas, janina, Brisius
// skliausteliai paleidzia funkcija
vardas('Jonas');
vardas('Janina');
vardas('Brisius');
vardas();

console.log(vardas); //duos kad vardas yra funkcija
console.log(vardas()); //underfind arba return reiksme meta

console.log(' ');
const rez = vardas;
console.log(rez());


function pirma() {
    function antra() {
        console.log('privet');
        return [5, 9, 41, 'Labas'];
    }
    return antra;
}
console.log(' ');
pirma()(); //taip spausdina, nes console.log yra funkcijoje

console.log(' ');
console.log(pirma()()[2]);

console.log(' ');
console.log(pirma()()[3][2]);

console.log(' ');
//uzrasyta su masyvu
const fun = () => () => [5, 9, 41, 'Labas'];
console.log(fun());
console.log(fun()());
console.log(fun()()[3][3]);
// console.log(fun()()());



// console.log(' ');
// console.log('-----ARROW FUNCTION-------');



// masyvas.forEach(e => console.log(e));
// masyvas.forEach(function(e) {
//     console.log(e);
// });

// // arba

// const ff = function(e) {
//     console.log(e);
// }
// masyvas.forEach(ff);


// console.log(masyvas.map(e => console.log(e)));


console.log(' ');
console.log('-----EX1-------');
// rasti  a + b;
const a = 5;
const b = 6;
function suma(a, b) {
    return a + b;
}
console.log('suma', suma(a, b));

// rasti skirtuma = a - b;
function skirtumas(a, b) {
    return a - b;
}
console.log('skirtumas', skirtumas(a, b));

// 3

function suma(a, b) {
    return a + b;
}

function skirtumas(a, b) {
    return a - b;
}

function skaiciuoti(v, a, b) {
    if ('sudeti' == v) {
        return suma(a, b);
    } else if ('atimti' == v) {
        return skirtumas(a, b);
    }
}
console.log(skaiciuoti('sudeti', 8, 3));
console.log(skaiciuoti('atimti', 8, 3));


//4
// function skaiciuoti2(v) {
//     if ('sudeti' == v) {
//         return function suma(a, b) {
//             return a + b;
//         };
//     } else if ('atimti' == v) {
//         return function skirtumas(a, b) {
//             return a - b;
//         }
//     }
// }
// console.log(skaiciuoti2('atimti')(8, 3));
// console.log(skaiciuoti2('sudeti')(8, 3));

// let kaDaryt = skaiciuoti2('sudeti');
// console.log(kaDaryt(5, 5));

// Konstantino budas
function skaiciuoti2(v) {
    if (v == "+") return suma;
    if (v == "-") return skirtumas;
}
console.log('skaiciuoti', skaiciuoti2("+")(10, 10));
console.log('skaiciuoti', skaiciuoti2("-")(30, 7));




console.log(' ');
console.log('-----EX2-------');
// Reikia parašyti funkciją kuri argumentu gavus masyvą, 
// padarytų naują masyvą, kuriame visos esančios 
// "A" raides būtų pakeistos į "Z"
const m = ['V', 'U', 'A', 'A', 'R', 'A', 'B'];
console.log('pradinis', m);
function masyvasSenas(m) {
    const ma = [];
    m.forEach(e => {
        if (e == 'A') {
            ma.push('Z');
        } else {
            ma.push(e);
        }
    });
    return ma;
}
console.log('be A raidziu', masyvasSenas(m));


// kitas destytojo budas
const m2 = ['V', 'U', 'A', 'A', 'R', 'A', 'B'];
const mp = mas => mas.map(e => e == 'A' ? 'Z' : e);
console.log('be A - destytojo budu', mp(m2));
//map pdaro kopija uz mus. mums nereikia sukurti naujo
// masyvo. map grazina masyvo kopija, pakeista pagal tam
// tikras taisykles



console.log(' ');
console.log(' ');
console.log('-----mano EX2 atkartojimas-------');
// pakeisti R raides i zodi Asta
const masyvasPradinis = ['A', 'K', 'A', 'S', 'K', 'A', 'R'];
console.log('Pradinis masyvas', masyvasPradinis);
function korekcija(masyvasPradinis) {
    const masyvasKoreguotas = [];
    masyvasPradinis.forEach(i => {
        if (i == 'A') {
            masyvasKoreguotas.push('Asta');
        } else {
            masyvasKoreguotas.push(i);
        }
    });
    return masyvasKoreguotas;
}
console.log('Koreguotas masyvas', korekcija(masyvasPradinis));


// destytojo budu
const masyvasPradinis2 = ['A', 'K', 'A', 'S', 'K', 'A', 'R'];
const masyvasKoreguotas2 = mas => mas.map(i => i == 'K' ? 'Kaune' : i);
console.log('Koreguotas destytojo budu', masyvasKoreguotas2(masyvasPradinis2));