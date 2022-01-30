const result = {
    pirmas: [],
    antras: [],
    trecias: [],
    ketvirtas: [],
    penktas: []
}


// 8
// Pakartoti 1-5 uždavinius. Kiekvienam 
// uždaviniui sukurti naują tuščią masyvą (arba vieną 
// objektą su 5 masyvais viduje). Kiekvieną pasikeitimo
//  reikšmę įrašyti į masyvą kaip naują elementą 
//  (5 uždavinio atveju įrašyti masyvą su pažymėtom 
//     reikšmėm) ir į console.log išvesti tą masyvą.
//1
document.querySelector('#b1').addEventListener('click', () => {
    result.pirmas.push(document.querySelector('#i1').value);
    document.querySelector('#i1').value = '';
    console.log(result);
});

//2
document.querySelector('#i2').addEventListener('change', () => {
    result.antras.push(document.querySelector('#i2').value);
    console.log(result);
});

//3
document.querySelectorAll('[name=i3]').forEach(ch => {
    ch.addEventListener('change', () => {
        result.trecias.push(ch.value);
        console.log(result);
    });
});

//4
document.querySelector('#i4').addEventListener('change', () => {
    result.ketvirtas.push(document.querySelector('#i4').checked ? 'Pažymėtas' : 'Nepažymėtas');
    console.log(result);
});

//5
document.querySelectorAll('[name=i5]').forEach(ch => {
    ch.addEventListener('change', () => {
        const a = [];
        document.querySelectorAll('[name=i5]').forEach(ch => {
            if (ch.checked) {
                a.push(ch.value);
            }
        })
        result.penktas.push(a);
        console.log(result);
    });
});

// 9
// 9. Padaryti mygtuką “GO”, kurį paspaudus, naudojant masyvus, 
// gautus 8 uždavinyje, dinamiškai, iš tų masyvų duomenų, būtų sukurta 
// daug h3 tagų kaip tai buvo padaryta 7 uždavinyje (vienas įrašas 
//     masyve, atinka vieną naują h3 tagą).
const h3Holder = document.querySelector('#h3-holder');
document.querySelector('#go').addEventListener('click', () => {
    for (const props in result) {
        result[props].forEach(text => {
            const h3 = document.createElement('h3');
            h3.classList.add('badge');
            h3.classList.add('badge-warning');
            h3.classList.add('m-1');
            h3Holder.appendChild(h3);
            h3.innerText = text;
        })
    }
});






// 10. Padaryti mygtuką “Reset”, kuris ištrintų duomenis iš visų masyvų.
// 11. Padaryti mygtuką “Clear”, kuris ištrintų visus h3 tagus iš DOM’o.
// 12. Padaryti mygtuką “GO JSON”, kurį paspaudus, 9 uždavinio masyvus būtų sudėti į sukurtą naują objektą. Tą objektą paversti JSON stringu ir užsaugoti susikurtam kintamąjame. Kintamąjį išvesti i console.log Nuskaityti JSON stringą iš kintamojo, paversti jį objektu ir iš jo informacijos suformuoti h3 tagus kaip 9 uždavinyje. 
