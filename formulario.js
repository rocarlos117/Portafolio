function validar(e){

    var rCorreo = document.querySelector("#correo").value;
    var rContraseña = document.querySelector("#password").value;

    var tituloCorreo = "roberto@gmail.com";
    var tituloContraseña = "roberto";

    if (rCorreo===tituloCorreo && rContraseña===tituloContraseña) {
      confirm("Bienvenido");

    }else {
      alert("Correo o Contraseña Incorrecta");

    }
}

document.querySelector("#iniciar").addEventListener("click", validar);
