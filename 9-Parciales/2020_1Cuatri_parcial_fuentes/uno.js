/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/




function mostrar()
{
	let continente;
	let pais;
	let cantidadHabitantes;
	let temperatura;
	let i;
	let flag;
	let promedio;
	let temperaturaMinima = 51;
	let paisMenosTemperatura;

	flag = true;

	let cantidadPaisMenosHabitantes;
	let nombrePaisMenosHabitantes;
	let temperaturasPares = 0;
	let cantidadAmerica = 0;
	let acumuladorPaisAmerica = 0;


	for(i=0 ; i<2 ; i++) {

	continente = prompt("Ingrese un continente");
	while(continente!="asia" && continente!="america" && continente!="europa") {
		continente = prompt("ERROR. reingrese un continente");
	}

	pais = prompt("Ingrese un pais")

	cantidadHabitantes = prompt("Ingrese la cantidad de habitantes 1-2000");
	cantidadHabitantes = parseInt(cantidadHabitantes);
	while(cantidadHabitantes < 1 || cantidadHabitantes > 2000){
		cantidadHabitantes = prompt("ERROR, reingrese la cantidad de habitantes 1-2000");
		cantidadHabitantes = parseInt(cantidadHabitantes);
	}

	temperatura = prompt("Ingrese la temperatura del territorio -50/50");
	temperatura = parseInt(temperatura);
	while(temperatura < -50 || temperatura > 50) {
		temperatura = prompt("ERROR, reingrese la temperatura del territorio -50/50");
		temperatura = parseInt(temperatura);
	}

	if( temperatura%2 == 0) {
		temperaturasPares++;
	}


	if(flag == true) {
		cantidadPaisMenosHabitantes = cantidadHabitantes;
		nombrePaisMenosHabitantes = pais;
		flag = false;
	}

	if(cantidadPaisMenosHabitantes > cantidadHabitantes) {
		nombrePaisMenosHabitantes = pais;
		cantidadPaisMenosHabitantes = cantidadHabitantes;
		

	}

	if(continente == "america" && temperatura < 0){
		acumuladorPaisAmerica++;
	}
	
	if(flag == true) {
		temperaturaMinima = temperatura;
		paisMenosTemperatura = pais;
		flag = false;
	}else {
		if(temperatura < temperaturaMinima){
			temperaturaMinima = temperatura;
			paisMenosTemperatura = pais;
		}
	}


}
	document.write(`<br>La cantidad de temperaturas pares son ${temperaturasPares}`)
	document.write(`<br>El nombre del pais con menos habitantes ${nombrePaisMenosHabitantes}`)
	document.write(`<br>la cantidad de paises de america que tienen menos de 0 grados son ${acumuladorPaisAmerica}`)
	 document.write(`<br>nombre del pais con menos temperatura : ${paisMenosTemperatura} y su temperatura es ${temperaturaMinima}`)
	// document.write()

	
}






// function mostrar()
// { 
// 	let i;
// 	let continente;
// 	let pais;
// 	let paisFrio;
// 	let millonesHabitantes;
// 	let millonesAcumulados=0;
// 	let menosMillones=0;
// 	let promedioHabitantes;
// 	let temperatura;
// 	let temperaturasPares=0;
// 	let temperaturaMin=51;
// 	let temperaturaBajoCeroAmerica=0;
// 	let bandera=0;
// 	let paisPocaGente=0;
// 	let habitantesAmerica=0;


// 	for(i=0;i<=4;i++)
// 	{
// 		continente=prompt("Ingrese continente: América/Asia/Europa");
// 		while(!(continente=="América"||continente=="Asia"||continente=="Europa")){
// 			continente=prompt("Por favor, ingrese continente: América/Asia/Europa");
// 		}

// 		pais =prompt("Ingrese un país de dicho continente");

// 		millonesHabitantes=parseInt(prompt("Ingrese cantidad de millones de habitantes entre 1 y 7000 inclusives."));
// 		while(isNaN(millonesHabitantes)||(millonesHabitantes<1||millonesHabitantes>2000))
// 		{
// 			millonesHabitantes=parseInt(prompt("Por favor, ingrese cantidad de millones de habitantes entre 1 y 7000 inclusives."));
// 		}

// 		temperatura=parseInt(prompt("Ingrese una temperatura  entre -50°C y 50°C inclusives."));
// 		while(isNaN(temperatura)||(temperatura>51||temperatura<-51))
// 		{
// 			temperatura=(prompt("Por favor, ingrese una temperatura entre -50°C y 50°C inclusives."));
// 		}
// 		if (temperatura%2==0)
// 		{
// 			temperaturasPares++;
// 		}
// 		if(temperatura<temperaturaMin)
// 		{
// 			temperaturaMin=temperatura;
// 			paisFrio=pais;
// 		}
// 		switch(continente)
// 		{
// 			case"América":
// 			if (temperatura<0) 
// 			{
// 				temperaturaBajoCeroAmerica++;
// 			}
// 			habitantesAmerica=habitantesAmerica+millonesHabitantes;
// 			break;
// 		}
		
