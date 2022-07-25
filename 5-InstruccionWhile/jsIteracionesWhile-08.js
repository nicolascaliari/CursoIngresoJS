/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let continuar;
  let numeroIngresado;
  let numerosPositivos;
  let multiplicacionNegativos;


  numerosPositivos = 0;
  continuar = true;
  multiplicacionNegativos=1;
  let flag = 0;

  while (continuar) {
    numeroIngresado = prompt("Ingrese un numero");
    numeroIngresado = parseInt(numeroIngresado);
    continuar = confirm("Desea continuar?");

    if (numeroIngresado >= 0) {
      numerosPositivos = numerosPositivos + numeroIngresado;
    } else {
      flag = 1;
      multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
		}
	}   
	if(flag == 0) 
	{
		multiplicacionNegativos=0;
	}
    
  
  document.getElementById("txtIdSuma").value = numerosPositivos;
  document.getElementById("txtIdProducto").value=multiplicacionNegativos;
} //FIN DE LA FUNCIÓN
