console.log("---ERRORS---");
console.log("---Throw and Try to Catch:---");
/*
The try statement lets you test a block of code for errors.
The catch statement lets you handle the error.
The throw statement lets you create custom errors.
The finally statement lets you execute code, after try and catch, regardless of the result.
*/
console.log(" ");
console.log("---try .. catch---");
/*
The try statement allows you to define a block of code to be tested for errors while it is being executed.
The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
The JS statements try and catch come in pairs:
Syntax:
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
*/
console.log("---ex1---");
// In this example we misspelled "alert" as "adddlert" to deliberately produce an error:
try {
	adddlert("Welcome, Asta!"); //should be alert
} catch (err) {
	console.log(err.message);
	document.getElementById("demo").innerText = err.message;
}

console.log(" ");
console.log("---throw---");
/*
When an error occurs, JavaScript will normally stop and generate an error message. The technical term for this is: JavaScript will throw an exception (throw an error). JS will actually create an Error object with two properties: name and message.
The throw statement allows you to create a custom error.
Technically you can throw an exception (throw an error).
The exception can be a JavaScript String, a Number, a Boolean or an Object:
throw "Too big";    // throw a text
throw 500;          // throw a number
If you use throw together with try and catch, you can control program flow and generate custom error messages.
*/
console.log("---ex2---");
/*This example examines input. If the value is wrong, an exception (err) is thrown.
The exception (err) is caught by the catch statement and a custom error message is displayed:
*/
function myFunction() {
	const message = document.getElementById("demo2");
	message.innerHTML = "";
	let x = document.getElementById("demo1").value;
	try {
		if (x == "") throw "empty";
		if (isNaN(x)) throw "please insert a number";
		x = Number(x);
		if (x < 5) throw "too low";
		if (x > 10) throw "too high";
		if (x >= 5 && x <= 10) throw "čiki piki";
	} catch (err) {
		message.innerHTML = err;
	}
}

/*
HTML Validation: The code above is just an example.
Modern browsers will often use a combination of JS and built-in HTML validation, using predefined validation rules defined in HTML attributes: <input id="demo" type="number" min="5" max="10" step="1">
*/

console.log(" ");
console.log("---finally---");
/*
The finally statement lets you execute code, after try and catch, regardless of the result:
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
*/
console.log("---ex3---");
function myFunction2() {
	const message = document.getElementById("demo4");
	message.innerHTML = "";
	let x = document.getElementById("demo3").value;
	try {
		if (x == "") throw "is empty";
		if (isNaN(x)) throw "insert a number";
		x = Number(x);
		if (x > 10) throw "is too high";
		if (x < 5) throw "is too low";
	} catch (err) {
		message.innerHTML = err;
	} finally {
		document.getElementById("demo3").value = "";
	}
}

console.log(" ");
console.log("---error object---");
/*
JS has a built in error object that provides error information when an error occurs. The error object provides two useful properties: name and message:
name	Sets or returns an error name
message	Sets or returns an error message (a string)
*/
console.log("---error name and message properties:---");
// Six different values can be returned by the error name property:
console.log("---1) EvalError/SyntaxError---");
// An SyntaxError/EvalError indicates an error in the eval() function.

console.log("---2) RangeError--");
/* A RangeError is thrown if you use a number that is outside the range of legal values. */
console.log("---ex4---");
// You cannot set the number of significant digits of a number to 500.
let num = 1;
try {
	num.toPrecision(500); // A number cannot have 500 significant digits
} catch (err) {
	document.getElementById("demo5").innerHTML = err.name;
	console.log(err.name);
    console.log(err.message);
}

console.log(" ");
console.log("---3) SyntaxError--");
// A SyntaxError is thrown if you try to evaluate code with a syntax error.
console.log("---ex5---");
// You cannot evaluate code that contains a syntax error:
try {
	eval("alert('Hello..)"); //must be 'Hello..'
} catch (err) {
	document.getElementById("demo6").innerHTML = err.name;
	console.log(err.name);
    console.log(err.message);
}

console.log(" ");
console.log("---4) TypeError--");
// A TypeError is thrown if you use a value that is outside the range of expected types.
console.log("---ex6---");
// You cannot convert a number to upper case
let num6 = 1;
try {
   num6.toUpperCase();
} catch (error) {
    document.getElementById("demo7").innerHTML = error.name;
    console.log(error.name);
    console.log(error.message);
}

console.log(" ");
console.log("---5) URIError--");
// URI (Uniform Resource Identifier) Error is thrown if you use illegal characters in a URI function:
console.log("---ex7---");
try{
    decodeURI("%%%");
} catch(error) {
    document.getElementById("demo8").innerHTML = error.name;
    console.log(error.name);
    console.log(error.message);
    document.getElementById("demo9").innerHTML = error.name + ' ' + error.message;
    console.log(error.name, " - ", error.message);
}

console.log(" ");
console.log("---6) Non-Standart--");
/* Non-Standard Error Object Properties
Mozilla and Microsoft defines some non-standard error object properties:
fileName (Mozilla)
lineNumber (Mozilla)
columnNumber (Mozilla)
stack (Mozilla)
description (Microsoft)
number (Microsoft)
Do not use these properties in public web sites. They will not work in all browsers.
*/