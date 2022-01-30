function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(' ');
console.log('---->----1ex---<------');

// 1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus 
// sveikus skaičius iš intervalo 5…25;
// 1a Paskaičiuokite jų sumą ir priskirkite ją kintamajam. 
// Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
// 1b Sudėkite skaičius į stringo tipo kintamąjį ir jį 
// atspauszdinkite pasinaudodami console.log;
// 1c Sudėkite skaičius į stringo tipo kintamąją padarant 
// tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
// 1d Sudėkite skaičius į stringo tipo kintamąją padarant 
// tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. 
// Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;

let a = rand(5, 25);
let b = rand(5, 25);
let c = rand(5, 25);
console.log('Kintamieji:', a, b, c);

console.log('--------1a---------');
let sumaABC = a + b + c;
console.log('abc suma:', sumaABC);

console.log('--------1b---------');
let stringuSuma = String(a) + String(b) + String(c);
console.log('Stringų suma', stringuSuma);

console.log('--------1c---------');
let stringaiSuTarpais = String(a) + ' ' + String(b) + ' ' + String(c) + ' ';
console.log('Stringai su tarpais', stringaiSuTarpais);

console.log('--------1d---------');
let stringuSumaSuTarpais = String(a) + ' ' + String(b) + ' ' + String(c) + ' ' + (a + b + c);
console.log('Stringų suma su tarpais', stringuSumaSuTarpais);



console.log(' ');
console.log('---->----2ex----<-----');
// Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), 
// kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;
let ex2 = rand(5, 10);
console.log('Random skaičius:', ex2);



console.log(' ');
console.log('----->---3ex---<------');
// Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. 
// Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
let ex3 = 'Labas';
for (let i = 0; i < 5; i++) {
    console.log(ex3, i);
}



console.log(' ');
console.log('----->---4ex---<------');
// Pasinaudojus ciklu ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
let ex4 = 'Labas';
for (let i = 0; i < 7; i++) {
    console.log(ex4, ex2);
}



console.log(' ');
console.log('----->---5ex---<------');
// Pasinaudojus ciklu ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, 
// koks skaičius yra sugeneruotas;
console.log('Random skaičius yra:', ex2);
let ex5 = 'Ate';
for (let i = 0; i < ex2; i++) {
    console.log(ex5, ex2);
}



console.log(' ');
console.log('----->---6ex---<------');
// Pasinaudojus ciklu ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų,
//  koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
console.log('Random skaičius yra:', ex2);
let ex6 = 'Viso gero';
if (ex2 > 7) {
    for (let i = 0; i < ex2; i++) {
        console.log(ex6, ex2);
    }
} else {
    console.log('Neprintinsiu');
}



console.log(' ');
console.log('----->---7ex---<------');
// 7. Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
// kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
// 7a Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
// 7b Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
// 7c Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. 
// Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
// 7d Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. 
// Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. 
// Stringo tipo kintamąjį atspazdinkite pasinaudodami console.log;
let ex7;
for (let i = 0; i < 5; i++) {
    ex7 = rand(10, 20);
}

console.log('--------7a---------');
let ex7a;
for (let i = 0; i < 5; i++) {
    ex7a = rand(10, 20);
    console.log('Randomas', ex7a);
}

console.log('--------7b---------');
let suma7b = 0;
for (let i = 0; i < 5; i++) {
    suma7b += rand(10, 20);
    console.log('Reikšmių suma cikle sumuojasi:', suma7b);
}
console.log('Suma:', suma7b);

console.log('--------7c---------');
let ex7c = '';
for (let i = 0; i < 5; i++) {
    ex7c += rand(10, 20) + ' ';
}
console.log('Randomas', ex7c);

console.log('--------7d---------');
let kint7d = '';
let suma7d = 0;
for (let i = 0; i < 5; i++) {
    let randomas = rand(10, 20);
    kint7d += randomas + ' ';
    suma7d += randomas;
}
kint7d += suma7d;
console.log('Randomas:', kint7d);
console.log('Suma', suma7d);




console.log(' ');
console.log('--------8ex---------');
// 8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. 
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. 
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
// 8a Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
// 8b Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
// 8c Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, 
// kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
// 8d Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, 
// kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). 
// Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
// 8e Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. 
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
// 8f Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). 
// Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje. 

let ex8a;

console.log('--------8a---------');
do {
    ex8a = rand(10, 25);
    console.log('Randomas:', ex8a);
} while (ex8a >= 12);


console.log('--------8b---------');
let visoCiklu = 0;
do {
    ex8b = rand(10, 25);
    visoCiklu++;
    console.log('Randomas:', ex8b);
} while (ex8b >= 12);
console.log('visoCiklu', visoCiklu);


console.log('--------8c---------');
let suma = 0;

do {
    ex8a = rand(10, 25);
    suma += ex8a > 18 ? 0 : ex8a;
} while (ex8a >= 12);
console.log('suma', suma);


console.log('--------8d---------');
let suma1 = 0;
let atmesta = 0;

do {
    ex8a = rand(10, 25);
    console.log('Randomas', ex8a);

    if (ex8a >= 18) {
        suma1 = suma1 + ex8a;
    } else {
        atmesta++;
    }

} while (ex8a <= 12);
console.log('suma', suma1, 'atmesta', atmesta);


console.log('--------8e---------');
let e8rand;
let lyginis = 0;
let nelyginis = 0;

do {
    ex8a = rand(10, 25);
    console.log('Randomas', ex8a);
    if (ex8a % 2 === 0) {
        lyginis++;
    } else {
        nelyginis++;
    }
} while (ex8a >= 12);

console.log('Lyginiu', lyginis, 'Neyginiu', nelyginis);



console.log('--------8f---------');
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
// 9a Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. 
// Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. 
// Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
// 9b Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, 
// bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
// 9c Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;

// analogiskas pavyzdys 9ex su kauliuko metimu.

console.log('--------9a---------');
let isridenta;
let mCiklas = 0;
let dCiklas = 0;
do {
    isridenta = rand(1, 6);
    dCiklas++;

    for (let i = 0; i < isridenta; i++) {
        mCiklas++;
    }
} while (isridenta != 5);

console.log('dCiklas', dCiklas, 'mCiklas', mCiklas);


console.log('--------9b---------');

let ex9b;
ex9b = rand(5, 10);

console.log('--------9c---------');


console.log(' ');
console.log('--------10ex---------');
// Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, 
// Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu 
// ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, 
// kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 
// arba daugiau taškų.


