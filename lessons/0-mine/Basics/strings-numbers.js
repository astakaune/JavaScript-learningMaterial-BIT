// w3schools tutorial

console.log("---objects---");
const objectName = {
  propertyName: "propertyValue",
  propertyName1: "propertyValue1",
  propertyName2: "propertyValue2",
  propertyName3: "propertyValue3",
  methodName12: function () {
    return objectName.propertyName1 + objectName.propertyName2;
  }
};
console.log('1) objectName', objectName);
console.log('typeof objectName:', typeof objectName);



console.log(" ");
console.log("---object properties---");
// console.log('propertyName', propertyName);
console.log('1) typeof propertyName:', typeof propertyName);
console.log('typeof objectName.propertyName:', typeof objectName.propertyName);

// console.log('objectName', propertyValue);
console.log('2) typeof propertyValue:', typeof propertyValue);
console.log('typeof objectName.propertyValue:', typeof objectName.propertyValue);
// 2ways for reaching property:
// objectName.propertyName;
// person.lastName;
// or
// objectName["propertyName"];
// person["lastName"];


console.log(" ");
console.log("---object methods---");
//syntax of accesing method. su () grazina metodu gauta atsakyma
console.log('methodName12():', objectName.methodName12());
// be () grazina property value
console.log('methodName12:', objectName.methodName12);
console.log('typeof objectName.methodName12():', typeof objectName.methodName12());



console.log(" ");
console.log("---events---");
// 1) JavaScript code changes the content of the element with id="demo".
{/* <button onclick="document.getElementById('demo1').innerHTML=Date()">The time is?</button>
<p id="demo1"></p> */}
console.log('Date():', Date());
console.log('Date:', Date);
// 2) the code changes the content of its own element (using this.innerHTML)
{/* <button onclick="this.innerHTML = Date()">The time is?</button> */ }



console.log(" ");
console.log("----------strings-------------");
console.log("---strings: escape char \\ ---");

const text2 = 'We are the so-called "Vikings" from the north.';
console.log('1way:', text2);

const text3 = "We are the so-called \"Vikings\" from the north.";
console.log('2way:', text3);

const text4 = 'It\'s alright.';
console.log('3way:', text4);

const text5 = "1234\n56789"; // \n -new line
console.log('4way:', text5);

const text6 = "12\t34\t567\t8\t9"; // \t -horizon tabulator
console.log('5way:', text6);

const text7 = "1234\56789";
console.log('6way:', text7);


console.log(" ");
console.log("---strings: methods & properties----");
//length
const text1 = "0123456789";
console.log('text.length:', text1.length);
//slice(start, end). priima ir neigiamas vertes
const text8 = "123456789";
console.log('text.slice:', text8.slice(2, 6));
//substring(start, end). panasus i slice(), tik nepriima neigiamu verciu
const text9 = "0123456789";
console.log('text.substring:', text9.substring(2, 6));
//substr(kiek raidziu nupjauti nuo pradzios?)
const text10 = "0123456789";
console.log('text.substr:', text10.substr(5));

//replace() is case sensitive.
const text11 = "Labas rytas, Asta!";
console.log('text11:', text11);
const newText11 = text11.replace("Asta", "Kaune");
console.log('newText11:', newText11);
// to replace case insensitive, use /i flag (insensitive):
const newText12 = text11.replace(/asta/i, "Kaune");
console.log('newText12:', newText12);
console.log(" ");
// To replace all matches, use /g flag (global match):
const text111 = "Labas rytas! LABAS RYTAS!";
console.log('text111:', text111);
const newText13 = text111.replace(/Labas rytas/g, "Nelabas");
console.log('newText13:', newText13);
console.log(" ");
//conversion to Upper and Lower Case
const text14 = "Labas rytas! LABAS RYTAS!";
console.log('text14:', text14);
const newText14 = text14.toUpperCase();
console.log('newText14:', newText14);
console.log(" ");
//concat() joins two or more strings:
const text15 = "Labas rytas,";
console.log(text15);
const text115 = "Asta Pasta!";
console.log(text115);
const newtext155 = text15.concat(" ", text115);
console.log(newtext155);
const newtext1555 = text15.concat(" ", text15, " ", newtext155);
console.log(newtext1555);
console.log(typeof newtext1555);
console.log(" ");
//string extraction methods:
// charAt(position)
const text16 = "Amelija iš Monmartro"
console.log('text16:', text16);
console.log('position 0:', text16.charAt(0));//returns A
// charCodeAt(position) returns a UTF-16 code
console.log('position 0 UTF-16:', text16.charCodeAt(0));
// Property access [ ]


