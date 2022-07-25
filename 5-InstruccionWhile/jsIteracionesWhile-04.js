/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = prompt("ingrese un número entre 0 y 10.");
	
	while(!(numero < 0 || numero > 9)){
		numero = prompt("ingrese un número entre 0 y 10.");
		
	}
	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN