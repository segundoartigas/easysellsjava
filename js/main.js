let saludar = prompt("Bienvenido a esasysells que disfrutes del recorrido en nuestra pagina")
let nombre = prompt("dime tu nombre");
alert("hola " + nombre);
let number = prompt("escribi tu edad");
alert("tienes " + number);
dineroNombre = prompt("cuanto dinero tienes para gastar?");
if (dineroNombre >= 1000 && dineroNombre < 3000) {
    alert("comprate un iphone")
}
else if (dineroNombre >= 0 && dineroNombre <999) {
    alert("Lo siento no puedes comprar nada")
}
else if (dineroNombre >= 5000 && dineroNombre <6999) {
    alert("comprate una heladera")
}
else if (dineroNombre >= 9000 && dineroNombre <11000) {
    alert("comprate un auto")
}
else {
    alert("genial puedes comprar lo que desees")
}
let cel = prompt("te daremos informacion acerca de nuestros celulares, reponde ok para ver la info.");
// Clase para tirar alerts de lo que hace el celular.
class Celular{
    constructor(color,peso,modelo,ram,rdc){
        this.color = color;
        this.peso = peso;
        this.modelo = modelo;
        this.ram = ram;
        this.rdc = rdc;
        this.encendido = false;
    }
    PresionarBotonEncendido(){
        if(this.encendido == false){
            alert("el celular se puede prender")
            this.encendido = true
        } else{
            alert("el celular se puede apagar tambien")
            this.encendido = false
        }
    }
    Reiniciar(){
        if (this.encendido == true){
            alert("el celular se reinicia")
        } else{
            alert("el celular tambien se apaga bien")
        }
    }
    grabarVideo(){
        alert(`el celular graba fotos y toma videos con la gran resolucion de camara`)
    }
}
celular1 = new Celular("azul","5 pulgadas","iphone 12","64 gb","100px");
celular1.PresionarBotonEncendido();
celular1.Reiniciar();
celular1.grabarVideo();

//Arrancan los eventos, sirven en el comprar de las tarjetas.
let button = document.getElementById("compra");
button.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("Primer respuesta");
    alert("Seleccionaste la compra del iphone 12 pro max.")

let button2 = document.getElementById("heladera");
button2.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("Segunda respuesta");
    alert("Seleccionaste la compra de la heladera patrick.")

let button3 = document.getElementById("bmw");
button3.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("Tercer respuesta");
    alert("Seleccionaste la compra del auto bmw m3 0km.")
}
}
}
//Usando dom y sus clases
let barra = document.getElementsByClassName("barra");
console.log(barra[0].innerHTML);
console.log(barra[1].innerHTML);
console.log(barra[2].innerHTML);
console.log(barra[3].innerHTML);


let body = document.getElementById("grid-container");
let header = document.getElementById("header");
let navbar = document.getElementById("navbar");
let main = document.getElementById("contenido");
let oferta = document.getElementById("oferta");
console.log(body.innerHTML);
console.log(header.innerHTML);
console.log(navbar.innerHTML);
console.log(main.innerHTML);
console.log(oferta.innerHTML);

//Utilizando local storage y guardando datos.
localStorage.setItem("Bienvenidos", "En easysells, nos contactamos con vos para hacer de tu compra o venta un experiencia simple y rapida.");

let mensaje_local = localStorage.getItem("Bienvenidos");
console.log(mensaje_local);
alert("el valor que guarde es: " +localStorage.getItem("esValido"))

//session storage: guardar datos
sessionStorage.setItem("Acerca de nosotros", "En easysells, nos contactamos con vos para hacer de tu compra o venta un experiencia simple y rapida.");

//recuperando datos
let mensaje_session = sessionStorage.getItem("Acerca de nosotros");
console.log(mensaje_session);

//json
const primerProducto = {id:2, producto:"computadora"};
localStorage.setItem("primerProducto", primerProducto);
let producto_local = localStorage.getItem("primerProducto");
console.log(producto_local.producto);

const enJson = JSON.stringify(primerProducto);
console.log(enJson);
console.log(typeof primerProducto);
console.log(typeof enJson);

localStorage.setItem("primerProducto", enJson);
localStorage.setItem("primerProducto", JSON.stringify(primerProducto));


