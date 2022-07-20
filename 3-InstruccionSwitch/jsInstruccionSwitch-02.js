function mostrar()
{
let meses;
let mensaje;

meses = document.getElementById('txtIdMes').value;

switch(meses) {
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		mensaje = "Ya pasamos el frio, ahora calor!!!";
		break;
	case "Julio":
	case "Agosto":
		mensaje = "Abrigate que hace frio.";
		break;
	default:
		mensaje = "Falta para el invierno";
		break;
}
alert(mensaje);

}//FIN DE LA FUNCIÓN