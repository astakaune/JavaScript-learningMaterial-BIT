console.log(" ");
console.log("---JS RegEx-Regular Expression - object---");
// A regular expression is a sequence of characters that forms a search pattern. The search pattern can be used for text search and text replace operations. When you search for data in a text, you can use this search pattern to describe what you are searching for. A regular expression can be a single character, or a more complicated pattern.
// A regular expression is an object that describes a pattern of characters. Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text. 
// Syntax : /pattern/modifiers;
// let pattern = /w3schools/i;
// /w3schools/i  is a regular expression.
// w3schools  is a pattern (to be used in a search).
// i  is a modifier (modifies the search to be case-insensitive).


console.log(" ");
console.log("---using String methods---");
// Using String Methods: In JavaScript, regular expressions are often used with the two string methods: search() and replace(). 
console.log("---search()---");
// The search() method uses an expression to search for a match, and returns the position of the match. 
const text1 = "What's The best thing about the Switzerland 999? I don't know. But the flag is the big plus!";
console.log(text1.search("the")); //59
console.log(text1.search(/the/i)); //7

console.log(" ");
console.log("---replace()---");
// The replace() method returns a modified string where the pattern is replaced.
console.log(text1.replace("Switzerland", "Malta"));
console.log(text1.replace(/switzerland/i, "Malta"));

console.log(" ");
console.log("---match()---");



console.log(" ");
console.log("---MODIFIERS---");
console.log(text1);
console.log("---//g---");
// Perform a global match (find all matches rather than stopping after the first match);
console.log(text1.match(/the/g));

console.log(" ");
console.log("---//i---");
// Perform case-insensitive matching
console.log(text1.match(/the/i));

console.log(" ");
console.log("---//m---");
// Perform multi-line matching


console.log(" ");
console.log("---PATTERNS---");
console.log(text1);

console.log("---1) Brackets []---");
const text2 = "What's The best thing about the Switzerland 91943? I don't know 343. But the flag 043 is the big plus!";
// [abc]	Find any of the characters between the brackets
console.log(text2.match(/[th]/g));
console.log(text2.match(/[th]/i));
console.log(" ");
// [^abc]	Find any character NOT between the brackets
console.log(text2.match(/[^t]/g));
console.log(text2.match(/[^w]/i));
console.log(" ");
// [0-9]	Find any of the digits between the brackets
console.log(text2.match(/[43]/g));
console.log(text2.match(/[43]/i));
console.log(" ");
// [^0-9]	Find any character NOT between the brackets (any non-digit)
console.log(text2.match(/[^439]/g));
console.log(text2.match(/[^43]/i));
console.log(" ");
//(x|y)	Find any of the alternatives separated with |
console.log(text2.match(/[4|9]/g));
console.log(text2.match(/[4|9]/i));



console.log(" ");
console.log("------2) Metacharacters\\x---");
// Metacharacters are characters with a special meaning:
const text21 = "What's The   best thing  about the Switzerland 91943? I don't know 343. But the flag 43 is the big plus!";
const text22 = "The Best\0 coding@, is the best1 encoding$ for!\0 the. best2 life%";

// The . metacharacter is used to find a single character, except newline or other line terminators. Syntax: new RegExp("regexp.") ir /regexp./
// Syntax with modifiers: new RegExp("regexp.", "g") or /regexp./g
console.log(text22.match(/b.st./g));
console.log(text22.match(/b.st./i));
console.log(" ");

// \d	Find a digit
// \D metacharacter is used to find a non-digit character.
console.log(text22.match(/\d/g));
console.log(text22.match(/\D/i));
console.log(" ");

// \s	Find a whitespace character
// \S Do a global search for non-whitespace characters in a string:
// A space character, A tab character, A carriage return character, A new line character, A vertical tab character, A form feed character
console.log(text22.match(/\s/g));
console.log(text22.match(/\S/g));
console.log(" ");

// \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
//\B Search for the pattern NOT at the beginning of a word like this:
console.log(text21.match(/\bthin/));
console.log(text21.match(/land\b/));
console.log(text21.match(/\Bland/));
console.log(text21.match(/Swi\B/));
console.log(" ");

// \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx
console.log(" ");

// The \w metacharacter is used to find a word character. A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character. Syntax: text.method(/\w/g);
// \W Metacharacter for non-word characters in a string. 
console.log(text22.match(/\w/g)); //array with items of each symbol
console.log(text22.search(/\w/g), typeof text22.search(/\w/g));
console.log(text22.match(/\W/g), typeof text22.match(/\W/g));
console.log(" ");

// The \0 metacharacter is used to find NUL character. 0 returns the position where the NUL character was found. If no match is found, it returns -1.
console.log(text22.match(/\0/g));
console.log(text22.match(/\0/i));
console.log(text22.search(/\0/i));
console.log(text21.search(/\0/));
console.log(" ");

// \f metacharacter is used to find the position of a form feed character. If no match is found, it returns -1.
console.log(text21.search(/\f/));
console.log(text21.match(/\f/));
console.log(" ");

// \r returns the position where the carriage return character was found. If no match is found, it returns -1.
console.log(text21.search(/\r/));
console.log(" ");

// \t returns the position where the carriage return character was found. If no match is found, it returns -1.
console.log(text21.search(/\t/));
console.log(" ");




