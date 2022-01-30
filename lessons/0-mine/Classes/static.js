console.log(" ");
console.log("-------CLASSES STATIC------");
/*Static class methods are defined on the class itself.
You cannot call a static method on an object, only on an object class.*/
console.log("-------ex1-----");

class Car {
	constructor(carName) {
		this.cr = carName;
	}
	static hello(){
		return "Hello!";
	}
}
let myCar = new Car("Audi");
// You can call 'hello()' on the Car Class:
console.log(Car.hello());
// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.
console.log(myCar);
console.log(myCar.hello);

console.log(" ");
console.log("-------ex2-----");
// If you want to use the myCar object inside the static method, you can send it as a parameter:
class Car1 {
	constructor(name) {
		this.cr = name;
	}
	static hello(x){
		return "Hello, " + x.cr;
	}
}
let myCar1 = new Car1("Volvo");

// console.log(Car1.hello());
console.log(Car1.hello(myCar1))


