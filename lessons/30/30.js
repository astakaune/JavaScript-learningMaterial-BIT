function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('---ex1----');
//ex1
// 1.Sukurti masyvą iš 11 elementų, kurie yra atsitiktiniai skaičiai nuo 3 iki 7
const mas1 = [];
for (let i = 1; i <= 11; i++) {
    let randomas1 = rand(3, 7);
    mas1.push(randomas1);
}
console.log(mas1);



console.log(' ');
console.log('---ex2----');
//ex2
// 2. išrūšiuoti nuo didžiausio iki mažiausio
mas1.sort((a, b) => { //jei nerasytume riestiniu skliaustu, return padarytu automatiskai
    return b - a;
});
console.log(mas1.slice());



console.log(' ');
console.log('---ex3----');
//ex3
// 3 Sukurti Set'ą iš 11 elementų, kurie yra atsitiktiniai skaičiai nuo 3 iki 17
// const set3 = new Set();
const set1 = new Set();
let counter = 0;
while (set1.size < 11) {
    counter++;
    set1.add(rand(3, 17));
}
console.log(set1, 'counter', counter);



console.log(' ');
console.log('---ex4----');
//ex4
// 4. padidinti Set'ą iki 15 elementų (tie patys atsitiktiniai 
// skaičiai nuo 3 iki 17)
const set2 = new Set();
let counter2 = 0;
while (set2.size < 15) {
    counter2++;
    set2.add(rand(3, 17));
}
console.log(set2, 'counter:', counter2);



console.log(' ');
console.log('---ex5----');
//ex5
// 5. iš seto išmesti visas reikšmes, kurios dalinasi iš 3 ar iš 5
const set5 = new Set();
while (set5.size < 15) {
    set5.add(rand(3, 17));
}
set5.forEach(i => {
    if (i % 3 === 0 || i % 5 === 0) {
        set5.delete(i);
    }
});
console.log(set5);



console.log(' ');
console.log('---ex6----');
//ex6
// 6. išrūšiuoti gautą Set'ą didėjimo tvarka 
// (tą patį Setą, o ne sukurtą naują).
const set6 = new Set();
while (set6.size < 15) {
    set6.add(rand(3, 17));
}
set6.forEach(i => {
    if (i % 3 === 0 || i % 5 === 0) {
        set6.delete(i);
    }
});
console.log(set6);

const mas6 = [...set6].sort((a, b) => a - b);
set6.clear();
mas6.forEach(e => set6.add(e));
console.log('Sorted', set6);




console.log(' ');
console.log('---ex7----');
// ex7. išrūšiuoti 1 uždavinio masyvą taip, kad 
// pirma eitų lyginiai skaičiai, o toliau nelyginiai
const mas7 = [];
for (let i = 1; i <= 11; i++) {
    let randomas7 = rand(3, 7);
    mas7.push(randomas7);
}
console.log('pradinis', mas7.slice());

mas7.sort((a, b) => a % 2 - b % 2);
console.log('1way', mas7.slice());

mas7.sort((a, b) => {
    // for (let i = 1; i <= 11; i++) {
    if (a % 2 === 0) {
        return -1
    }
    else {
        return 1;
    }
});
console.log('2way', mas7.slice());




console.log(' ');
console.log('---ex8----');
// 8 sukurkite Map tipo objektą, kuriame būtų įrašyti keturi 
// skirtingi gyvuliai, kurių pavadinimai eitų kaip indeksai, 
// o reikšmės būtų uodegų ilgiai cm.
const map8 = new Map();
['Zuikis', 'Kiskis', 'Triusis', 'Rabitas'].forEach(z => map8.add(z, rand(5, 25)));
console.log(map8);



console.log(' ');
console.log('---ex9----');
// 9 Išrūšiuokite Mapą pagal uodegų ilgius didėjančia tvarka
console.log(mas9.slice());
const mas9 = [...map1].sort((a, b) => {
    if (a[0] < b[0]) {
        return -1;
    }
    if (a[0] > b[0]) {
        return 1;
    }
    return 0;
});
console.log(mas9.slice());
console.log(new Map(mas9));

map1.clear();
mas9.forEach(v => map1.set(v[0], v[1]));



console.log(' ');
console.log('---ex10----');
// 10 išrūšiuokite mapą pagal gyvulių pavadinimus abėcėlės tvarka 
const mas10 = [...map1].sort((a, b) => a[1] < b[1]);
console.log(mas10.slice());

