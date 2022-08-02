/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar() {
	let i
	let cantidadProductos;
	let importe;
	let pais;
	let marca;
	let flag = true;
	let minimoImporte;
	let maximoImporte;
	let minimoImportePais;
	let maximoImporteMarca;
	let promedio;
	let acumuladorImporte=0;
	let acumuladorChina=0;
	let maximoConDescuento;

	for (i = 0;i<5;i++) {
		do 
		{
			importe = prompt("Ingresa el importe");
			importe = parseFloat(importe);
		} while (isNaN(importe) || importe <= 0)

		do 
		{
			marca = prompt("ingresa la marca");
		} while (isNaN(marca) == false)

		do 
		{
			pais = prompt("ingresa el pais").toLowerCase(pais);
		} while (isNaN(pais) == false && (pais != uruguay && pais != paraguay && pais != china))
		
		do
		{
			cantidadProductos = prompt("Ingrese la cantidad de productos");
			cantidadProductos = parseInt(cantidadProductos);
		}while(isNaN(cantidadProductos) && cantidadProductos<=0)

		
		
		if(flag == true ){
			maximoImporte= importe;
			minimoImporte= importe;
			maximoImporteMarca= marca;
			minimoImportePais= pais;
			flag = false;
		}
		else 
		{
			if(maximoImporte<importe)
			{
				maximoImporte = importe;
				maximoImporteMarca= marca;
			}

			if(minimoImporte > importe)
			{
				minimoImporte = importe;
				minimoImportePais = pais;
			}
		}

		acumuladorImporte+=importe;

		if(pais == "china")
		{
			acumuladorChina+= cantidadProductos;
		}
	}

	promedio = acumuladorImporte/i;
	maximoConDescuento = maximoImporte * 0.9;



document.write(`<br> El minimo importe es ${minimoImporte} del pais ${minimoImportePais}`);
document.write(`<br> El maximo importe es ${maximoImporte} del pais ${maximoImporteMarca}`);
document.write(`<br> El promedio del importe es ${promedio}`);
document.write(`<br> La cantidad de productos en china es ${acumuladorChina}`);
document.write(`<br> El descuento del maximo es ${maximoConDescuento}`);

}
















	// 	let nombre;
	// 	let apellido;
	// 	let edad;
	// 	let flag;
	// 	let edadMasVieja;
	// 	let nombreMasViejo;
	// 	let apellidoMasViejo;

	// 	flag =true;

	// 	let confirmar = true;

	// while(confirmar){
	// 	nombre  = prompt("Ingrese su nombre");
	// 	apellido = prompt("Ingrese su apellido");
	// 	edad = prompt("Ingrese su edad");
	// 	edad = parseInt(edad);



	// 	if(flag){
	// 		edadMasVieja = edad;
	// 		nombreMasViejo = nombre;
	// 		apellidoMasViejo = apellido;

	// 		flag = false;
	// 	}else {
	// 		if(edadMasVieja < edad){
	// 			edadMasVieja = edad;
	// 			nombreMasViejo = nombre;
	// 			apellidoMasViejo = apellido;
	// 		}
	// 	}

	// 	confirmar = confirm("Desea continuar?");
	// }

	// alert( `${nombreMasViejo} ${apellidoMasViejo} ${edadMasVieja}`)


