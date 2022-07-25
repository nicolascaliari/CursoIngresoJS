/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.").toLowerCase();
	while(claveIngresada != "utn750"){
		claveIngresada = prompt(" error, ingrese el número clave.").toLowerCase();
	}
}//FIN DE LA FUNCIÓN
