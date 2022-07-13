function mostrar() {
  let edad;
  let estado;

  edad = document.getElementById("txtIdEdad").value;
  estado = document.getElementById("estadoCivil").value;
  edad = parseInt(edad);

  if (edad >= 18 && estado == "Soltero") {
    alert("Es soltero y no es menor");
  }
} //FIN DE LA FUNCIÓN