console.log(" ");
console.log("---string: to object with new __()---");
//keiword new makes objects of string, boolean, date, numbers
x1 = 'I am a string';
console.log('1) x1:', x1);
console.log('typeof x1:', typeof x1);
x = new String('I am a string');        // Declares x as a String object
console.log('x=new String()', x);
console.log('typeof x:', typeof x);
console.log('x1 == x:', x1 == x);
console.log('x1 === x:', x1 === x);
x11 = new String('I am a string');
console.log('x11 == x:', x11 == x);
//objektai tarpusavyje nelyginami returnina false
y = new Number();        // Declares y as a Number object
z = new Boolean();      // Declares y as a Boolean object
console.log('2) y=new Number()', y);
console.log('typeof y:', typeof y);
console.log('3) z=new Boolean()', z);
console.log('typeof z:', typeof z);



console.log(" ");
console.log("---string: to array with split(, |)---");
const text17 = "pirmas, antras, trecias ir ketvirtas | penktas.";
console.log('text17:', text17);
console.log('typeof:', typeof text17);

// text.split(",") // Split on commas
const array171 = text17.split(",");
console.log('1) array171 naudojant ",":', array171);
console.log('typeof:', typeof array171);

// text.split(" ")          // Split on spaces
const array172 = text17.split(" ");
console.log('2) array172 naudojant " ":', array172);
console.log('typeof:', typeof array172);

// text.split("|")          // Split on pipe
const array173 = text17.split("|");
console.log('3) array173 naudojant "|":', array173);
console.log('typeof:', typeof array173);

// text.split("")           // Split in characters
const array174 = text17.split("");
console.log('4) array174 naudojant "|":', array174);
console.log('typeof:', typeof array174);


console.log(" ");
console.log("----------string: search()------");
/*String.indexOf(searchvalue, start) returns the position of the first occurrence of a specified text
kiek simboliu yra priekyje skaiciuojant nuo 0;
antrasis parametras nurodo skaiciavimo pradzios pozicija
o skaiciu pateikia, skaiciuojant nuo pradziu.
cannot take powerful search values (regular expressions).*/
let str1 = "012 123 213 123";
console.log('1) indexOf 123:', str1.indexOf("123", 0));
console.log('typeof:', typeof str1.indexOf());
// String.lastIndexOf(searchvalue, start) returns the index of the last occurrence of a specified text
console.log('2) lastIndexOf 123:', str1.lastIndexOf("123"));
console.log('typeof:', typeof str1.lastIndexOf());
/*String.search(searchvalue) searches a string for a specified value and returns the position of the match. cannot take a second start position argument.*/
console.log('3) search 123:', str1.search("123"));
console.log('typeof:', typeof str1.search());
// String.startsWith(searchvalue, start). is case sensitive
console.log('4) startsWith 123:', str1.startsWith("123"));
console.log('typeof:', typeof str1.startsWith());
// String.endsWith(searchvalue, length) length-iki kurios vietos ieskoti. is case sensitive
console.log('5) endsWith 123:', str1.endsWith("123"));
console.log('typeof:', typeof str1.endsWith());


