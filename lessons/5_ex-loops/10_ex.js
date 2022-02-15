function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(" ");
console.log("---->----1ex---<------");
// 1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus
// sveikus skaičius iš intervalo 5…25;
const a = rand(0, 25);
const b = rand(0, 25);
const c = rand(0, 25);
console.log("vars:", a, b, c);

console.log("--------1a---------");
// 1a Paskaičiuokite jų sumą ir priskirkite ją kintamajam.
// Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
const sumABC = a + b + c;
console.log("suma:", sumABC);

console.log("--------1b---------");
// 1b Sudėkite skaičius į stringo tipo kintamąjį ir jį
// atspausdinkite pasinaudodami console.log;
const stringA = a.toString();
const stringB = b.toString();
const stringC = c.toString();
console.log("toString():", stringA, stringB, stringC);
console.log(typeof stringA);

const stringabc = String(a) + String(b) + String(c);
console.log(stringabc);

console.log("--------1c---------");
// 1c Sudėkite skaičius į stringo tipo kintamąją padarant
// tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
const stringABC = stringA + "   " + stringB + "   " + stringC;
console.log(stringABC);

const stringabcGaps = String(a) + " " + String(b) + " " + String(c);
console.log(stringabcGaps);

console.log("--------1d---------");
// 1d Sudėkite skaičius į stringo tipo kintamąją padarant
// tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje.
// Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
const stringABCsum = String(a) + " + " + String(b) + " + " + String(c) + " = " + sumABC;
console.log(stringABCsum);

console.log(" ");
console.log("---->----2ex----<-----");
// Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10),
// kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;
const kint1 = rand(5, 10);
console.log("kint1:", kint1);

console.log(" ");
console.log("----->---3ex---<------");
// Sukurkite kintamąjį ir jam priskirkite stringą “Labas”.
// Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
const kint2 = "Labas";
for (let i = 0; i < 5; i++) {
	console.log("kint2:", kint2);
}

console.log(" ");
console.log("----->---4ex---<------");
// Pasinaudojus ciklu ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
for (let i = 0; i < 7; i++) {
	console.log(sumABC);
}

console.log(" ");
console.log("----->---5ex---<------");
// Pasinaudojus ciklu ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų,
// koks skaičius yra sugeneruotas;
for (let i = 0; i < sumABC; i++) {
	console.log(sumABC);
}

console.log(" ");
console.log("----->---6ex---<------");
// Pasinaudojus ciklu ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų,
//  koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 25;
if (sumABC > 25) {
	for (let i = 0; i < sumABC; i++) {
		console.log(sumABC);
	}
} else {
	console.log("I will not print it..");
}

console.log(" ");
console.log("----->---7ex---<------");
// 7. Deklaruokite 2 kintamuosius už ciklo ribų. Ciklo viduje vienam kintamajam generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
// Rezultatą atspauzdinkite pasinaudodami console.log ciklo viduje;
let kint3;
let kint4;
for (let i = 0; i < 5; i++) {
	kint4 = rand(10, 20);
	console.log("kint4:", kint4);
}

console.log("--------7a---------");
// 7a Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
kint3 = kint4;
console.log("kint3:", kint3);

console.log("--------7b---------");
// 7b Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų.
let kint5;
let sum5 = 0;
for (let i = 0; i < 5; i++) {
	kint5 = rand(10, 20);
	console.log("kint5:", kint5);
	sum5 += kint5;
}
console.log("sum5:", sum5);

console.log("--------7c---------");
// 7c Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
let kint6 = "";
for (let i = 0; i < 5; i++) {
	kint6 += rand(10, 20) + " ";
}
console.log("kint6:", kint6);

console.log("--------7d---------");
// 7d Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspazdinkite;
let kint7 = "";
let sum7 = 0;
for (let i = 0; i < 5; i++) {
	kint7 += rand(10, 20) + " ";
	sum7 += kint5;
}
console.log("kint7:", kint7);
console.log("sum7:", sum7);

console.log(" ");
console.log("--------8ex---------");
// 8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų.
// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25.
// Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
console.log("--------8a---------");
// 8a Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
let var1;
do {
	var1 = rand(10, 25);
	console.log("var1:", var1);
} while (var1 >= 12);

console.log("--------8b---------");
// 8b Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
let var2;
let i = 0;
do {
	var2 = rand(10, 25);
	console.log("var2:", var2);
	i++;
} while (var2 >= 12);
console.log("i:", i);

console.log("--------8c---------");
// 8c Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius,
// kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų.
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
let var3;
let sumVar3 = 0;
do {
	var3 = rand(10, 25);
	console.log("var3:", var3);
	if (var3 < 18) {
		sumVar3 += var3;
	}
} while (var3 >= 12);
console.log("sumVar3:", sumVar3);

console.log("--------8d---------");
// 8d Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį,
// kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote).
// Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
let var4;
let sumVar4 = 0;
let atmesta = 0;
do {
	var4 = rand(10, 25);
	console.log("var4:", var4);
	if (var4 < 18) {
		sumVar4 += var4;
	} else {
		atmesta++;
	}
} while (var4 >= 12);
console.log("sumVar4:", sumVar4);
console.log("atmesta:", atmesta);

console.log("--------8e---------");
// 8e Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių.
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
let var5;
let sumVar5 = 0;
let atmesta5 = 0;
let lyginiai = 0;
let nelyginiai = 0;
do {
	var5 = rand(10, 25);
	console.log("var5:", var5);
	if (var5 % 2) {
		nelyginiai++;
	} else {
		lyginiai++;
	}
} while (var5 >= 12);
console.log("lyginiai:", lyginiai, ", ", "nelyginiai:", nelyginiai);

