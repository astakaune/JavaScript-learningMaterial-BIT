
console.log('-----1ex-----');
// 10 divų, o juose "Hello"
// kas 3 diva nuspalvinti zaliai
// console.log(document);
let newDIV;
let labasVakaras;
let container;
for (let i = 0; i < 10; i++) {
    newDIV = document.createElement("div");
    labasVakaras = document.createTextNode('Labas vakaras');
    newDIV.appendChild(labasVakaras);
    container = document.querySelector(".container");
    container.appendChild(newDIV);
    if (i % 3 === 0) {
        newDIV.style.color = 'Green';
        newDIV.style.fontSize = '50px';
    }
}
console.log(newDIV);
container.style.backgroundColor = 'Yellow';
container.style.border = '5px solid red';
container.style.padding = '25px 50px';
container.style.margin = '50px';
container.style.height = '50%';
container.style.width = '50%';



console.log('-----2ex-----');
// nusplavinti kas trecia htmle sukurta <ul> 

// let lis = document.querySelector("li");
// console.log(lis); // suranda pati pirma <li>;

let lis1 = document.querySelectorAll("li"); // suranda visus <li>;
for (let i = 0; i < lis1.length; i++) {
    if (i % 3 === 0) {
        lis1[i].style.color = 'red';
    }  
}
console.log(lis1); 

