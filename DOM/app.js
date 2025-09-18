const pantalla = document.querySelector(".pantalla")
const btnMenos = document.querySelector(".btn-menos")
const btnMas = document.querySelector(".btn-mas")
 let counter = 0

function incrementar (){
counter++
pantalla.textContent = counter
if (counter >= 10 && counter < 30) {
    pantalla.style.color = "red"
   
}
if (counter >= 30) {
    pantalla.style.color = "blue"
    document.body.style.backgroundColor = "grey"
}
}


function decrementar () {
if (counter <= 0)
    return counter = 0

counter-- 
pantalla.textContent = counter
if (counter < 10) {
    pantalla.style.color = "black"

   

 }
    if (counter >= 10 && counter < 30) {
        pantalla.style.color = "green"
        document.body.style.backgroundColor = "white"
 }
}

btnMas.addEventListener("click", incrementar)
btnMenos.addEventListener("click", decrementar)