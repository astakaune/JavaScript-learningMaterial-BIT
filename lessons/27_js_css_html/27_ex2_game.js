function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//random coordinates
function go() {
    ball.style.top = rand(0, h) + 'px';
    ball.style.left = rand(0, w) + 'px';
}

//set screen
let w = window.innerWidth - 100;
let h = window.innerHeight - 100;

//resize event
window.addEventListener('resize', () => {
     w = window.innerWidth - 100;
     h = window.innerHeight - 100;
    console.log(window.innerWidth);
});


console.log('Screen Width', w, 'Screen Height', h);
const ball = document.querySelector('.ball');


//paleidzia rutulyna
let intervalID;
let isGo = false;
ball.addEventListener('click', () => {
    if (isGo) {
        clearTimeout(intervalID);
        isGo = false;
    } else {
        console.log(intervalID);
        go();
        intervalID = setInterval(go, 2000);
        isGo = true;
    }
});


// clearTimeout(intervalID);

// click on ball === stop




//skaiciuoja sekundes - laikrodukas
// let count = 0;
// function go() {
//     console.log(++count);
// }

