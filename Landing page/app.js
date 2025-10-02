// ------- FUNCIÓN LIGHTBOX --------- //

let imagenes = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let imagenGrande = document.getElementById("imagenGrande");
let cerrar = document.getElementById("cerrar");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let indiceActual = 0; 

// Abrir lightbox
imagenes.forEach(function(img, index) {
  img.addEventListener("click", function() {
    imagenGrande.src = img.src;
    lightbox.style.display = "block";
    indiceActual = index; // guardamos la posición de la imagen clicada
  });
});

// Cerrar
cerrar.addEventListener("click", function() {
  lightbox.style.display = "none";
});

// Siguiente imagen
next.addEventListener("click", function() {
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0; // vuelve al inicio
  }
  imagenGrande.src = imagenes[indiceActual].src;
});

// Anterior imagen
prev.addEventListener("click", function() {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1; 
  }
  imagenGrande.src = imagenes[indiceActual].src;
});

// --------------------------------------------------------- //

// ------- FUNCIÓN VALIDACIÓN DE DATOS EN CONTACTO --------- //

let formularioContacto = document.querySelector(".contact-form");
let respuesta = document.getElementById("respuesta");

formularioContacto.addEventListener("submit", function(event) {
  event.preventDefault(); // evita que la página se recargue

  let nombre = document.getElementById("name").value;
  let correo = document.getElementById("email").value;
  let mensaje = document.getElementById("message").value;

  if(nombre && correo && mensaje) {
    alert ("Gracias " + nombre + 
      ", hemos recibido tu mensaje y te responderemos a " + correo);
    
    formularioContacto.reset(); // limpiar los campos
  } else {
    respuesta.textContent = "Por favor completa todos los campos.";
    respuesta.style.color = "red";
  }
});

// --------------------------------------------------------- //

// ------- FUNCIÓN CAMBIAR DE COLOR CON BOTONES --------- //

let btnRojo = document.getElementById("rojo");
let btnVerde = document.getElementById("verde");
let btnAmarillo = document.getElementById("amarillo");

btnRojo.addEventListener("click", function() {
  document.documentElement.style.setProperty("--main-color", "red");
});

btnVerde.addEventListener("click", function() {
  document.documentElement.style.setProperty("--main-color", "green");
});

btnAmarillo.addEventListener("click", function() {
  document.documentElement.style.setProperty("--main-color", "yellow");
});

// --------------------------------------------------------- //

// ------- FUNCIÓN VALIDAR DATOS EN NEWS LETTER --------- //

let newsletterForm = document.querySelector(".newsletter-signup");

newsletterForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let email = newsletterForm.querySelector("input[type='email']").value;
  if(email) {
    alert("¡Gracias por suscribirte! Te enviaremos novedades a " + email);
    newsletterForm.reset();
  } else {
    alert("Por favor, ingresa un correo válido.");
  }
});

// --------------------------------------------------------- //

// ------- FUNCIÓN SCROLL --------- //

let btnTop = document.getElementById("btnTop");


window.addEventListener("scroll", function() {
  if (window.scrollY > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

// Función para volver arriba
btnTop.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});