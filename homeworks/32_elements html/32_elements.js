
/*
su JS dinami6kai sugeneruoti 5 juodus kvadratus 150*150px 
kurie būtų absoliučios pozicijos ir atsitiktine tvarka būtų 
išdėlioti po visą ekraną.
Nustatyti mouse poziciją.


*/

const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const create = () => {
    for (let i = 1; i <= 5; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.top = rand(0, h) + 'px';
        square.style.left = rand(0, w) + 'px';
        document.body.appendChild(square);
    }
}

let coordinates;

const go = (e) => {
    console.log(e.pageX, e.pageY);
    const newX = e.pageX - coordinates[1];
    const newY = e.pageY - coordinates[0];
    coordinates[4].style.left = newX + 'px';
    coordinates[4].style.top = newY + 'px';
    // console.log(coordinates);
}


let w = window.innerWidth - 190;
let h = window.innerHeight - 190;

window.addEventListener('resize', () => {
    w = window.innerWidth - 190;
    h = window.innerHeight - 190;
});

create(5);

document.querySelectorAll('.square').forEach(s => {
    s.addEventListener('mousedown', (e) => {
        e.target.style.cursor = 'grabbing';
        coordinates = [e.pageX, e.pageY, parseInt(e.target.style.left), parseInt(e.target.style.top)];
        document.body.removeEventListener('mousemove', go);
        console.log(e.pageX, e.pageY);
    });
});

document.querySelectorAll('.square').forEach(s => {
    s.addEventListener('mouseup', (e) => {
        e.target.style.cursor = 'grab';
        document.body.removeEventListener('mousemove', go);
        // console.log('mouse up');
    });
});


// document.body.addEventListener('mousemove', go);