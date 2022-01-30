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
masyvas4.push(new Animal4('Lazy', 30, 'brown', false));
masyvas4.push(new Animal4('Donkey', 36, 'grey', false));
masyvas4.push(new Animal4('Rat', 25, 'darkGrey', false));
masyvas4.push(new Animal4('Cow', '100', 'blackWhite', true));



console.log(' ');
console.log('----------ex5----------');
// 5. Sukurkite createAnimalElement metodą, kuris sukuria naują
//  DIV elementą ir jį įdeda į DOM'ą (htmlą)
class Animal5 {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        console.log(this.specie);
    }
    createAnimalElement() {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
    }
};
const masyvas5 = [];
masyvas5.push(new Animal5('Lazy', 30, 'brown', false));
masyvas5.push(new Animal5('Donkey', 36, 'grey', false));
masyvas5.push(new Animal5('Rat', 25, 'darkGrey', false));
masyvas5.push(new Animal5('Cow', '100', 'blackWhite', true));



console.log(' ');
console.log('----------ex6/ex7----------');
// 6. Nuorodą į tą elementą užsaugokite naujai sukurtoje savybėje element
// 7. createAnimalElement įdėkite į konstruktorių ir paleiskite jame
class Animal6 {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        console.log(this.specie);
        this.createAnimal6Element();
    }
    createAnimal6Element() {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
    }
};
const masyvas6 = [];
masyvas6.push(new Animal6('Lazy', 30, 'brown', false));
masyvas6.push(new Animal6('Donkey', 36, 'grey', false));
masyvas6.push(new Animal6('Rat', 25, 'darkGrey', false));
masyvas6.push(new Animal6('Cow', '100', 'blackWhite', true));


console.log(' ');
console.log('----------ex8----------');
// 8. sukurti metodą animalHtml, kuriame sudėliojame 
// animalo apraš htmlą
class Animal8 {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        console.log(this.specie);
        this.createAnimal6Element();
    }
    createAnimal8Element() {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
    }
    createAnimal8Html() {
        const horn = this.horn ? 'Has horn' : 'No horn';
        const html = `
        <h1> ${this.specie}</h1>
        <span>Tail long: ${this.tailLong} cm</span>
        <span>Color: ${this.color}</span>
        <span>Has Horn? ${horn}</span>
        `;
    }
};
const masyvas8 = [];
masyvas8.push(new Animal8('Lazy', 30, 'brown', false));
masyvas8.push(new Animal8('Donkey', 36, 'grey', false));
masyvas8.push(new Animal8('Rat', 25, 'darkGrey', false));
masyvas8.push(new Animal8('Cow', '100', 'blackWhite', true));


console.log(' ');
console.log('----------ex9/ex10----------');
/*9. aprašą įdėti su innerHTML į sukurtą savybę element 
 div tagu
10. paleisti padarytą metodą konstruktoriuje*/
class Animal9 {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        console.log(this.specie);
        this.createAnimal9Element();
    }
    createAnimal9Element() {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
    }
    createAnimal9Html() {
        const horn = this.horn ? 'Has horn' : 'No horn';
        const html = `
        <h1> ${this.specie}</h1>
        <h3>Tail long: ${this.tailLong} cm</h3>
        <h3>Color: ${this.color}</h3>
        <h3>Has Horn? ${horn}</h3>
        `;
        this.element.innerHTML = html;
    }
};
const masyvas9 = [];
masyvas9.push(new Animal9('Lazy', 30, 'brown', false));
masyvas9.push(new Animal9('Donkey', 36, 'grey', false));
masyvas9.push(new Animal9('Rat', 25, 'darkGrey', false));
masyvas9.push(new Animal9('Cow', '100', 'blackWhite', true));



console.log(' ');
console.log('----------ex11----------');
// 11 htmle nusipaišyt formą su 4 inputais ir vienu 
// mygtuku. Type text, o prasmė 4 animalo savybės
class Animal11 {
    constructor(specie, tailLong, color, hasHorn) {
        this.specie = specie;
        this.tailLong = tailLong;
        this.color = color;
        this.hasHorn = hasHorn;
        console.log(this.specie);
        this.createAnimal11Element();
    }
    createAnimal11Element() {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
    }
    createAnimal11Html() {
        const horn = this.horn ? 'Has horn' : 'No horn';
        const html = `
        <h1> ${this.specie}</h1>
        <h3>Tail long: ${this.tailLong} cm</h3>
        <h3>Color: ${this.color}</h3>
        <h3>Has Horn? ${horn}</h3>
        `;
        this.element.innerHTML = html;
    }
};
const masyvas11 = [];
masyvas11.push(new Animal11('Lazy', 30, 'brown', false));
masyvas11.push(new Animal11('Donkey', 36, 'grey', false));
masyvas11.push(new Animal11('Rat', 25, 'darkGrey', false));
masyvas11.push(new Animal11('Cow', '100', 'blackWhite', true));