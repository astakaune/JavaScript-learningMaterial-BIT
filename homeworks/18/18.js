// 1
/* Sukurti html failą. Jame sukurti du text tipo 
input laukelius. Dar sukurti du mygtukus. 
Paspaudus vieną į konsolę išvedame vieno input 
laukelio tekstą, paspaudus kitą - kito. */
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
button1.addEventListener('click', () => console.log(text1.value));
button2.addEventListener('click', () => console.log(text2.value));



// 2
/* Paspaudus vieną mygtuką į konsolę išvesti skaičių 
kiek abiejuose input laukeliuose yra raidžių, 
o paspaudus kitą, abu laukelius išvalyti. */
const text3 = document.querySelector('#text3');
const text4 = document.querySelector('#text4');
button3.addEventListener('click', () => console.log(text3.value.length + text4.value.length));
button4.addEventListener('click', () => text3.value = text4.value = ' ');




// 3
/* Sukurti trečią mygtuką, kurį paspaudus abiejų 
input laukelių reikšmes įrašome į masyvą ir tą 
masyvą išvedame į konsolę */
const text5 = document.querySelector('#text5');
const text6 = document.querySelector('#text6');
const ar3 = [text5, text6];
button5.addEventListener('click', () => console.log(text5.value));
button6.addEventListener('click', () => console.log(text6.value));
button7.addEventListener('click', () => console.log(ar3));

// -------------------------------------------------------------------------------

// 4
// Kaip vadinasi pigiausia knyga iš čia https://in3.dev/knygos/
let title;
let price;
document.querySelector('#button8').addEventListener('click', () => {
    fetch('https://in3.dev/knygos/')
        .then(response => response.json())
        .then(data => {
            title = data[0].title;
            price = data[0].price;
            data.forEach((e) => {
                if (e.price < price) {
                    price = e.price;
                    title = e.title;
                }
            });
            console.log(price, title);
        });
});


// 5
// Kokiai kategorijai priklauso pigiausia knyga? 
// Pasinaudoti https://in3.dev/knygos/types/
let title2;
let price2;
let type2;
document.querySelector('#button9').addEventListener('click', () => {
    fetch('https://in3.dev/knygos/')
        .then(response => response.json())
        .then(data => {
            type2 = data[0].type;
            title2 = data[0].title;
            price2 = data[0].price;
            data.forEach((e) => {
                if (e.price < price2) {
                    price2 = e.price;
                    title2 = e.title;
                    type2 = e.type;
                }
            });
            fetch('https://in3.dev/knygos/types/')
                .then(response => response.json())
                .then(data => {
                    data.forEach(types => {
                        if (types.id == type2) {
                            type2 = types.title;
                        }
                    });
                });
            console.log(title2, type2);
        });
});
