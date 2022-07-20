function mostrar() {
  let estacion;
  let destino;
  let descuento = 0;
  let aumento = 0;
  let precio = 15000;
  let precioFinal;
  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
		aumento=20;
		
      } else if (destino == "Mar del plata") {
		descuento=20;
      } else {
		descuento=10;
      }
      break;
    case "Verano":
      if (destino == "Bariloche") {
      descuento=20;
      } else if (destino == "Mar del plata") {
      aumento=20;
      } else {
      aumento=10;
      }
      break;
    case "Otoño":
    case "Primavera":
      if (destino == "Cordoba") {
		precioFinal = precio;
      } else {
      aumento=10;
      }

      break;
  }

 if(aumento != 0) {
   precioFinal = precio+(precio*aumento/100);
 }else if(descuento != 0){
   precioFinal = precio-(precio*descuento/100);
 }else {
   alert("Debe ingresar un numero valido")
 }


alert(precioFinal);
} //FIN DE LA FUNCIÓN
