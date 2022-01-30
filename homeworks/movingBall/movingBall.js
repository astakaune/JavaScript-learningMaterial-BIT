function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//random coordinates
function go() {
	ball.style.top = rand(0, x) + "px";
	ball.style.left = rand(0, y) + "px";
}

//set screen
let x = window.innerWidth - 150;
let y = window.innerHeight - 150;
const ball = document.querySelector('.ball');

//resize event
window.addEventListener("resize", () => {
	x = window.innerWidth - 150;
	y = window.innerHeight - 150;
});

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log("Screen Width", x, "Screen Height", y);


//releases ball
let intervalID;
let isGoing = false;
ball.addEventListener("click", () => {
	if (isGoing) {
		clearTimeout(intervalID);
		isGoing = false;
	} else {
		go();
		intervalID = setInterval(go, 1000);
		isGoing = true;
	}
});