function validar(e){
e.preventDefault();
    var correoGato = document.querySelector("#correo").value;
    var contraseñaGato = document.querySelector("#contraseña").value;

    var correog = "gato@correo.com";
    var contraseñag = "A1234";

    var correoPerro = document.querySelector("#correo").value;
    var contraseñaPerro = document.querySelector("#contraseña").value;

    var correop = "perro@correo.com";
    var contraseñap = "B1234";

    var correoTomate = document.querySelector("#correo").value;
    var contraseñaTomate = document.querySelector("#contraseña").value;

    var correot = "tomate@correo.com";
    var contraseñat = "C1234";

    if (correog===correoGato && contraseñag===contraseñaGato || correop===correoPerro && contraseñap===contraseñaPerro ||  correot===correoTomate && contraseñat===contraseñaTomate){
      confirm("Bienvenido");

    }else if(correog!=correoGato && contraseñag===contraseñaGato || correop!=correoPerro && contraseñap===contraseñaPerro ||  correot!=correoTomate && contraseñat===contraseñaTomate){
alert("Correo Incorrecto");
} if (correog===correoGato && contraseñag===contraseñaGato || correop===correoPerro && contraseñap===contraseñaPerro ||  correot===correoTomate && contraseñat===contraseñaTomate){
  confirm("Bienvenido");

}else if(correog!=correoGato && contraseñag!=contraseñaGato || correop===correoPerro && contraseñap!=contraseñaPerro ||  correot===correoTomate && contraseñat!=contraseñaTomate){
alert("Contraseña o Correo Incorrectos");
alert("¿Desea recuperar su cuenta?");
}
}

var boton = document.querySelector("#IniciarSesion");
boton.addEventListener("click", validar);
