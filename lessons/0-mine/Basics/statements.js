console.log("---JavaScript statements---");
// In HTML, JavaScript statements are "instructions" to be "executed" by the web browser.
/*
JavaScript supports different kinds of loops:
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - loops through a block of code once, and then repeats the loop while a specified condition is true


In JavaScript we have the following conditional statements:
 if - to specify a block of code to be executed, if a specified condition is true
 else - to specify a block of code to be executed, if the same condition is false
 else/if - to specify a new condition to test, if the first condition is false
 switch - to select one of many blocks of code to be executed
*/


console.log("---Statement Identifiers---");
// JS statements often start with a statement identifier to identify the JS action to be performed. Statement identifiers are reserved words and cannot be used as variable names (or any other things).
console.log(" ");
console.log("---1) break---");
// The break statement exits a switch statement or a loop (for, for ... in, while, do ... while). When the break statement is used with a switch statement, it breaks out of the switch block. This will stop the execution of more execution of code and/or case testing inside the block. When the break statement is used in a loop, it breaks the loop and continues executing the code after the loop (if any). Note: Without a label reference, the break statement can only be used inside a loop or a switch.
// Syntax: break;
// Using the optional label reference: break labelname;
// ex1
let text1 = '';
for (let i = 0; i < 5; i++) {
    if (i === 4) {
        break;
    }
    text1 += "The number is " + i + ". ";
}
console.log('ex1:', text1);
console.log(" ");

// ex2
let text2 = '';
let i = 0;
while (i < 5) {
    text2 += "The number is " + i + ". ";
    i++;
    if (i === 4) {
        break;
    }
}
console.log('ex2:', text2);
console.log(" ");

// ex3
const cars = ["BMW", "Audi", "Mercedes", "Volvo", "Lexus"];
let text3 = '';
list: {
    text3 += cars[0] + " ";
    text3 += cars[1] + " ";
    text3 += cars[2] + " ";
    text3 += cars[3] + " ";
    break list;
    text3 += cars[4] + " ";
}
console.log('ex2:', text3);
console.log(" ");

// ex4
let text4 = '';
let z, j;
Loop1:
for (z = 0; z < 3; z++) {
    text4 += ' ' + "z = " + z + ", j = ", j;
    console.log("inside for1:", text4);
    Loop2:
    for (j = 0; j < 5; j++) {
        if (j === 4) {
            break Loop1;
        }
        text4 += j + " ";
        console.log("inside for2:", text4);
    }
}
console.log("outside for1:", text4);


console.log(" ");
console.log("---2) continue---");
// The continue statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop. The difference between continue and the break statement, is instead of "jumping out" of a loop, the continue statement "jumps over" one iteration in the loop. However, when the continue statement is executed, it behaves differently for different types of loops: In a while loop, the condition is tested, and if it is true, the loop is executed again. In a for loop, the increment expression (e.g. i++) is first evaluated, and then the condition is tested to find out if another iteration should be done. The continue statement can also be used with an optional label reference.
// Syntax: continue;
// Using the optional label reference: continue labelname;
// ex1
let text5 = '';
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    text5 += "Number " + i + '. ';
    console.log("inside for:", text5);
}
console.log("outside for:", text5);
console.log(" ");

// ex2
let text6 = '';
let i6 = 0;
while (i6 < 5) {
    i6++;
    if (i6 === 3) {
        continue;
    }
    text6 += ". Number " + i6;
}
console.log(text6);
console.log(" ");

//ex3
let text7 = '';
let i7 = 0;
for (i7 = 1; i7 <= 5; i7++) {
    if (i7 === 3 || i7 === 2) {
        continue;
    }
    text7 += "Number " + i7 + '. ';
}
console.log(text7);
console.log(" ");