// 		if(millonesHabitantes<menosMillones||bandera==0)
// 		{
// 			paisPocaGente=pais;
// 			menosMillones=millonesHabitantes
// 			bandera=1;
// 		}
// 		millonesAcumulados=millonesAcumulados+millonesHabitantes;
		
// 	}
// 	promedioHabitantes=millonesAcumulados/5;
// 	document.write("La cantidad de temperaturas pares es "+temperaturasPares+".<br>");
// 	document.write("El nombre del pais con menos habitantes es "+paisPocaGente+".<br>");
// 	document.write("La cantidad de paises de america que tienen menos de 0 grados es "+temperaturaBajoCeroAmerica+".<br>");
// 	document.write("El promedio de habitantes entre los paises ingresados es "+promedioHabitantes+" millones de habitantes.<br>");
// 	document.write("La temperatura mínima ingresada es "+temperaturaMin+"°C y nombre del pais que registro esa temperatura es "+paisFrio+".<br>");
// }


























// let tipo;
// let precio;
// let cantidad;
// let fabricante;
// let marca;
// let flag = true;
// let alcoholMasBarato;
// let cantidadAlcoholBarato;
// let fabricanteAlcoholBarato;





// let promedio;
// let acumuladorBarbijo = 0;
// let acumuladorAlcohol = 0;
// let acumuladorJabon = 0;
// let unidadesBarbijo = 0;
// let unidadesAlcohol = 0;
// let unidadesJabon = 0;

// for (i = 0;  i < 2; i++){


	
// 		tipo = prompt('Ingrese el tipo de "Barbijo" "Jabon" o "alcohol"').toLowerCase(tipo);
// 		while( tipo !="barbijo" && tipo!="jabon" && tipo!="alcohol" )
// 		{
// 			tipo = prompt('ERROR, reingrese el tipo de "Barbijo" "Jabon" o "alcohol"').toLowerCase(tipo);
// 		}
	
	
	
	
// 		precio = prompt("Ingrese el precio 200-300");
// 		precio = parseInt(precio);
// 		while(precio < 100 || precio > 300)
// 		{
// 		precio = prompt("ERROR, reingrese el precio 200-300");
// 		precio = parseInt(precio);
// 		}
	
	
	
	
// 		cantidad = prompt("Ingrese la cantidad");
// 		cantidad = parseInt(cantidad);
// 		while( cantidad < 1 || cantidad >= 1000 )
// 		{
// 		cantidad = prompt("ERROR, reingrese la cantidad");
// 		cantidad = parseInt(cantidad);
// 		}


// 		fabricante = prompt("Ingrese el fabricante");
// 		marca = prompt("Ingrese la marca");




// if(tipo == "alcohol" && (flag == true || precio < alcoholMasBarato)){
// 	flag = false;
// 	alcoholMasBarato = precio;
// 	cantidadAlcoholBarato = cantidad;
// 	fabricanteAlcoholBarato = fabricante;
// }




// 	switch(tipo){
// 		case "jabon":
// 			unidadesJabon+= cantidad;
// 			acumuladorJabon++
// 			break;

// 		case "barbijo":
// 			unidadesBarbijo+= cantidad;
// 			acumuladorBarbijo++
// 			break;

// 		case "alcohol":
// 			unidadesAlcohol+= cantidad;
// 			acumuladorAlcohol++
// 			break;
// 	}


	

// }

// if(unidadesJabon > unidadesAlcohol && unidadesJabon > unidadesBarbijo)
// {
// 	tipo = "jabon";
// 	promedio = unidadesJabon / acumuladorJabon;
// }
// else 
// {
// 	if(unidadesBarbijo > unidadesAlcohol && unidadesBarbijo > unidadesJabon)
// 	{
// 		tipo = "barbijo";
// 		promedio = unidadesBarbijo / acumuladorBarbijo;
// 	}
// 	else {
// 		tipo = "alcohol";
// 		promedio = unidadesAlcohol / acumuladorAlcohol;
// 	}
// }

// document.write(`<br> El alcohol mas barato es ${alcoholMasBarato} con unidades ${cantidadAlcoholBarato} y fabricnte ${fabricanteAlcoholBarato}`)

// document.write(`<br> El tipo con mas unidades es el ${tipo} con un promedio de ${promedio}`)

// document.write(`<br> unidades totales de jabon: ${unidadesJabon}`)


