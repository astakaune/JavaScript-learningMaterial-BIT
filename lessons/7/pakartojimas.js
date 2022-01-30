function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(' ');
console.log('if... else if... else');
console.log('+++++++++++++++++++++');
/*
Sąlygos:
kint1 == kint2 (pvz., 5 == 5) 

5 == 5 ? ==> true;
5 > 5 ?  ==> false;
5 < 5 ?  ==> false;
5 >= 5 ? ==> true;
6 >= 5 ? ==> true;
5 <= 5 ? ==> true;
6 <= 5 ? ==> false;
5 != 5 ? ==> false;

95% salygu buna su skaiciais - vyksta skaiciu palyginimas.
*/

let paspaustoMygtukoNumeris = rand(1, 3);
console.log('paspaustoMygtukoNumeris', paspaustoMygtukoNumeris);

pomidoras = 1;
agrastai = 2;
kriause = 3;

if (paspaustoMygtukoNumeris == 1) {
    console.log('I krepseli idetas pomidoras');
} else if (paspaustoMygtukoNumeris == 2) {
    console.log('I krepseli ideti agrastai');
} else {
    console.log('I krepseli ideta kriause');
}
console.log('---------------------');



console.log(' ');
console.log('ciklai: for - kintamasis zinomas');
/* zinoti reikia kintamaji iki ciklo vykdymo. 
jei priskirtas kintamasis, vadinasi zinome. 
svarbiausia zinoti ciklo vykdymo metu.
Kuriant for cikla, is karto reikis sukurti skaitikli, 
kad butu aisku kada ciklas pasibaigs. prasideda skaiciavimas
 nuo i=0. ciklu skaitiklis ir asilu skaitiklis yra 
 skirtingi skaitikliai */
console.log('+++++++++++++++++++++');
/* UZDAVINYS: skaiciavimas pirstais kiek prabego asilu
 - prabegus asilui, uzlenkiame pirsta.. */

let prabegoDidelisAsilas = 0;
let prabegoAsilas = rand(1, 30);

for (let cikluskaiciuoklis = 0; cikluskaiciuoklis < prabegoAsilas; cikluskaiciuoklis++) {
    /* skaiciavimas prasideda nuo 0, sustos skaiciuoti, kai prabegs nustatytas kiekis 
    asilu, skaiciuojame kiek prabego asilu */
    /* if sis skirtas salygai pasunkinti ir imitacijai 
    suskaiciuoti jei prabego daugiau asilu 
    nei spejome suskaiciuoti */
    if (rand(1, 5) >= 2) { /*ar asilas didelis * 20kg*/

        prabegoDidelisAsilas++;
        /* ++ skaitiklis - pirsto uzlenkimas- 
        kintamojo padidinimas 1, prabegus asilui*/
    }
}

console.log('Prabego is viso dideli', prabegoDidelisAsilas, 'asilai');
console.log('Buvo is viso asilu', prabegoAsilas);


console.log(' ');
console.log('ciklai: while ir do..while - kintamasis nezinomas');
console.log('+++++++++++++++++++++');
/* UZDAVINYS: tikslas suvalgyti sriuba. su saukstu semiame sriuba. kartais bulve pasemsime, 
kartais morka, kartais tik skysti ir pan. sukame cikla kol baigiasi sriuba.
sukame cikla, kol kazkokia salyga yra */

let kiekIpiltaSriubos = rand(280, 300); //kiekis ml
let saukstuSkaitiklis = 0;

do {
    let saukstuPasemta = rand(15, 19); //kiekis ml
    if (saukstuPasemta > kiekIpiltaSriubos) { //neleidziam pasemti daugiau nei yra like
        saukstuPasemta = kiekIpiltaSriubos;
    }
    kiekIpiltaSriubos = kiekIpiltaSriubos - saukstuPasemta;
    saukstuSkaitiklis++;
} while (kiekIpiltaSriubos > 0);

console.log('Viso saukstu buvo:', saukstuSkaitiklis);
console.log('Sriubos liko:', kiekIpiltaSriubos);



console.log(' ');
console.log('ciklas cikle');
console.log('+++++++++++++++++++++');
/* UZDAVINYS: valgome steika. 
kiek kartu padareme cikla ranka-burna 
ir kiek kramtymu padareme, kad sukramtytume 1 gabaleli. */

// let steikas = rand(350, 450); //svoris g
// let kasniuSkaitiklis = 0;
// let kramtymuSkaitiklis = 0;
// // didysis ciklas sukasi TouchList, kol turime ka valgyti, t.y. >0
// do {
//     let atpjautaSteiko = rand(10, 30); //kiekis, g
//     steikas = steikas - atpjautaSteiko;
//     kasniuSkaitiklis++;

//     do {
//         let kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko = rand(1, 7);
//         atpjautaSteiko = atpjautaSteiko - kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko;
//         kramtymuSkaitiklis++;

//     } while (atpjautaSteiko > 0);

// } while (steikas > 0);

// console.log('viso kasniu kiekis', kasniuSkaitiklis);
// console.log('viso kramtymu skaicius', kramtymuSkaitiklis);


// i uzdavini ivedam papildomas salygas steiko skaiciavimo kiek liko 
// ir kasnio skaiciavima kiek liko

let steikas = rand(350, 450); // kiekis gramais
let kasniuSkaitiklis = 0;
let kramtymuSkaitiklis = 0;

do {

    let atpjautaSteiko = rand(10, 30); //kiekis gramais
    // neatpjaunam daugiau nei yra
    if (atpjautaSteiko > steikas) {
        atpjautaSteiko = steikas;
    }

    steikas = steikas - atpjautaSteiko;
    kasniuSkaitiklis++;


    do {
        let kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko = rand(1, 7);
        // nekrimstelim daugiau nei yra
        if (kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko > atpjautaSteiko) {
            kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko = atpjautaSteiko;
        }

        atpjautaSteiko = atpjautaSteiko - kiekVienuKrimstelejimuSuvalgomAtpjautoSteiko;
        kramtymuSkaitiklis++;

    } while (atpjautaSteiko > 0);

    console.log('Liko atpjauto steiko: ', atpjautaSteiko);


} while (steikas > 0);

console.log('Viso tiek kartų dirbta su šakute: ', sakuciuSkaitiklis);
console.log('Viso tiek kramtyta: ', kramtymuSkaitiklis);
console.log('Liko steiko: ', steikas);