//ex4
var cars8 = ["BMW", "Volvo", "Saab", "Ford"];
var text8 = "";
var m;
for (m = 0; m < cars8.length; m++) {
    if (cars8[m] === "Saab") {
        continue;
    }
    text8 += cars[m] + " ";
}
console.log(cars8);
console.log(text8);


console.log(" ");
console.log("-----3) while----");
// The while statement creates a loop which will continue to run as long as the condition is true. It will only stop when the condition becomes false. Tip: Use the break statement to break out of a loop, and the continue statement to skip a value in the loop.
/*Syntax:
while (condition) {
  code block to be executed
}
Required. Defines the condition for running the loop (the code block). If it returns true, the loop will start over again, if it returns false, the loop will end.
Note: If the condition is always true, the loop will never end. This will crash your browser.
Note: If you are using a variable with the condition, initialize it before the loop, and increment it within the loop. If you forget to increase the variable, the loop will never end. This will also crash your browser. */
// ex1
let text18 = "";
let y = 0;
while (y < 3) {
    y++;
    text18 += "Number" + y;
    console.log(y);
}
console.log(" ");

//ex2
const cars19 = ["BMW", "Volvo", "Saab", "Ford", "Audi", "Toyota"];
console.log(cars19);
let text19 = '';
let y19 = 0;
while (y19 < cars19.length) {
    text19 += cars19[y19] + " ";
    y19++;
}
console.log(text19);
console.log(" ");

// ex3
const cars20 = ["BMW", "Volvo", "Saab", "Ford", "Audi", "Toyota"];
console.log(cars20);
let text20 = "";
let leng = cars20.length;
// let y20 = 0;
while (leng--) {
    text20 += cars20[leng] + " ";
    // y20--;
}
console.log(text20);
console.log(" ");

// ex4
let text21 = "";
let y21 = 0;
while (y21 < 5) {
    text21 += "Number " + y21 + ". ";
    y21++;
    console.log(y21);
    if (y21 === 2) {
        break;
    }
}
console.log(" ");

// ex5
let text22 = "";
let y22 = 0;

while (y22 < 5) {
    y22++;
    console.log("1 ", y22);
    if (y22 === 3 || y22 === 2) {
        console.log("2 ", y22);
        continue;
    }
    console.log("3 ", y22);
}
console.log("4 ", y22);


console.log(" ");
console.log("---4) do/while---");
// The do/while statement creates a loop that executes a block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. The do/while statement is used when you want to run a loop at least one time, no matter what.
/* condition	Required. Defines the condition for running the loop (the code block). If it returns true, the loop will start over again, if it returns false, the loop will end. Note: If the condition is always true, the loop will never end. This will crash your browser.
Note: If you are using a variable with the condition, initialize it before the loop, and increment it within the loop. If you forget to increase the variable, the loop will never end. This will also crash your browser.

Syntax:
do {
  code block to be executed
}
while (condition);
*/
let text9 = '';
let i9 = 0;
do {
    text9 += "Number " + i9 + ". ";
    i9++;
} while (i9 < 0);
console.log(text9, i9);


console.log(" ");
console.log("------5) for------");
// The for statement creates a loop that is executed as long as a condition is true. It will only stop when the condition becomes false.
// Tip: Use the break statement to break out of a loop, and the continue statement to skip a value in the loop.
/* Syntax:
for (statement 1; statement 2; statement 3) {
  code block to be executed;
}
statement1	Optional. Executed before the loop (the code block) starts. Normally this statement is used to initialize a counter variable. To initiate multiple values, separate each value with a comma.
Note: This parameter can be omitted. However, do not omit the semicolon ";"

statement2	Optional. Defines the condition for running the loop (the code block). Normally this statement is used to evaluate the condition of the counter variable. If it returns true, the loop will start over again, if it returns false, the loop will end.
Note: This parameter can be omitted. However, do not omit the semicolon ";". Also, if you omit this parameter, you must provide a break inside the loop. Otherwise the loop will never end, which will crash your browser.

statement3	Optional. Executed each time after the loop (the code block) has been executed. Normally this statement is used to increment or decrement the counter variable.
Note: This parameter can be omitted (e.g. to increase/decrease values inside the loop)
*/
// ex1
let text10 = '';
let i10 = 0;
for (i10 = 1; i10 <= 5; i10++) {
    text10 += 'Number ' + i10 + ". ";
    console.log(i10, typeof i10);
}
console.log(text10, typeof text10);
console.log(" ");

