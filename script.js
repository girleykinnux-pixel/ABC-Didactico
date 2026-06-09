// Definición de los datos del Abecedario 
const datosAbecedario = [
    { letra: "A", palabra: "Abeja", imagen: "imagenes/Abeja.jpg", tipo: "vocal" },
    { letra: "B", palabra: "Búho", imagen: "imagenes/Buho.jpeg", tipo: "consonante" }, 
    { letra: "C", palabra: "Casa", imagen: "imagenes/Casa.jpg", tipo: "consonante" },
    { letra: "D", palabra: "Delfín", imagen: "imagenes/Delfin.jpg", tipo: "consonante" }, 
    { letra: "E", palabra: "Elefante", imagen: "imagenes/Elefante.jpeg", tipo: "vocal" },
    { letra: "F", palabra: "Foca", imagen: "imagenes/Foca.jpg", tipo: "consonante" },
    { letra: "G", palabra: "Gato", imagen: "imagenes/Gato.jpg", tipo: "consonante" },
    { letra: "H", palabra: "Helado", imagen: "imagenes/Helado.jpg", tipo: "consonante" },
    { letra: "I", palabra: "Iglesia", imagen: "imagenes/Iglesia.jpg", tipo: "vocal" },
    { letra: "J", palabra: "Jirafa", imagen: "imagenes/Jirafa.jpg", tipo: "consonante" },
    { letra: "K", palabra: "Koala", imagen: "imagenes/Koala.jpeg", tipo: "consonante" },
    { letra: "L", palabra: "León", imagen: "imagenes/Leon.jpg", tipo: "consonante" },
    { letra: "M", palabra: "Manzana", imagen: "imagenes/Manzana.jpg", tipo: "consonante" },
    { letra: "N", palabra: "Nubes", imagen: "imagenes/Nubes.png", tipo: "consonante" },
    { letra: "Ñ", palabra: "Ñoño", imagen: "imagenes/Ñoño.jpg", tipo: "consonante" },
    { letra: "O", palabra: "Oso", imagen: "imagenes/Oso.jpg", tipo: "vocal" },
    { letra: "P", palabra: "Pelota", imagen: "imagenes/Pelota.jpg", tipo: "consonante" },
    { letra: "Q", palabra: "Queso", imagen: "imagenes/Queso.png", tipo: "consonante" },
    { letra: "R", palabra: "Ratón", imagen: "imagenes/Raton.png", tipo: "consonante" }, 
    { letra: "S", palabra: "Sol", imagen: "imagenes/Sol.jpg", tipo: "consonante" },
    { letra: "T", palabra: "Tortuga", imagen: "imagenes/Tortuga.jpg", tipo: "consonante" },
    { letra: "U", palabra: "Uva", imagen: "imagenes/Uva.jpg", tipo: "vocal" },
    { letra: "V", palabra: "Vaca", imagen: "imagenes/Vaca.jpg", tipo: "consonante" },
    { letra: "W", palabra: "Wafle", imagen: "imagenes/Wafle.jpg", tipo: "consonante" },
    { letra: "X", palabra: "Xilófono", imagen: "imagenes/Xilofono.jpg", tipo: "consonante" },
    { letra: "Y", palabra: "Yate", imagen: "imagenes/Yate.jpg", tipo: "consonante" },
    { letra: "Z", palabra: "Zebra", imagen: "imagenes/Zebra.jpg", tipo: "consonante" }
];
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

//  Función para renderizar las tarjetas en la pantalla
function cargarTarjetas(filtro = "todas") {
    // Limpiamos el contenedor antes de volver a pintar
    contenedorTarjetas.innerHTML = "";

    console.log("Cargando tarjetas con filtro: " + filtro); // Punto de control 1

    datosAbecedario.forEach(elemento => {
        // Filtrar si es vocal, consonante o todas
        if (filtro !== "todas" && elemento.tipo !== filtro) {
            return; 
        }

        // Creamos el elemento de la tarjeta
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        // Al hacer clic, la tarjeta puede "revelarse" (añadiendo una clase CSS)
        tarjeta.addEventListener("click", () => {
            tarjeta.classList.toggle("descubierta");
            console.log("Se hizo clic en la letra: " + elemento.letra); // Punto de control 2
        });

        // Aquí ya incluimos la ruta correcta usando 'elemento.imagen' que ya tiene el prefijo 'imagenes/'
        tarjeta.innerHTML = `
            <div class="contenido-tarjeta">
                <div class="parte-frontal">
                    <span class="letra-grande">${elemento.letra}</span>
                </div>
                <div class="parte-trasera">
                    <img src="${elemento.imagen}" alt="${elemento.palabra}" class="imagen-abc">
                    <p class="nombre-palabra">${elemento.palabra}</p>
                </div>
            </div>
        `;

        contenedorTarjetas.appendChild(tarjeta);
    });

    console.log("Tarjetas renderizadas con éxito."); // Punto de control 3
}

// Configuración de los botones de filtro (Vocales / Todas)

const btnVocales = document.getElementById("btn-vocales");
const btnTodas = document.getElementById("btn-todas");

if (btnVocales && btnTodas) {
    btnVocales.addEventListener("click", () => cargarTarjetas("vocal"));
    btnTodas.addEventListener("click", () => cargarTarjetas("todas"));
}

// Inicializar el juego mostrando todas las letras al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarTarjetas("todas");
});