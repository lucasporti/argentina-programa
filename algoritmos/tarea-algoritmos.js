function ahorro(){
    let ahorro = 0;
    for(let i = 1; i<=100; i++){
        ahorro += i;
    }
    console.log("En 100 días ahorrarias " + ahorro) 
}

//Desafío de programación #1: Imprimí los números del 1 al 10

function imprimir1Al10() {
    for(let i = 1; i<=10; i++){
        console.log(i)
    }
}

// Desafìo de programación  #2: Imprimí los números impares del 1 al 100
function imprimirNumerosImpares1Al100(){
    for(let i=1; i<=100; i += 2){
        console.log(i)
    }
}

//Desafío de programación #3: Imprimí la tabla de multiplicación del 7

function tablaDel7() {
    const numero = 7;
    let multiplicador = 1;
    while(multiplicador <=10){
        console.log(`El resultado de ${numero} multiplicado por ${multiplicador} es: ${numero*multiplicador}`);
        multiplicador++;
    }
}

// Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
function tablaDel1Al9(){
    for(let i = 1; i<10; i++){
        for(let x = 0; x<10; x++){
            console.log(`El resultado de ${i} multiplicado por ${x} es: ${i*x}`)
        }
}
}

// Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
function sumaDeArray(){
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    console.log(suma);
}

// Desafío de programación #6: Calcula 10! (10 factorial)

function diezFactorial() {
    let diezFactorial = 10;
    for(let i=9;i>=1;i--){
        diezFactorial *= i;
    }
    console.log(diezFactorial)
}

// Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

function sumarNumerosImpares1Al30(){
    suma = 0;
    for(let i=11;i<30;i=i+2){
        suma = suma + i;
    }
    console.log(suma);
}

// Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
function celsiusAFahrenheit(){
    let celsius = Number(prompt("Ingresá los grados celsius\nsolo números"));
    let fahrenheit = (1.8*celsius) + 32;
    console.log(`${celsius} grados celsius son ${fahrenheit} grados fahrenheit`)
}

//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
function fahrenheitACelsius(){
    let fahrenheit = Number(prompt("Ingresá los grados fahrenheit\nsolo números"));
    let celsius = ((fahrenheit-32)*5)/9;
    console.log(`${fahrenheit} grados fahrenheit son ${celsius} grados celsius`);
}

// Desafío de programación #10: Calcula la suma de todos los números en un array de números
function sumaDeNumerosArray(arr){
    suma = 0;
    for(let i = 0; i<arr.length;i++){
        if(isNaN(arr[i])){
        }else{
            suma += arr[i];
        }
    }
    console.log(suma);
}

// Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
function crearPromedioArray(arr){
    suma = 0;
    contador= 0;
    for(let i=0;i<arr.length;i++){
        if(isNaN(Number(arr[i]))){
        }else{
            suma += Number(arr[i]);
            contador++;
        }
    }
    let promedio=suma/contador;
    console.log(promedio);
}

//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

function crearArrayPositivos(arr){
    const ARRAY_POSITIVOS = [];
    for(let i = 0; i<arr.length;i++){
        if(isNaN(arr[i])){
        } else if(arr[i]>0){
            ARRAY_POSITIVOS.push(arr[i]);
        }
    }
    console.log(ARRAY_POSITIVOS)
}

//Desafío de programación #13: Find the maximum number in an array of numbers

function findMaximumNumber(arr){
    let maximumNumber = 0;
    for(let i=0;i<arr.length;i++){
        if(maximumNumber < arr[i]){
            maximumNumber = arr[i]
        }
    }
    console.log(maximumNumber)
}

// Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

function imprimirFibonacci(){
    let fibonacci=[0,1];
    for(let i=0;i<10;i++){
        let f = Number(fibonacci[i]) + Number(fibonacci[i+1]);
        fibonacci.push(f)
    }
    console.log(fibonacci)
}

//Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión

function imprimirNFibonacci(numero){
    let fibonacci=[0,1];
    for(let i=0;i<Number(numero);i++){
        let f = Number(fibonacci[i]) + Number(fibonacci[i+1]);
        fibonacci.push(f);
    }
    console.log(fibonacci[Number(numero)-1]);
}

// Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

function conseguirNumerosPrimos(numero){
    let resultado;
    if(Number(numero)<= 1){
        resultado=false;
    }else if(Number(numero)==2){
        resultado = true;
    }else{
        resultado=true
        for(let i=2;i<Number(numero);i++){
            if(numero%i == 0){
                resultado=false
        }
        }
    }
    return resultado;
}

//Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo

function calcularSumaNumeroEntero(numero){
    let myArr = String(numero).split("").map((numero)=>{
        return Number(numero)
    })
    let suma = 0;
    for(let i = 0; i<myArr.length;i++){
        suma += myArr[i];
    }
    console.log(suma);
}