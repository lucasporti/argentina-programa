document.querySelector("#boton-accion").onclick = function(){
    const nombreUsuario = document.querySelector("#nombre-usuario").value;
    const apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const edadUsuario = document.querySelector("#edad-usuario").value;

    document.querySelector("h1").innerText = "Bienvenido, " + nombreUsuario + "!";
    document.querySelector("#resultado").innerHTML = `<br>Nombre/s: ${nombreUsuario}<br>Apellido/s: ${apellidoUsuario}<br>Edad: ${edadUsuario}`

    return false;
}