console.log(" ");
console.log("--------string: match()-------")
// String.match(//g) searches a string for a match against a regular expression, and returns the matches, as an Array object
//If the regular expression does not include the g modifier (to perform a global search), the match() method will return only the first match in the string
// returns array with found matches
console.log('6) match 123:', str1.match(/123/g));
console.log('typeof:', typeof str1.match());
// String.includes(searchvalue, start) returns true if a string contains a specified value
// returns boolean
console.log('7) includes 123:', str1.includes(123, 15));
console.log('typeof:', typeof str1.includes());



console.log(" ");
console.log("---INTERPOLATION: TEMPLATE VARIABLES, LITERALS----");
// String Interpolation method (Automatic replacing of variables with real values)
// using backtics. The syntax is: ${...}
const tempV1 = `He's often called "Johnny"`;

//Template literals:
//Template literals allow variables in strings:
const firstName = "John";
const lastName = "Doe";
const temV2 = `Welcome ${firstName}, ${lastName}!`;
console.log(temV2);
console.log('typeof:', typeof temV2);

// Template literals allow expressions in strings:
const price = 10;
const VAT = 0.25;
const total = `Total: ${(price * (1 + VAT)).toFixed(2)} Eur.`;
const total2 = `Total: ${(price * (1 + VAT))} Eur.`;
console.log(total, total2);
console.log('typeof total:', typeof total);



console.log(" ");
console.log("---numbers and methods---");
// JavaScript Numbers are Always 64-bit Floating Point
// Integers are accurate up to 15 digits.
// The maximum number of decimals is 17
console.log("-----NaN-Not a Number----");
console.log('typeof 10 is:', typeof 10);
console.log('100/10 is:', 100 / 10);
console.log('100/"10" is:', 100 / "10");
console.log('typeof "10" is:', typeof "10");
console.log('100/"string" is:', 100 / "string");
console.log('100/"string" isNaN?', isNaN(100 / "string"));
console.log('NaN typeof is:', typeof NaN);

console.log("-------Infinity--------");
console.log('100/0 is:', 100 / 0);
console.log('typeof Infinity is:', typeof Infinity);
console.log('-100/0 is:', -100 / 0);
console.log('typeof -Infinity is:', typeof -Infinity);
console.log(" ");

console.log(" ");
console.log("----------Number methods-----------");
// All number methods return a new value. They do not change the original variable.
console.log("-----number.toString()---");
/* By default, JavaScript displays numbers as base 10 decimals. But you can use the toString() method to output numbers from base 2 to base 36. Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.*/
// The toString() method returns a number as a string.
const myNumber = 32;
console.log(myNumber.toString(10));  // returns 32
console.log(myNumber.toString(32));  // returns 10
console.log(myNumber.toString(16));  // returns 20
console.log(myNumber.toString(8));   // returns 40
console.log(myNumber.toString(2));   // returns 100000

const number1 = 19810825;
console.log("number1:", number1);
console.log("typeof number1:", typeof number1);
console.log("number1.toString():", number1.toString());
console.log("typeof number1.toString():", typeof number1.toString());


console.log(" ");
console.log("-----number.toExponential()---");
// toExponential() returns a string, with a number rounded and written using exponential notation. A parameter defines the number of characters behind the decimal point:
const number2 = 9.123;
console.log(number2.toExponential(0));     // returns 9.e+0
console.log(number2.toExponential(2));     // returns 9.12e+0
console.log(number2.toExponential(4));     // returns 9.1230e+0
console.log(typeof number2.toExponential(6));

console.log(" ");
console.log("-----number.toFixed()---");
const number3 = 9.656;
console.log(number3.toFixed(0));           // returns 10
console.log(number3.toFixed(1));           // returns 9.7
console.log(number3.toFixed(2));           // returns 9.66
console.log(number3.toFixed(6));           // returns 9.656000

console.log(" ");
console.log("-----number.toPrecision()---");
// grazina stringa. parametras nurodo kiek skaitmenu reikia grazinti
const number4 = 9.656;
console.log(number4.toPrecision(), 'yra', typeof number4.toPrecision());// returns 9.656
console.log(number4.toPrecision(1), 'yra', typeof number4.toPrecision(1)); // returns 9.656
console.log(number4.toPrecision(2));       // returns 9.7
console.log(number4.toPrecision(4));       // returns 9.656
console.log(number4.toPrecision(6));       // returns 9.65600


