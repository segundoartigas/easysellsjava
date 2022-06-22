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

