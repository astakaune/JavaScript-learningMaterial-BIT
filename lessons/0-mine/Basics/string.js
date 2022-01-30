console.log(" ");
console.log("---JavaScript Strings---");
/* A JavaScript string stores a series of characters like "John Doe". A string can be any text inside double or single quotes:
String indexes are zero-based: The first character is in position 0, the second in 1, and so on.*/

console.log(" ");
console.log("---Strings interpolation---");
let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);


console.log(" ");
console.log("---String Properties and Methods ---");
// Primitive values, like "John Doe", cannot have properties or methods (because they are not objects). But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
console.log("---String Properties---");
// string.length	- Returns the length of a string
const string1 = "stringStringString";
console.log('string1.length:', string1.length);
// string.constructor	- Returns the string's constructor function.
console.log('string1.constructor:', string1.constructor);
// string.prototype - Allows you to add properties and methods to an existing object. syntax: object.prototype.name = value
function person(name, city, pet) {
    this.name = name,
        this.surname = city,
        this.pet = pet
}
person.prototype.age = 35;

const personFred = new person("Fred", "Cave", "Mole");
console.log(personFred);
console.log(personFred.age);
const personTom = new person("Tom", "Kaunas", "Dog");
console.log(personTom);
console.log(personTom.age);


console.log("");
console.log("---String Methods---");
console.log("---charAt()---");
// charAt()	Returns the character at the specified index (position)
const string2 = "astapasta";
console.log(string2.charAt());
console.log(string2.charAt(1));
console.log(string2.charAt(2));
console.log(string2.charAt(3));
console.log("");

console.log("---charCodeAt()---");
//charCodeAt()	Returns the Unicode of the character at the specified index
const string3 = "astapasta";
console.log(string3.charCodeAt());
console.log(string3.charCodeAt(1));
console.log("");

console.log("---concat()---");
// concat()	Joins two or more strings, and returns a new joined strings. syntax: let res = str1.concat(str2);
const string41 = "asta";
const string42 = "pasta";
const string43 = "makalasta";
const string4 = string41.concat(string42, string43);
console.log(string4);
console.log("");

console.log("---startsWith()---");
// The startsWith() method returns true if a string begins with a specified string, otherwise false. The startsWith() method is case sensitive. syntax: string.endsWith(searchvalue, length). A Boolean.
console.log(string41.startsWith("a"));
console.log(string41.startsWith("aa"));
console.log("");

console.log("---endsWith()---");
// endsWith()	Checks whether a string ends with specified string/characters. syntax: string.endsWith(searchvalue, length). A Boolean.
console.log(string41.endsWith("a"));
console.log(string42.endsWith("aa"));
console.log("");

console.log("---fromCharCode()---");
// String.fromCharCode(n1, n2, ..., nX)	Converts Unicode values to characters
console.log(String.fromCharCode(65));  // Returns "A"
console.log("");

console.log("---includes()---");
// includes()	Checks whether a string contains the specified string/characters.  is case sensitive. Boolean
console.log(string41.includes("st"));
console.log(string41.includes("sat"));
console.log("");

console.log("---indexOf()---");
// indexOf()	Returns the position of the first found occurrence of a specified value in a string
console.log(string43.indexOf("l"));
console.log("");

console.log("---lastIndexOf()---");
// lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
console.log(string43.lastIndexOf("a"));
console.log("");

console.log("---localeCompare()---");
// localeCompare()	Compares two strings in the current locale. returns -1, 1, or 0 if the string comes before, after, or is equal in sort order pagal abecele. syntax: string.localeCompare(compareString)
const string51 = "zose";
const string5 = "asta";
const string52 = "asta";
console.log(string51.localeCompare(string5));
console.log(string52.localeCompare(string5));
console.log("");

console.log("---match()---");
// match()	Searches a string for a match against a regular expression, and returns the matches in array. case sensitive. syntax: string.match(regexp). returns null if no match is found.
const string6 = "The rain in SPAIN stays mainly in the plain";
console.log(string6.match(/ain/g));   // Returns [ain,ain,ain]
console.log(string6.match(/spain/g));
console.log("");

console.log("---repeat()---");
// The repeat() method returns a new string with a specified number of copies of the string it was called on. Syntax: string.repeat(count)
const string7 = 'Hello, pussy cat! ';
console.log(string7.repeat(10));

console.log("");
console.log("---replace()---");
// replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced. replace() does not change the original string.
const string8 = "asta pasta MaKaLasta";
console.log(string8, string8.toUpperCase());
const string81 = string8.replace(/makal/gi, "-");
console.log(string8);
console.log(string81);
const string82 = string8.replace(/as|pas|kalas/gi, "xxx");
console.log(string82.toUpperCase());


console.log("");
console.log("---search()---");
// The search() method searches a string for a specified value, and returns the position of the match. The search value can be string or a regular expression. The search() method returns -1 if no match is found. syntax: string.search(searchvalue). searchvalue	- A regular expression. A string will automatically be converted to a regular expression.
const string9 = "Pussy cat, pussy cat, where have you been? I have been to London, to look at the queen!";
console.log(string9.search(/pussy cat/i));
console.log(string9.search("pussy cat"));


