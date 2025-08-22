// ---------------------- EJERCICIO 1 // ---------------------- 
/* let numero= Number (prompt ("Dame un numero"))

if (numero >=0) {   
    alert ("El numero es positivo")
} else { (numero <=0)
    alert ("El numero es negativo")
}
//---------------------------------------------------------------- //

// ---------------------- EJERCICIO 2 // ---------------------- 
/* let nume= Number (prompt ("Dame un numero"))
if (nume >=0) {   
    alert ("Es positivo")
} 

let nume2= Number (prompt ("Dame otro numero"))
if (nume >=0) { 
    alert ("Es tambien positivo")
} */
//---------------------------------------------------------------- //


// ---------------------- EJERCICIO 3 // ---------------------- 
 /* 
 let num= Number (prompt ("Dame un numero"));
 let num2= Number ( prompt ("Dame otro numero"));
 
 if (num==num2) {   
    console.log ( num*num2);
 } else if (num >= num2) {    
    console.log (num-num2)
 } else { (num<=num2)
    console.log (num+num2)
 } */

//---------------------------------------------------------------- //


// ---------------------- EJERCICIO 4 // ----------------------

/* alert ("La moto que deseas, la MT-09 esta en 62.000.000$ más IVA incluido")
let valor=Number (prompt ("Le recibo el dinero para la adquisición de la moto"))

const precioMoto= 62000000;

if (valor > precioMoto) {
    let cambio = valor - precioMoto;
    alert("Su cambio es: $" + cambio);
} alert ("Muchas gracias por su compra, que disfrute su MT") */

//---------------------------------------------------------------- //


// ---------------------- EJERCICIO 5 // ----------------------


/* alert("El valor de una vacuna es: 12.500$");
alert("Será distribuido para 2 cabezas de ganado en 5 hectáreas");

let vacunas = Number(prompt("Proporcione número de vacunas"));

const precioVacunas = 12500;

let resultadoVacunas = 0; 
if (vacunas > 0) {
    resultadoVacunas = vacunas * precioVacunas;
    alert("El costo total de las vacunas es: $" + resultadoVacunas);
} 

alert("La aplicación de una vacuna es de 5.300$");
let aplicacion = Number(prompt("Número de aplicaciones de vacuna"));

const precioAplicacion = 5300;

let resultadoAplicacion = 0; 
if (aplicacion > 0) {
    resultadoAplicacion = aplicacion * precioAplicacion;
    alert("El costo total de las aplicaciones es: $" + resultadoAplicacion);
} 

let total = resultadoVacunas + resultadoAplicacion;
alert("El resultado total es: $" + total);
 */

//---------------------------------------------------------------- //


// ---------------------- EJERCICIO 6// ----------------------

/* let camisas= Number (prompt ("¿Cuantas camisas comprara?"))

const precioCamisas= 60000;
if (camisas >= 3) {  
    let valor= precioCamisas*camisas*0.80
    alert ("Al ser una  compra de mas de 3 camisas se le aplicara un descuento del 20%.\Total a pagar:" + valor)
}   else { (camisas < 3)
    let valor2= precioCamisas*camisas*0.90
    alert ("Como es una compra menor a 3 camisas se le aplicara un descuento del 10%.\Total a pagar:"+ valor2)
}
 */
//---------------------------------------------------------------- //


// ---------------------- EJERCICIO 7 // ---------------------- 

/*  let valor = Number(prompt("Ingrese el dinero con el que empieza el día"));

let ventas = 800000*4;
let suma = (valor + ventas);
let acreedores = suma*(0.10);

let finalDia = (suma - acreedores );

alert(
  "Dinero inicial: " + valor + "$\n" +
  "Pago a acreedores (10%): " + acreedores + "$\n" +
  "Dinero final: " + finalDia + "$"
);
 */

// ---------------------- EJERCICIO 8 ---------------------- //

/* let ventas = [];

for (let i = 0; i < 5; i++) {
  let n = Number(prompt("Ingrese el valor de la venta del dia " + (i + 1)));
  ventas.push(n);
} 
let suma = 0;
for (let i = 0; i < ventas.length; i++) {
  suma += ventas[i];
}

let promedio = suma / ventas.length;

alert ("El promedio de ventas de los ultimos 5 dias es: " + promedio);

----------------------------//------------------------------------------- */


// ---------------------- EJERCICIO 9 ---------------------- 

