// https://developer.mozilla.org/en-US/docs/Web/Events

console.log('--------------');

const pressButton = document.querySelector('button');
console.log(pressButton);

// kiekvienas event Listener gali stebeti tik 1 eventa.
//jei reikia stebeti 2 eventus, reikia 2 listneriu.
pressButton.addEventListener('click', e => {
    console.log(e);
    pressButton.style.border = '10px solid red';
});

pressButton.addEventListener('dblclick', e => {
    console.log(e);
        pressButton.style.display = 'none';
});


pressButton.addEventListener('mouseover', () => {
        pressButton.style.color = 'red';
    // pressButton.style.display = 'none';
});

pressButton.addEventListener('mouseout', () => {
        pressButton.style.color = 'black';
    // pressButton.style.display = 'none';
});