console.log(" ");
console.log("------3) Quantifiers ---");
// Quantifiers define quantities: 
const text3 = "Hellooo World! Hello W3Schools!";

// n+ Matches any string that contains at least one n
console.log(text3.match(/o+/g));
console.log(text3.match(/o+/i));
console.log(" ");

// n* Matches any string that contains zero or more occurrences of n
console.log(text3.match(/lo*/g));
console.log(text3.match(/lo*/i));
console.log(typeof text3.match(/lo*/i));
console.log(" ");

// n? Matches any string that contains zero or one occurrences of n
console.log(text3.match(/loo?/g));
console.log(text3.match(/lo?/g));
console.log(" ");

// n{X} quantifier matches any string that contains a sequence of X n's.
const text5 = "10, 200, 3000, 40000, 51000, 65000, 750, 8225?";
console.log(text5.match(/\d{3}/g));
console.log(" ");

// n{X,Y} quantifier matches any string that contains a sequence of X to Y n's. X and Y must be a number.
console.log(text5.match(/\d{2,3}/g));
console.log(" ");

// n{X,} quantifier matches any string that contains a sequence of at least X n's.
console.log(text5.match(/\d{3,}/g));
console.log(" ");

// n$ quantifier matches any string with n at the end of it.
const text6 = "Hellooo World! Hello there is W3Schools";
console.log(text6.search(/ools$/g));
console.log(text6.match(/ools$/g));
console.log(" ");

// ^n quantifier match any string with n at the BEGINNING of it.
console.log(text6.search(/^Hell/g));
console.log(text6.match(/^Hell/g));
console.log(" ");

// ?=n quantifier matches any string that is followed by a specific string n.
console.log(text6.search(/there(?= is)/g));
console.log(text6.match(/there(?= is)/g));
console.log(text6.search(/ell(?=ooo)/g));
console.log(text6.match(/ell(?=ooo)/g));
console.log(" ");

// ?!n quantifier match any string that is NOT followed by a specific string n.
console.log(text6.search(/there(?! is)/g));
console.log(text6.match(/there(?! is)/g));
console.log(text6.search(/there(?! Hello)/g));
console.log(" ");




console.log(" ");
console.log("---PROPERTIES---");
console.log("---1) constructor---");
// constructor property returns the constructor function for an object. The return value is a reference to the function, not the name of the function reference() { [native code] }. Returned values: function RegExp(), function Number(), function String().
// syntax: RegExpObject.constructor
console.log((/Hello/g).constructor, typeof (/Hello/g).constructor);
console.log((9325).constructor, typeof (9325).constructor);
console.log(('aaa').constructor, typeof ('aaa').constructor);

console.log(" ");
console.log("---2) RegExp global---");
// The global property specifies whether or not the "g" modifier is set. This property returns true if the "g" modifier is set, otherwise it returns false. Boolean.
const text7 = /W3S/g;
console.log(text7.global, typeof text7.global);

console.log(" ");
console.log("---3) RegExp ignoreCase---");
// The ignoreCase property specifies whether or not the "i" modifier is set. This property returns true if the "i" modifier is set, otherwise it returns false.
const text8 = /W3S/i;
console.log(text8.ignoreCase, typeof text8.ignoreCase);

console.log(" ");
console.log("---4) lastIndex---");
// lastIndex property specifies the index at which to start the next match. Note: This property only works if the "g" modifier is set. This property returns an integer that specifies the character position immediately after the last match found by exec( ) or test( ) methods. Note: exec( ) and test( ) reset lastIndex to 0 if they do not get a match. Syntax: RegExpObject.lastIndex
const text9 = "The rain in Spain stays mainly in the plain";
console.log(text9);
const pattern1 = /rain/g;
console.log(pattern1.test(text9), pattern1.lastIndex);
console.log(typeof pattern1.test(text9), typeof pattern1.lastIndex);
console.log(/rrr/g.test(text9), /rrr/g.lastIndex);

console.log(" ");
console.log("---5) multiline ---");
// The multiline property specifies whether or not the m modifier is set. This property returns true if the "m" modifier is set, otherwise it returns false. Syntax: RegExpObject.multiline.
console.log(/rrr/m.multiline);
console.log(/rrr/gi.multiline);



console.log(" ");
console.log("---RegExp METHODS---");
console.log("---1) test() method---");
// The test() method is a RegExp expression method. It searches a string for a pattern, and returns true or false, depending on the result. Syntax: /e/.test("text");
const text4 = "Labas1 rytas labas2 suraitytas, o už lango stovi labas3 Vytas";
const pattern0 = /labas5/gi;
console.log(pattern0.test(text4), typeof pattern0.test(text4)); 
console.log(/Rytas/gi.test("Labas1 rytas labas2 suraitytas, o už lango stovi labas3 Vytas"));

console.log(" ");
console.log("---2) exec() method---");
// The exec() method tests for a match in a string. If it finds a match, it returns a result array, otherwise it returns null. 	String Required. The string to be searched. Syntax: RegExpObject.exec(string).
console.log(/labas/gi.exec(text4), typeof /labas/gi.exec(text4));
console.log(/baxxx/g.exec(text4), typeof /baxxx/g.exec(text4));

console.log(" ");
console.log("--3) toString() method--");
// The toString() method returns the string value of the regular expression. Syntax: RegExpObject.toString()
console.log(/Hello world/g.toString(), typeof /Hello world/g.toString());

console.log(" ");