console.log('---- Function----');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 
vardas (A,A) 
skliausteliuose turi kintamuosius {kodas}
funkcijos deklaravimas. 
uzdeklaruota funkcija kodas apeina ir nevykdo
funkcijos iskvietimas - pagal funkcijos varda 
issikviecia anksciau zudeklaruota funkcija
*/

//Function declaration (sayHello - vardas)
// {cia rasomas kodas}


function sayHello() {
    console.log('Hello!!!');
}

// function iskvietimas
//skliausteliia reiskia, kad kvieciame funkcija
sayHello();
sayHello();
sayHello();
sayHello();


console.log('---- 1ex----');
// pasidaryti funkcija, sugalvoti varda
// ir ta funkcija iskviesti 20 kartu 
// panaudoje cikla

function Labas() {
    console.log('Labas, as - krabas');
}

for (let i = 1; i <= 20; i++) {
    Labas();
}

console.log('---- kintamieji----');

let name1 = 'Braske';

function Labas1() {
    console.log(`Labas, ${name1}!!!`);
}
Labas1();

console.log('- parametrai ir argumentai-');

let name2 = 'Tadas';
let hello = 'Hello';
//deklaracija
function Labas(t2) { //t2 yra parametras
    console.log(`$(t2), $(name2)`);
}

//iskvietimas
Labas('labas'); //labas yra argumentas - deklaruotas kintamasis arba tiesioginis stringas
Labas(hello); //hello - argumentas



console.log('---- 2ex----');

// animal - parametras
function zoo(animal) {
    console.log(`Zoo Sode gyvena ${animal}`);
}

// varle - argumentas
zoo('varle');
zoo('liutas putas');
zoo('vilkas pilkas');

console.log('---- 3ex----');
/* Padarykite funkcija skaicius kuri 
console.logintų skaičių perduodamą į 
tą funkciją kaip argumentas. 
Paleiskite ciklą 20 kartų ir tegul 
funkcija skaičius atspausdina ciklo 
numerį */

function skaicius(sk) {
    console.log(`numeris: ${sk}`);
}

for (let i = 1; i <= 20; i++) {
    skaicius(i);
}

console.log('-- default reiksme----');

function zoo1(animal1 = 'neaisku kas') {
    console.log(`Zoo Sode gyvena ${animal1}`);
}

// varle - argumentas
zoo1('varle');
zoo1('liutas putas');
zoo1('vilkas pilkas');
zoo1();
//jei niekas nepriskirta, nurodo default reiksme,
//priskirta po = funkcijoje.


console.log('--RETURN ex----');

function sumuokle(a, b) {
    let suma = a + b;
    return suma;
}

let kiek = sumuokle(5, 7);
console.log(kiek);



console.log('--RETURN ex----');
// vieno paklausiu, viena grazina
function zoologas(animal) {
    if (animal == 'papuga' || animal == 'varna' || animal == 'zyle') {
        return 'Tai yra paukstis';
    }
    if (animal == 'vilkas' || animal == 'zuikis' || animal == 'lape') {
        return 'Tai yra zinduolis';
    }
    return 'Nezinau tokio';
}

console.log(zoologas('vilkas'));
console.log(zoologas('papuga'));
console.log(zoologas('zirafa'));




console.log('----- 3ex 1budas----');
/* Parašyti funkciją, kuri nuspręstų ar skaičius yra porinis. 
Pasinaudokite šia funkcija ir iš ciklo sukamo 20 kartų 
atspausdinkite neporinius (nelyginius) ciklo numerius
*/

function skaicius2(sk2) {
    if (sk2 % 2 > 0) { //nelyginis
        return true;
    }
}
for (let i = 1; i <= 20; i++) {
    if (skaicius2(i)) {
        console.log(`${i} nelyginis`);
    }
}

console.log('----- 3ex 2budas----');
// Integer --> Boolean 
// 2 budai:
// !!Number; //true
// Boolean(skaicius) ;

function arNelyginis(skaicius5) { //grazina true jei nelyginis ir false - jei lyginis
return Boolean(skaicius5 % 2); // grazinam 1 (true) jei nelyginis, 0 (false)- jei lyginis
}
for (let i = 1; i <= 20; i++) {
    if (arNelyginis(i)) {
        console.log(`Ciklas nr. ${i} yra nelyginis`);
    }
}