// ex2
const cars11 = ["BMW", "Volvo", "Saab", "Ford"];
let text11 = "";
let i11 = 0;
for (i11 = 0; i11 < cars11.length; i11++) {
    text11 += cars11[i11] + ', ';
    console.log(i11, text11);
}
console.log(" ");

// ex3
const cars12 = ["BMW", "Volvo", "Saab", "Ford", "Audi", "Toyota"];
let text12 = '';
let i12 = 0;
for (i12 = 2; i12 < cars12.length; i12++) {
    text12 += cars12[i12] + " ";
}
console.log(text12);
console.log(" ");

// ex4
const cars13 = ["BMW", "Volvo", "Saab", "Ford", "Audi", "Toyota"];
let text13 = '';
let i13 = 0;
let counter = 0;
for (i13 = 0; ; i13++) {
    if (i13 === 0) {
        counter++;
        break;
    }
    text13 += cars13[i13] + " ";
}
console.log(cars13);
console.log(counter, i13, text13);


console.log(" ");
console.log("------6) for/in------"); // objektams
// The for/in statement loops through the properties of an object. The block of code inside the loop will be executed once for each property. Note: Do not use the for/in statement to loop through arrays where index order is important. Use the for statement instead.
/* Syntax:
for (var in object) {
  code block to be executed
}
var	Required. A variable that iterates over the properties of an object
object	Required. The specified object that will be iterated
*/
// ex1
const personObject = { fname: "John", lname: "Doe", age: 25 };
let text14 = "";
let x;
for (x in personObject) {
    text14 += personObject[x] + " ";
}
console.log(text14);


console.log(" ");
console.log("------7) for/of------"); //masyvams
/*The for/of statement loops through the values of an iterable object. Syntax:
for (variable of iterable) {
  code block to be executed
}
variable	Required. For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
iterable Required. An object that has iterable properties
Useful with arrays. oBject is not itterable.
*/
// ex1
const carsObject = ['BMW', 'Volvo', 'Mini'];
let x15;
for (x15 of carsObject) {
    console.log(x15, typeof x15);
}
console.log(" ");

// ex2
const text16 = 'JavaScript';
let x16;
for (x16 of text16) {
    console.log(x16);
}
console.log(" ");


console.log(" ");
console.log("--8) if/else if/else---");
/* The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.  if/else statement  is used to perform different actions based on different conditions. 
    if statement specifies a block of code to be executed if a condition is true. 
    else statement specifies a block of code to be executed if the condition is false.
    else if statement specifies a new condition if the first condition is false:
Syntax:
if (condition1) {
  // block of code to be executed if the condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
} */
// ex1
const time = new Date().getHours();
if (time >= 20) {
    console.log("Good evening");
} else if (time < 20 && time >= 10) {
    console.log("Good day");
} else if (time < 10 && time >= 6) {
    console.log("Good Mourning");
} else if (time < 6 && time > 0) {
    console.log("Good night");
} else {
    console.log("belekas");
}

// ex2
function myFunction() {
    let x = document.getElementsByTagName("DIV")[0];
    if (x.id === "myDIV") {
        x.style.fontSize = "30px";
    }
}

// ex2
function changeImage() {
    let image = document.getElementById("myImage");
    if (image.src.match("10")) {
        image.src = "11.jpg";
    } else {
        image.src = "10.jpg";
    }
}

