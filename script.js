let nivelDificultad = "medio"; // Nivel de dificultad por defecto
let tiempoInicio; // Variable para almacenar el tiempo de inicio del juego
let tiempoFin; // Variable para almacenar el tiempo de fin del juego

document.getElementById("selectDificultad").addEventListener("change", function() {
  nivelDificultad = this.value;
  mostrarMensajeNivel(); // Mostrar mensaje del nivel de dificultad seleccionado
  generarNumeroAleatorio(); // Generar un nuevo número aleatorio al cambiar el nivel de dificultad
});

function mostrarMensajeNivel() {
  let mensajePista = "";
  if (nivelDificultad === "facil") {
    mensajePista = "Pista: Un número entre el 1 y el 50:";
  } else if (nivelDificultad === "medio") {
    mensajePista = "Pista: Un número entre el 1 y el 100:";
  } else if (nivelDificultad === "dificil") {
    mensajePista = "Pista: Un número entre el 1 y el 1000:";
  }
  document.getElementById("pistaMensaje").textContent = mensajePista;
}

function generarNumeroAleatorio() {
    let maximoNumero;
    if (nivelDificultad === "facil") {
      maximoNumero = 50;
    } else if (nivelDificultad === "medio") {
      maximoNumero = 100;
    } else if (nivelDificultad === "dificil") {
      maximoNumero = 1000;
    }
    numeroazar = Math.floor(Math.random() * maximoNumero) + 1;
    console.log("Número aleatorio generado:", numeroazar); // Agrega este console.log para ver el número aleatorio generado
  }
  
// Variable para almacenar el nombre y apellido del jugador
let nombreApellido = "";
let numeroEntrada = document.getElementById("numeroEntrada"); // aca se ingresa el numero que la persona coloca 
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos = 0;
let adivinado = false; // Estado de la adivinanza

// Función para chequear el número ingresado
function chequearResultado() {
  // Verificar si se ha ingresado un nombre y apellido
  nombreApellido = document.getElementById("nombreApellido").value;
  if (nombreApellido.trim() === "") {
      alert("Por favor ingresa tu nombre y apellido antes de comenzar a jugar.");
      // Limpiar el campo de número
      document.getElementById("numeroEntrada").value = "";
      return;
  }

  // Iniciar el cronómetro al comenzar el juego
  if (!tiempoInicio) {
    tiempoInicio = new Date();
  }

  // Si ya se ha adivinado, no hacer nada
  if (adivinado) {
    return;
  }
  intentos++;
  intento.textContent = intentos;

  // Obtener el valor ingresado en el campo de nombre y apellido
  nombreApellido = document.getElementById("nombreApellido").value;
  let numeroingresado = parseInt(numeroEntrada.value);

  // Validar el rango del número ingresado según el nivel de dificultad
  if (nivelDificultad === "facil" && (numeroingresado < 1 || numeroingresado > 50)) {
    mensaje.textContent = "Por favor ingresa un número válido entre 1 y 50";
    mensaje.style.color = "black";
    return;
  } else if (nivelDificultad === "medio" && (numeroingresado < 1 || numeroingresado > 100)) {
    mensaje.textContent = "Por favor ingresa un número válido entre 1 y 100";
    mensaje.style.color = "black";
    return;
  } else if (nivelDificultad === "dificil" && (numeroingresado < 1 || numeroingresado > 1000)) {
    mensaje.textContent = "Por favor ingresa un número válido entre 1 y 1000";
    mensaje.style.color = "black";
    return;
  }

  // Comparar el número ingresado con el número aleatorio
  if (numeroingresado < numeroazar) {
    mensaje.textContent = "El numero que dijiste es muy Bajo,  En la mochila del conejo hay mayor cantidad de huevitos";
    return;
  }
  if (numeroingresado > numeroazar) {
    mensaje.textContent = "El numero que dijiste es muy Alto,  En la mochila del conejo hay menos cantidad de huevitos";
    return;
  }

  // Si el jugador gana, mostrar un mensaje con su nombre y apellido
  if (numeroingresado === numeroazar) {
    adivinado = true; // Establecer adivinado en true
    // Detener el cronómetro al ganar
    tiempoFin = new Date();
    let tiempoTotal = tiempoFin - tiempoInicio; // Calcular tiempo transcurrido en milisegundos
    let tiempoSegundos = Math.floor(tiempoTotal / 1000); // Convertir milisegundos a segundos
    let minutos = Math.floor(tiempoSegundos / 60); // Calcular minutos
    let segundos = tiempoSegundos % 60; // Calcular segundos restantes
    let tiempoMensaje = `Tiempo: ${minutos} minutos y ${segundos} segundos`;

    let mensajeNivel = "";
    if (nivelDificultad === "facil") {
      mensajeNivel = "Fácil";
    } else if (nivelDificultad === "medio") {
      mensajeNivel = "Medio";
    } else if (nivelDificultad === "dificil") {
      mensajeNivel = "Difícil";
    }
    mensaje.textContent = `¡Felicidades, ${nombreApellido}! Adivinaste la cantidad de huevitos en el Nivel ${mensajeNivel} en ${tiempoMensaje}!`;
    mensaje.style.color = "green";
    mensaje.style.fontSize = "24px"; // Cambiar tamaño de letra si deseas
    mostrarImagenConejo(); // Llama a la función para mostrar la imagen del conejo
    numeroEntrada.disabled = true;
    document.getElementById("selectDificultad").disabled = true; // Deshabilitar el selector de dificultad
    return;
  }
}

function mostrarImagenConejo() {
  let imagenConejo = document.createElement("img");
  imagenConejo.src = "CONEJO1.jpeg"; // Ruta de la imagen del conejo
  imagenConejo.alt = "Imagen del conejo";
  
  // Aplica estilos CSS para hacer que la imagen sea redondeada
  imagenConejo.style.borderRadius = "50%";
  
  // Agregar la imagen al cuerpo del documento
  document.body.appendChild(imagenConejo);
  
  // Esperar un breve momento para que la imagen se agregue completamente al DOM
  setTimeout(function() {
    // Hacer scroll para mostrar la imagen del conejo
    imagenConejo.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function checkEnter(event) {
  if (event.key === "Enter") {
    chequearResultado();
  }
}

generarNumeroAleatorio(); // Genera el número al azar al cargar la página

