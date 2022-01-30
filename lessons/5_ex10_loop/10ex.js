function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('--------1ex---------');

/* 1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
1a Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite 
sumos kintamąjį;
1b Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
1c Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite 
pasinaudodami console.log;
1d Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite 
trijų skaičių sumą, paskaičiuotą A dalyje. 
Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log; */

let a = rand(5, 25);
let b = rand(5, 25);
let c = rand(5, 25);
console.log('a=', a, 'b=', b, 'c=', c);

console.log('--------1a---------');
let sumaABC = a + b + c;
console.log('abc suma', sumaABC);

console.log('--------1b---------');
let stringuSumaABC = String(a) + String(b) + String(c);
console.log('abc stringu suma:', stringuSumaABC);

console.log('--------1c ex---------');
let StringuSumaSuTarpais = a + ' ' + b + ' ' + c;
console.log('abc stringu suma su tarpais:', StringuSumaSuTarpais);

console.log('--------1d ex---------');
let StringuSumaSuTarpais1 = a + ' ' + b + ' ' + c + ' ' + sumaABC;
console.log('abc stringu suma su tarpais:', StringuSumaSuTarpais1, '+suma');


console.log(' ');
console.log('--------2ex---------');
// Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), 
// kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;
let randomas = rand(5, 10);
console.log('randomas=', randomas);


console.log(' ');
console.log('--------3ex---------');
// Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. 
// Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
let ex3 = 'Labas';
for (let i = 0; i < 5; i++) {
    console.log(ex3, i);
}


console.log(' ');
console.log('--------4ex---------');
// Pasinaudojus ciklu ir console.log atspauzdinkite kintamąjį 
// iš 2 uždavinio 7 kartus;
let ex4 = 'Laba diena';
for (let j = 0; j < 7; j++) {
    console.log(ex4, j);
}


console.log(' ');
console.log('--------5ex---------');
// Pasinaudojus ciklu ir console.log atspauzdinkite kintamąjį iš 
// 2 uždavinio tiek kartų,  koks skaičius yra sugeneruotas;
console.log('randomas', randomas);
let ex5 = 'Viso gero';
for (let n = 1; n <= randomas; n++) {
    console.log(ex5, n);
}


console.log(' ');
console.log('----->---6ex---<------');
// Pasinaudojus ciklu ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 
// tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis 
// didesnis už 7;
console.log('randomas', randomas);
let ex6 = 'Ate';
if (randomas > 7) {
    for (let i = 1; i <= randomas; i++) {
        console.log(ex6, randomas);
    }
}


console.log(' ');
console.log('--------7ex---------');
/* 7. Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite 
atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. 
Ciklą kartokite 5 kartus; 
7a Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį 
sukūrėte už ciklo ribų ir jį atspauzdinkite;
7b Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami 
kintamajam, kurį sukūrėte už ciklo ribų.  Rezultatą atspauzdinkite 
pasinaudodami console.log už ciklo ribų;
7c Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį 
tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo 
ribų jam pasibaigus;
7d Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp 
skaičių darydami tarpą.  Ciklui pasibaigus prie stringo tipo kintamojo 
pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. 
Stringo tipo kintamąjį atspazdinkite pasinaudodami console.log; */
let ex7 = 0;;

console.log('--------7a---------');
for (let i = 0; i < 5; i++) {
    ex7 = rand(10, 20);
    console.log(ex7);
}

console.log('--------7b---------');
let sumaex7b = 0;
for (let i = 0; i < 5; i++) {
    sumaex7b += rand(10, 20);
    console.log('suma+', sumaex7b);
}

console.log('--------7c---------');
let ex7c = '';
for (let i = 0; i < 5; i++) {
    ex7c += rand(10, 20) + ' ';
}
console.log(ex7c);

console.log('--------7d---------');
let ex7d = '';
let suma7d = 0;

for (let i = 0; i < 5; i++) {
    let randomas = rand(10, 20);
    ex7d += randomas + ' ';
    suma7d += randomas;
}
ex7d += suma7d;
console.log('Randomas:', ex7d);
console.log('Suma', suma7d);


console.log(' ');
console.log('--------8ex---------');
// 8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. 
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. 
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;

let ex8a;

console.log('--------8a---------');
// 8a Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
do {
    ex8a = rand(10, 25);
    console.log('Sugeneruotas skaicius', ex8a);
} while (ex8a >= 12);


console.log('--------8b---------');
// 8b Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
let ex8b;
let iteracijos = 0;
do {
    ex8b = rand(10, 25);
    iteracijos++;
    console.log('Sugeneruotas skaicius', ex8b);
} while (ex8b >= 12);
console.log('iteracijos', iteracijos);


console.log('--------8c---------');
// 8c Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, 
// kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
let ex8c;
let iteracijos1 = 0;
let sumaEx8c = 0;

do {
    ex8c = rand(10, 25);
    console.log('skaicius', ex8c);
    if (ex8c > 18) {
        sumaEx8c += ex8c;
    }
} while (ex8c >= 12);
console.log('suma', sumaEx8c);



console.log('--------8d---------');
// 8d Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, 
// kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). 
// Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
let ex8d;
let sumaEx8d = 0;
let atmesta = 0;

do {
    ex8d = rand(10, 25);
    console.log('skaicius', ex8d);
    if (ex8d > 18) {
        sumaEx8d += ex8d;
    } else {
        atmesta++;
    }
} while (ex8d >= 12);
console.log('suma', sumaEx8d);
console.log('atmesta reiksmiu', atmesta);


console.log('--------8e---------');
// 8e Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
let ex8e;
let lyginiai = 0;
let nelyginiai = 0;

