console.log('object vs Array ');

//masyvas - array
//susidelioja pagal indeksus
const array = [3, 6, 9];


//object - objektas
//objektuose laikome rinkinius, funkcijas, metodus ir pan.
//negalkime palaikyti tvarkos. rusiavimas beprasmis, 
// susidelioja automatiskai pagal abecele
const obj = {nulis: 3, vienas: 6, du: 9};


console.log('masyvas', array);
console.log('objektas', obj);

console.log(' ');
array.push(22);
obj.trys = 22;
obj.suma = function(a, b) {return a + b};


let suo = 'bobikas';
//norint pasiekti bobika, 
// obj.bobikas = 55; taip netinka
// reikia panaikinti taska ir panaudoti[]
obj['bobikas'] =55;


console.log(' ');
console.log('objektas', obj, obj.vienas, obj.suma(5, 9)); //galima ideti sumos funkcija
console.log('masyvas', array, array[1]);

console.log('------ex1------');
//sukurti tuscia objekta ir jam priskirti 2 savybes:
//  propertyA ir propertyB. abi savybes lygios skaiciui 25.
const object1 = {};
object1.propertyA = 25;
object1.propertyB = 25;
console.log('object1', object1);

console.log('------ex2------');
// Objektui pridėti savybę sumaAB, kuri yra lygi savybių sumai 
const object2 = {};
object2.propertyA = 25;
object2.propertyB = 25;
object2.suma = object2.propertyA + object2.propertyB;
console.log('object2', object2, 'object2.suma', object2.suma);

console.log('------ex3------');
//3. Objektui pridėti savybę objektasC, kuri yra lygi tuščiam objektui
const object3 = {};
object3.propertyA = 25;
object3.propertyB = 25;
const objectC = {};
object3.objectC = {};
console.log('object3', object3);

console.log('------ex4------');
//4. Objekto savybei objektasC priskirti dvi savybes savybeA 
// ir savybeB. Abi savybės lygios skaičiui 42
objectC.propertyA = 42;
objectC.propertyB = 42;
console.log('objectC', objectC);

console.log('------ex5------');
//5. Objekto savybei objektasC pridėti savybę sumaAB, kuri yra
//  lygi objekto objektasC savybių savybeA ir savybeB sumai
objectC.sumaAB = objectC.propertyA + objectC.propertyB;
console.log('objectC', objectC);

console.log('------ex6------');
//6. Objektui pridėti savybes iš masyvo: 
// const objektoSavybes = ['bobikas', 'sarikas', 'margis']; 
// kurios lygios 0
const objektoSavybes = ['bobikas', 'sarikas', 'margis'];
const objektas6 = {};
objektoSavybes.forEach((k) => {objektas6[k] = 0});
console.log('objektas6', objektas6);


