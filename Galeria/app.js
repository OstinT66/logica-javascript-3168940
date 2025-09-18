
const contenedor = document.getElementById('contenedor');
const titulo = document.querySelector('.titulo');
const btnSiguiente = document.querySelector('.Siguiente');
const btnAnterior = document.querySelector('.Anterior');

let indice = 0;
const totalImagenes = document.querySelectorAll('#contenedor > *').length;

btnSiguiente.addEventListener('click', () => {
    indice++;
    if (indice >= totalImagenes) {
        indice = 0;
    }
    actualizarCarrusel();
});

btnAnterior.addEventListener('click', () => {
    indice--;
    if (indice < 0) {
        indice = totalImagenes - 1;
    }
    actualizarCarrusel();
});

function actualizarCarrusel() {
    const desplazamiento = -indice * 404; 
    contenedor.style.marginLeft = desplazamiento + 'px';
    titulo.textContent = `Imagen ${indice + 1}`;
}


actualizarCarrusel();