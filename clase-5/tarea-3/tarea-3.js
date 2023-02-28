document.querySelector("#boton-calcular").onclick = function(){
    const arrayHoras = document.querySelectorAll(".horas");
    const arrayMinutos = document.querySelectorAll(".minutos");
    const arraySegundos = document.querySelectorAll(".segundos");

    const horasTotales = calcularTiempoArray(arrayHoras);
    const minutosTotales = calcularTiempoArray(arrayMinutos);
    const segundosTotales = calcularTiempoArray(arraySegundos);

    calcularTiempoVideos(horasTotales, minutosTotales, segundosTotales);
    return false;
}

function calcularTiempoArray(array){
    let tiempoTotal = 0;
    for(let i = 0; i<array.length;i++){
        tiempoTotal += Number(array[i].value);
    }
    return tiempoTotal;
}

function calcularTiempoVideos(horas,minutos,segundos){
    minutos = minutos + parseInt(segundos/60);
    segundos = segundos % 60;
    horas = horas + parseInt(minutos/60);
    minutos = minutos % 60;
    return resultado.innerHTML = `En total los videos duran
    <br>Horas totales: ${horas}
    <br>Minutos totales: ${minutos}
    <br>Segundos totales: ${segundos}`
}