console.log(" ");
console.log("-----number.valueOf()---");
// valueOf() returns a number as a number
//The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
const number5 = 123;
console.log(number5.valueOf(), typeof number5.valueOf()); //number
console.log((123).valueOf(), typeof (123).valueOf()); //number
console.log((100 + 23).valueOf(), typeof (100 + 23).valueOf()); //number

const string5 = '123';
console.log(string5.valueOf(), typeof string5.valueOf()); // string

console.log(" ");
const number6 = 150;
console.log(' primityvas number6', number6, typeof number6);
const newObject6 = new Number(number6);
console.log('objektas newObject6', newObject6, typeof newObject6);
const newObject7 = newObject6.valueOf();
console.log('primityvas newObject7', newObject7, typeof newObject7);
console.log('objektas newObject6 == primityvas newObject7', newObject6 == newObject7);
console.log('objektas newObject6 === primityvas newObject7', newObject6 === newObject7);
console.log('primityvas number6 == primityvas newObject7', number6 == newObject7);
console.log('primityvas number6 === primityvas newObject7', number6 === newObject7);

console.log(" ");
console.log("-----Number.isFinite()---");
// The Number.isFinite() method determines whether a value is a finite number. Syntax Number.isFinite(value);
// Number.isFinite() does not convert the values to a Number, and will not return true for any value that is not of the type Number.
console.log('Number.isFinite(2)', Number.isFinite(2), typeof Number.isFinite(2));
console.log('Number.isFinite(Infinity)', Number.isFinite(Infinity), typeof Number.isFinite(Infinity));
console.log('Number.isFinite(0)', Number.isFinite(0));
console.log('Number.isFinite(0/0)', Number.isFinite(0/0));
console.log('Number.isFinite(1/0)', Number.isFinite(1/0));
console.log('Number.isFinite(0/1)', Number.isFinite(0/1));
console.log('Number.isFinite("10")', Number.isFinite("10"));
console.log('Number.isFinite("string")', Number.isFinite("string"));
console.log('Number.isFinite(10/3)', Number.isFinite(10/3));

console.log(" ");
console.log("-----Number.isInteger()---");
// metodas tikrina, ar skaicius yra sveikas
console.log('Number.isInteger(2)', Number.isInteger(2), typeof Number.isInteger(2));
console.log('Number.isInteger(Infinity)', Number.isInteger(Infinity), typeof Number.isInteger(Infinity));
console.log('Number.isInteger(0)', Number.isInteger(0));
console.log('Number.isInteger(0/0)', Number.isInteger(0/0));
console.log('Number.isInteger(1/0)', Number.isInteger(1/0));
console.log('Number.isInteger(0/1)', Number.isInteger(0/1));
console.log('Number.isInteger("10")', Number.isInteger("10"));
console.log('Number.isInteger("string")', Number.isInteger("string"));
console.log('Number.isInteger(3,33)', Number.isInteger(3,33));
console.log('Number.isInteger(3.33)', Number.isInteger(3.33));
console.log('Number.isInteger(-2)', Number.isInteger(-2));


console.log(" ");
console.log("-----Variables to Numbers---");
//There are 3 JavaScript methods that can be used to convert variables to primitive numbers. These methods are global JavaScript methods and can be used on all data types.
console.log("-----1) Number()---");
//used to convert variables to numbers. Returns a number, converted from its argument.
//If the number cannot be converted, NaN (Not a Number) is returned.
console.log(Number(true), typeof Number(true));          // returns 1
console.log(Number(false), typeof Number(false));         // returns 0
console.log(Number("10"), typeof Number("10"));          // returns 10
console.log(Number("  10"), typeof Number("  10"));        // returns 10
console.log(Number("10  "), typeof Number("10  "));        // returns 10
console.log(Number(" 10  "), typeof Number(" 10  "));       // returns 10
console.log(Number("10.33"), typeof Number("10.33"));       // returns 10.33
console.log(Number("10,33"), typeof Number("10,33"));       // returns NaN
console.log(Number("10 33"), typeof Number("10 33"));       // returns NaN
console.log(typeof "10John", "'10John'", '-->', Number("10John"), typeof Number("John"));        // returns NaN
console.log(Number(new Date("1970-01-02")), 'ms', typeof Number(new Date("1970-01-02")));
console.log(typeof new Date("1970-01-02"));

