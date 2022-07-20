function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			mensaje = "Esta en el oeste";
		break;
		case "Cataratas":
			mensaje = "Esta en el norte";
		break;
		case "Mar del plata":
			mensaje = "Esta en el este";
		break;
		case "Ushuaia":
			mensaje = "Esta en el sur";
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN