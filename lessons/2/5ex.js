
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let no1 = rand(-10, 10);
let no2 = rand(-10, 10);
let no3 = rand(-10, 10);



console.log('All numbers:', no1, no2, no3);




if (no1 > 0) {
    console.log('No1:', '-', no1, '-');
} else if (no1 < 0) {
    console.log('No1:', '+', no1, '+');
} else {
    console.log('No1:', '*', no1, '*');
}

if (no2 > 0) {
    console.log('No2:', '-', no2, '-');
} else if (no2 < 0) {
    console.log('No2:', '+', no2, '+');
} else {
    console.log('No2:', '*', no2, '*');
}

if (no3 > 0) {
    console.log('No3:', '-', no3, '-');
} else if (no3 < 0) {
    console.log('No3:', '+', no3, '+');
} else {
    console.log('No3:', '*', no3, '*');
}