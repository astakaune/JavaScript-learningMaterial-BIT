function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ---------------WHILE--------------

let i = rand(0, 5);

if (i < 5) {
    console.log('IF');
} else {
    console.log('niekas');
}

console.log(' ');
console.log('--------2ex---------');

console.log(i);
while (i != 5) {
    i = rand(0, 6);
    console.log('WHILE', i++);
}
console.log(' ');
console.log('--------3ex---------');

// ---------------DO ...WHILE--------------

let y = 5;
// nuo 0 iki daug
while (y != 5) {
    y = rand(0, 10);
    console.log('WHILE', y);
}
// nuo 1 iki daug
do {
    y = rand(0, 10);
    console.log('DO WHILE', y);
} while (y != 5);

console.log(' ');
console.log('--------4ex---------');
// ---------------FOR--------------

let j = 0;
while (j < 5) {
    console.log('JOTAS', j);
    j++;
}

console.log(' ');
console.log('--------5ex---------');
// gaunasi tas pats rezultate?

for (let t = 0; t < 5; t++) {
    console.log('Totas', t);
}



