function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('---- ex1----');
//atspausdinti kiek yra raidziu a

function kiekARaidziu(string) {
    let pirstukas = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            pirstukas++;
        }
    }
    return pirstukas;
}

console.log('Yra a raidžių:', kiekARaidziu('Papūga'));
console.log('Yra a raidžių:', kiekARaidziu('Vilkas'));
console.log('Yra a raidžių:', kiekARaidziu('Zuikis'));



console.log('---- ex2----');
//kiek yra nurodytu raidziu
function kiekRaidziu(string1, raide) {
    let pirstukas1 = 0;
    for (let i = 0; i < string1.length; i++) {
        if (string1[i].toLowerCase() === raide) {
            pirstukas1++;
        }
    }
    return pirstukas1;
}

console.log('Yra p raidžių:', kiekRaidziu('Papūga', 'p'));
console.log('Yra k raidžių:', kiekRaidziu('Vilkas', 'k'));
console.log('Yra u raidžių:', kiekRaidziu('Zuikis', 'u'));



console.log('---- ex3----');
// parasyti zodi is kitos puses
function reverseWord(word) {
    let out = '';
    for (let i = 0; i < word.length; i++) {
        out = word[i] + out; //s //us //lus //alus
    }
    return out;
}
console.log(reverseWord('sula')); //alus



console.log('---- ex4----');
//stringe visas balses pakeisti i *
// pvz: Papūga ====> P*p*g*

function balses(word) {
    let out = '';
    for (let i = 0; i < word.length; i++) {
        out = word[i] + out;
    }
    return out;
}
console.log(balses('sula'));