do {
    ex8e = rand(10, 25);
    console.log('skaicius', ex8e);
    if (ex8e % 2 > 0) {
        nelyginiai++;
    } else {
        lyginiai++;
    }
} while (ex8e >= 12);
console.log('lyginiai', lyginiai);
console.log('nelyginiai', nelyginiai);


console.log('--------8f---------');
// 8f Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). 
// Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje. 

// mano sprendimas

let visoMazuCiklu;
let visoDideliuCiklu = 0;
do {
    visoMazuCiklu = 0;
    visoDideliuCiklu++;
    do {
        ex8a = rand(10, 25);
        visoMazuCiklu++;
    } while (ex8a >= 12);
} while (visoMazuCiklu <= 20);

console.log('visoMazuCiklu', visoMazuCiklu);
console.log('visoDideliuCiklu', visoDideliuCiklu);

console.log(' ');
console.log('----->---9ex---<------');
// 9 Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
// kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
let ex9;
do {
    ex9 = rand(5, 10);
    console.log('skaicius', ex9);
} while (ex9 != 5);


console.log('--------9a---------');
// 9a Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. 
// Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. 
// Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
//mano sprendimas
let ex9a;
let isorinisCiklasIter = 0;
let vidinisCiklasIter = 0;
let suma9a = 0;
do {
    ex9a = rand(5, 10);
    console.log('randomas', ex9a);
    isorinisCiklasIter++;
    vidinisCiklasIter = 0;
    suma9a = suma9a + ex9a;
    for (let i = 1; i <= ex9a; i++) {
        vidinisCiklasIter++;
        console.log('vidinisCiklasIter', vidinisCiklasIter);
    }
} while (ex9a != 5);
console.log(' ');
console.log('isorinisCiklasIter', isorinisCiklasIter);
console.log('vidiniuIterSuma', suma9a);

// kitas sprendimas
// let ex9b;
// let vidinisCiklas = 0;
// let isorinisCiklas = 0;
// let vidinisCiklasVisoIteracijos = 0;
// do {
//     ex9b = rand(5, 10);
//     console.log('skaicius', ex9b);
//     vidinisCiklas = 0;
//     isorinisCiklas++;
//     do {
//         vidinisCiklas++;
//         console.log('vidinisCiklas', vidinisCiklas);
//     } while (vidinisCiklas < ex9b);
//     vidinisCiklasVisoIteracijos += vidinisCiklas;
// } while (ex9b != 5);
// console.log(' ');
// console.log('isorinisCiklas', isorinisCiklas);
// console.log('vidinisCiklasVisoIteracijos', vidinisCiklasVisoIteracijos);



console.log('--------9b---------');
// 9b Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, 
// bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
let ex9b;
let isorinisCiklasIter9b = 0;
let vidinisCiklasIter9b = 0;
let suma9b = 0;
let counter5 = 0;
do {
    ex9b = rand(5, 10);
    console.log('randomas', ex9b);
    isorinisCiklasIter9b++;
    vidinisCiklasIter9b = 0;
    suma9b = suma9b + ex9b;
    if (ex9b == 5) {
        counter5++;
    }
    for (let i = 1; i <= ex9b; i++) {
        vidinisCiklasIter9b++;
        console.log('vidinisCiklasIter', vidinisCiklasIter9b);
    }
} while (counter5 != 3);
console.log(' ');
console.log('isorinisCiklasIter', isorinisCiklasIter9b);
console.log('vidiniuIterSuma', suma9b);


console.log('--------9c---------');
// 9c Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;
let ex9c;
let isorinisCiklasIter9c = 0;
let vidinisCiklasIter9c = 0;
let vidinioCikloIterSuma9c = 0;
let counter5c = 0;
let counter5x3 = 0;
do {
    ex9c = rand(5, 6);
    console.log('randomas', ex9c);
    isorinisCiklasIter9c++;
    vidinisCiklasIter9c = 0;
    vidinioCikloIterSuma9c += ex9c;
    if (ex9c == 5) {
        counter5c++;
        counter5x3++;
    } else {
        counter5x3 = 0;
    }
    for (let i = 0; i < ex9c; i++) {
        vidinisCiklasIter9c++;
        console.log('vidinisCiklasIter9c', vidinisCiklasIter9c);
    }
} while (counter5x3 != 3);
console.log(' ');
console.log('isorinisCiklasIter9c', isorinisCiklasIter9c);
console.log('vidinioCikloIterSuma9c', vidinioCikloIterSuma9c);
console.log('counter5x3', counter5x3);


console.log(' ');
console.log('--------10ex---------');
// Kazys ir Petras žaidžia bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20,
// Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu 
// ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, 
// kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 
// arba daugiau taškų.
let petras;
let petroSuma = 0;
let kazys;
let kazioSuma = 0;
let laimejo;
do {
    petras = rand(10, 20);
    petroSuma += petras;
    kazys = rand(5, 25);
    kazioSuma += kazys;
    console.log('petras', petras, '/', 'kazys', kazys);
    console.log('petroSuma', petroSuma, '/', 'kazioSuma', kazioSuma);
    console.log('------');
} while (petroSuma < 222 && kazioSuma < 222);
if (petroSuma >= 222 && kazioSuma < 222) {
    laimejo = 'PETRAS';
} else if (kazioSuma >= 222 && petroSuma < 222) {
    laimejo = 'KAZYS';
} else {
    laimejo = 'Lygiosios';
}
console.log('---------REZULTATAS------------');
console.log('Petras surinko', petroSuma, 'taškų');
console.log('Kazys surinko', kazioSuma, 'taškų');
console.log('Partiją laimėjo', laimejo);