// 1. Pedimos los dos números y los convertimos a Number
/* let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));

// 2. Le pedimos al usuario qué operación quiere hacer
//    Puede escribir: suma, resta, multiplicacion o division
let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicacion, division)");

// 3. Declaramos una variable donde guardaremos el resultado
let resultado;

// 4. Estructura de decisiones para saber cuál operación ejecutar
if (operacion === "suma") {
  resultado = num1 + num2;

} else if (operacion === "resta") {
  resultado = num1 - num2;

} else if (operacion === "multiplicacion") {
  resultado = num1 * num2;

} else if (operacion === "division") {
  resultado = num1 / num2;

} else {
  alert("Operación no válida");
}

// 5. Si el usuario ingresó decimales y queremos mostrar el resultado entero,
//    usamos Math.round() para redondear el número final.
let resultadoFinal = Math.round(resultado);

// 6. Mostramos el resultado al usuario
alert("El resultado es: " + resultadoFinal); */

//---------------------------------------------------------------- //

// ---------------------- EJERCICIO 10 ---------------------- 


/* let nu1= Number (prompt("Dame un número"))
let nu2= Number (prompt("Dame un segundo número"))
let nu3= Number (prompt("Dame un tercer número"))

let mayor = Math.max (nu1,nu2,nu3);
let menor = Math.min (nu1,nu2,nu3);
let medio;

if ((nu1 !== mayor && nu1 !==menor)) { 
    medio = nu1;
} else if ((nu2 !== mayor && nu2 !== menor)) {  
    medio= nu2;
} else if (( nu3 !== mayor && nu3 !== menor)) {
    medio= nu3;
} else {    
    medio= "No hay número del medio (al menos dos números son iguales)";
}

console.log("Mayor: " + mayor);
console.log("Menor: " + menor);
console.log("Medio: " + medio);

if (nu1 === nu2 && nu2 === nu3) {
    console.log("Los tres números son iguales.")
}  else {
    if (nu1 === nu2) {
        console.log("Número 1 y Número 2 son iguales.");
    } else {
        console.log("Número 1 y Número 2 no son iguales.");
    }

    if (nu1 === nu3) {
        console.log("Número 1 y Número 3 son iguales.");
    } else {
        console.log("Número 1 y Número 3 no son iguales.");
    }

    if (nu2 === nu3) {
        console.log("Número 2 y Número 3 son iguales.");
    } else {
        console.log("Número 2 y Número 3 no son iguales.");
    }
} */

//---------------------------------------------------------------- //

// ---------------------- EJERCICIO 11 ----------------------

/* alert ("Hola estas en el proceso de selección de Canasta educativa, por favor digite los siguientes requisitos ") 

let nombre = prompt("Digite su nombre");
let edad = Number(prompt("Digite su edad"));
let estatura = Number(prompt("Digite su estatura"));
let peso = Number(prompt("Digite su peso"));

if (edad >18) {
    alert("Eres mayor de edad cumples con un requisito");
} else {
    alert("No cumples con este requisito");
}

if (estatura > 1.7) {
    alert("Maravilloso, cumples con este requisito");
} else {
    alert("No cumples con este requisito");
}

if (peso > 50) { 
    alert("Genial, estás en forma y cumples con este requisito, quedas seleccionado");
} else {
    alert("No cumples con este requisito, no fuiste seleccionado");
} */

//---------------------------------------------------------------- //


// ---------------------- EJERCICIO 12 ----------------------

/* alert ("Debido a un decreto presidencial se consta del aumento del 10% a la nomina o pago del sueldo mínimo de los trabajadores, aqui se muestra el sueldo actualizado post-decreto")

let sueldo= Number (prompt("Digite su sueldo"))

if (sueldo >0) {    
    let aumento= sueldo*0.10
    let sueldoActualizado= sueldo + aumento;
    alert ("Este es el sueldo actual gracias al 10% decretado:" + sueldoActualizado)
} 

 */

//------------------------------------------------------------------------------------------------------------------------

// ---------------------- EJERCICIO 13 ----------------------

// Declaramos un array vacío
/* let datos = [];

// Pedimos 3 datos al usuario
datos[0] = prompt("Ingresa el primer nombre:");
datos[1] = prompt("Ingresa el segundo nombre:");
datos[2] = prompt("Ingresa el tercer nombre:");

// Mostramos el contenido en consola
console.log("Contenido del array:", datos);
 */

//------------------------------------------------------------------------------------------------------------------------

// ---------------------- EJERCICIO 14 ----------------------

let nombre;
let personas = [];

// Ciclo que pide nombres hasta que el usuario escriba "salir"
while (true) {
    nombre = prompt("Ingresa un nombre (o escribe 'salir' para terminar):");
    
    if (nombre.toLowerCase() === "salir") {
        break; // rompemos el ciclo
    }
    
    personas.push(nombre); // guardamos el nombre en el array
    console.log (nombre + "<br>"); // mostramos el nombre en la página
}
