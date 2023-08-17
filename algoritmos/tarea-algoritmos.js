function calcularAhorro() {
    let ahorro = 0;
    for (let i = 1; i <= 100; i++) {
        ahorro += i;
    }
    console.log("En 100 días ahorrarias " + ahorro)
}

//Desafío de programación #1: Imprimí los números del 1 al 10

function imprimir1Al10() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}

// Desafìo de programación  #2: Imprimí los números impares del 1 al 100
function imprimirNumerosImpares1Al100() {
    for (let i = 1; i <= 100; i += 2) {
        console.log(i)
    }
}

//Desafío de programación #3: Imprimí la tabla de multiplicación del 7

function crearTablaDel7() {
    const numero = 7;
    let multiplicador = 1;
    while (multiplicador <= 10) {
        console.log(`El resultado de ${numero} multiplicado por ${multiplicador} es: ${numero * multiplicador}`);
        multiplicador++;
    }
}

// Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
function crearTablaDel1Al9() {
    for (let i = 1; i < 10; i++) {
        for (let x = 0; x < 10; x++) {
            console.log(`El resultado de ${i} multiplicado por ${x} es: ${i * x}`)
        }
    }
}

// Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
function sumarArray() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log(suma);
}

// Desafío de programación #6: Calcula 10! (10 factorial)

function crearDiezFactorial() {
    let diezFactorial = 10;
    for (let i = 9; i >= 1; i--) {
        diezFactorial *= i;
    }
    console.log(diezFactorial)
}

// Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

function sumarNumerosImpares1Al30() {
    suma = 0;
    for (let i = 11; i < 30; i = i + 2) {
        suma = suma + i;
    }
    console.log(suma);
}

// Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
function convertirCelsiusAFahrenheit() {
    let celsius = Number(prompt("Ingresá los grados celsius\nsolo números"));
    let fahrenheit = (1.8 * celsius) + 32;
    console.log(`${celsius} grados celsius son ${fahrenheit} grados fahrenheit`)
}

//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
function convertirFahrenheitACelsius() {
    let fahrenheit = Number(prompt("Ingresá los grados fahrenheit\nsolo números"));
    let celsius = ((fahrenheit - 32) * 5) / 9;
    console.log(`${fahrenheit} grados fahrenheit son ${celsius} grados celsius`);
}

// Desafío de programación #10: Calcula la suma de todos los números en un array de números
function sumarNumerosArray(arr) {
    suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
        } else {
            suma += arr[i];
        }
    }
    console.log(suma);
}

// Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
function crearPromedioArray(arr) {
    suma = 0;
    contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(Number(arr[i]))) {
        } else {
            suma += Number(arr[i]);
            contador++;
        }
    }
    let promedio = suma / contador;
    console.log(promedio);
}

//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

function crearArrayPositivos(arr) {
    const ARRAY_POSITIVOS = [];
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
        } else if (arr[i] > 0) {
            ARRAY_POSITIVOS.push(arr[i]);
        }
    }
    console.log(ARRAY_POSITIVOS)
}

//Desafío de programación #13: Find the maximum number in an array of numbers

function findMaximumNumber(arr) {
    let maximumNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maximumNumber < arr[i]) {
            maximumNumber = arr[i]
        }
    }
    console.log(maximumNumber)
}

// Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

function imprimirFibonacci() {
    let fibonacci = [0, 1];
    for (let i = 0; i < 10; i++) {
        let f = Number(fibonacci[i]) + Number(fibonacci[i + 1]);
        fibonacci.push(f)
    }
    console.log(fibonacci)
}

//Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión

function imprimirNFibonacci(numero) {
    let fibonacci = [0, 1];
    for (let i = 0; i < Number(numero); i++) {
        let f = Number(fibonacci[i]) + Number(fibonacci[i + 1]);
        fibonacci.push(f);
    }
    console.log(fibonacci[Number(numero) - 1]);
}

// Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

function conseguirNumerosPrimos(numero) {
    let resultado;
    if (Number(numero) <= 1) {
        resultado = false;
    } else if (Number(numero) == 2) {
        resultado = true;
    } else {
        resultado = true
        for (let i = 2; i < Number(numero); i++) {
            if (numero % i == 0) {
                resultado = false
            }
        }
    }
    return resultado;
}

//Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo

function calcularSumaNumeroEntero(numero) {
    let myArr = String(numero).split("").map((numero) => {
        return Number(numero)
    })
    let suma = 0;
    for (let i = 0; i < myArr.length; i++) {
        suma += myArr[i];
    }
    console.log(suma);
}

// Desafío de programación #18: Imprimir los primeros 100 números primos

function imprimir100NumerosPrimos() {
    const numerosPrimos = [];
    for(let i = 0; i<100;i++) if(conseguirNumerosPrimos(i)) numerosPrimos.push(i);
    for (let x = 0; x < numerosPrimos.length; x++) console.log(numerosPrimos[x]);
}
// Desafío de programación #19: Crear una función que retorne un array con los primeros números 
// "n-primos" mayores que un número particular definido "alComienzo"
// Ejemplo: Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7, 11, 13, 17, 19]

function imprimirNumerosPrimos(nPrimos, comienzaEn) {
        let numerosPrimos = [];
        let i = comienzaEn;

        while (numerosPrimos.length < nPrimos) {
            if (conseguirNumerosPrimos(i)) {
                numerosPrimos.push(i);
            }

            i++;
        }
        
        return numerosPrimos;
}

// Desafío de programación #20: Rotar un array hacia la izquierda una posición
// Ejemplo:
// [9, 1, 2, 3, 4] debería quedar como[1, 2, 3, 4, 9]
// [5] debería quedar como[5]
// [4, 3, 2, 1] debería quedar como[3, 2, 1, 4]

function rotarArrayIzquierda(arr){
    arr.push(arr.shift());
    console.log(arr);
}

// Desafío de programación #21: Rotar un array a la derecha una posición

function rotarArrayDerecha(arr){
    arr.unshift(arr.pop());
    console.log(arr);
}

// Desafío de programación #22: Invertir un array

function invertirArray(arr){
    const reversed = arr.reverse();
    return reversed;
}

// Desafío de programación #23: Invertir una cadena de caracteres

function invertirString(str){
    let text = "";
    let myArr = str.split("");
    let arrayInvertido = invertirArray(myArr);

    for (let i = 0; i < arrayInvertido.length; i++) {
        text += arrayInvertido[i];
    }
    console.log(text);
}

// Desafío de programación #24: Crear una función que reciba dos dos arrays(arreglos) como argumentos y returne el resultado en un nuevo arreglo

function convertirDosArrayEnUno(arr1, arr2){
    const nuevoArray = [];
    for(let i = 0; i < arr1.length; i++) nuevoArray.push(arr1[i]);
    for(let u = 0; u < arr2.length; u++) nuevoArray.push(arr2[u]);
    return(nuevoArray);
}

// Desafío de programación #26: Crear una función que reciba dos arrays de números 
// y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo

function crearRestaEntreConjuntos(arr1,arr2){
    let nuevoArr = [];
    
    for(let e of arr1){
        if(!arr2.includes(e))
            nuevoArr.push(e);
    }
    return nuevoArr;
}

// Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
// Ejemplo:
// [1, 2, 3, 4, 5, 4, 3, 2, 1, 0] debería retornar[1, 2, 3, 4, 5, 0]

function conseguirElementosDistintos(arr) {
    var arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        if (!estaEnElArray(arr[i], arr1)) {
            arr1.push(arr[i]);
        }
    }

    return arr1;
}

function estaEnElArray(n, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n)
            return true;
    }

    return false;
}