

console.log('------ex1------');
// Reikia sukurti objektą, kuriame yra savybė name. 
// Ir reikia sukurti metodą setName(vardas) kuris į 
// tą savybę įrašytų vardą.
// ne setName o duotiVarda(vardas)

// 2. Parašyti metodą koksVardas() kuris su console.log atspausdintų duotą vardą
// 3. html'e nusipaišyti mygtuką. Tam mygtukui priskirti click eventą kurį paspaudus yra iškviečiamas koksVardas() metodas

let vardas = {
    savybe1: 'name',
    savybe2: 'Duotas vardas',
    duotiVarda: function (vardas) {
        this.savybe = vardas
    },
    koksVardas: function () {
        console.log(this.savybe)
    }
};

for (const metodas in vardas) {
    if (typeof vardas[metodas] == 'function') {
        vardas[metodas]();
    }
};

vardas.duotiVarda('Jonas');

const spaustiButton = document.querySelector('button');
console.log(spaustiButton);

spaustiButton.addEventListener('click', () => {
    vardas.koksVardas();
});


const vardinis = {
    name: null,
    setName: function (name) {
        this.name = name;
    },
    getName: function () {
        console.log(this.name); //parasius tik this, gautume button konteksta
    }
}

vardinis.setName('Anatolija');

const getName = vardinis.getName.bind(vardinis);
const duok = vardinis.getName.bind(vardinis);

document.querySelector('button').addEventListener('click', duok);

