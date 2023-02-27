document.querySelector('#boton-calcular').onclick = function(){
    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);

    document.querySelector('#salario-mensual').value = salarioMensual;

    return false;
}

function calcularSalarioMensual(salarioAnual){
    const mesesEnAnio = 12;
    return salarioAnual / mesesEnAnio;
}
