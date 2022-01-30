function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('---- ex1 budas1----');
//Sukurti masyvą, kurio ilgis yra atsitiktinis nuo 10 iki 30, 
// o reikšmės atsitiktiniai skaičiai nuo 5 iki 100;
let ar1 = [];
let ar1Ilgis = rand(10, 30);

for (i = 0; i < ar1Ilgis; i++) {
    let kint1 = rand(5, 100);
    ar1.push(kint1);
}
console.log('masyvas:', ar1.slice());

console.log('---- ex1 budas2----');
ar1 = [];
for (i = 0; i < rand(10, 30); i++) {
    ar1.push(rand(5, 100));
}
console.log('masyvas:', ar1.slice());



console.log(' ');
console.log('---- ex2----');
//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių 
// (pinigų esančių piniginėje) sumą;
let ar2 = [];
let ar2Suma = 0;
let ar2Ilgis = rand(10, 30);

for (i = 0; i < ar2Ilgis; i++) {
    let kint2 = rand(5, 100);
    ar2.push(kint2);
    ar2Suma += kint2;
}
console.log('masyvas:', ar2);
console.log('Suma:', ar2Suma);

console.log(' ');
console.log('---- ex3----');
//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio 
//popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
console.log('---- ex3 1 budas----');
let ar3 = [];
let ar3Suma = 0;
let ar3Ilgis = rand(10, 30);

for (let i = 0; i < ar3Ilgis; i++) {
    let kint3 = rand(5, 100);
    ar3.push(kint3);
    if (kint3 > 2) {
        ar3Suma += kint3;
    }
}
console.log('masyvas:', ar3);
console.log('Suma >2 reiksmiu:', ar3Suma);

console.log('---- ex3 2 budas----');
let ar31 = [];
let ar31Suma = 0;
let ar31Ilgis = rand(10, 30);

for (let i = 0; i < ar31Ilgis; i++) {
    let kint31 = rand(5, 100);
    ar31.push(kint31);
    if (ar31[i] > 2) {
        ar31Suma += ar31[i];
    }
}
console.log('masyvas:', ar31);
console.log('Suma >2 reiksmiu:', ar31Suma);

console.log(' ');
console.log('---- ex4----');
//Išleisti visus metalinius pinigus (reikšmes, kurios 
// yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio ;
let ar4 = [];
let ar4Ilgis = rand(10, 30);

while (ar4.length < ar4Ilgis) {
    let kint4 = rand(1, 10);
    ar4.push(kint4);
    for (let i = 0; i < ar4.length; i++) {
        if (ar4[i] <= 2) {
            ar4[i] = 0;
        }
    }
}
console.log('masyvas be <=2 reiksmiu:', ar4);



console.log(' ');
console.log('---- ex5----');
// Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti 
// kiek tokių didžiausių reikšmių masyve yra;
let ar5 = [];
let maxR = 0;
let maxCounter = 0;

for (let i = 0; i < rand(10, 30); i++) {
    let kint5 = rand(5, 20);
    ar5.push(kint5);
    if (maxR < ar5[i]) {
        maxR = ar5[i];
    }
}
for (let i = 0; i < ar5.length; i++) {
    if (maxR == ar5[i]) {
        maxCounter++;
    }
}
console.log('masyvas:', ar5);
console.log('max reiksme:', maxR);
console.log('max reiksmiu kiekis:', maxCounter);



console.log(' ');
console.log('---- ex6----');
// Visus masyvo elementus, kurie yra lygūs 0, pakeisti į 
// tų elementų indeksų (vietų, numerių) reikšmes;
let ar6 = [];
let pirstukas = 0;

for (let i = 0; i < rand(10, 30); i++) {
    let kint6 = rand(0, 5);
    ar6.push(kint6);// galima parasyti ar6.push(rand(10, 30));
    for (let i = 0; i < ar6.length; i++) {
        if (ar6[i] == 0) {
            pirstukas++;
            ar6[i] = i;
        }
    }
}
console.log('masyvas:', ar6);
console.log('0 yra:', pirstukas);



console.log(' ');
console.log('---- ex7 budas1----');
// Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, 
// atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
let ar7 = [];
let ar7Ilgis = rand(10, 30);

for (let i = 0; i < ar7Ilgis; i++) {
    let kint7 = rand(5, 100);
    ar7.push(kint7);
}
if (ar7.length < 30) {
    for (i = 0; i < 30 - ar7Ilgis; i++) {
        let kint71 = rand(0, 10);
        ar7.push(kint71);
    }
}
console.log('random ilgis', ar7Ilgis);
console.log('masyvas:', ar7);

console.log('---- ex7 budas2----');
let ar71 = [];
let ar71Ilgis = rand(10, 30);

for (let i = 0; i < ar71Ilgis; i++) {
    let kint71 = rand(5, 100);
    ar71.push(kint71);
}
while (ar71.length < 30) {
    ar71.push(rand(0, 10));
}
console.log('random ilgis', ar71Ilgis);
console.log('masyvas:', ar71);


console.log(' ');
console.log('---- ex8----');
// Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar 
// du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti 
// reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes 
// nei 2 (popierinius pinigus);
let pinigine = [];
let monetos = [];
let banknotai = [];
let pinigineIlgis = rand(10, 30);

