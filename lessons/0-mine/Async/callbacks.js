console.log(" ");
console.log("-------CALLBACKS------");
/*A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished. */
console.log(" ");
console.log("-----Function Sequence-----");
/*JS functions are executed in the sequence they are called. Not in the sequence they are defined.
This example will end up displaying "function1":*/
function functionDisplayer(argument) {
	return console.log(argument);
}
function function1() {
	return functionDisplayer("function1");
}
function function2() {
	return functionDisplayer("function2");
}
function2();
function1();

console.log(" ");
console.log("-----Sequence Control-----");
/* Sometimes you would like to have better control over when to execute a function.
Suppose you want to do a calculation, and then display the result.
You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:*/
console.log("-----ex1-----");
function myDisplayer(argument) {
	return console.log(argument);
}
function myCalculator(a, b) {
	return a + b;
	}
let result = myCalculator(5, 5);
myDisplayer(result);

console.log("-----ex2-----");
// Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):
function myDisplayer2(argument){
	return console.log(argument);
}
function myCalculator2(a, b, c){
	let result2 = (10 * 20) / 50;
	return myDisplayer2(result2);
}
myCalculator2(1, 2, 3);

/* The problem with  ex1, is that you have to call two functions to display the result.
The problem with  ex2, is that you cannot prevent the calculator function from displaying the result.
Now it is time to bring in a callback.*/

console.log(" ");
console.log("-----Callbacks - Syntax-----");
/* A callback is a function passed as an argument to another function.
Using a callback, you could call the calculator function (myCalculator) with a callback, and let the calculator function run the callback after the calculation is finished: 
In the example, myDisplayer is the name of a function.
It is passed to myCalculator() as an argument.
When you pass a function as an argument, remember not to use parenthesis.
Right: myCalculator(5, 5, myDisplayer);
Wrong: myCalculator(5, 5, myDisplayer());*/
function myDisplayer3(argument){
	return console.log(argument);
}
function myCalculator3(a, b, myCallback){
	let result3 = a + b;
	myCallback(result3);
}
myCalculator3(5, 5, myDisplayer3);

console.log(" ");
console.log("-----When to Use a Callback?-----");
/* callbacks really usefull in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).*/
