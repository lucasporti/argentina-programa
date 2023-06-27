/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) 
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0)
*/

const $divSalarios = document.querySelector("#salarios");
const $botonAgregar = document.querySelector("#agregar");
const $botonQuitar = document.querySelector("#quitar");
const $botonCalcular = document.querySelector("#calcular");
const $resultados = document.querySelector("#resultados");
$resultados.style.display = "none";
let contador = 0;
$botonAgregar.onclick = function() {
    $resultados.style.display = "none";
    contador++;
    const $label = document.createElement("label");
    $label.innerHTML = `Salario anual del familiar ${contador}`;
    $divSalarios.appendChild($label);
    const $input = document.createElement("input");
    $input.setAttribute("type", "number");
    $divSalarios.appendChild($input);
    $divSalarios.innerHTML += "<br>";

}

$botonQuitar.onclick = function() {
    contador--;
    $resultados.style.display = "none"
    $divSalarios.removeChild($divSalarios.lastChild);
    $divSalarios.removeChild($divSalarios.lastChild);
    $divSalarios.removeChild($divSalarios.lastChild);
}

$botonCalcular.onclick = function() {
    const $input = document.querySelectorAll("input");
    console.log($input[0].value)
    $resultados.innerHTML = `<li>Mayor salario anual: ${calcularMayorSalarioAnual($input)}</li>
                        <li>Menor salario anual: ${calcularMenorSalarioAnual($input)}</li>
                        <li>Salario anual promedio: ${calcularSalarioAnualPromedio($input)}</li>
                        <li>Salario mensual promedio: ${calcularSalarioMensualPromedio($input)}</li>`
    
    $resultados.style.display = "block"
}
function calcularSalarioMensualPromedio(arr){
    let salarios = calcularSalarioMensual(arr);
    let suma = 0;
    let divisor = 0;
    for(let i = 0; i < salarios.length; i++){
        suma += salarios[i];
        divisor++;
    }
    let resultado = suma/divisor;
    return resultado;
}
function calcularSalarioMensual(arr){
    let salarios = [];
    const MESES_EN_ANIO = 12;
    for(let i = 0; i < arr.length ; i++){
        salarios.push(Number(arr[i].value)/MESES_EN_ANIO);
    }
    return salarios;
}
function calcularSalarioAnualPromedio(arr){
    let suma = 0;
    let divisor = 0;
    for(let i = 0; i<arr.length; i++){
    suma += Number(arr[i].value);
    divisor++;
    }
    let salario= suma/divisor;
    return salario;
}
function calcularMayorSalarioAnual(arr){
    let salarioMayor = 0;
    for(let i=0; i<arr.length;i++){
        if(Number(arr[i].value>salarioMayor)){
            salarioMayor = Number(arr[i].value);
        }
    }
    return salarioMayor;
}
function calcularMenorSalarioAnual(arr){
    let salarioMenor = Number(arr[0].value);
    for(let i=0; i<arr.length;i++){
        if(Number(arr[i].value<salarioMenor)){
            salarioMenor = Number(arr[i].value);
        }
    }
    return salarioMenor;
}