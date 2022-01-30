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
// a. Padaryti tai ką liepia mygtukai Header1 sekcijoje;
const click = document.querySelector('#h1-color');
click.addEventListener('click', () => heading.style.backgroundColor = 'lightgreen');

console.log('----3b------');
// b. Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
const click2 = document.querySelector('#h1-font');
click2.addEventListener('click', () => heading.style.fontSize = '100px');

console.log('----3c------');
// c. Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į 
// pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
const click3 = document.querySelector('#h1-color-back');
click3.addEventListener('click', () => heading.style.backgroundColor = null);

console.log('----3d------');
// d. Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color;
const click4 = document.querySelector('#h1-font-back');
click4.addEventListener('click', () => heading.style.fontSize = null); //null -stiliaus panaikinimas

console.log('----3e------');
// e. Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, 
// tagui su id contacts būtų pridėta css savybė fontSize = 20px;
const click5 = document.querySelector('div#contacts > u');
const contact = document.querySelector('#contacts');
click5.addEventListener('click', () => {
    contact.style.fontSize = '30px';
    contact.style.backgroundColor = 'pink';
});

console.log('----3f------');
// f. Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos
//  https://stackoverflow.com/questions/18691655/remove-style-on-element
const click6 = document.querySelector('div#contacts > b');
click6.addEventListener('click', () => contact.style = 'null');

console.log('----3g------');
// g. Padaryti tai ką liepia mygtukai Header2 sekcijoje;
// click3 = document.querySelector('#h1-color-back');
// click3.addEventListener('click', () => {
//     body.style.color = null;
//     body.style.backgroundColor = null;
// });