// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreUsuario = prompt("Porfavor, ingresá tu nombre").toLowerCase();
const nombreAmigo = "Francisco";
const miNombre = "Lucas";

if(nombreUsuario === miNombre.toLowerCase()){
    console.log(`Hola, Tocayo! Yo también me llamo ${miNombre}.`);
} else if(nombreUsuario === nombreAmigo.toLowerCase()){
    console.log(`Hola ${nombreAmigo}, te llamas igual que mi amigo.`);
} else{
    console.log(`Hola ${nombreUsuario}.`)
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario = Number(prompt("Porfavor, ingresá tu edad"));
const miEdad = 19;

if(edadUsuario > miEdad){
    console.log("Sos mayor que yo");
} else if(edadUsuario < miEdad){
    console.log("Sos menor que yo");
} else{
    console.log("Tenemos la misma edad");
}
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let usuarioTieneDocumento = prompt("Tenes documento? (Responder con si o no)").toLowerCase();
let mayoriaDeEdad = 18;

if(usuarioTieneDocumento === "si"){
    let edadUsuario = Number(prompt("Porfavor, ingresá tu edad"));
    if(edadUsuario >= mayoriaDeEdad){
        console.log("Podes entrar al bar");
    } else{
        console.log("No podes entrar al bar");
    }
}else if(usuarioTieneDocumento === "no"){
    console.log("No podes entrar al bar");
} else {
    console.log("No entendí tu respuesta, porfavor ingresá si o no")
}
