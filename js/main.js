// PRODUCTOS 
const productos = [
    {
        id: "buso-01",
        titulo: "Buso DC",
        imagen: "./img/buzo01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "busos"
        },
        precio: 1000
    },
    {
        id: "buso-02",
        titulo: "Buso Volcom",
        imagen: "./img/buzo02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "busos"
        },
        precio: 1000
    },
    {
        id: "buso-03",
        titulo: "Buso Vulk",
        imagen: "./img/buzo03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "busos"
        },
        precio: 1000
    },
    {
        id: "buso-04",
        titulo: "Buso Independt",
        imagen: "./img/buzo04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "busos"
        },
        precio: 1000
    },
    {
        id: "buso-05",
        titulo: "Buso Creature",
        imagen: "./img/buzo05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "busos"
        },
        precio: 1000
    },
    {
        id: "buso-06",
        titulo: "Buso Thrasher",
        imagen: "./img/buzo06.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "busos"
        },
        precio: 1000
    },
    {
        id: "buso-07",
        titulo: "Buso Vans",
        imagen: "./img/buzo07.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "busos"
        },
        precio: 1000
    },
    {
        id: "buso-08",
        titulo: "Buso Independt",
        imagen: "./img/buzo08.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "busos"
        },
        precio: 1000
    },

    // REMERAS 
    {
        id: "remera-01",
        titulo: "Remera Sarter",
        imagen: "./img/remera01.jpg",
        categoria: {
            nombre: "Verano",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-02",
        titulo: "Remera Sarter",
        imagen: "./img/remera02.jpg",
        categoria: {
            nombre: "Verano",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-03",
        titulo: "Remera Element",
        imagen: "./img/remera03.jpg",
        categoria: {
            nombre: "Verano",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-04",
        titulo: "Remera Santa Cruz",
        imagen: "./img/remera04.jpg",
        categoria: {
            nombre: "Verano",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-05",
        titulo: "Remera Creature",
        imagen: "./img/remera05.jpg",
        categoria: {
            nombre: "Verano",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-06",
        titulo: "Remera Independt",
        imagen: "./img/remera06.jpg",
        categoria: {
            nombre: "Verano",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-07",
        titulo: "Remera Vans",
        imagen: "./img/remera07.jpg",
        categoria: {
            nombre: "Verano",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remera-08",
        titulo: "Musculosa Volcom",
        imagen: "./img/remera08.jpg",
        categoria: {
            nombre: "Verano",
            id: "remeras"
        },
        precio: 1000
    },

    // accesorios 
    {
        id: "accesorio-01",
        titulo: "Truck Krux",
        imagen: "./img/truck01.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id: "accesorio-02",
        titulo: "Truck Buller",
        imagen: "./img/truck02.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id: "accesorio-03",
        titulo: "Truck Independent",
        imagen: "./img/truck03.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id: "accesorio-04",
        titulo: "Truck Krux",
        imagen: "./img/truck04.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id: "accesorio-05",
        titulo: "Rueda Woddoo",
        imagen: "./img/rueda01.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id: "accesorio-06",
        titulo: "Rueda Woddoo",
        imagen: "./img/rueda02.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id: "accesorio-07",
        titulo: "Tabla Santa Cruz",
        imagen: "./img/tablasantacruz.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id: "accesorio-08",
        titulo: "Tabla Creature",
        imagen: "./img/tablacreature.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id: "accesorio-09",
        titulo: "Lija MOB",
        imagen: "./img/lija01.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id: "accesorio-10",
        titulo: "Lija Buller",
        imagen: "./img/lija02.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id: "accesorio-11",
        titulo: "Tornillos Independt",
        imagen: "./img/tornillos01.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },
    {
        id: "accesorio-12",
        titulo: "Rulemanes Redz",
        imagen: "./img/rulemanes.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    },

    

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
    console.log(botonesAgregar);

}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
          
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
      

    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton) ;
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
   
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