console.log("");
console.log("---slice()---");
// The slice() method extracts parts of a string and returns the extracted parts in a new string. Use the start and end parameters to specify the part of the string you want to extract. The first character has the position 0, the second has position 1, and so on. Tip: Use a negative number to select from the end of the string. Syntax: string.slice(start, end)
console.log(string9.slice(6, 9));
console.log(string9.slice(-10, -6));
console.log(string9.slice(81));


console.log("");
console.log("---split()---");
// The split() method splits a string into an array of substrings, and returns the new array. If an empty string ("") is used as the separator, the string is split between each character. The split() method does not change the original string.
// syntax: string.split(separator, limit)
// Return Value:	An Array, containing the splitted values
const string10 = "Pussy cat, pussy cat, where have you been? I have been to London, to look at the queen!";
console.log(string10);
console.log(string10.split()); // into array with 1 value
console.log(string10.split(" "));
console.log(string10.split(""));
//(" ") into array with many value in respect to gaps. ("") into array with each sign separate.
console.log(string10.split("", 10));//second parameter specifies how many items will be included in array


console.log("");
console.log("---substr()---");
// The substr() method extracts parts of a string, beginning at the character at a specified position, and returns a specified number of characters. Tip: To extract characters from the end of the string, use a negative start number.
// syntax: string.substr(start, length).
// A new String, containing the extracted part of the text. If length is 0 or negative, an empty string is returned
const string11 = "Pussy cat, pussy cat, where have you been? I have been to London, to look at the queen!";
console.log(string11);
console.log(string11.substr(10, 11));
console.log(string11.substr(80));


console.log("");
console.log("---substring()---");
// The substring() method extracts characters, between to indices (positions), from a string, and returns the substring. The substring() method extracts characters between "start" and "end", not including "end". If "start" is greater than "end", substring() will swap the two arguments, meaning (1, 4) equals (4, 1). If "start" or "end" is less than 0, they are treated as 0.
// syntax: string.substring(start, end);
console.log(string11.substring(10, 21));
console.log(string11.substring(21, 10));
console.log(string11.substring(21, -10));
console.log(string11.substring(80));


console.log("");
console.log("---toLocaleLowerCase()---");
// The toLocaleLowerCase() method converts a string to lowercase letters, according to the host's current locale. The locale is based on the language settings of the browser. Generally, this method returns the same result as the toLowerCase() method. However, for some locales, where language conflict with the regular Unicode case mappings occurs (such as Turkish), the results may vary. The toLocaleLowerCase() method does not change the original string. Tip: Use the toLocaleUpperCase() method to convert a string to uppercase.
// syntax: string.toLocaleLowerCase()
const string12  = "HELLO HELLO WORLD";
const string121 = string12.toLocaleLowerCase();
console.log(string12);
console.log(string121);


console.log("");
console.log("---toLowerCase()---");
// The toLowerCase() method converts a string to lowercase letters. The toLowerCase() method does not change the original string. Tip: Use the The toUpperCase() method to convert to uppercase.
const string122 = string12.toLocaleLowerCase();
console.log(string12);
console.log(string122);


console.log("");
console.log("---toLocaleUpperCase()---");
// The toLocaleUpperCase() method converts a string to uppercase letters, according to the host's current locale. The locale is based on the language settings of the browser. Generally, this method returns the same result as the toUpperCase() method. However, for some locales, where language conflict with the regular Unicode case mappings occurs (such as Turkish), the results may vary. The toLocaleUpperCase() method does not change the original string. Tip: Use the toLocaleLowerCase() method to convert a string to lowercase.
console.log(string121);
console.log(string121.toLocaleUpperCase());


console.log("");
console.log("---toUpperCase()---");
// The toUpperCase() method converts a string to uppercase letters. The toUpperCase() method does not change the original string. Tip: Use the The toLowerCase() method to convert a string to lowercase.
console.log(string121);
console.log(string121.toUpperCase());


console.log("");
console.log("---toString()---"); // value
// The toString() method returns the value of a string. Syntax: string.toString()
// Return Value:	A String, representing the value of a string
const string13 = "52152355";
console.log(string13);
console.log(typeof string13);
console.log(string13.toString());
console.log(typeof string13.toString());
console.log("");
const string14 = "Good mourning, Vietnam";
console.log(string14);
console.log(typeof string14);
console.log(string14.toString());
console.log(typeof string14.toString());
console.log("");
const string15 = 52152355;
console.log(string15);
console.log(typeof string15);
console.log(string15.toString());
console.log(typeof string15.toString());


console.log("");
console.log("---valueOf()---"); //primitive value
// The valueOf() method returns the value of a string.	A String, representing the primitive value of a string.
const string17 = "Mūsų dienos kaip šventės..";
console.log(string17, typeof string17);
console.log(string17.valueOf(), typeof string17.valueOf());
console.log("");
const string18 = 526;
console.log(string18, typeof string18);
console.log(typeof string18);
console.log(string18.valueOf(), typeof string18.valueOf());


console.log("");
console.log("---trim()---");
// The trim() method removes whitespace from both sides of a string. The trim() method does not change the original string. syntax: string.trim()
const string16 = "    Please stay..     ";
console.log(string16);
console.log(string16.trim());

