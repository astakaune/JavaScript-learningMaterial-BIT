// liniuote
const line = document.querySelector('#line');
for (let l = 0; l <=3000; l += 200) {
    const part = document.createElement('div');
    part.classList.add('part');
    const digit = document.createElement('span');
    part.appendChild(digit);
    digit.appendChild(document.createTextNode(l + 'px'));
    line.appendChild(part);
}

document.addEventListener('scroll', () => console.log(window.scrollY));


//2 rutuliuko pozicija fixed
const ball = document.querySelector('.ball');
ball.style.position = "fixed";
// arba antras variantas su JS:
// document.addEventListener('scroll', () => {
//     ball.style.top = window.scrollY + 400 + 'px';
//     console.log(window.scrollY);
// });


//3 Užvažiuoja iki viršaus skrolinant puslapį ir tada nejuda skrolinant
const ball1 = document.querySelector('.ball1');
document.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        ball1.style.top = window.scrollY + 'px';
        console.log(window.scrollY);
    }
});



