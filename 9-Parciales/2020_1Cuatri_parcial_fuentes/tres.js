function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;


	let confirmar = true;
	let  flag;
	flag = true;
	let temperaturaMasAlta;
	let nombreConMasTemperatura;


	while(confirmar){
	nombre = prompt("Ingrese su nombre");
	edad = prompt("Ingrese su edad");
	edad = parseInt(edad);

	sexo = prompt("Ingrese 'f' o 'm' ").toLowerCase(sexo);
	while(sexo!="m" && sexo!="f")
	{
		sexo = prompt("ERROR, reingrese 'f' o 'm' ").toLowerCase(sexo);
	}


	estadoCivil = prompt("Ingrese 'soltero', 'casado' o 'viudo' ").toLowerCase(estadoCivil);
	while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
	{
		estadoCivil = prompt("ERROR, reingrese 'soltero', 'casado' o 'viudo' ").toLowerCase(estadoCivil);
	}

	temperatura = prompt("Ingrese su temperatura corporal");
	temperatura = parseInt(temperatura);



	
if((flag == true || temperatura > temperaturaMasAlta)){
	flag = false;
	temperaturaMasAlta = temperatura;
	nombreConMasTemperatura = nombre;
  }

if( estadoCivil == "viudo" && edad >= 18){
	 
}
  
  confirmar = confirm("Desea seguir?")
	



}

  alert(`el nombre con mas temperatura es${nombreConMasTemperatura} y tiene una tempertura de ${temperaturaMasAlta}`)
}
