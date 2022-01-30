
console.log('------------');

const obj1 = {};
console.log(obj1);

const obj2 = {
    savybe1: 'zaluma',
    savybe2: 'geltonuma',
    savybe3: 42,
    savybe4: [1, 5, 6],
    metodas1: function () {
        console.log('as metodas1')
    },
    metodas2: function () {
        console.log('as metodas2')
    }
};
console.log(obj2);
// viename kintamajame galima saugoti kiek norime stringu
// ar skaiciu, masyva, funkcija

for (const savybe in obj2) {
    console.log(savybe); //atspausdiname pacia savybe
    console.log(obj2[savybe]);
    console.log(savybe, obj2[savybe]);
    console.log(typeof obj2[savybe]);
}
console.log(obj2.savybe2); //atspausdiname savybes reiksme


console.log(' ');
console.log('------ex1------');
//Parašytumėte ciklą, kuris 
// paleistų visas objekto funkcijas 
// iš eilės
const obj3 = {
    metodas1: function () {
        console.log('as metodas1')
    },
    metodas2: function () {
        console.log('as metodas2')
    },
    metodas3: function () {
        console.log('as metodas3')
    }
};

for (const metodas in obj3) {
    obj3[metodas](); //nereikia console.log pats metodas consolina
}



console.log(' ');
console.log('------ex2------');
// Tas pat, kas pirma, tik su atkomentuotom savybėm
const obj4 = {
    savybe1: 'zaluma',
    savybe2: 'geltonuma',
    savybe3: 42,
    savybe4: [1, 5, 6],
    metodas1: function () {
        console.log('as metodas1')
    },
    metodas2: function () {
        console.log('as metodas2')
    },
    metodas3: function () {
        console.log('as metodas3')
    }
};

for (const metodas in obj4) {
    if (typeof obj4[metodas] == 'function') {
        obj4[metodas]();
    } else {
        // console.log(obj4[metodas]); //galima prideti
    }
}


console.log(' ');
console.log('------ex3 su this------');
//Pakoreguoti objekto metodus taip, kad pirmas metodas
// atspausdintų savybę 2, antras metodas- savybę 3 ir 
// trečias metodas - savybę 1

const obj5 = {
    savybe1: 'zaluma',
    savybe2: 'geltonuma',
    savybe3: 42,
    savybe4: [1, 5, 6],
    metodas1: function () {
        console.log(this.savybe2) //this iraseme vietoje obj5
    },
    metodas2: function () {
        console.log(this.savybe3)
    },
    metodas3: function () {
        console.log(this.savybe1)
    }
};

for (const metodas in obj5) {
    if (typeof obj5[metodas] == 'function') {
        obj5[metodas]();
    }
}


console.log(' ');
console.log('------this------');
//this rasome objekto viduje vietoje objekto
let object1 = {
    savybe: 'Labas',
    metodas: function () { console.log(this.savybe) }
}
let object2 = object1;

object1 = 1;

// object1.metodas();
object2.metodas();

console.log(' ');
console.log('------ex1------');
// Sukurti objekta kalkuliatorių. Objektas turi 
// turėti du metodus suma ir skirtumas ir vieną savybę 
// rezultatas, kuriai būtų priskiriama funkcijų sumavimo 
// arba skirtumavimo rezultatas.
// pradžioje rezultatas yra null
const kalk = {
    suma: function suma(a, b) {
        this.rezultatas = a + b;
    },
    skirtumas: function skirtumas(a, b) {
        this.rezultatas = a - b;
    },
    rezultatas: null
};
kalk.suma(5, 5);
console.log('rezultatas:', kalk.rezultatas);
kalk.skirtumas(9, 5);
console.log('rezultatas:', kalk.rezultatas);


console.log(' ');
console.log('------ex2------');
// pridėti savybę istorija. Savybė yra 
// masyvas ir jame turi kauptis visi rezultatai
const kalk2 = {
    suma: function suma(a, b) {
        this.rezultatas = a + b;
        this.istorija.push(this.rezultatas);
    },
    skirtumas: function skirtumas(a, b) {
        this.rezultatas = a - b;
        this.istorija.push(this.rezultatas);
    },
    rezultatas: null,
    istorija: []
};
kalk2.suma(5, 5);
console.log('rezultatas:', kalk2.rezultatas);
kalk2.skirtumas(9, 5);
console.log('rezultatas:', kalk2.rezultatas);
console.log('rezultatu istorija', kalk2.istorija);



console.log(' ');
console.log('------ex3------');
// padaryti, kad atsakyma rodytu taip:
// kalk3.suma(10, 15).rezultatas
const kalk3 = {
    suma: function suma(a, b) {
        this.rezultatas = a + b;
        this.istorija.push(this.rezultatas);
        return this;
    },
    skirtumas: function skirtumas(a, b) {
        this.rezultatas = a - b;
        this.istorija.push(this.rezultatas);
        return this;
    },
    rezultatas: null,
    istorija: []
};
kalk3.suma(5, 5).suma(1, 5).suma(6, 5).rezultatas;
kalk3.skirtumas(9, 5).suma(6, 2).rezultatas;
console.log('rezultatas:', kalk3.rezultatas);
console.log('rezultatu istorija', kalk3.istorija);



console.log(' ');
console.log('------ex4------');
//Parašyti metodą, kuris ištrintų istoriją
//3 skirtingi budai clear1, clear2 ir clear3
const kalk4 = {
    suma: function suma(a, b) {
        this.rezultatas = a + b;
        this.istorija.push(this.rezultatas);
        return this;
    },
    skirtumas: function skirtumas(a, b) {
        this.rezultatas = a - b;
        this.istorija.push(this.rezultatas);
        return this;
    },
    clear1: function() { 
        console.log(this)
     },
    clear2: () => console.log(this),
    clear3: function() { 
        this.istorija = [] 
    },
    rezultatas: null,
    istorija: []
};
kalk4.suma(5, 5).suma(1, 5).suma(6, 5).rezultatas;
kalk4.skirtumas(9, 5).suma(6, 2).rezultatas;
console.log('rezultatu istorija', kalk4.istorija);

kalk4.clear1();
kalk4.clear2();
kalk4.clear3();

console.log('istrinta rezultatu istorija:', kalk4.istorija);


console.log(' ');
console.log('------this------');

const kalk5 = {
    suma: function suma(a, b) {
        this.rezultatas = a + b;
        this.istorija.push(this.rezultatas);
        return this;
    },
    skirtumas: function skirtumas(a, b) {
        this.rezultatas = a - b;
        this.istorija.push(this.rezultatas);
        return this;
    },
    clear1: function() { 
        console.log(this)
     },
    clear2: () => console.log(this),
    clear3: function() { 
        this.istorija = [] 
    },
    rezultatas: null,
    istorija: [],
    t: this
};
// funkcija yra savybe ir pati funkcija sukuria this
// tokiame kontekste, kuriame ji yra paleista
console.log(kalk5.t);

function jonas() {
    console.log(this);
}

jonas();