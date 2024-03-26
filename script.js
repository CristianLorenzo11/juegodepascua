
let numeroazar= Math.floor(Math.random()*100)+1 //aca hacemos el numero al azar 
console.log(numeroazar)
// Variable para almacenar el nombre y apellido del jugador
let nombreApellido = "";
let numeroEntrada= document.getElementById("numeroEntrada") // aca se ingresa el numero que la persona coloca 
let mensaje = document.getElementById("mensaje")
let intento= document.getElementById("intento")
 let intentos= 0

//funcion para chequear el numero ingresado 
function chequearResultado(){
intentos ++
intento.textContent= intentos
    // Obtener el valor ingresado en el campo de nombre y apellido
    nombreApellido = document.getElementById("nombreApellido").value;
let numeroingresado= parseInt(numeroEntrada.value)

if(numeroingresado <1 || numeroingresado > 101 || isNaN(numeroingresado)){
    mensaje.textContent = " Por favor ingresa un numero valido entre el 1 y el 100"
    mensaje.style.color = "black"
    return
}

if( numeroingresado < numeroazar){
    mensaje.textContent="El numero que dijiste es muy Bajo,  En la mochila del conejo hay mayor cantidad de huevitos"
    return
}
if( numeroingresado > numeroazar){
    mensaje.textContent="El numero que dijiste es muy Alto,  En la mochila del conejo hay menos cantidad de huevitos"
    return
}
   // Si el jugador gana, mostrar un mensaje con su nombre y apellido
   if (numeroingresado === numeroazar) {
    mensaje.textContent = "¡Felicidades, " + nombreApellido + ", Adivinaste la cantidad de huevitos!";
    mensaje.style.color = "green";
    mensaje.style.fontSize = "24px"; // Cambiar tamaño de letra si deseas
    mostrarImagenConejo(); // Llama a la función para mostrar la imagen del conejo
    numeroEntrada.disabled = true;
    // Selecciona la imagen del conejo por su ruta
    const imagenConejo = document.querySelector('img[src="CONEJO1.jpeg"]');
    
    // Verifica si la imagen del conejo existe antes de hacer scroll
    if (imagenConejo) {
        imagenConejo.scrollIntoView({ behavior: 'smooth' });
    }
    
    return;
}

}

function mostrarImagenConejo() {
    let imagenConejo = document.createElement("img");
    imagenConejo.src = "CONEJO1.jpeg"; // Ruta de la imagen del conejo
    imagenConejo.alt = "Imagen del conejo";
    
    // Aplica estilos CSS para hacer que la imagen sea redondeada
    imagenConejo.style.borderRadius = "50%";
    imagenConejo.style.width = "400px"; // Modifica el tamaño de la imagen si es necesario
    imagenConejo.style.height = "400px"; // Modifica el tamaño de la imagen si es necesario
    
    document.body.appendChild(imagenConejo); // Agrega la imagen al cuerpo del documento
}



function checkEnter(event) {
    if (event.key === "Enter") {
        chequearResultado();
    }
}
