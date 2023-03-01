// TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr, dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el operador es '+', vamos a usar la función para sumar.
//      Si no, vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si tenemos un operador igual a '+', llamamos la función 'sumar' con nuestros números (las variables del paso 2).
// Si no, tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}

const operador = prompt("Porfavor, ingresá una operación. (+, -, * o /)");

let numero1 = Number(prompt("Porfavor, ingresá el primer número"));
let numero2 = Number(prompt("Porfavor, ingresá el segundo número"));

if(operador === "+"){
    alert(`El resultado de la suma es ${sumar(numero1, numero2)}`);
} else if(operador === "-") {
    alert(`El resultado de la resta es ${restar(numero1, numero2)}`);
} else if(operador === "*"){
    alert(`El resultado de la multiplicación es ${multiplicar(numero1, numero2)}`);
} else if(operador === "/"){
    alert(`El resultado de la división es ${dividir(numero1, numero2)}`);
} else {
    alert(`No entiendo ese operador, ingresá una operación válida. (+,-,* o /)`)
}
