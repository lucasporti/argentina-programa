// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
function calcularEdad(anioActual, anioNacimiento) {
    return anioActual - anioNacimiento
}

let anioActual = Number(prompt("Porfavor, ingresá el año actual"));
let anioNacimiento = Number(prompt("Porfavor, ingresá tu año de nacimiento"));

console.log(`Tenes ${calcularEdad(anioActual,anioNacimiento)} años`)
// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

function calcularSalarioAnual(salarioMensual) {
    const mesesEnAnio = 12;
    return salarioMensual*mesesEnAnio;
}
function calcularSalarioMensual(salarioAnual) {
    const mesesEnAnio = 12;
    return salarioAnual/mesesEnAnio;
}
function calcularSalarioSemanal(salarioAnual) {
    const semanasEnAnio = 52;
    return salarioAnual/semanasEnAnio;
}
function calcularSalarioDiario(salarioAnual) {
    const DiasEnAnio = 365;
    return salarioAnual/DiasEnAnio;
}

let salarioMensual = Number(prompt("Porfavor, ingresá tu salario mensual"));
console.log(`Tu salario anual es $${calcularSalarioAnual(salarioMensual)}`);
let salarioAnual = Number(prompt("Porfavor, ingresá tu salario anual"));
console.log(`Tu salario mensual es $${calcularSalarioMensual(salarioAnual)}`);
console.log(`Tu salario semanal es $${calcularSalarioSemanal(salarioAnual)}`);
console.log(`Tu salario por dia es $${calcularSalarioDiario(salarioAnual)}`)