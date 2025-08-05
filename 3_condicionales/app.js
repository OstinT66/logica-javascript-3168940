/* let nota = 5;
console.log( " He realizado mi examen." );

if (nota < 5) {
    calificacion = "suspendido";
}
if (nota >= 5) {
    calificacion = "aprobado";
}

console.log(" estoy ", calificacion); */


// Ejercicio 1: 

l/* et nombre = (prompt ("Escriba su nombre"));

nombre = nombre.toLocaleLowerCase().trim();

if (nombre == "mario" || nombre == "carlos") {
    alert(" Usted es VIP")
     }else {
        alert (" Ahora diganos su edad")
     }

let edad = (prompt ("escriba su edad"))

if (edad < 18){
    alert (" menores de edad, no pasan")
} else {
    alert ("pase sin problema")
} */

//EJERCIO 2: 

// Pedir datos al usuario
let nombre = prompt("¿Cuál es tu nombre?").toLowerCase().trim();
let estatura = parseInt(prompt("¿Cuál es tu estatura en cm?"));
let velocidad = parseInt(prompt("¿Cuál es tu velocidad en km/h?"));
let edad = parseInt(prompt("¿Cuál es tu edad en años?"));

// Validar si el usuario cumple con la estatura y velocidad
if (estatura >= 170 && velocidad >= 27) {
  alert("Felicidades, cumples con los requisitos para ingresar al equipo.");

  // Verificar edad para determinar división
  if (edad < 18) {
    alert("Eres menor de edad, puedes ingresar a la división juvenil.");
  } else {
    alert("Eres mayor de edad, puedes ingresar a la división adulta.");
  }
} else {
  alert("Lo siento, no cumples con los requisitos para ingresar al equipo.");
}