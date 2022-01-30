function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(' ');
console.log('-----FOR ex1----');
//console.log’e , naudojant ciklą atspausdinti penkias 
// eilutes ‘Labas’;
for (let i = 1; i <= 5; i++) {
    console.log('Labas');
}


console.log(' ');
console.log('-----FOR ex2----');
// console.log’e , naudojant ciklą penkiose eilutėse 
// atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


console.log(' ');
console.log('-----FOR ex3----');
// console.log’e , naudojant ciklą penkiose eilutėse atspausdinti
//  skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
for (let i = 1; i <= 5; i++) {
    console.log(i * 10);
}


console.log(' ');
console.log('-----FOR ex4----');
// console.log’e , naudojant ciklą penkiose eilutėse atspausdinti 
// skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
for (let i = 49; i <= 54; i++) {
    console.log(i);
}


console.log(' ');
console.log('-----FOR ex5----');
// console.log’e , naudojant ciklą penkiose eilutėse atspausdinti
// skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
for (let i = 4; i >= 0; i--) {
    console.log(i);
}


console.log(' ');
console.log('-----FOR ex6----');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
// skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos 
// nenaudoti!);
for (i = 0; i < 10; i += 2) {
    console.log(i);
}


console.log(' ');
console.log('-----FOR ex7----');
// console.log’e, naudojant ciklą penkiose eilutėse atspausdinti 
// atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje 
// eilutėje);
for (i = 0; i < 5; i++) {
    console.log(rand(0, 10));
}

console.log(' ');
console.log('-----DO WHILE ex8----');
// console.log’e, naudojant ciklą atspausdinti atsitiktinius 
// skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
// Paskutinis atspausdintas skaičius turi būti 5;
let kint8;
do {
    kint8 = rand(0, 10);
    console.log(kint8);
} while (kint8 != 5);


console.log(' ');
console.log('-----DO WHILE ex9----');
// console.log’e, naudojant ciklą atspausdinti atsitiktinius 
// skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
//  Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma 
// viršija 100;
let suma9 = 0;
let kint9;
do {
    kint9 = rand(0, 10);
    console.log(kint9);
    suma9 += kint9;
} while (suma9 < 100);
console.log(suma9);


console.log(' ');
console.log('-----DO WHILE ex10----');
// console.log’e, naudojant ciklą atspausdinti skirtingus 
// atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje 
// eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; 
// Suskaičiuoti kiek ciklų prasisuko.
let kint10;
let counter10 = 0;
do {
    kint10 = rand(0, 10);
    console.log('randomas', kint10);
    counter10++;
} while (kint10 != 5 && kint10 != 7) //reverse == --> != , o || --> &&
console.log('counter', counter10);


console.log(' ');
console.log('-----DO WHILE ex11----');
// console.log’e, naudojant ciklą atspausdinti 
// atsitiktinius skirtingus skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje). Ciklas turi 
// pasibaigti tada, kai atsitiktinių skaičių suma 
// viršija 20, bet ne anksčiau nei po 11 ciklų;
let kint11;
let suma11 = 0;
let counter11 = 0;

do {
    kint11 = rand(0, 10);
    console.log('randomas', kint11);
    suma11 += kint11;
    counter11++;
} while (suma11 <= 20 || counter11 <= 11);

console.log('suma', suma11);
console.log('counter', counter11);



console.log(' ');
console.log('-----DO WHILE ex12----');
//console.log’e, naudojant ciklą atspausdinti 
// skirtingus atsitiktinius skaičius nuo 0 iki 10 
// (vienas skaičius vienoje eilutėje). Ciklą kartoti 
// kol bus sugeneruoti trys nelyginiai skaičiai;

let kint12;
let counter12 = 0;

do {
    kint12 = rand(0, 10);
    console.log('randomas', kint12);
    if (kint12 % 2 > 0) {
        counter12++;
    }
} while (counter12 != 3);
console.log('counter', counter12);



console.log(' ');
console.log('-----DO WHILE ex13----');
//console.log’e, naudojant ciklą atspausdinti po 
//porą skirtingų atsitiktinių skaičių nuo 0 iki 10 
// (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, 
// kol neiškris abu vienodi skaičiai;

let kint13a;
let kint13b;
do {
    kint13a = rand(0, 10);
    kint13b = rand(0, 10);
    console.log('randomas1', kint13a, 'randomas2', kint13b);
} while (kint13a != kint13b);



console.log(' ');
console.log('-----DO WHILE ex14----');
// console.log’e, naudojant ciklą atspausdinti po porą 
// skirtingų atsitiktinių skaičių nuo 0 iki 10 
// (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų 
// skaičių sumas skirtinguose kintamuosiuose. 
// Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau 
// nei 100;
let kint14a;
let kint14b;
let suma14a = 0;
let suma14b = 0;
do {
    kint14a = rand(0, 10);
    kint14b = rand(0, 10);
    console.log('randomas1', kint14a, 'randomas2', kint14b);
    suma14a += kint14a;
    suma14b += kint14b;
    console.log('suma1', suma14a, 'suma2', suma14b);
} while (suma14a <= 100 || suma14b <= 100);
console.log(suma14a, suma14b);


console.log(' ');
console.log('-----DO WHILE ex15----');
// console.log’e, naudojant ciklą atspausdinti po 
// porą skirtingų atsitiktinių skaičių nuo 0 iki 10 
// (abu skaičiai vienoje eilutėje). Ciklą kartoti 
// kol bus sugeneruota po tris arba daugiau nelyginių 
// kaičių.
let kint15a;
let kint15b;
let counter15a = 0;
let counter15b = 0;
do {
    kint15a = rand(0, 10);
    kint15b = rand(0, 10);
    console.log('randomas1', kint15a, 'randomas2', kint15b);
    counter15b++;
    if (kint15a % 2 != 0) {
        // console.log(kint15a);
        counter15a++;
    }
    if (kint15b % 2 != 0) {
        counter15b++;
        // console.log(kint15b);
    }
} while (counter15a < 3 || counter15b < 3);
console.log('counter1', counter15a, 'counter2', counter15b);