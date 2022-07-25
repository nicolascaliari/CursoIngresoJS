/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables

	let numeroIngresado;
	let minimo;
	let maximo;
	let continuar;
	let flag = 0; //variable bandera


	maximo = 0;
	minimo = 0;
	continuar = true;



	while(continuar) {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		continuar = confirm("Desea continuar?")
	

		if(flag == 0) {
			maximo = numeroIngresado;
			minimo = numeroIngresado;

			flag = 1;
		}

		if(numeroIngresado > maximo) {
			maximo = numeroIngresado;
		}
		else if(numeroIngresado < minimo) {
			minimo = numeroIngresado;
		}

	}

	

document.getElementById("txtIdMaximo").value = maximo;
document.getElementById("txtIdMinimo").value = minimo;

}//FIN DE LA FUNCIÓN