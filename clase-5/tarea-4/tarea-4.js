function agregarNumeros(){
    const $li = document.querySelectorAll(".numero");
    for(let i=0;i<$li.length;i++){
        $li[i].innerHTML = Math.round(Math.random()*100);
    }
}
function crearArrayDeNumeros(){
    const $li = document.querySelectorAll(".numero");
    const arrayNumeros = [];
    for(let i = 0; i < $li.length; i++){
        arrayNumeros.push(Number($li[i].innerHTML))
    }
    return arrayNumeros;
}
function promedioNumeros(){
    let arrayNumeros = crearArrayDeNumeros();
    suma = 0;
    for(let i=0; i<arrayNumeros.length; i++){
        suma = suma + arrayNumeros[i];
    }
    return suma/arrayNumeros.length;
}
function numeroRepetido(){
    let array = crearArrayDeNumeros();
    let numero;
    for(let i=0; i<array.length;i++){
        for(let j=i;j<array.length; j++){
            if(array[i] === array[j]){
                numero = array[j]
            }
        }
    }
    if (numero === undefined) numero = "No hay números repetidos";
    return numero
}
agregarNumeros();
    
    document.querySelector("#promedio").innerHTML = `El promedio entre todos los números es: ${promedioNumeros()}`;
    document.querySelector("#numero-menor").innerHTML = `El número menor es: ${Math.min(...crearArrayDeNumeros())}`;
    document.querySelector("#numero-mayor").innerHTML = `El número mayor es: ${Math.max(...crearArrayDeNumeros())}`
    document.querySelector("#numero-repetido").innerHTML = `El número más repetido es: ${numeroRepetido()}`