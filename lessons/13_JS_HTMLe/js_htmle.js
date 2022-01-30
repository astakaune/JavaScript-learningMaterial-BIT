
console.log('----------');


console.log(document);

// 1. sukuriam elementa
let newH1 = document.createElement("h1");

//2. sukuriame text nodą
let LabasVakaras = document.createTextNode('Labas vakaras');

// 3. text elementa idedame i html elementa. 
// sis punktas gali buti ir paskutinis
newH1.appendChild(labasVakaras);

//4. surandame html'e tevini taga i kuri desime elementa
let container = document.querySelector(".container");

//5. i teva idedame sukurta elementa
container.appendChild(newH1);

console.log(newH1);



console.log('-------class add/remove-----');
//klases pridejimas  ir istrynimas
let h1 = document.querySelector(".old");
h1.classList.add('bla'); //be . nes cia class listas, o ne pati klase
h1.classList.remove('old');





