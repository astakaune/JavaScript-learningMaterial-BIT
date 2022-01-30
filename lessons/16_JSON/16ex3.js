console.log('----1ex------');
// 1) Atskiri elementai
console.log('----1a------');
// a. Tamsiai žaliai nuspalvinti h1 tagą;
document.querySelector("h1").style.color = 'green';

console.log('----1b------');
// b. Tagui i pridėti klasę small;
const tagI = document.querySelector("i");
tagI.classList.add('small');
//kadangi cia kalba eina tik apie klases, todel nededame tasko

console.log('----1c------');
// c. Iš tago h1 pašalinti klasę main;
const heading = document.querySelector('h1');
heading.classList.remove('main');

console.log('----1d------');

// d. Tik tam h2 tagui, kuris iškart eina po h1 tagui 
// pridėti klasę first ir pašalinti klasę main;
const heading1 = document.querySelector('h1 + h2');
heading1.classList.add('first');
heading1.classList.remove('main');

console.log('----1e------');
// e. Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį 
// iki 10px ir nudažyti pilkai
const span = document.querySelector('h2 > span');
span.style.fontSize = '10px';
span.style.color = 'grey';

console.log('----2ex------');
// 2) Elemetų grupės (nodeList) skaičiavimus išvest į consolę
console.log('----2a------');
// a. Suskaičiuoti kiek yra h2 tagų;
const allH2 = document.querySelectorAll('h2');
console.log(allH2.length);

console.log('----2b------');
// b. Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
let counter = 0;
for (let i = 0; i < allH2.length; i++) {
    if (!allH2[i].classList.contains('first')) {
        counter++;
    }
}
console.log(counter);

console.log('----2c------');
// c. Visus h2 tagus nuspalvinti šviesiai mėlynai
allH2.forEach(i => i.style.color = 'lightskyblue');

console.log('----2d------');
// d. Tagu kurie yra div su klase prices viduje esantiems h2 tagams pridėti klasę price-tag;
const div = document.querySelectorAll('div .prices > h2');
div.forEach(i => i.classList.add('price-tag'));

console.log('----2e------');
// e. Pabraukti visus tagus su klase new;
const tagNew = document.querySelectorAll('.new');
tagNew.forEach(i => i.style.textDecoration = 'underline');

console.log('----2f------');
// f. Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų 
// (jos yra ul tagai);
const gyvunai = document.querySelectorAll('ul');
console.log(gyvunai.length);


console.log('----2g------');
// g. Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą 
// viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
gyvunai.forEach(i => {
    i.style.border = '5px dotted red';
    i.style.padding = '15px 50px';
});

console.log('----2h------');
// h. Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
const gyvunaiNew = document.querySelectorAll('ul .new');
console.log(gyvunaiNew.length);

console.log('----2i------');
// i. Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje 
// kategorijoje;
const atsakymas = {};
document.querySelectorAll('ul').forEach(ul =>
    atsakymas[ul.id] = ul.querySelectorAll('.new').length);
console.log(atsakymas);


console.log('----3ex------');
// 3) Elementų events
console.log('----3a------');
// a. Padaryti tai ką liepia mygtukai Header1 sekcijoje:
// nudazyti h1 zaliai
const click = document.querySelector('#h1-color');
click.addEventListener('click', () => heading.style.backgroundColor = 'lightgreen');
//pakeisti h1 fonta i 10px
const click2 = document.querySelector('#h1-font');
click2.addEventListener('click', () => heading.style.fontSize = '100px');


console.log('----3b------');
// b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
const click3b = document.querySelector('i');
click3b.addEventListener('click', () => {
    tagI.style.fontSize = '20px';
    tagI.style.fontWeight = 'bold';
    tagI.style.color = 'orange';
});


console.log('----3c------');
// c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į 
// pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
const click3c = document.querySelector('.prices');
click3c.addEventListener('click', () => {
    if (click3c.style.backgroundColor == 'white') {
        click3c.style.backgroundColor = 'grey';
    } else {
        click3c.style.backgroundColor = 'white';
    }
});


console.log('----3d------');
// d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta 
// css savybė color -orange;
const click3d = document.querySelector('#contacts');
click3d.addEventListener('click', () => {
    click3d.style.color = 'orange';
    // click3d.stopPropagation();
});


console.log('----3e------');
// e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, 
// tagui su id contacts būtų pridėta css savybė fontSize = 20px;
const click5 = document.querySelector('#contacts > u');
const contact = document.querySelector('#contacts');
click5.addEventListener('click', (e) => {
    e.stopPropagation();
    contact.style.fontSize = '30px';
    contact.style.backgroundColor = 'yellow';
});


