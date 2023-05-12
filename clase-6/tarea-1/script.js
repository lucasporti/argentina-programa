/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const divGrupoFamiliar = document.querySelector("#grupo-familiar");
const edades = document.querySelector("#edades");
const tamanioGrupoFamiliar = document.querySelector("#tamanio");
const botonOk = document.querySelector("#ok");
const divBotones = document.querySelector("#botones");
const botonCalcular = document.querySelector("#calcular");
const botonEmpezarDeNuevo = document.querySelector("#empezar");
const resultados = document.querySelector("#resultados");
divBotones.style.display = "none";
resultados.style.display = "none";
botonOk.onclick = function(){
    if (tamanioGrupoFamiliar.value === '' || tamanioGrupoFamiliar.value == 0){
        alert('No ingresaste nigun numero, intentalo de nuevo')
    }else{
        
        //Limpiar la página de el label que pregunta la cantidad de familiares
        divGrupoFamiliar.style.display = "none";

        for(let i = 1; i <= tamanioGrupoFamiliar.value; i++){
            const label = document.createElement('label');
            const input = document.createElement('input');
            const familiar = document.createTextNode(`Edad de familiar ${i}`);
            input.type = "number";
            input.setAttribute("id", "edad");
            edades.appendChild(label.appendChild(familiar));
            edades.appendChild(input);
            edades.innerHTML += '<br>'
        }
        // Muestra los botones de calcular y la lista de resultado
        divBotones.style.display = "block";
        resultados.style.display = "block";
    }
}
// Cuando se le da click al boton calcular se ejecuta la función que itera sobre los valores
// en los inputs de familiares, chequea si estos son validos(son distintos de 0 y '')
// y los agrega a una suma y a un array que luego sirven para calcular los resultados
botonCalcular.onclick = function(){
    const inputs = document.querySelectorAll("#edad");
    let suma = 0;
    let contador = 0;
    const arrayDeNumeros = [];
    for(let i=0; i<tamanioGrupoFamiliar.value; i++){
        if(inputs[i].value === '' || inputs[i].value == 0){
            console.log("Ignorado");
        }else{
            suma += Number(inputs[i].value);
            contador++;
            arrayDeNumeros.push(Number(inputs[i].value));
        }
    }
    if(suma == 0){
        alert("No ingresaste ninguna edad")
    }else
    crearResultado(arrayDeNumeros,suma,contador)
}
// Función para crear la lista que contiene los resultados(Mayor edad, menor edad y promedio);
function crearResultado(arr,sum,cont){
    resultados.innerHTML = `<li>El familiar más grande tiene ${mayorEdad(arr)} años</li>
    <li>El familiar más chico tiene ${menorEdad(arr)} años</li>
    <li>El promedio de edad es ${sum/cont} años</li>`
}
// Función que devuelve el número(edad) más grande iterando sobre un array
function mayorEdad(arr){
    let mayor = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>mayor) mayor = arr[i];
    }
    return mayor;
}
// Función que devuelve el número más chico iterando sobre un array
function menorEdad(arr){
    let menor = 1000;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<menor) menor = arr[i];
    }
    return menor;
}
botonEmpezarDeNuevo.onclick = function(){
    console.log(resultados)
    resultados.innerHTML = '';
    edades.innerHTML = '';
    divBotones.style.display = "none";
    divGrupoFamiliar.style.display = "block";
    tamanioGrupoFamiliar.value = '';
}