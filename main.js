let saludar = swal("Bienvenido a esasysells que disfrutes del recorrido en nuestra pagina")
//Arrancan los eventos, sirven en el comprar de las tarjetas.
let button = document.getElementById("compra");
button.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("Primer respuesta");
    swal("Perfecto, seleccionaste el iphone!!", "hecho");


let button2 = document.getElementById("compra2");
button2.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("Segunda respuesta");
    swal("Perfecto, seleccionaste la heladera!!", "hecho");

let button3 = document.getElementById("compra3");
button3.addEventListener("click", respuestaClick);
function respuestaClick() {
    console.log("Tercer respuesta");
    swal("Perfecto, seleccionaste el bmw!!", "hecho");
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

// Variables
const baseDeDatos = [
    {
        id: 1,
        nombre: 'iphone 12 pro max',
        precio: 120.000,
        imagen: './img/iphone-12.png'
    },
    {
        id: 2,
        nombre: 'bmw negro',
        precio: 5.000,
        imagen: './img/bmw.jpg'
    },
    {
        id: 3,
        nombre: 'heladera',
        precio: 40.000,
        imagen: './img/hel.png'
    },
    {
        id: 4,
        nombre: 'notebook hp',
        precio: 130.000,
        imagen: './img/notebook.jpg'
    }

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    renderizarCarrito();

}

function renderizarCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() { 
    return carrito.reduce((total, item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}

DOMbotonVaciar.addEventListener('click', vaciarCarrito);

renderizarProductos();
renderizarCarrito();

//utilizando fetch
fetch("https://reqres.in/api/users",{
    method : "POST",
    body : '{"name" : "easysells", "empresa" : "ventas y compras"}',
    headers: {"content-type" : "application/json"}
})
.then(res=>res.json())
.then(res=>console.log(res))

//productos json
// fetch('./productos.json')
// .then((response) => response.json())
// .then((data) => {
//     const resultado = document.getElementById("resultado");
//     data.forEach(valor =>{
//         let div_padre = document.createElement("div");
//         div_padre.className = "card";
//         let div_hijo1 = document.createElement("div");
//         div_hijo1.className = "card-header";
//         let div_hijo2 = document.createElement("div");
//         div_hijo2.className = `card-body`;
//         let parrafo = document.createElement("p");
//         div_hijo1.innerHTML = `${valor.nombre} <b>($${valor.precio})</b>`;
//         parrafo.innerText = valor.descripcion;
//         div_hijo2.appendChild(parrafo);
//         document.body.append(div_padre);
//         div_padre.appendChild(div_hijo2);
//         resultado.appendChild(div_padre);
//     })
    
// }).catch(error => console.log("fallo!"));


async function obtenerJSON() {
    const URLJSON = "/productos.json";
    const respuesta = await fetch(URLJSON);
    const data = await respuesta.json();
    return respuesta;
}

obtenerJSON().then(data => {
    const resultado = document.getElementById("resultado");
    data.forEach(valor =>{
        console.log("GANGSTERRRR", valor)
        let div_padre = document.createElement("div");
        div_padre.className = "card";
        let div_hijo1 = document.createElement("div");
        div_hijo1.className = "card-header";
        let div_hijo2 = document.createElement("div");
        div_hijo2.className = `card-body`;
        let parrafo = document.createElement("p");
        div_hijo1.innerHTML = `${valor.nombre} <b>($${valor.precio})</b>`;
        parrafo.innerText = valor.descripcion;
        div_hijo2.appendChild(parrafo);
        document.body.append(div_padre);
        div_padre.appendChild(div_hijo2);
        resultado.appendChild(div_padre);
    })
}).catch(error => console.log("fallo!"));
// const getJSON = async () => {
//     json = await obtenerJSON()
//     console.log("gangster", json)
// }

// getJSON();