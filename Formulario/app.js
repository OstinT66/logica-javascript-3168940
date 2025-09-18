document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('#form');
  const nombreInput = document.querySelector('#nombre');
  const opcionSelect = document.querySelector('#opcion');
  const confirmacion = document.querySelector('#mensajeConfirmacion');
  const imgEquipo = document.querySelector('#img_equipo');
  const textSaludo = document.querySelector('#text_saludo');
  const equipoUsuario = document.querySelector('#equipoUsuario');
  const userPage = document.querySelector('#userPage');
  const volver = document.querySelector('#volver');

  userPage.style.display = 'none';
  volver.style.display = 'none';

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const radioOpcion = document.querySelector('input[name="radioOpcion"]:checked');
    const usuario = {
      nombre: nombreInput.value.trim(),
      color: opcionSelect.value,
      equipo: radioOpcion ? radioOpcion.value : null
    };

    if (!usuario.nombre || !usuario.color || !usuario.equipo) {
      alert('Por favor completa todos los campos.');
      return;
    }

    document.body.style.background = usuario.color;
    confirmacion.textContent = `¡Gracias por enviar el formulario!`;
    confirmacion.style.display = 'block';
    userPage.style.display = 'block';
    formulario.style.display = 'none';
    textSaludo.textContent = `Hola ${usuario.nombre}`;
    equipoUsuario.textContent = usuario.equipo;
    volver.style.display = 'inline-block';
    formulario.reset();
  });

  volver.addEventListener('click', () => {
    userPage.style.display = 'none';
    formulario.style.display = 'block';
    confirmacion.style.display = 'none';
    document.body.style.background = '#f9f9f9';
    volver.style.display = 'none';
  });
});