console.log(" ");
console.log("-----2) parseInt()---");
//parseInt() parses a string and returns a  number. Spaces are allowed. Only the first number is returned. If the number cannot be converted, NaN (Not a Number) is returned.
console.log(typeof "-10", "-10", '-->', parseInt("-10"), typeof parseInt("-10"));
console.log(parseInt("-10.33"));     // returns -10
console.log(parseInt("10"));         // returns 10
console.log(parseInt("10.33"));      // returns 10
console.log(parseInt("10 20 30"));   // returns 10
console.log(typeof "10John", "10John", '-->', parseInt("10John"), typeof parseInt("10John"));   // returns 10
console.log(typeof "years 10", "'years 10'", '-->', parseInt("years 10"));   // returns NaN 

console.log(" ");
console.log("-----3) parseFloat()---");
//parseFloat() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned. If the number cannot be converted, NaN (Not a Number) is returned.
console.log(parseFloat("10"));        // returns 10
console.log(parseFloat("10.33"));     // returns 10.33
console.log(parseFloat("10 20 30"));  // returns 10
console.log(parseFloat("10 years"));  // returns 10
console.log(parseFloat("years 10"));  // returns NaN


console.log(" ");
console.log("------Number properties-----------");
//Number properties belongs to the JavaScript's number object wrapper called NUMBER. Using myNumber as a variable, expression, or value, will return undefined. These properties can only be accessed as Number.PROPERTY.
console.log("----MIN_VALUE and MAX_VALUE-----");
// Returns the smallest  and the largest number possible in JavaScript
console.log('Number.MIN_VALUE', Number.MIN_VALUE, typeof Number.MIN_VALUE);
console.log('Number.MAX_VALUE', Number.MAX_VALUE, typeof Number.MAX_VALUE);

console.log(" ");
console.log("--POSITIVE_INFINITY and NEGATIVE_INFINITY--");
//Infinity is returned on overflow
console.log('1/0', 1 / 0, '-1/0', -1 / 0);
console.log(Number.POSITIVE_INFINITY, typeof Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY, typeof Number.NEGATIVE_INFINITY);

console.log(" ");
console.log("----Number.constructor-----");
/* The constructor property returns the function that created the Number prototype: 
function Number() {
   [native code]
   };
*/
const number7 = 134.5;
console.log('number7.constructor', '-->', number7.constructor, '-->', typeof number7.constructor);

console.log(" ");
console.log("----Number.prototype-----");
/*The prototype constructor allows you to add new properties and methods to JavaScript numbers. When constructing a property, ALL numbers will be given the property, and its value, as default. When constructing a method, ALL numbers will have this method available.
Note: Number.prototype does not refer to a single number object, but to the Number() object itself. Note: Prototype is a global object constructor which is available for all JavaScript objects.
Syntax: Number.prototype.name = value */
// ex: Create a new number method that returns a number's half value:
// Use the new method on a number:
Number.prototype.myMethod = function () {
  return number8.valueOf() / 2;
};
let number8 = 70;
let number9 = number8.myMethod();
console.log('number is:', number8);
console.log('number/2 =', number9);


















/*
{ <p id="demo"></p>

<script>
let text = "Hello";
const myArr = text.split("");

text = "";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + "<br>"
}
document.getElementById("demo").innerHTML = text;
</script> }
*/
