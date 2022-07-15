function mostrar() {
  let numeroUno = prompt("Ingrese primer numero");
  let numeroDos = prompt("Ingrese segundo numero");
  let resultado;

  if (numeroUno === numeroDos) 
  {
    resultado = numeroUno + numeroDos;
  }
   else
  {
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    if (numeroUno > numeroDos)
  {
      resultado = numeroUno - numeroDos;
      if(resultado > 10) {
        resultado = `la resta es ${resultado} y superó el 10`
      }
  } else
  {
      resultado = numeroUno + numeroDos;
  }
  }

  alert(resultado);
}