console.log("--------8f---------");
// 8f (ciklas cikle) Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek buvo ciklo pakartojimų atlikta, kol buvo gautas norimas rezultatas ir rezultatą atspauzdinkite pabaigoje.
let visoMazuCiklu;
let visoDideliuCiklu = 0;
let var6;
let mazuCikluSum = 0;
do {
	visoMazuCiklu = 0;
	visoDideliuCiklu++;
	// console.log("visoDideliuCiklu", visoDideliuCiklu);
	do {
		var6 = rand(10, 25);
		console.log("var6:", var6);
		visoMazuCiklu++;
	} while (var6 >= 12);
	mazuCikluSum += visoMazuCiklu;
	console.log("visoMazuCiklu", visoMazuCiklu);
} while (visoMazuCiklu <= 20);
console.log("------------");
console.log("visoDideliuCiklu", visoDideliuCiklu);
console.log("mazuCikluSum", mazuCikluSum);

console.log(" ");
console.log("----->---9ex---<------");
// 9 Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(5,10). Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
let var9;
do {
	var9 = rand(5, 10);
	console.log("var9:", var9);
} while (var9 !== 5);

console.log("--------9a---------");
// 9a Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas.
// Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas.
// Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
let didysisCiklas;
let mazasisCiklas;
let didysisCiklasSum = 0;
let mazasisCiklasSum;
do {
	didysisCiklas = rand(5, 10);
	console.log("didysisCiklas:", didysisCiklas);
	mazasisCiklasSum = 0;
	for (let i = 0; i < didysisCiklas; i++) {
		mazasisCiklas = rand(5, 10);
		mazasisCiklasSum++;
		console.log("mazasisCiklas:", mazasisCiklas);
	}
	console.log("mazasisCiklasSum:", mazasisCiklasSum);
	didysisCiklasSum++;
	console.log("----------");
} while (didysisCiklas !== 5);
console.log("didysisCiklasSum:", didysisCiklasSum);

console.log("--------9b---------");
// 9b Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
let didysisCiklas2;
let mazasisCiklas2;
let didysisCiklas2iterac = 0;
let mazasisCiklas2iterac;
let didysisCiklas3kartus = 0;
do {
	didysisCiklas2 = rand(5, 10);
	console.log("didysisCiklas2:", didysisCiklas2);
	didysisCiklas2iterac++;
	mazasisCiklas2iterac = 0;
	if (didysisCiklas2 == 5) {
		didysisCiklas3kartus++;
	}
	for (let i = 0; i < didysisCiklas2; i++) {
		mazasisCiklas2 = rand(5, 10);
		mazasisCiklas2iterac++;
		console.log("mazasisCiklas2:", mazasisCiklas2);
	}
	// console.log("mazasisCiklas2iterac:", mazasisCiklas2iterac);
	console.log("----------");
} while (didysisCiklas3kartus != 3);
console.log("didysisCiklas2iterac:", didysisCiklas2iterac);
console.log("didysisCiklas3kartus:", didysisCiklas3kartus);

console.log(" ");
console.log("--------9c---------");
// 9c Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;
// analogiskas pavyzdys 9ex su kauliuko metimu.
let dCiklas;
let mCiklas = 0;
let dCiklasIterac = 0;
let dCiklasCounter5 = 0;
let dCiklasCounter5x3 = 0;
do {
	dCiklas = rand(5, 6);
	console.log("Didysis ciklas:", dCiklas);
	dCiklasIterac++;
	mCiklas = 0;
	if (dCiklas == 5) {
		dCiklasCounter5++;
		dCiklasCounter5x3++;
	} else {
		dCiklasCounter5x3 = 0;
	}
	for (let i = 0; i < dCiklas; i++) {
		mCiklas++;
		// console.log("Mazasis:", mCiklas);
	}
	console.log("Didysis ciklas 5x3:", dCiklasCounter5x3);
	console.log("--------");
} while (dCiklasCounter5x3 != 3);
console.log(" ");
console.log("Didziojo ciklo iteracijos:", dCiklasIterac);

console.log(" ");
console.log("--------10ex---------");
// Kazys ir Petras žaidžia Bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu
// ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas,
// kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222
// arba daugiau taškų.
let kazioPartijosTaskai;
let kazioTaskuSum = 0;
let petroPartijosTaskai;
let petroTaskuSum = 0;
let laimetojoTaskai;
let partijuCounter = 0;
do {
	kazioPartijosTaskai = rand(5, 25);
	kazioTaskuSum += kazioPartijosTaskai;
	petroPartijosTaskai = rand(10, 20);
	petroTaskuSum += petroPartijosTaskai;
	// console.log("Partijos taškai:", "Kazys - ", kazioPartijosTaskai + ", Petras - ", petroPartijosTaskai);
	partijuCounter++;
} while (kazioTaskuSum <= 222 && petroTaskuSum <= 222);
console.log("Viso taškai:", "Kazys - ", kazioTaskuSum + ", Petras - ", petroTaskuSum);
console.log("Sužaista partijų:", partijuCounter);
console.log("---------REZULTATAS------------");
if (kazioTaskuSum > petroTaskuSum) {
	console.log("Laimėjo Kazys!");
} else if (kazioTaskuSum == petroTaskuSum) {
	console.log("Laimėjo Petras!");
} else {
	console.log("Lygiosios - žaidžiam dar??");
}
