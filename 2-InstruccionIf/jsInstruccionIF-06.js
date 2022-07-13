function mostrar() {
  let edad;
  edad = document.getElementById("txtIdEdad").value;
  if (edad <= 12) {
    alert("Eres menor de edad");
  } else if (edad <= 17) {
    alert("Eres adolecente");
  } else {
    alert("Eres mayor de edad");
  }
} //FIN DE LA FUNCIÓN
