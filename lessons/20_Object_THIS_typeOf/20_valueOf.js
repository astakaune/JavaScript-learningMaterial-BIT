
console.log('-----valueOf-------');

String.prototype.labas = function() {
    console.log('labas, ' + this.valueOf());
};

let a = 'kuku';
let b = 'lala';


String.prototype.labas = function() {
    console.log('labas, ' + this.valueOf());
};

a.labas();
b.labas();



console.log('-----console spausdina su CSS-------');

console.log('%c Oh my heavens', 'background-color: red; color: #rrgg00; margin: 200px;');