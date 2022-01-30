/* Jei metodas nestatinis tai this rodo i konkretu objekta - Kibiras1
jei statinis, tai this rodo i klase, o ne i objekta.
jei norime pasiekti objekta metode, tai galima panaudoti klases varda
naudojame this.constructor.
this.constructore.name rasome kai norime suzinoti klases varda.
kad butu panaudotas construktoriuje sukurtas kodas, reikia sukurti new objekta.
visi nauji objekta sita koda turi vienoda savyje. visas kodas is klases perkopijuojamas i
objekta ir tada vykdomas.
static sukurto kodo objekte nera.
statini koda galime naudoti tiesiai klaseje.
objektu is klases galima prigaminti belekiek. o klase - viena.
static visiAkmenys visame kode visiAkmenys bus vienintelis kintamasis.
statine savybe visiAkmenys liks viena vienintele visame kode.
kuriant objektus kodas yra perkopijuojamas ir statine savybe 
skelbiant klases varda Kibiras1 galime panaudoti.... arba this.constructor
Kibiras1 === this.constructor
constructoriuje this reiskia nuoroda i objekta.
static this === klase
i klase galime kreiptis tiesiogiai
*/



console.log('------ex7 - Kibiras1------');
// 22 paskaitoje Yra sukurtas Kibiras1.
/*7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) 
sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), 
kuris rodytų bendrą visuose kibiruose pririnktų 
akmenų kiekį (visuose sukurtuose Kibiras objektuose. 
Skaičiuoti akmenim, kurie buvo surinkti visuose 
objektuose, sukurkite statini metodą 
bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų arba 
atimtų keleivius iš statinės savybės visiAkmenys 
(kurioje yra įrašytas ir saugomas bendras akmenų skaičius. 
Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),
 pridetiDaugAkmenu(kiekis).*/

class Kibiras1 {
    static visiAkmenys = 0;
    static akmenuSkaiciusVisuoseKibiruose() { //akmenu sk.atvaizdavimas
        console.log('Visuose kibiruose yra akmenų:', this.visiAkmenys);
    }
    static bendrasAkmenuSkaicius(akmenuSkaicius) { //akmenu sk. keitimas
        this.visiAkmenys += akmenuSkaicius;
    }
    //this === klase
    // ---------------------------------
    //this === objektas
    //this.constructor === Kibiras1
    //this.constructor ===> Klase

    constructor() {
        this.akmenuKiekis = 0; //akmenuKiekis yra kintamasis
    }
    prideti1Akmeni() {
        this.akmenuKiekis++; //konkretaus kibiro (objekto) skaiciuokle
        this.constructor.bendrasAkmenuSkaicius(1); //bendra static skaiciuokle
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        this.constructor.bendrasAkmenuSkaicius(kiekis);
        // this.kiekPririnktaAkmenu(); //atspuasdina po kiekvieno idejimo
    }
    kiekPririnktaAkmenu() {
        console.log('Kibire akmenų:', this.akmenuKiekis);
    }
};

const viedras55 = new Kibiras1();
const viedras66 = new Kibiras1();
const viedras77 = new Kibiras1();

console.log(viedras55);

viedras55.prideti1Akmeni();
viedras55.pridetiDaugAkmenu(16);
viedras55.kiekPririnktaAkmenu();

viedras66.prideti1Akmeni();
viedras66.pridetiDaugAkmenu(7);
viedras66.kiekPririnktaAkmenu();

viedras77.prideti1Akmeni();
viedras77.pridetiDaugAkmenu(13);
viedras77.kiekPririnktaAkmenu();

Kibiras1.akmenuSkaiciusVisuoseKibiruose();





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
console.log('------ex4-troleibusas------');
/*4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris 
rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių 
skaičiaus skaičiavimui sukurkite statinį metodą 
bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius
 iš statinės savybės visiKeleiviai, kurioje yra įrašytas bendras keleivių 
 skaičius. Taip pat modifikuokite metodus ilipa(keleiviuSkaicius) 
 ir islipa(keleiviuSkaicius).*/
//jei filede neduota reiksme, ja reikes priskirti konstruktoriuje
class Troleibusas {
    keleiviuSkaicius = 0; //fieldas vietoj contructoriuje this.keleiviuSkaicius = 0;
    static visiKeleiviai = 0;
    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius;
    }

    // static bendrasKeleiviuSkaiciusVisuoseTroleibusuose = 0;
    // static keleiviuSkaiciusVisuoseTroleibusuose() {
    //     console.log('Visuose troleibusuose yra keleiviu:', this.bendrasKeleiviuSkaiciusVisuoseTroleibusuose);
    // }

    // constructor() {
    //     // this.keleiviuSkaicius = 0; perkelta i fielda
    // }
    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius)
    }
    islipa(keleiviuSkaicius) {
        if (this.keleiviuSkaicius < keleiviuSkaicius) {
            keleiviuSkaicius = this.keleiviuSkaicius;
        }
        this.keleiviuSkaicius -= keleiviuSkaicius;
    }
    vaziuoja(keleiviuSkaicius) {
        console.log('Troleibuse važiuoja:', this.keleiviuSkaicius, 'žmones');
        this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }
};

const troleibusas1 = new Troleibusas();
troleibusas1.ilipa(10);
troleibusas1.islipa(5);
troleibusas1.vaziuoja();

const troleibusas2 = new Troleibusas();
troleibusas2.ilipa(2);
troleibusas2.islipa(1);
troleibusas2.vaziuoja();

const troleibusas3 = new Troleibusas();
troleibusas3.ilipa(8);
troleibusas3.islipa(6);
troleibusas3.vaziuoja();

Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();

// destytojo. pas mane kazkas blogai gavosi
// class Troleibusas {

//     keleiviuSkaicius = 0; // Fieldas, vietoj konstruktoriaus
//     f1;
//     f2;
//     static visiKeleiviai = 0;

//     static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
//         this.visiKeleiviai += keleiviuSkaicius;
//     }

//     static keleiviuSkaiciusVisuoseTroleibusuose() {
//         console.log(`Visais Trūlai važiuoja: ${this.visiKeleiviai}`);
//     }

//     constructor(sk = 5) {
//         this.f1 = sk;
//         // perkelta i fielda
//     }

//     ilipa(keleiviuSkaicius) {
//         this.keleiviuSkaicius += keleiviuSkaicius;
//         this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
//     }

//     islipa(keleiviuSkaicius) {
//         if (this.keleiviuSkaicius < keleiviuSkaicius) {
//             keleiviuSkaicius = this.keleiviuSkaicius;
//         }
//         this.keleiviuSkaicius -= keleiviuSkaicius;
//         this.constructor.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
//     }

//     vaziuoja() {
//         console.log(`Trūlu važiuoja: ${this.keleiviuSkaicius}`);
//     }

// }

// const nr4 = new Troleibusas();
// const nr10 = new Troleibusas();


// nr4.ilipa(5);
// nr4.islipa(2);
// nr4.vaziuoja();

// console.log('KS:', nr4.keleiviuSkaicius);

// nr10.ilipa(1);
// nr10.islipa(28);
// nr10.vaziuoja();
// Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();






// 5. Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.
// 6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.
// 8. Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti($kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
// 9. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai konstriktoriuje yra priskiriama reikšmė 500. Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).

console.log(' ');
console.log('----Televizorių gamyba-pavyzdys----');
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


