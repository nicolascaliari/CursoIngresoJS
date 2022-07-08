function mostrar() {
  let ladoUno = prompt("Ingrese un lado");
  let ladoDos = prompt("Ingrese lado dos");
  let ladoTres = prompt("Ingrese el tercer lado");
  ladoUno = parseInt(ladoUno);
  ladoDos = parseInt(ladoDos);
  ladoTres = parseInt(ladoTres);
  respuesta = (ladoUno + ladoDos + ladoTres) * 3;
  alert(respuesta);
}
