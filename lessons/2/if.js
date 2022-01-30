
function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let check = rand(1, 9);

if (check < 5) {
    console.log('TAIP!');
    console.log(check);
}
else if (check == 5) {
    console.log('Lygu!');
    console.log(check);
}
else {
    console.log('NE!');
    console.log(check);
}


console.log('Ate!');
