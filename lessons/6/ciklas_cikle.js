

let kint1 = 'DIDELIS START';
let kint2 = 'B';
let kint3 = 'DIDELIS END';
let kint4 = 3;

for (let i = 0; i < 4; i++) {
    console.log(kint1);
    for (let j = 0; j < kint4; j++) {
        console.log(kint2, j);
    }
    console.log(kint3);
    kint4++;
}

/*

DIDELIS START

B

B

B

DIDELIS END

DIDELIS START

B

B

B

B

DIDELIS END

DIDELIS START

B

B

B

B

B

DIDELIS END

DIDELIS START

B

B

B

B

B

B

DIDELIS END

*/
