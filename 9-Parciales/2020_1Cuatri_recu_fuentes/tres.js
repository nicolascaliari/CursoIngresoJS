function mostrar()
{
	let nombre;
	let edad;
	let asientosReservar;
	let cantidadKilometros;
	let destino;
	let precioPorAsiento;
	let continuar;
	let flag;
	let descuento = 0;
	let aumento = 0;
	let precioFinalDescuento;
	let precioFinalAumento;
	let totalBruto;
	let promedioEdad;


	continuar = true;
	flag = true;
	


	let acumuladorPrecioBruto = 0;
	let acumuladorAsientos = 0;
	let acumuladorEdad = 0;
	let contadorEdad = 0;


	while(continuar) {

		nombre = prompt("Ingrese su nombre ");

		edad = prompt("Ingrese su edad ");
		edad = parseInt(edad);
		while(edad < 13 || edad > 85){
			edad = prompt("ERROR, reingrese su edad ");
			edad = parseInt(edad);
		}

		asientosReservar = prompt("Ingrese la cantidad de asientos para reservar ");
		asientosReservar = parseInt(asientosReservar);
		while(asientosReservar < 1 || asientosReservar > 5) {
			asientosReservar = prompt("ERROR, reingrese la cantidad de asientos para reservar ");
			asientosReservar = parseInt(asientosReservar);	
		}
		cantidadKilometros = prompt("Ingrese la cantidad de kilometros de viaje 3000-18000 ");
		cantidadKilometros = parseInt(cantidadKilometros);
		while(cantidadKilometros < 3000 || cantidadKilometros > 18000) {
			cantidadKilometros = prompt("ERROR, reingrese la cantidad de kilometros de viaje ");
			cantidadKilometros = parseInt(cantidadKilometros);
		}
		destino = prompt("Ingrese el destino al que quiere viajar: rio de janeiro, italia, cancun, japon ");
		while(destino!= "rio de janeiro" && destino!= "italia" && destino!= "cancun" && destino!="japon") {
			destino = prompt("ERROR, reingrese el destino al que quiere viajar: rio de janeiro, italia, cancun, japon ");	
		}

		continuar = confirm("Desea continuar?");



		switch(destino){
			case "rio de janeiro":
				if(asientosReservar == 1){
					descuento = 20;
				}else if(asientosReservar == 2 || asientosReservar == 3){
					descuento = 25;
				}else{
					descuento = 30;
				}
				break;
			case "cancun":
				if(asientosReservar == 1){
					descuento = 15;
				}else if(asientosReservar == 2 || asientosReservar == 3){
					descuento = 20;
				}else{
					descuento = 25;
				}
				break;
			case "italia":
				if(asientosReservar == 1){
					aumento = 15;
				}else if(asientosReservar == 2 || asientosReservar == 3){
					aumento = 10;
				}else{
					aumento = 5;
				}
				break;
			case "japon":
				if(asientosReservar == 1){
					aumento = 30;
				}else if(asientosReservar == 2 || asientosReservar == 3){
					aumento = 25;
				}else{
					aumento = 20;
				}
				break;
		}

precioPorAsiento = 1500;

acumuladorPrecioBruto += precioPorAsiento * asientosReservar;
acumuladorAsientos += asientosReservar;

precioFinalDescuento = acumuladorPrecioBruto - (acumuladorPrecioBruto * descuento) / 100;
precioFinalAumento = acumuladorPrecioBruto + (acumuladorPrecioBruto * aumento) / 100;


contadorEdad++;
acumuladorEdad += edad;

}

promedioEdad = acumuladorEdad / contadorEdad;

	document.write(`<br> El precio final con descuento es: ${precioFinalDescuento}`);
	document.write(`<br> El precio final con aumento es: ${precioFinalAumento}`);
	document.write(`<br>El precio bruto es: ${acumuladorPrecioBruto}`);
	document.write(`<br> el promedio de las edades es de : ${promedioEdad.toFixed(2)}`);
	document.write(`<br>La cantidad de asientos reservados son: ${acumuladorAsientos}`);
}
