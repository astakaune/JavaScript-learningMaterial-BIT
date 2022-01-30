// Kiek yra skaičių nuo 5 iki 100 kurie be 
// liekanos dalijasi iš 3?


let skaiciusDalinasiIs3 = 0;

for (let i = 5; i <= 100; i++) {
    if (i % 3 == 0) {
        i++;
        skaiciusDalinasiIs3++
        console.log(skaiciusDalinasiIs3);
    }
}

console.log('--------------------------');

// Kiek yra skaičių nuo 5 iki 100 kurie be 
// liekanos dalijasi iš 3 arba iš 5?

let skaiciusDalinasiIs3arba5 = 0;

for (let i = 5; i <= 100; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        i++;
        skaiciusDalinasiIs3arba5++
        console.log(skaiciusDalinasiIs3arba5);
    }
}


console.log('--------------------------');
// Kiek yra skaičių nuo 5 iki 100 kurie be 
// liekanos dalijasi iš 3 ir iš 5?

let skaiciusDalinasiIs3ir5 = 0;

for (let i = 5; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        i++;
        skaiciusDalinasiIs3ir5++
        console.log(skaiciusDalinasiIs3ir5);
    }
}