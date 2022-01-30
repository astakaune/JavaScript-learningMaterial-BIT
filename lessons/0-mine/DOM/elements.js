// console.log(" ");
// console.log("-------HTML DOM-Elements------");
// /*This page teaches you how to find and access HTML elements in an HTML page.*/
// console.log("-------Finding by Id------");
// /*This page teaches you how to find and access HTML elements in an HTML page.*/
// const intro = document.getElementById("intro");
// document.getElementById("demo").innerHTML = document.getElementById("demo").innerText + " + " + intro.innerText;

// console.log("-------Finding by Tag Name------");
// // const intro1 = document.getElementsById('intro1').innerHTML;
// document.getElementsByTagName("p").innerText = "Hohny, ou je..";

// console.log("-------Finding by Class Name------");
// // const intro1 = document.getElementsById('intro1').innerHTML;
// document.getElementsByClassName("demo").innerText = "Hohny, ou je..";

// console.log("-------Finding by CSS Selectors------");
// // const intro1 = document.getElementsById('intro1').innerHTML;
// const x = document.querySelectorAll("h2.demo");
// document.getElementById("intro1").innerHTML = "yes yes yes" + x.innerHTML;

// console.log("-------Changing HTML Style------");
// const y = document.getElementById("demo2");
// y.style.color = "red";
// y.style.fontSize = "10px";
// y.style.border = "1px solid blue";
// y.style.textAlign = "center";

// const z = document.getElementById("demo3DIV");
// z.style.border = "3px solid yellow";
// z.style.display = "flex";
// z.style.flexDirection = "column";
// z.style.alignItems = "center";

// console.log("-------Using Events------");
// document.getElementsByTagName("button").onclick;
// // z.style.backgroundColor = 'black';
// // z.style.border = '3px dotted red';

console.log("-------Animation------");
function myMove() {
	let id = 0;
	const element = document.getElementById("animation");
	let pos = 0;
	clearInterval(id);
	id = setInterval(frame, 0);
	function frame() {
		if (pos == 150) {
			clearInterval(id);
		} else {
			pos++;
			element.style.top = pos + "px";
			element.style.left = pos + "px";
		}
	}
}
function myMoveBack() {
	let id = 0;
	const element = document.getElementById("animation");
	let pos = 150;
	clearInterval(id);
	id = setInterval(frame, 0);
	function frame() {
		if (pos == 0) {
			clearInterval(id);
		} else {
			pos--;
			element.style.top = pos + "px";
			element.style.left = pos + "px";
		}
	}
}

let counter = 0;

console.log("-------addEventListener------");
document.getElementById('button2').addEventListener('click', displayDate);
function displayDate(){
    document.getElementById('demo4').innerHTML = Date();
}


console.log("-------API-Gelocation------");
const x = document.getElementById("demo");
function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}
// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }

console.log("-------API-localStorage------");
localStorage.setItem("name","John Doe");
document.getElementById("demo1").innerHTML = localStorage.getItem("name");

window.sessionStorage.setItem("vardas","Asta Pasta");
document.getElementById("demo1").innerHTML = window.sessionStorage.getItem("name");


console.log("-------API-Fetch API------");
let file = "./intro.js"
fetch (file)
.then(x => x.text())
.then(y => document.getElementById("intro1").innerHTML = y);