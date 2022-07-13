function mostrar()
{
	let edad;
	edad = document.getElementById('txtIdEdad').value;

	if(edad >= 18) {
		alert('La persona es mayor de edad')
	}else {
		alert('No es mayor de edad');
	}

}//FIN DE LA FUNCIÓN