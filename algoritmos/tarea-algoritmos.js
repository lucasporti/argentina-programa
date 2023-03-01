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