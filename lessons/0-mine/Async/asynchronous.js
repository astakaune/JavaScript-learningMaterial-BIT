console.log(" ");
console.log("-------Asynchronous JS------");
/*Functions running in parallel with other functions are called asynchronous functions.
In the example, myDisplayer is the name of a function.
It is passed to calc() as an argument.  */
function myDisplayer(argument) {
	return console.log(argument);
}
function calc(a, b, callback) {
	let sum = a + b;
	callback(sum);
}
calc(2, 8, myDisplayer);

console.log(" ");
console.log("-----Waiting for a Timeout-----");
/*A good example for callback is JS setTimeout().
When using the JS function setTimeout(), you can specify a callback function to be executed on time-out:
ILoveYou is used as a callback. The function (the function name) is passed to setTimeout() as an argument.
2000 is the number of milliseconds before time-out, so ILoveYou() will be called after 3 seconds.
When you pass a function as an argument, remember not to use parenthesis. */
console.log("-----ex1-----");
setTimeout(ILoveYou, 1000);
function ILoveYou() {
	document.getElementById("demo").innerHTML = "I love you :*";
}

console.log("-----ex2-----");
// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead. In the example above, function(){ ILoveYou2("I love You too !!!"); } is used as a callback. It is a complete function. :
setTimeout(function () {
	ILoveYou2("I love you too :*");
}, 2000);
function ILoveYou2(value) {
	document.getElementById("demo1").innerHTML = value;
}

console.log(" ");
console.log("-----Waiting for Intervals:-----");
// When using the JS function setInterval(), you can specify a callback function to be executed for each interval:
setInterval(funkc1, 1000);
function funkc1(){
	let d = new Date();
	document.getElementById("demo2").innerHTML = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
}

console.log(" ");
console.log("-----Waiting for Files:-----");
/* If you create a function to load an external resource (like a script or a file), you cannot use the content before it is fully loaded. This is the perfect time to use a callback. This example loads an HTML file (mycar.html), and displays the HTML file in a web page, after the file is fully loaded:
In the example, myDisplayer is used as a callback. The function (the function name) is passed to getFile() as an argument.
*/
function myDisplayer(some){
	document.getElementById("demo3").innerHTML = some;
}

function getFile(myCallback) {
	let req = new XMLHttpRequest();
	req.open('GET', "asynchronous.html");
	req.onload = function(){
		if (req.status === 200){
			myCallback(this.responseText);
		} else {
			myCallback("Error: " + req.status);
		}
	}
	req.send();
}
getFile(myDisplayer);


