const flotante = document.getElementById('flotante');
const cuadro = document.getElementById('cuadro');
const imgprincipal = document.getElementById('imgprincipal');
const minis = document.querySelectorAll('.min');
const equis = document.getElementById('equis');
const sig = document.getElementById('sig');
const ant = document.getElementById('ant');

let current = 0;

function mostrarLightbox(index) {
    imgprincipal.src = minis[index].src;
    flotante.style.top = '0';
    current = index;
}
function cerrarLightbox() {
    flotante.style.top = '-100vh';

}

minis.forEach((img, idx) => {
    img.addEventListener('click', () => mostrarLightbox(idx));
});

equis.addEventListener('click', () => {
    flotante.style.top = '-100vh';
});

sig.addEventListener('click', () => {
    current = (current + 1) % minis.length;
    mostrarLightbox(current);
console.log(current);
});


ant.addEventListener('click', () => {
    current = (current - 1 + minis.length) % minis.length;
    mostrarLightbox(current);
console.log(current);
});

cuadro.addEventListener('click', () => {
    flotante.style.top = '-100vh';
});