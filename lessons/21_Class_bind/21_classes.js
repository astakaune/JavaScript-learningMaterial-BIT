
console.log('------CLASS--bind----');
/* 
klase, prototipas, planas, modelis, pagal kuri galime 
daryti konkrecius objektus
pradedama rasyti is didziosios raides
*constructor yra funkcija-metodas. pasileidzia panaudojus zodeli 'new' 
ir sukuria viska, ko reikia. I ji dedam field'us.
klases viduje pasileidzia strict mode - sugrazina grieztas js taisykles
klaseje bind galima atlikti konstruktoriuje obj kurimo metu.
Jei metodo viduje naudoji this, pagal nutylejima geriau daryti arrow functioną
tada su this buna viskas gerai
pavyzdys su c yra naudojamas kai norime perduoti argumenta

*/
console.log(' ');
console.log('----------pavyzdys----------');
const vardinis = {
    name: null,
    setName: function (name) {
        this.name = name;
    },
    getName: function () {
        console.log(this);
    }
}

vardinis.setName('Anatolija');
// const duok = vardinis.getName.bind(vardinis);

const z2 = {
    vardas: null,
    setName: function (vardas) {
        this.vardas = vardas;
    },
    getName: function () {
        console.log(this.vardas); //parasius tik this, gautume button konteksta
    }
};
class Zmogus {
    constructor(taip, kitas, darKitas) {
        this.vardas = taip;
        // this.getName = this.getName.bind(this);
    }
    setName(vardas) {
        this.vardas = vardas;
    }
    getName = () => {
        console.log(this.vardas);
    }
}
const z1 = new Zmogus('Anatolija');
z1.setName('Anatolija');
z2.setName('Anatolija');
console.log(z1, z2);
const duok = z2.getName.bind(z2);
const c = 'La la ';
document.querySelector('button').
    addEventListener('click', z1.getName);
document.querySelector('button').
    addEventListener('click', duok);


console.log(' ');
console.log('----------ex1----------');
// Sukurti klasę Animal
class Animal {

}

console.log(' ');
console.log('----------ex2----------');
// 2. konstruktoriuje pridėti savybių: 
// specie, tailLong, color, hasHorn
class Animal2 {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
    }
}

console.log(' ');
console.log('----------ex3----------');
// 3. sukurti keturis žvėrių objektus ir 
// juos sudėti į vieną masyvą.
class Animal3 {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        console.log(this.specie);
    }
}
const masyvas3 = [];
masyvas3.push(new Animal3('Donkey', 36, 'grey', false));
masyvas3.push(new Animal3('Rat', 25, 'darkGrey', false));
masyvas3.push(new Animal3('Lazy', 30, 'brown', false));
masyvas3.push(new Animal3('Cow', '100', 'blackWhite', true));


console.log(' ');
console.log('----------ex4----------');
// 4. Į konstruktorių įdėkite console.log su animalo rūšimi
class Animal4 {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        console.log(this.specie);
    }
}
const masyvas4 = [];
masyvas4.push(new Animal3('Lazy', 30, 'brown', false));
masyvas4.push(new Animal3('Donkey', 36, 'grey', false));
masyvas4.push(new Animal3('Rat', 25, 'darkGrey', false));
masyvas4.push(new Animal3('Cow', '100', 'blackWhite', true));



console.log(' ');
console.log('----------ex5----------');
// 5. Sukurkite createAnimalElement metodą, kuris sukuria naują
//  DIV elementą ir jį įdeda į DOM'ą (htmlą)



// 6. Nuorodą į tą elementą užsaugokite naujai sukurtoje savybėje element


// 7. createAnimalElement įdėkite į konstruktorių ir paleiskite jame