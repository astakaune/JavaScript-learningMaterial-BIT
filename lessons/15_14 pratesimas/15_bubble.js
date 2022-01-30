const dukra = document.querySelector('#d');
const tevas = document.querySelector('#t');
const senelis = document.querySelector('#s');
//viskas susije. padarom eventa dukrai, susiklikina ir senelis:
// divas dive dive. bubble nueina iki bodzio.
// stopPropagation sustabdo bubblinima.
// pvz paklikinus dukra, nueina iki tevo. 
// o paklikinus teva - eventas niekur nenueina

dukra.addEventListener('click', e => {
    e.preventDefault();
    console.log('Dukrele');
});


senelis.addEventListener('click', e => {
    console.log('Senis saltis');
});


tevas.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Tetukas');
});

const kvads = document.querySelectorAll('.kvad').forEach(k => {
    k.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();//nebedaro, ka turetu daryti, pvz 
        // k.style.borderColor = 'blue'; //tas pats uzrasymas kaip zemiau
        e.target.style.borderColor = 'blue'; //tik taip paimam ta elementa,
        // kuriame ivyko eventas
    })
})