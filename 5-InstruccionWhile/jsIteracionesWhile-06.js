function mostrar()
{
	let numero;
	let acumulador;
	let control;
	let promedio;
	control = 0;
	acumulador=0;
	
	while(control < 5){
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		acumulador = acumulador + numero;
		control++;
	}

	promedio = acumulador / control;
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN