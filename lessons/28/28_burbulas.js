class Burbulai { //1
    static burbulai;  //4
    static w; //9
    static h; //9
    static start = false; //20

    static naujasBurbulas() { 
        if (!this.start) {//20
            document.querySelector('body').addEventListener('click', () => this.naujasBurbulas());
            this.start = true;
        }
        if (this.w === undefined || this.h === undefined) { //11
            this.ekranoDydis();
        }
        if (!this.burbulai) { //5
            this.burbulai = new Map();
        }
        const b = new Burbulai();
        this.burbulai.set(b.id, b);
    }

    static ekranoDydis() { //10
        this.w = window.innerWidth - 100;
        this.h = window.innerHeight - 100;
    }

    static rand(min, max) { //8
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static pagautas(b) {
        document.querySelector('body').removeChild(b.element); //17. trynimas is html
        this.burbulai.delete(b.id); //17. trynimas is mapo
        // console.log(this.burbulai);
    }

    constructor() { //2 ir 3
        this.id = Math.floor(Math.random() * 9000000) + 1000000;
        this.element = document.createElement('div');
        this.element.classList.add('ball');
        document.querySelector('body').appendChild(this.element);
        this.element.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16); //18
        this.varyk();
        setTimeout(this.varyk, 100);
        this.element.addEventListener('click', (e) => { //16
            e.stopPropagation();
            this.constructor.pagautas(this);
        })
        document.querySelector('body').appendChild(this.element);
        this.timerId = setInterval(this.varyk, 2000);
    
    }

    varyk = () => {
        this.element.style.top = this.constructor.rand(0, this.constructor.h) + 'px';
        this.element.style.left = this.constructor.rand(0, this.constructor.w) + 'px';
    }

}

for (let i = 1; i <= 5; i++) { //14
    Burbulai.naujasBurbulas();
}




// function rand(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function go() {
//     ball.style.top = rand(0, h) + 'px';
//     ball.style.left = rand(0, w) + 'px';
// }

// let w = window.innerWidth - 200;
// let h = window.innerHeight - 200;

// window.addEventListener('resize', () => {
//     w = window.innerWidth - 200;
//     h = window.innerHeight - 200;
// });


// // const ball = document.querySelector('.ball');

// let intervalID;
// let isGo = false

// // ball.addEventListener('click', () => {
// //     if (isGo) {
// //         clearTimeout(intervalID);
// //         isGo = false;
// //     } else {
// //         go();
// //         intervalID = setInterval(go, 3000);
// //         isGo = true;
// //     }


// // });

// class Burbulai {

//     static burbulai;
//     static w;
//     static h;

//     static start() {
//         document.querySelector('body').addEventListener('click', () => this.naujasBurbulas());
//         this.ekranoDydis();
//         this.burbulai = new Map();
//         const startButton = document.querySelector('button#start');
//         startButton.addEventListener('click', e => {
//             e.stopPropagation();
//             for (let i = 1; i <= 5; i++) {
//                 setTimeout(this.naujasBurbulas, this.rand(1, 2000));
//             }
//             startButton.style.display = 'none';
//         });
//     }

//     static naujasBurbulas = () => {
//         const b = new Burbulai();
//         this.burbulai.set(b.id, b);
//     }

//     static ekranoDydis() {
//         this.w = window.innerWidth - 200;
//         this.h = window.innerHeight - 200;
//     }

//     static rand(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//     static pagautas(b) {
//         document.querySelector('body').removeChild(b.element); // trynimas iš htmlo
//         this.burbulai.delete(b.id); // trynimas iš mapo
//     }

//     constructor() {
//         this.id = Math.floor(Math.random() * 9000000) + 1000000;
//         this.element = document.createElement('div');
//         this.element.classList.add('ball');
//         this.element.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//         this.varyk();
//         setTimeout(this.varyk, 30);
//         this.element.addEventListener('click', e => {
//             e.stopPropagation();
//             this.constructor.pagautas(this);
//         })
//         document.querySelector('body').appendChild(this.element);
//         this.timerId = setInterval(this.varyk, 3000);

//     }

//     varyk = () => {
//         this.element.style.top = this.constructor.rand(0, this.constructor.h) + 'px';
//         this.element.style.left = this.constructor.rand(0, this.constructor.w) + 'px';
//     }

// }



// Burbulai.start();

// // clearTimeout(intervalID)