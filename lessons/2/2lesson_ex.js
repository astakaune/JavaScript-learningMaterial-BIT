function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(' ');
console.log('----ex1----');
/* Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi 
funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
Didesnę reikšmę padalinkite iš mažesnės. 
Atspausdinkite rezultatą naudodami console.log() */
let ex11 = rand(0, 4);
let ex12 = rand(0, 4);
console.log('var1', ex11, ';', 'var2', ex12, ';');
if ((ex11 < ex12) && (ex11 != 0)) {
    console.log('Rezultatas yra:', ex12 / ex11);
} else if ((ex11 > ex12) && (ex12 != 0)) {
    console.log('Rezultatas yra:', ex11 / ex12);
} else if (ex11 = ex12) {
    console.log('KIntamieji yra lygūs');
} else {
    console.log('Dalyba iš 0 negalima');
}

// Destytojo sprendimas
//neivertina jei kintamieji yra lygus
if (ex11 * ex12 == 0) {
    console.log('dalyba is nulio negalima');
} else if (ex11 > ex12) {
    console.log('Rezultatas yra:', ex11 / ex12);
} else {
    console.log('Rezultatas yra:', ex12 / ex11);
}


console.log(' ');
console.log('----ex2----');
/* Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi 
funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. 
Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę. */
let ex21 = rand(0, 25);
let ex22 = rand(0, 25);
let ex23 = rand(0, 25);
console.log('var1', ex21, ';', 'var2', ex22, ';', 'var3', ex23, ';');
if ((ex21 < ex22) && (ex22 < ex23)) {
    console.log('Vidurinė reikšmė yra:', ex22);
} else if ((ex22 < ex23) && (ex23 < ex21)) {
    console.log('Vidurinė reikšmė yra:', ex23);
} else if ((ex21 == ex22) || (ex21 == ex23) || (ex22 == ex23)) {
    console.log('Vidurinės reikšmės nėra');
} else {
    console.log('Vidurinė reikšmė yra:', ex21);
};

//destytojo sprendimas su kuo daugiau if
if (ex21 > ex22 && ex22 > ex23) {
    console.log('vidutine reikšmė=', ex22);
} else if (ex21 > ex23 && ex23 > ex22) {
    console.log('vidutine reikšmė=', ex23);
} else if (ex22 > ex21 && ex21 > ex23) {
    console.log('vidutine reikšmė=', ex21);
} else if (ex22 > ex23 && ex23 > ex21) {
    console.log('vidutine reikšmė=', ex23);
} else if (ex23 > ex21 && ex21 > ex22) {
    console.log('vidutine reikšmė=', ex21);
} else if (ex23 > ex22 && ex22 > ex21) {
    console.log('vidutine reikšmė=', ex22);
} else if (ex21 == ex22 || ex21 == ex23 || ex22 == ex23) {
    console.log('vidutines reikšmės nera');
}


console.log(' ');
console.log('----ex3----');
/*  Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji 
    (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą,
     kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų 
     naudojant console.log(). */

     