for (let i = 0; i < pinigineIlgis; i++) {
    let kint8 = rand(0, 10);
    pinigine.push(kint8);
    if (pinigine[i] <= 2) {
        monetos.push(pinigine[i]);
    } else {
        banknotai.push(pinigine[i]);

    }
}
console.log('Pinigine:', pinigine.slice());
console.log('Monetu skyrius <= 2:', monetos.slice());
console.log('Banknotu skyrius > 2:', banknotai.slice());


console.log(' ');
console.log('---- ex9 budas1----');
// Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų 
// elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio 
// su monetom, o antras elementas masyvas iš 8 uždavinio su 
// popieriniais pinigais;
let pinigine91 = [monetos, banknotai];
console.log('pinigine su 2 skyriais', pinigine91.slice());

console.log('---- ex9 budas2----');
let pinigine92 = [];
pinigine92.push(monetos);
pinigine92.push(banknotai);
console.log('pinigine', pinigine92.slice());


console.log(' ');
console.log('---- ex10----');
//Į 9 uždavinio masyvą, piniginę su dviem skyreliais, 
// pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 
// 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 
// 'Mano RIMI'];
let korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
let pinigine10 = [monetos, banknotai, korteles];
console.log('Pinigine:', pinigine10.slice());


console.log(' ');
console.log('---- ex11----');
//Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
let korteles11 = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
let pinigine11ex = [monetos, banknotai, korteles11];
console.log('Pinigine:', pinigine11ex);
console.log('Korteles abeceles tvarka:', korteles11.sort());



console.log(' ');
console.log('---- ex12----');
/* Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' 
(su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir 
rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) 
pasidarytų lygus 20; */
let korteles12 = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
let pinigine12 = [monetos, banknotai, korteles12];
let papildomosKorteles;
while (korteles12.length < 20) {
    papildomosKorteles = rand(0, 1);
    if (rand(0, 1)) { //0,1 false,true;
        korteles12.push('Visa');
    } else {
        korteles12.push('MasterCard');
    }
}
console.log('Papildytas korteliu skyrelis', korteles12);



console.log(' ');
console.log('---- ex13----');
// Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
let korteles13 = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
let pinigine13 = [monetos, banknotai, korteles13];
let papildomosKorteles13;
let counterVisa = 0;
let counterMasterCard = 0;
while (korteles13.length < 20) {
    papildomosKorteles13 = rand(0, 1);
    if (rand(0, 1)) { //0,1 false,true;
        korteles13.push('Visa');
        counterVisa++;
    } else {
        korteles13.push('MasterCard');
        counterMasterCard++;
    }
}
console.log('Papildytas korteliu skyrelis', korteles13);
console.log('counterVisa', counterVisa);
console.log('counterMasterCard', counterMasterCard);



console.log(' ');
console.log('---- ex14----');
/* Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį 
įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai
 su rand funkcija nuo 1000000000 iki 9999999999;*/
let loterijosBilietai = [];
let pinigine14 = [monetos, banknotai, korteles13, loterijosBilietai];
let bilietai;
while (loterijosBilietai.length < 10) {
    bilietai = rand(1000000000, 9999999999);
    loterijosBilietai.push(bilietai);
}
console.log('Pinigine:', pinigine14.slice());
console.log('Loterijos bilietų skyrelis', loterijosBilietai);


console.log(' ');
console.log('---- ex15----');
// Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
console.log('Max-min surusiuoti loterijos bilietai:', loterijosBilietai.sort(function (a, b) { return b - a }));


console.log(' ');
console.log('---- ex16----');
/* Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom
 ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, 
    kol įdėta suma bus lygi 500); */
let pinigine16 = [monetos, banknotai, korteles13, loterijosBilietai];
console.log('Pinigine:', pinigine16.slice());
let banknotaiSmulkus;
let banknotaiSmulkusSuma = 0;
while (banknotaiSmulkusSuma < 500) {
    banknotaiSmulkus = rand(3, 10);
    banknotaiSmulkusSuma += banknotaiSmulkus;
    // if (banknotaiSmulkusSuma > 500) {
    //     banknotaiSmulkus = 500 - 
    // }
}
console.log('Smulkus banknotai:', banknotaiSmulkus);
console.log('Smulkių banknotų suma:', banknotaiSmulkusSuma);


console.log(' ');
console.log('---- ex17----');
// Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu 
// numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
console.log('loterijosBilietai', loterijosBilietai);
let counter = 0;
for (let i = 0; i < loterijosBilietai.length; i++) {
    if (loterijosBilietai[i] % 777 == 0) {
        console.log('Laimėjo bilietas Numeriu:', bilietai);
        counter++;
    } else {
    }
}
console.log('Laimigų bilietų buvo:', counter);



console.log(' ');
console.log('---- ex18----');
/*  Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė',
'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip,
kad pirma eitų trumpiausi žodžiai; */
let nuotraukos = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];
let pinigine18 = [monetos, banknotai, korteles13, loterijosBilietai, nuotraukos];
nuotraukos.sort(function (a, b) {
    return a.length - b.length;
})
console.log(nuotraukos);