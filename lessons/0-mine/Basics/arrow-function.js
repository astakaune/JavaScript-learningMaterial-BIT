console.log("---ARROW FUNCTION---");
/*
Arrow functions allow us to write shorter function syntax:
const myFunction1 = (a, b) => a * b;

vietoje:
function myFunction2(c, d) {
    return c * d;
    }

It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
const myFunction3 = () => "Hello World!";
*/
console.log(" ");
console.log("-------ex1------");
const myFunction = (a, b) => a * b;
console.log(myFunction(1, 10));

console.log(" ");
console.log("-------ex2------");
function myFunction2(c, d) {
	return c * d;
}
console.log(myFunction2(2, 10));

console.log(" ");
console.log("-------ex3------");
const myFunction3 = function () {
	return e * f;
};
console.log(myFunction(3, 10));

console.log(" ");
console.log("-------ex4------");
const myFunction4 = (g, h) => g * h;
console.log(myFunction4(4, 10));

console.log(" ");
console.log("-------ex5------");
const hello = () => {
	return "Hello World1!";
};
console.log(hello());

console.log(" ");
console.log("-------ex6------");
function hello1() {
	return "Hello World2!";
}
console.log(hello1());

console.log(" ");
console.log("-------ex7------");
const hello3 = () => "Hello World3!"; //Note: This works only if the function has only one statement.
console.log(hello3());

console.log(" ");
console.log("-------ex8------");
//If you have parameters, you pass them inside the parentheses:
const hello4 = (val) => "Hello " + val;
// const hello4 = val => "Hello " + val; if 1 parameter, you can skip the parentheses.
console.log(hello4("Asta"));

console.log(" ");
console.log("-------ex9------");
console.log("--this.regular function--");
const hello5 = function () {
	document.getElementById("demo-regular").innerHTML += this;
};
window.addEventListener("load", hello5);
document.getElementById("btn-regular").addEventListener("click", hello5);

console.log(" ");
console.log("-------ex10------");
console.log("--this.arrow function--");
const hello6 = () => {
    document.getElementById("demo-arrow").innerHTML += this;
}
window.addEventListener("load", hello6);
document.getElementById("btn-arrow").addEventListener("click", hello6);