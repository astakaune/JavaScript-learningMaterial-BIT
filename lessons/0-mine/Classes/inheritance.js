console.log(" ");
console.log("-------CLASSES Inheritance------");

console.log("-------extends keyword-----");
/*To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class:
The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.*/
console.log("-------ex1-----");
// Create a class named "Model" which will inherit the methods from the "Car" class:
class Car {
	constructor(cr) {
		this.carName = cr;
	}
	present() {
		return "I have a " + this.carName;
	}
}
class Model extends Car {
	constructor(cr, mod) {
		super(cr);
		this.model = mod;
	}
	show() {
		return this.present() + ", it is a " + this.model;
	}
}
let myCar = new Model("Ford", "Sierra");
console.log(myCar.show());

console.log(" ");
console.log("-------ex2-----");
class Formule1 {
	constructor(iksas) {
		this.x = iksas;
	}
	formule1() {
		return "iksas " + this.x;
	}
}
class Formule2 extends Formule1 {
	constructor(iksas, ygrikas) {
		super(iksas);
		this.y = ygrikas;
	}
	formule2() {
		return this.formule1() + " + ygrikas " + this.y + " yra= " + (this.x + this.y);
	}
}
const myFormule = new Formule2(2, 2);
const myFormule1 = new Formule2(2, 10);
console.log(myFormule.formule2());
console.log(myFormule1.formule2());

console.log(" ");
console.log("-------Getters and Setters-----");
/* Classes also allows you to use getters and setters. It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.
To add getters and setters in the class, use the get and set keywords.
Note: even if the getter is a method, you do not use parentheses when you want to get/set the property value.
The name of the getter/setter method cannot be the same as the name of the property, in this case carname.
Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property*/
console.log(" ");
console.log("-------ex1-----");
// Create a getter and a setter for the "_cr" property:
class Auto {
	constructor(brand) {
		this._cr = brand;
	}
	get cr() {
		return this._cr;
	}
	set cr(carName) {
		this._cr = carName;
	}
}
let myAuto = new Auto("Ford");
console.log(myAuto.cr);
// Use a setter to change the carname to "Volvo":
myAuto.carName = "Volvo";
console.log(myAuto.carName);

console.log(" ");
console.log("-------ex2-----");

class Auto1 {
	constructor(autoName) {
		this._auto = autoName;
	}
	get auto() {
		return this._auto;
	}
	set auto(x) {
		this._auto = x;
	}
}
let auto1 = new Auto1("Audi");
console.log(auto1.auto);
// Use a setter to change the carname to "Volvo":
auto1.auto = "Volvo";
console.log(auto1.auto);

console.log(" ");
console.log("----------Hoisting--------");
/*Unlike functions, and other JS declarations, class declarations are not hoisted.
That means that you must declare a class before you can use it:
Note: For other declarations, like functions, you will NOT get an error when you try to use it before it is declared, because the default behavior of JavaScript declarations are hoisting (moving the declaration to the top).*/
//You cannot use the class yet.
//myCar = new Car("Ford")
//This would raise an error.

class Car {
	constructor(brand) {
		this.carname = brand;
	}
}
//Now you can use the class:
let myCar = new Car("Ford");
