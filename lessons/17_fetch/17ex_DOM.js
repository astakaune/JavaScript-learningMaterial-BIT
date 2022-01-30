//textObject.value
//textObject.value = text;

console.log('---uzduotis1---');
// 1. Sukurti text tipo input elementą ir mygtuką. 
// Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log 
const ex1_input = document.querySelector('#ex1_input');
const ex1_button = document.querySelector('#ex1_button');
ex1_button.addEventListener('click', () => console.log(ex1_input.value));



console.log('---uzduotis2---');
// 2. Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, 
// “vakaras”. Pasikeitus reikšmėm select elemente, naują reikšmę 
// išvesti į console.log
const ex2_select = document.querySelector('#ex2_select');
ex2_select.addEventListener('change', () => console.log(ex2_select.value));


console.log('---uzduotis3---');
// 3. Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. 
// Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log
const ex3 = document.querySelectorAll('[name=labas]');
ex3.forEach(k => {
    k.addEventListener('change', () => {
        console.log(k.value);
    });
});


console.log('---uzduotis4---');
// 4. Sukurti vieną checkbox tipo elementą. Pažymėjus elementą išvesti i 
// console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”
const ex4 = document.querySelector('#ex4_checkbox');
ex4.addEventListener('change', () => {
    if (ex4.checked === true) {
        console.log('Pazymeta');
    }
    else if (ex4.checked === false) {
        console.log('Nepazymeta');
    }
});


console.log('---uzduotis5---');
// 5. Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, 
// “diena”, “vakaras”. Pasikeitus kažkuriai checkbox elemento 
// reikšmei (pažymint arba atžymint checkbox’ą), išvesti į 
// console.log visų pažymėtų checkbox’ų reikšmes.
const ex5 = document.querySelectorAll('.checkbox');
ex5.forEach(k => {
    k.addEventListener('change', () => {
        ex5.forEach(h => {
            if (h.checked) {
                console.log(h.value);
            }
        });
        console.log('---------------');
    });
})


console.log('---uzduotis6---');
// 6. Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato
// tekstą įkeliant į tą sukurtą elementą.
const ex6 = document.querySelector('#ex6');
ex1_button.addEventListener('click', () => {ex6.innerText = 'text'});
ex2_select.addEventListener('change', () => {ex6.innerText = ex2_select.value});
// ex3.addEventListener('change', () => {ex6.innerText = ex3[k].value});
// ex4.addEventListener('change', () => {ex6.innerText = 'text'});
// ex5.addEventListener('change', () => {ex6.innerText = ex5.value});

console.log('---uzduotis7---');
// 7. Pakartoti 1-5 uždavinius rezultatus atvaizduojant DOM’e 
// dinamiškai sukurtuose elementuose h3
// parosMetasRadio.forEach(k => {
//     k.addEventListener('change', () => {
//         let ex7 = document.createElement('h3');
//         document.body.appendChild(h3);
//         ex7.innerText = k.value;
//     });
// });
// atsiunte gediminas
// const radio = document.querySelectorAll('[name = fav]');

// radio.forEach(el => {
//     el.addEventListener('change', () => {
//         const skr = document.createElement('h3');//7 uzduotis
//         document.body.appendChild(skr);//7 uzduotis
//         console.log(el.value);
//         skr.innerText = (el.value);//7 uzduotis
//         uzd8.push(el.value)
       
//     })
// })

console.log('---uzduotis8---');
// 8. Pakartoti 1-5 uždavinius. Kiekvienam 
// uždaviniui sukurti naują tuščią masyvą (arba vieną 
// objektą su 5 masyvais viduje). Kiekvieną pasikeitimo
//  reikšmę įrašyti į masyvą kaip naują elementą 
//  (5 uždavinio atveju įrašyti masyvą su pažymėtom 
//     reikšmėm) ir į console.log išvesti tą masyvą.







// 9. Padaryti mygtuką “GO”, kurį paspaudus, naudojant masyvus, gautus 8 uždavinyje, dinamiškai, iš tų masyvų duomenų, būtų sukurta daug h3 tagų kaip tai buvo padaryta 7 uždavinyje (vienas įrašas masyve, atinka vieną naują h3 tagą).
// 10. Padaryti mygtuką “Reset”, kuris ištrintų duomenis iš visų masyvų.
// 11. Padaryti mygtuką “Clear”, kuris ištrintų visus h3 tagus iš DOM’o.
// 12. Padaryti mygtuką “GO JSON”, kurį paspaudus, 9 uždavinio masyvus būtų sudėti į sukurtą naują objektą. Tą objektą paversti JSON stringu ir užsaugoti susikurtam kintamąjame. Kintamąjį išvesti i console.log Nuskaityti JSON stringą iš kintamojo, paversti jį objektu ir iš jo informacijos suformuoti h3 tagus kaip 9 uždavinyje. 
