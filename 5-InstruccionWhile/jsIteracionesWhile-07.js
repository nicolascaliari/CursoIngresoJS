/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
let acumulador;
let contador;
let numeroIngresado;
let continuar;
let promedio;

contador = 0;
acumulador = 0;
continuar = true;

while(continuar) {
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	contador++;
	acumulador = acumulador+numeroIngresado;
	continuar = confirm("Queres continuar?");
}

promedio = acumulador/contador;

document.getElementById("txtIdSuma").value = acumulador;
document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN