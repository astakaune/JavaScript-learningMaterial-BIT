// 1
// masyva iteruoti keturiais skirtingais būdais, 
// iteracijose iškonsolinant reikšmes
const masyvas = ['vienas', 'žalias', 'ir', 'trys', 'raudoni'];

console.log('------for------');
for (let i = 0; i < masyvas.length; i++) {
    console.log(masyvas[i]);
}

console.log('------while------');
let w = 0;
while (w < masyvas.length) {
    console.log(masyvas[w]);
    w++;
}

console.log('------forEach------');
masyvas.forEach(e => console.log(e));


console.log('------for..in------');
//duoda objektus
for (const i in masyvas) {
    console.log(masyvas[i]);
}

console.log('------for..of------');
//duoda indeksus
for (const i of masyvas) {
    console.log(i);
}
