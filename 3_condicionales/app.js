/* let nota = 5;
console.log( " He realizado mi examen." );

if (nota < 5) {
    calificacion = "suspendido";
}
if (nota >= 5) {
    calificacion = "aprobado";
}

console.log(" estoy ", calificacion); */


// Condicionales en cadena

let nombre = (prompt ("Escriba su nombre"));

nombre = nombre.toLocaleLowerCase();

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
}