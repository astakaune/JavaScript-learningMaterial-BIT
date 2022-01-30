console.log('------ex1 - Kibiras1------');
// 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
// Parašyti šiai savybei metodus prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą 
// išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti kibiro objektą ir 
// pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.
class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0; //akmenuKiekis yra kintamasis
    }
    prideti1Akmeni() {
        this.akmenuKiekis++;
        this.kiekPririnktaAkmenu(); //atspuasdina po kiekvieno idejimo
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        this.kiekPririnktaAkmenu(); //atspuasdina po kiekvieno idejimo
    }
    kiekPririnktaAkmenu() {
        console.log('Kibire akmenų:', this.akmenuKiekis);
    }
};

const viedras55 = new Kibiras1(); //sukurem objekta

// viedras55.kiekPririnktaAkmenu(); //atspausdina kiek ideta, kai liepiame
viedras55.prideti1Akmeni();
// viedras55.kiekPririnktaAkmenu(); //atspausdina kiek ideta, kai liepiame
viedras55.prideti1Akmeni();
viedras55.prideti1Akmeni();
viedras55.prideti1Akmeni();
// viedras55.kiekPririnktaAkmenu(); //atspausdina kiek ideta, kai liepiame
viedras55.pridetiDaugAkmenu(10);
viedras55.prideti1Akmeni();
viedras55.prideti1Akmeni();
viedras55.pridetiDaugAkmenu(10);
// viedras55.kiekPririnktaAkmenu(); //atspausdina kiek ideta, kai liepiame



console.log(' ');
console.log('------ex2 - piniginė------');
/* 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes 
popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), 
kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, 
tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę 
popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir 
pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės
 monetos egzistuoja realiame pasaulyje.*/

class Pinigine {
    constructor() {
        this.banknotai = 0;
        this.monetos = 0;
    }
    idetiPinigu(kiekis) {
        if (kiekis < 2) {
            this.monetos += kiekis;
        } else {
            this.banknotai += kiekis;
        }
    }
    skaiciuoti() {
        console.log('Piniginėje yra:', this.banknotai + this.monetos, 'Eur');
        console.log('Banknotais:', this.banknotai, 'Eur');
        console.log('Monetomis:', this.monetos, 'Eur');
    }
};
const pinigine = new Pinigine();
pinigine.idetiPinigu(666);
pinigine.idetiPinigu(5);
pinigine.idetiPinigu(1.9);
pinigine.skaiciuoti();



console.log(' ');
console.log('------ex3-troleibusas------');
/* 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti 
savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: 
ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip 
pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu 
važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad 
troleibusu važiuoti neigiamas keleivių skaičius negali. */

class Troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0;
    }
    ilipa(kiekis1) {
        this.keleiviuSkaicius += kiekis1;
    }
    islipa(kiekis2) {
        if (this.keleiviuSkaicius < kiekis2) {
            this.keleiviuSkaicius = 0;
        } else {
            this.keleiviuSkaicius = this.keleiviuSkaicius - kiekis2;
        }
    }
    vaziuoja() {
        console.log('Troleibuse važiuoja:', this.keleiviuSkaicius, 'žmones');
    }
};

const troleibusas = new Troleibusas();
troleibusas.ilipa(10);
troleibusas.islipa(5);
troleibusas.vaziuoja();












// 4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai, kurioje yra įrašytas bendras keleivių skaičius. Taip pat modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
// 5. Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.
// 6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.
// 7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose. Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius. Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).
// 8. Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti($kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
// 9. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai konstriktoriuje yra priskiriama reikšmė 500. Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).

console.log(' ');
console.log('----Televizorių gamyba----');
// pagaminti pagal schema televizorių ir parduoti pirkejams

class TV {
    static programa = ['LRT', 'TV3', 'LNK', 'BBC', 'NBC']; //bendra visiems busimiems objektams
    // TV priklauso klasei. statinis dalykas visai klasei bendras
    // Po objekto sukurimo construktoriumi, galime koreguoti visiems bendrai savybes ar objektus naudojant statini elementa
    // statiniame metode this nusako ne objekta, o klase
    static naujaPrograma(pr) {
        this.programa = pr; //this rodo i klase
    }

    constructor() {
        this.savininkas = 'Parduotuvė';
        this.kanalas = null; //neijungtas TV
    }
    tvPirkimas(vardas) {
        this.savininkas = vardas; //this rodo i objekta
    }
    perjungtiKanala(nr) {
        this.kanalas = nr;
    }
    infoApieTv() {
        console.log(`
    Savinikas: ${this.savininkas} 
    Kanalas: ${this.kanalas}
    Programa: ${TV.programa[this.kanalas]}
    `);
    }
};

const tv1 = new TV();
const tv2 = new TV();
const tv3 = new TV();

tv1.programa = ['MTV', 'TNT', 'TV6', 'SAT1'];
tv2.programa = ['MTV', 'TNT', 'TV6', 'SAT1'];
tv3.programa = ['MTV', 'TNT', 'TV6', 'SAT1'];


tv2.tvPirkimas('Antanas');
tv3.tvPirkimas('Birute');

tv2.perjungtiKanala(2);
tv3.perjungtiKanala(3);

tv1.infoApieTv();
tv2.infoApieTv();
tv3.infoApieTv();

TV.programa = ['Muzika', 'Sportas', 'Kinas', 'Info'];


