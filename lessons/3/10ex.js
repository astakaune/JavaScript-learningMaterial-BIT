function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("--------1ex-----------");
//1. Išvesti rezultatą ir sprendimą ar egzaminas išlaikytas. Mažiausias išlaikymo balas yra 4
const scoreMin = 4;
const score = rand(0, 10);
let result;
if (score >= scoreMin) {
	result = "Egzam passed :)";
} else if (score == 0) {
	result = "Error";
} else {
	result = "Repeat egzam!";
}
console.log("Score:", score);
console.log("Result:", result);

console.log(" ");
console.log("--------2ex-----------");
//2. Išvesti eksperimento rezultatą ir sprendimą ar pavyko. Pavykęs eksperimentas
// tas, kurio rezultatas 1 arba 4.
const experimentScore = rand(0, 5);
let experimentResult;
if (experimentScore == 1 || experimentScore == 4) {
	experimentResult = "Successful experiment!";
} else {
	experimentResult = "Unsuccessful experiment!";
}
console.log("Experiment score:", experimentScore);
console.log("Experiment result:", experimentResult);

console.log(" ");
console.log("--------3ex-----------");
//3. Išvesti automobilio greitį ir baudos dydį, jeigu greitis didesnis nei 60.
// Bauda yra viršytas greitis X 5
const speed = rand(40, 120);
const overSpeed = speed - 60;
const speedingFine = overSpeed * 5;
console.log("Speed:", speed, "km/h");
if (overSpeed > 0) {
	console.log("Overspeed:", overSpeed, "km/h");
	console.log("Fine for overspeeding:", speedingFine, "Eur");
	console.log("Please slow down!");
} else {
	console.log("Thanks for not speeding!");
}

console.log(" ");
console.log("--------4ex-----------");
//4. Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė
const number = rand(0, 10);
let resultNo;
if (!(number % 2)) {
	resultNo = "Number is even";
} else {
	resultNo = "Number is odd";
}
console.log("Number", number);
console.log(resultNo);

console.log(" ");
console.log("--------5ex-----------");
//5. Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C
// ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę
const alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet);

console.log("--var1--");
const letterABC = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(letterABC);

console.log("--var2--");
const random = rand(0, 25);
const letterABCD = alphabet.charAt(random);
console.log(random);
console.log(letterABCD);

console.log(" ");
console.log("--------6ex-----------");
//6. Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma
const random1 = rand(0, 10);
const random2 = rand(0, 10);
const sum = random1 + random2;
const mult = random1 * random2;
console.log("Number1:", random1, "-", "Number2:", random2);
console.log("Sum:", sum, "-", "Multiplication:", mult);
if (sum > mult) {
	console.log("Sum is biger.");
} else if (mult > sum) {
	console.log("Multiplication is biger.");
} else {
	console.log("Multiplication = Sum");
}

console.log(" ");
console.log("--------7ex-----------");
//7. Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar
// asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų
const donkey = rand(0, 2);
const cow = rand(0, 2);
console.log("Donkeys:", donkey, ". ", "Cows:", cow);
if (donkey || cow) {
	console.log("We have", donkey + cow, "animals.");
}

console.log(" ");
console.log("--------8ex-----------");
//8. Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo",
// jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi.
// Pranešimą "Pralaimėjo" - priešingu atveju.
const number11 = rand(0, 4);
const number12 = rand(0, 4);
const sum1 = number11 + number12;
console.log("Number1:", number11, ". ", "Number2:", number12, ". ", "Sum:", sum1);
console.log("--var1--");
if (sum1 > 6 || number11 === number12) {
	console.log("We have the WINNER!");
} else {
	console.log("We have the LOOSER!");
}
console.log("--var2--");
sum1 > 8 || number11 === number12 ? console.log("We have the WINNER!") : console.log("We have the LOOSER!");

console.log(" ");
console.log("--------9ex-----------");
//9. Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33
// jis dalijasi be liekanos. Rezultatą išvesti.
// const numberBIG = rand(1000000, 9999999);
// let counter = 0;
// console.log("Number:", numberBIG);

// if ((numberBIG % 1 == 0) || (numberBIG % 2 == 0) || (numberBIG % 5 == 0)) {
// 	counter = 1;
//     console.log('vienas');
// } else if (((numberBIG % 1 == 0) && (numberBIG % 2 == 0)) || ((numberBIG % 1 == 0) && (numberBIG % 5 == 0)) || ((numberBIG % 2 == 0) && (numberBIG % 5 == 0))) {
// 	counter = 2;
//     console.log('du');
// } else if ((numberBIG % 1 == 0) && (numberBIG % 2 == 0) && (numberBIG % 5 == 0)) {
//     counter = 3;
//     console.log('penki');
// }
// console.log(counter);

console.log(" ");
console.log("--------10ex----------");
//10. Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu zaidime VASKIČI: 'popierius, zirkles, sulinys'.
let I = rand(0, 2) ? (rand(0, 1) ? "popierius" : "zirkles") : "sulinys";
let you = rand(0, 2) ? (rand(0, 1) ? "popierius" : "zirkles") : "sulinys";
console.log("I -", I, ". ", "you -", you);

if (I == you) {
	console.log("Lygiosios. Bandome dar kartą");
} else if ((I == "sulinys" && you == "zirkles") || (I == "zirkles" && you == "popierius") || (I == "popierius" && you == "sulinys")) {
	console.log("Laimėjau aš");
} else {
	console.log("Laimėjai tu");
}

console.log(" ");
console.log("--------11ex----------");
// Surasti ir i console.log išvesti dviejų mažesnių kintamųjų sumą
let a = rand(2, 10);
let b = rand(2, 10);
let c = rand(2, 10);
console.log("Kintamieji:", a, b, c);

// destytojo trumpasis sprendimas
if (a >= b && a >= c) {
	console.log("b + c:", b + c);
} else if (b >= c) {
	console.log("a + c:", a + c);
} else {
	console.log("Dviejų mažesnių kintamųjų suma yra:", a + b);
}

// destytojo ilgasis sprendimas
if (a >= b) {
	if (a >= c) {
		console.log("b + c", b + c);
	}
}
if (b > a) {
	if (b >= c) {
		console.log("a + c:", a + c);
	}
}
if (c > a) {
	if (c > b) {
		console.log("a + b:", a + b);
	}
}
