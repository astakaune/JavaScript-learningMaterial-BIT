console.log('-------JSON----------');

/* 
.json yra vienas is duomenu formatu
suformuojame duomenis ir paverciame i json stringa
ir juos galime irasyti i faila
internetu gali buti siunciamas tik stringas
negalime internetu issiusti masyvo ar objekto
persiuntus, issiformatuoja i sau suprantama fdrmata.
universali duomenu struktura galinti tilpti bet kur.
*/

//masyvas1
const masyvas1 = [5, 5, 6, 6, 7, 7];

//padarom stringa
let jsonString1 = JSON.stringify(masyvas1);
console.log(masyvas1, jsonString1);

//masyvas2 ir objektas
const masyvas2 = [5, 5, 6, { labas: 'labas', obj: ['labas', 'vakaras', 3, 5] }, 6, 7, 7];
let jsonString2 = JSON.stringify(masyvas2);
console.log(masyvas2, jsonString2);

// parsisiunteme stringa ir atverteme atgal i duomenis
const masyvas2Atgal2 = JSON.parse(jsonString2);
console.log(masyvas2, jsonString2, masyvas2Atgal2);





console.log('---INFO saugojimas narsyjkleje----');

// let pirstukai1 = 0;
// document.querySelector('button').addEventListener('click', () => {
//     pirstukai1++;
//     console.log('pirstukai:', pirstukai1);
// });
//parafreshinus console, pirstukai vel prasideda nuo 0;
// norint issaugoti, ka suspaudeme, naudojame LOCAL STORAGE



let pirstukai =
    (null === localStorage.getItem('pirst')) ? [0] :
    JSON.parse(localStorage.getItem('pirst'));
console.log('pirstukai:', pirstukai);

document.querySelector('button').addEventListener('click', () => {
    pirstukai[0]++;
    console.log('pirstukai:', pirstukai);
    localStorage.setItem('pirst', JSON.stringify(pirstukai));
});

