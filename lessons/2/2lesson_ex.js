function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(" ");
console.log("----ex1----");
/* Naudokite funkcija rand(). Sukurkite du kintamuosius ir naudodamiesi 
funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
Didesnę reikšmę padalinkite iš mažesnės. 
Atspausdinkite rezultatą naudodami console.log() */
let x1 = rand(0, 4);
let x2 = rand(0, 4);
console.log(x1, x2);
let result;
if (x1 * x2 == 0) {
	result = "dalyba iš 0 negalima";
} else if (x1 > x2) {
	result = x1 / x2;
} else {
	result = x2 / x1;
}
console.log(result);

console.log(" ");
console.log("----ex2----");
/* Naudokite funkcija rand(). Sukurkite tris kintamuosius ir naudodamiesi 
funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. 
Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę. */
let y1 = rand(0, 25);
let y2 = rand(0, 25);
let y3 = rand(0, 25);
console.log(y1, y2, y3);
if (y1 > y2 && y2 > y3) {
	console.log(y2);
} else if (y2 > y3 && y3 > y1) {
	console.log(y3);
} else if (y3 > y1 && y1 > y2) {
	console.log(y1);
} else if (y1 > y3 && y3 > y2) {
	console.log(y3);
} else if (y2 > y1 && y1 > y3) {
	console.log(y1);
} else if (y3 > y2 && y2 > y1) {
	console.log(y2);
} else {
	console.log("vidurines reikšmės nera");
}

console.log(" ");
console.log("----ex3----");
/*  Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji 
    (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite kodą,
     kuris nustatytų, ar galima sudaryti trikampį, ir atsakymą atspausdintų 
     naudojant console.log(). */
let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);
console.log(a, b, c);
if (a + b >= c || a + c >= b || b + c >= a) {
	console.log("galima sudaryti trikampį");
} else "trikampis nesigauna";

console.log(" ");
console.log("----ex4----");
/* Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems 
reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
Rezultatus atspauzdinkite su console.log() */
const kint1 = rand(0, 2);
const kint2 = rand(0, 2);
const kint3 = rand(0, 2);
const kint4 = rand(0, 2);
console.log(kint1, kint2, kint3, kint4);
const array = [kint1, kint2, kint3, kint4];
console.log(array);
console.log(" ");
const map = array.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
console.log("map.keys()", [...map.keys()]);
console.log("map.values()", [...map.values()]);
console.log(" ");
console.log("map.entries(): [keys, values]:");
console.log([...map.entries()]);

console.log(" ");
console.log("----ex5----");
/* Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. 
    Prie skaičių mažesnių už 0 iš abiejų pusių atspausdinkite “+” simbolius,  
    didesnių už 0 iš abiejų pusių atspausdinkite “-” simbolius, o prie 0 “*” simbolius */
const rand1 = rand(-10, 10);
const rand2 = rand(-10, 10);
const rand3 = rand(-10, 10);
console.log(rand1, rand2, rand3);

if (rand1 < 0) {
	console.log("+", rand1, "+");
} else if (rand1 > 0) {
	console.log("-", rand1, "-");
} else {
	console.log("*", rand1, "*");
}
if (rand2 < 0) {
	console.log("+", rand2, "+");
} else if (rand2 > 0) {
	console.log("-", rand2, "-");
} else {
	console.log("*", rand2, "*");
}
if (rand3 < 0) {
	console.log("+", rand3, "+");
} else if (rand3 > 0) {
	console.log("-", rand3, "-");
} else {
	console.log("*", rand3, "*");
}

console.log(" ");
console.log("----ex6----");
/*Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, 
    daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite kodą, kuris skaičiuos žvakių kainą 
    ir console.log() atspausdins atsakymą, kiek žvakių ir kokia kaina perkama. Žvakių kiekį 
    generuokite ​rand()​ funkcija nuo 5 iki 3000.*/
const priceUnit = 1;
const quantity = rand(5, 3000);
const priceTotalBeforeDiscount = (priceUnit * quantity).toFixed(2);
const discountSum1 = 1000;
const discountSize1 = 0.97;
const discountSum2 = 2000;
const discountSize2 = 0.96;
let discount;

console.log("Quantity:", quantity, "units;");
console.log("Total price before discount:", priceTotalBeforeDiscount, "Eur;");

if (priceTotalBeforeDiscount < discountSum1) {
	console.log("Sorry - you have no discount!");
} else if (priceTotalBeforeDiscount >= discountSum1 && priceTotalBeforeDiscount >= discountSum2) {
	discount = discountSize1;
	console.log("Discount:", Math.round((1 - discountSize1) * 100), "%;");
} else {
	discount = discountSize2;
	console.log("Discount:", Math.round((1 - discountSize2) * 100), "%;");
}

if (discount) {
	let priceTotalAfterDiscount = priceTotalBeforeDiscount * discount;
	console.log("Total price after discount:", priceTotalAfterDiscount.toFixed(2), "Eur;");
	let priceUnitAfterDisc = priceTotalAfterDiscount / quantity;
	console.log("Final unit price:", priceUnitAfterDisc.toFixed(2), "Eur.");
}

console.log(" ");
console.log("----ex7----");
/*Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. 
    Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra 
    mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()*/
const var1 = rand(0, 100);
const var2 = rand(0, 100);
const var3 = rand(0, 100);
console.log("Kintamieji:", var1, var2, var3);
const masyvas = [var1, var2, var3];
const masyvasLength1 = masyvas.length;
console.log("Kintamųjų kiekis:", masyvasLength1);

let masyvasSUM1 = 0;
for (let i = 0; i < masyvas.length; i++) {
	masyvasSUM1 += masyvas[i];
}
const masyvasAVGaryth1 = (masyvasSUM1 / masyvasLength1).toFixed(0);
console.log("Kintamųjų suma:", masyvasSUM1);
console.log("Kintamųjų aritmetinis vidurkis:", masyvasAVGaryth1);

// let masyvasSUM2 = 0;
// for (let i = 0; i < masyvas.length; i++) {
// 	if (masyvas[i] >= 10 || masyvas[i] <= 90) {
// 		masyvas2 = push
// 		masyvasSUM2 += masyvas[i];
// 		masyvas = new masyvas;
// 	}
// }
// console.log("Kintamųjų suma, kai 10 < SUM < 90:", masyvasSUM2);
// const masyvasAVGaryth2 = (masyvasSUM / masyvasLength).toFixed(0);
// console.log("Kintamųjų aritmetinis vidurkis:", masyvasAVGaryth);
``