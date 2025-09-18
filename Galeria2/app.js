const titulo = document.querySelector(".titulo")
const screen = document.querySelector(".screen")
const miniaturas = document.querySelector(".container-main")

console.log(titulo)
console.log(screen)
console.log(miniaturas)

function cambiarImg (event){
    console.log(event.target.src)
    titulo.textcontent=(event.target.name)
    screen.src=event.target.src
    document.Body.style.backagroundImg = url=(event.target)
}
  
miniaturas.addEventListener("click",cambiarImg)