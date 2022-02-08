function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('--------1 ex-----------');
//1.
// Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4

let egzaminoRezultatas = rand(1, 10);

console.log('Egzamino rezultatas', egzaminoRezultatas);
if (egzaminoRezultatas >= 4) {
    console.log('Egzaminas išlaikytas');
} else {
    console.log('Egzaminą reikės perlaikyti');
}





console.log(' ');
console.log('--------2 ex-----------');

//2.
// I6vesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas 
// tas, kurio rezultatas 1 arba 4

let eksperimentoRezultatas = rand(1, 4);
console.log('Eksperimento rezultatas', eksperimentoRezultatas);

if (eksperimentoRezultatas == 1 || eksperimentoRezultatas == 4) {
    console.log('Eksperimentas pavyko');
} else {
    console.log('Eksperimentas nepavyko');
}

console.log(' ');
console.log('--------3 ex-----------');

//3.
// Išvesti automobilio greitį ir baudos dydį, jeigu greitis didesnis nei 60. 
// Bauda yra viršytas greitis X 5

let automobilioGreitis = rand(40, 125);
console.log('Automobilio greitis', automobilioGreitis, 'km/h');

if (automobilioGreitis > 60) {
    console.log('Skirta bauda yra', ((automobilioGreitis - 60) * 5), 'EUR');
} else {
    console.log('Baudos nėra');
}

console.log(' ');
console.log('--------4 ex-----------');

//4.
//Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė

let eilesNumeris = rand(1, 30);
console.log('Eilės numeris:', eilesNumeris);

if (eilesNumeris % 2 > 0) {
    console.log('Neporinis skaičius');
} else {
    console.log('Porinis skaičius');
}

console.log(' ');
console.log('--------5 ex-----------');

//5.
//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C 
// ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę

let raideABC = rand(1, 3);

// arba sugeneruoti raidę pagal kodą:
// let raideABC = String.fromCharCode(rand(65, 67));
// console.log(String.fromCharCode(rand(65, 67)));

let raideA = 1;
let raideB = 2;
let raideC = 3;

if (raideABC == 1) {
    console.log('Sugeneruota raidė: A');
} else if (raideABC == 2) {
    console.log('Sugeneruota raidė: B');
} else {
    console.log('Sugeneruota raidė: C');
}

console.log(' ');
console.log('--------6 ex-----------');

//6.
// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga 
// ar suma 

let pirmas = rand(0, 2);
let antras = rand(0, 2);
console.log('Pirmas', pirmas, 'Antras', antras);

let sandauga = pirmas * antras;
let suma = pirmas + antras;

if (sandauga > suma) {
    console.log('Sandauga yra didesnė');
} else if (sandauga < suma) {
    console.log('Suma yra didesnė');
} else {
    console.log('Sandauga yra lygi sumai');
}

console.log(' ');
console.log('--------7 ex-----------');

//7.
// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar 
// asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų

let asilai = rand(0, 2);
let karves = rand(0, 2);
console.log('Asilai:', asilai, 'Karvės:', karves);

if ((asilai + karves) > 0) {
    console.log('Gyvulių yra');
} else {
    console.log('Gyvulių nėra');
}

console.log(' ');
console.log('--------8 ex-----------');

//8.
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", 
// jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. 
// Pranešimą "Pralaimėjo" - priešingu atveju

let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
console.log('Dalyvis1:', dalyvis1, 'Dalyvis2:', dalyvis2);

if (((dalyvis1 + dalyvis2) > 6) || (dalyvis1 == dalyvis2)) {
    console.log('Laimėjo');
} else {
    console.log('Pralaimėjo');
}

// arba

((((dalyvis1 + dalyvis2) > 6) || (dalyvis1 == dalyvis2))) ? console.log('Laimėjo') : console.log('Pralaimėjo');



console.log(' ');
console.log('--------9 ex-----------');

//9.
// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 
// jis dalijasi be liekanos. Rezultatą išvesti.

let skaiciuKiekis = 0;
let daug = rand(1000000, 9999999);
console.log('Išvestas skaičius', daug);

if (daug % 5 == 0) {
    skaiciuKiekis++;
    console.log('dalijasi iš skaičiaus 5');
    console.log('dalijasi iš', skaiciuKiekis, 'skaičiaus');
} else if ((daug % 5 == 0) && (daug % 10 == 0)) {
    skaiciuKiekis++;
    console.log('dalijasi iš skaičių 5 ir 10');
    console.log('dalijasi iš', skaiciuKiekis, 'skaičiaus');
} else if ((daug % 5 == 0) && (daug % 10 == 0) && (daug % 33 == 0)) {
    skaiciuKiekis++;
    console.log('dalijasi iš skaičių 5, 10 ir 33');
    console.log('dalijasi iš', skaiciuKiekis, 'skaičiaus');
}

console.log(' ');
console.log('--------10 ex----------');

//10.
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu

// let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
// let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo'; 
// arba

let as;
let tu;

let s;
s = rand(1, 3);

if (s == 1) {
    as = 'sulinys';
} else if (s == 2) {
    as = 'zirkles';
} else if (s == 3) {
    as = 'popierius';
}
console.log('as -', as);

s = rand(1, 3);
if (s == 1) {
    tu = 'sulinys';
} else if (s == 2) {
    tu = 'zirkles';
} else if (s == 3) {
    tu = 'popierius';
}
console.log('tu -', tu);

if (as == tu) {
    console.log('Lygiosios. Bandome dar kartą');
} else if ((as == 'sulinys' && tu == 'zirkles') || (as == 'zirkles' && tu == 'popierius') || (as == 'popierius' && tu == 'sulinys')) {
    console.log('Laimėjau aš');
} else {
    console.log('Laimėjai tu');
}

console.log('----------------------');