/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let importe;
	let cantidadProducto;
	let marca;
	let origen;
	let i;
	let flagPrimerIngreso=true;
	let minimoImporte;
	let minimoImportePais;
	let maximoImporteMarca;
	let maximoImporte;
	let promedio;
	let acumuladorImporte=0;
	let acumuladorChina=0;
	let maximoConDescuento;
	for(i=0;i<5;i++)
	{
		do
		{
			importe = prompt("Ingrese el importe: ");
			importe=parseFloat(importe);
		}while(isNaN(importe)||importe<=0);
		do
		{
			marca=prompt("Ingrese la marca");
		}while(isNaN(marca)==false)
		do
		{
			origen = prompt("Ingrese el origen: ").toLowerCase(origen);
		}while(!isNaN(origen) && (origen!="china"&&origen!="uruguay"&&origen!="paraguay"));
		do
		{
			cantidadProducto = prompt("Ingrese la cantidad de producto: ");
			cantidadProducto = parseInt(cantidadProducto);
		}while(isNaN(cantidadProducto)==true && cantidadProducto<=0)


		if(flagPrimerIngreso==true)
		{
			minimoImporte=importe;
			maximoImporte=importe;
			maximoImporteMarca=marca;
			minimoImportePais=origen;
			flagPrimerIngreso=false;
		}
		else
		{
			if(maximoImporte<importe)
			{
				maximoImporte=importe;
				maximoImporteMarca=marca;
			}
			if(minimoImporte>importe)
			{
				minimoImporte=importe;
				minimoImportePais=origen;
			}
		}
		/*
		if(flagPrimerIngreso==true || maximoImporte<importe){
			maximoImporte=importe;
			maximoImporteMarca=marca;
		}
		if(flagPrimerIngreso==true || minimoImporte>importe){
			minimoImporte=importe;
			minimoImportePais=origen;
			flagPrimerIngreso==false;
		}*/


		acumuladorImporte+=importe;
		
		if(origen=="china")
		{
			acumuladorChina+=cantidadProducto;
		}

	}
	promedio=acumuladorImporte/i;
	maximoConDescuento=maximoImporte*0.9;
	

	document.write("<br> El minimo importe es: "+minimoImporte+" y pertecene al pais: "+minimoImportePais);
	document.write("<br> El maximo importe es: "+maximoImporte+" y pertecene a la marca: "+maximoImporteMarca);
	document.write("<br> El promedio de importe es: "+promedio);
	document.write("<br> La cantidad de productos de China es: "+acumuladorChina);
	document.write("<br> El descuento sobre "+maximoImporte+" es "+maximoConDescuento);
}


