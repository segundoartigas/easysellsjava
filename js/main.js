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