console.log('----3f------');
// f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, 
// pridėtos tage su id contacts savybės būtų panaikintos
//  https://stackoverflow.com/questions/18691655/remove-style-on-element
const click6 = document.querySelector('#contacts > b');
click6.addEventListener('click', (e) => {
    e.stopPropagation();
    contact.style = 'null';
});


console.log('----3g------');
// g. Padaryti tai ką liepia mygtukai Header2 sekcijoje:
// grazinti spalva
const click3 = document.querySelector('#h1-color-back');
click3.addEventListener('click', () => heading.style.backgroundColor = null);


//grazinti fonto dydi
const click4 = document.querySelector('#h1-font-back');
click4.addEventListener('click', () => heading.style.fontSize = null); //null -stiliaus panaikinimas



console.log('----4ex------');
// 4) Elementų grupių events
console.log('----4a------');
// a. Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai 
// https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
const click4a = document.querySelectorAll('.new').forEach(click4a => {
    click4a.addEventListener('dblclick', () => {
        click4a.style.backgroundColor = 'red';
    })
});


console.log('----4b------');
// b. Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. 
// “PATINKA” tas neturi galioti.
const click4b = document.querySelectorAll('li:not(:first-child)').forEach(a => {
    // ('li:not(.like-button'))
    a.addEventListener('click', () => {
        a.style.fontSize = '130%';
    })
});


console.log('----4c------');
// c. Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;
const click4c = document.querySelectorAll('.like-button').forEach(a => {
    a.addEventListener('click', () => {
        a.closest('ul').classList.add('like');
    })
});



console.log('----5ex------');
// 5) Dinaminis elementų kūrimas
console.log('----5a------');
// a. Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
let h2Senjorams = document.createElement("h2");
let h2Tekstas = document.createTextNode('Senjorai tik: 1.99 eur');
h2Senjorams.appendChild(h2Tekstas);
let tevinisElementas = document.querySelector("div.prices");
tevinisElementas.appendChild(h2Senjorams);
console.log(h2Senjorams);
h2Senjorams.style.color = 'blue';
h2Senjorams.style.textDecoration = 'underline';


console.log('----5b------');
// b. Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” 
// Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo 
// paklikinus jis pasidarytų žalias;
let h2SenjoruGrupei = document.createElement("h2");
let h2Tekstas2 = document.createTextNode('Senjorų grupė iki 10: tik 5.99 eur');
h2SenjoruGrupei.appendChild(h2Tekstas2);
let tevinisElementas2 = document.querySelector("div.prices");
tevinisElementas2.appendChild(h2SenjoruGrupei);
console.log(h2SenjoruGrupei);
h2SenjoruGrupei.style.color = 'blue';
h2SenjoruGrupei.style.textDecoration = 'underline';
h2SenjoruGrupei.classList.add('new');
h2SenjoruGrupei.addEventListener('click', (e) => {
    e.stopPropagation();
    h2SenjoruGrupei.style.color = 'green';
});


console.log('----5c------');
// c. Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite 
// dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje 
// sekcijoje būtų nuimta klasė like
document.querySelectorAll('ul').forEach((ul) => {
    let newLi = document.createElement("li");
    let nepatinka = document.createTextNode("NEPATINKA");
    newLi.appendChild(nepatinka);
    ul.appendChild(newLi);
    ul.insertBefore(newLi, ul.querySelector('.like-button').nextSibling);
    newLi.addEventListener('click', () => {
        ul.classList.remove('like');
    })
  
});


console.log('----5d------');
// d. Dinamiškai su JS sukurkite naują mygtukų grupę 
// HEADER 3 naudojant analogišką html tagų struktūrą kaip 
// ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi,
//  “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. 
//  Mygtukai turi daryti tai kas ant jų parašyta
const html = `<legend>HEADER 3</legend>
<button id="h1-line">Pabraukti H1 tagą</button>
<button id="h1-line-off">Nepabraukti H1 tagą</button>`;

let fieldSet3 = document.createElement("fieldset");
let cont = document.querySelector("#contacts");
let body = document.querySelector("body");

body.insertBefore(fieldSet3, cont);
fieldSet3.innerHTML = html;

const pabrauktiH1 = document.querySelector('#h1-line');
pabrauktiH1.addEventListener('click', () => {
    heading.style.textDecoration = 'underline';
});

const nepabrauktiH1 = document.querySelector('#h1-line-off');
nepabrauktiH1.addEventListener('click', () => {
    heading.style.textDecoration = 'none';
});


