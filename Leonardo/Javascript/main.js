
const boton = document.querySelector("#btnPrueba");

boton.addEventListener('click',function(){
    console.log("exit");
})

boton.addEventListener('mouseover', ()=>{
    console.log("El mouse esta sobre el boton")
})

boton.addEventListener('mouseout', ()=>{
    console.log("El mouse esta fuera del boton")
})

window.addEventListener("keydown", (event)=>{
    //console.log("Pulsando tecla")
    // console.log(String.fromCharCode(event.keyCode))
})

// window.addEventListener("keypress", (event)=>{
//     console.log('Tecla pulsada')
// })

// window.addEventListener("keyup", (event)=>{
//     console.log('Tecla liberada')
// })

// window.addEventListener('load', ()=>{
//     console.log("Termino la carga");
// })

// video.addEventListener("play", ()=>{
//     console.log("El video ha comenzado")
// })

// video.addEventListener("seeking", function(){
//     console.log("se esta buscando en el video", this.currentTime)
// })

// video.addEventListener("ended", ()=>{
//     console.log("el video ha terminado")
// })

// var temporizador = setInterval(() => {
//     setColor();
// }, 1000);

// setTimeout(() => {
//     setColor();
// }, 3000);

function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";"green" 
}

function stopChangeColor(){
    clearInterval(temporizador);
}