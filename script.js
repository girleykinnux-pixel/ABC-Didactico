// ==========================================
// Base de datos del Abecedario (Según imágenes)
// ==========================================
const datosAbecedario = [
  { letra: "A", palabra: "Abeja", imagen: "Abeja.jpg", tipo: "vocal" },
  { letra: "B", palabra: "Búho", imagen: "Buho.jpeg", tipo: "consonante" },
  { letra: "C", palabra: "Casa", imagen: "Casa.jpg", tipo: "consonante" },
  { letra: "D", palabra: "Delfín", imagen: "Delfin.jpg", tipo: "consonante" },
  { letra: "E", palabra: "Elefante", imagen: "Elefante.jpeg", tipo: "vocal" },
  { letra: "F", palabra: "Foca", imagen: "Foca.jpg", tipo: "consonante" },
  { letra: "G", palabra: "Gato", imagen: "Gato.jpg", tipo: "consonante" },
  { letra: "H", palabra: "Helado", imagen: "Helado.jpg", tipo: "consonante" },
  { letra: "I", palabra: "Iglesia", imagen: "Iglesia.jpg", tipo: "vocal" },
  { letra: "J", palabra: "Jirafa", imagen: "Jirafa.jpg", tipo: "consonante" },
  { letra: "K", palabra: "Koala", imagen: "Koala.jpeg", tipo: "consonante" },
  { letra: "L", palabra: "León", imagen: "Leon.jpg", tipo: "consonante" },
  { letra: "M", palabra: "Manzana", imagen: "Manzana.jpg", tipo: "consonante" },
  { letra: "N", palabra: "Nubes", imagen: "Nubes.png", tipo: "consonante" },
  { letra: "Ñ", palabra: "Ñoño", imagen: "Ñoño.jpg", tipo: "consonante" },
  { letra: "O", palabra: "Oso", imagen: "Oso.jpg", tipo: "vocal" },
  { letra: "P", palabra: "Pelota", imagen: "Pelota.jpg", tipo: "consonante" },
  { letra: "Q", palabra: "Queso", imagen: "Queso.png", tipo: "consonante" },
  { letra: "R", palabra: "Ratón", imagen: "Raton.png", tipo: "consonante" },
  { letra: "S", palabra: "Sol", imagen: "Sol.jpg", tipo: "consonante" },
  { letra: "T", palabra: "Tortuga", imagen: "Tortuga.jpg", tipo: "consonante" },
  { letra: "U", palabra: "Uva", imagen: "Uva.jpg", tipo: "vocal" },
  { letra: "V", palabra: "Vaca", imagen: "Vaca.jpg", tipo: "consonante" },
  { letra: "W", palabra: "Wafle", imagen: "wafle.jpg", tipo: "consonante" }, // Nota: la w está en minúscula en tu archivo
  {
    letra: "X",
    palabra: "Xilófono",
    imagen: "Xilofono.png",
    tipo: "consonante",
  },
  { letra: "Y", palabra: "Yoyo", imagen: "Yoyo.jpg", tipo: "consonante" },
  { letra: "Z", palabra: "Zapato", imagen: "Zapato.jpg", tipo: "consonante" },
];

// ==========================================

// Función para generar el HTML dinámicamente

// ==========================================

function generarCartas() {

  const contenedorGaleria = document.getElementById("galeria-letras");

  let contenidoHTML = "";

 

  // Recorremos nuestro arreglo y creamos el HTML para cada letra

  datosAbecedario.forEach((item) => {

    contenidoHTML += `

        <div class='card' data-tipo='${item.tipo}' onclick='voltear(this)'>

            <div class='card-frente'>

                <h1>${item.letra}</h1>

            </div>

            <div class='card-dorso'>

                <img src='img/${item.imagen}' alt='${item.palabra}'>

                <h3>${item.palabra}</h3>

            </div>

        </div>

        `;

  });

 

  // Inyectamos todo el HTML generado en el contenedor

  contenedorGaleria.innerHTML = contenidoHTML;

}

 

// Ejecutamos la función apenas cargue el script para que pinte las cartas

generarCartas();

 

// ==========================================

// Lógica anterior del Cliente (Voltear y Filtrar)

// ==========================================

 

function voltear(card) {

  card.classList.toggle("volteada");

 

  if (!card.dataset.vista) {

    card.dataset.vista = "true";

    const contadorElemento = document.querySelector("#contador-letras");

    let numeroActual = parseInt(contadorElemento.textContent);

    numeroActual++;

    contadorElemento.textContent = numeroActual;

  }

}

 

function filtrar(tipo) {

  const cards = document.querySelectorAll(".card");

 

  cards.forEach((card) => {

    if (tipo === "todas") {

      card.style.display = "block";

    } else if (tipo === "vocales") {

      if (card.dataset.tipo === "vocal") {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    }

  });

}