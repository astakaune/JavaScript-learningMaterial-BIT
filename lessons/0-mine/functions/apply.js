console.log(" ");
console.log("-------Function APPLY------");
/*With the apply() method, you can write a method that can be used on different objects.  */

console.log(" ");
console.log("-------apply() Method-----");
// The apply() method is similar to the call() method (previous chapter). In this example the fullName method of person is applied on person1:
const person = {
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};
const person1 = {
	firstName: "Mary",
	lastName: "Doe",
};
console.log(person.fullName.apply(person1));

console.log(" ");
console.log("------call() vs apply()-----");
/* The difference is:
The call() method takes arguments separately.
The apply() method takes arguments as an array.
The apply() method is very handy if you want to use an array instead of an argument list. */
const person00 = {
	fullName: function (city, country) {
		return (
			this.firstName + " " + this.lastName + "," + city + "," + country
		);
	},
};
const person11 = {
	firstName: "John",
	lastName: "Doe",
};
console.log(person00.fullName.apply(person11, ['Kaunas', 'LT']));


console.log(" ");
console.log("-----Max Method on Arrays-----");
// You can find the largest number (in a list of numbers) using the Math.max() method:
console.log('max', Math.max(1, 2, 5));
// The first argument (null, Math, " ", 0) does not matter. It is not used in this example.
console.log('max', Math.max.apply(null, [1, 2, 5, 9]));





