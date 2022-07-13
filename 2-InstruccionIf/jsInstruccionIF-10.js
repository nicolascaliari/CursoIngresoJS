function mostrar() {
  let nota;
  let mensaje;

  nota = Math.floor(Math.random() * 10 + 1);

  if (nota >= 9) {
    mensaje = ` Excelente, La nota es ${nota}`;
  } else if (nota >= 4) {
    mensaje = `aprobo la nota es ${nota}`;
  } else {
    mensaje = `La proxima se puede tu nota es ${nota}`;
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