// ex3
function myFunction() {
    var letter = document.getElementById("myInput").value;
    var text;
    // If the letter is "c"
    if (letter === "c") {
        text = "Spot on! Good job!";
        // If the letter is "b" or "d"
    } else if (letter === "b" || letter === "d") {
        text = "Close, but not close enough.";
        // If the letter is anything else
    } else {
        text = "Waaay off..";
    }
    document.getElementById("demo").innerHTML = text;
}


console.log(" ");
console.log("---9) debugger---");
// The debugger statement stops the execution of JavaScript, and calls (if available) the debugging function. Using the debugger statement has the same function as setting a breakpoint in the code. Normally, you activate debugging in your browser with the F12 key, and select "Console" in the debugger menu.
// Syntax: debugger;
x = 3 * 5;
// debugger;
console.log(x);


console.log(" ");
console.log("---10) switch---");
/* switch statement executes a block of code depending on different cases. Use switch to select one of many blocks of code to be executed. This is the perfect solution for long, nested if/else statements. The value of the expression is then compared with the values of each case in the structure. If there is a match, the associated block of code is executed.
switch statement is often used together with a break or a default keyword (or both). break keyword breaks out of the switch block. If break is omitted, the next code block in the switch statement is executed.
The default keyword specifies some code to run if there is no case match. it takes care of unexpected cases.
Syntax:
switch(expression) {
  case n:
    code block
    break;
  case n:
    code block
    break;
  default:
    default code block
}*/
// ex1
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown Day";
}
console.log(day);
console.log(" ");

// ex2
let message1;
switch (new Date().getDay()) {
    case 0:
        message1 = "Today is Sunday";
        break;
    case 6:
        message1 = "Today is Saturday";
        break;
    default:
        message1 = "I can't wait for the Weekend to begin";
}
console.log(message1);
console.log(" ");


// ex3
var message2;
switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    default:
        message2 = "Looking forward to the Weekend";
        break;
    case 4:
    case 5:
        message2 = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        message2 = "It is Weekend";
}
console.log(message2);
console.log(" ");


console.log("---11) try...catch/finally---");
// try/catch/finally statement handles some or all of the errors that may occur in a block of code, while still running code. Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things. The try statement allows you to define a block of code to be tested for errors while it is being executed. The catch statement allows you to define a block of code to be executed, if an error occurs in the try block. The finally statement lets you execute code, after try and catch, regardless of the result.
// Note: The catch and finally statements are both optional, but you need to use one of them (if not both) while using the try statement. 
// Tip: When an error occurs, JavaScript will normally stop, and generate an error message. Use the throw statement to create a custom error (throw an exception). If you use throw together with try and catch, you can control program flow and generate custom error messages.
/*
Syntax: try {
    Block of code to try
  }
  catch(err) {
    Block of code to handle errors
  }*/


try {
  addalert("Welcome guest!"); // must be alert ("Welcome guest!");
}
catch(err) {
    console.log(err);
//arba   document.getElementById("demo").innerHTML = err.message;
}
// JavaScript catches adddlert as an error, and executes the catch code to handle it.
console.log(" ");


console.log("---12) throw---");
// The throw statement throws (generates) an error. When an error occurs, JS will normally stop, and generate an error message. The technical term for this is: JavaScript will throw an error. The throw statement allows you to create a custom error. The technical term for this is: throw an exception. The exception can be a JS String, a Number, a Boolean or an Object. NOTE: If you use throw together with try and catch, you can control program flow and generate custom error messages. expression:	Required. The exception to throw. Can be a string, number, boolean or an object. Syntax: throw expression;

console.log("---errors---");
/*
 try statement lets you test a block of code for errors. 
 catch statement lets you handle the error.
 throw statement lets you create custom errors.
 finally statement lets you execute code, after try and catch, regardless of the result.
*/

// When an error occurs, JS will normally stop and generate an error message. The technical term for this is: JS will throw an exception (throw an error). JS will actually create an Error object with two properties: name and message.

/*
Syntax:
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