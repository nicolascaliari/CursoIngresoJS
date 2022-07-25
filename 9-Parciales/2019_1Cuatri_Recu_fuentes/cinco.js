function mostrar() {
  let continente;
  let tarjeta;
  let descuento;
  let precioBruto;
  let cantidadDias = prompt("Cuantos dias se va?");
  cantidadDias = parseInt(cantidadDias);

  precioBruto = cantidadDias * 100;

  continente = document.getElementById("selecContinente").value;
  tarjeta = document.getElementById("selecPago").value;

  switch (continente) {
    case "America": {
      switch (tarjeta) {
        case "Débito":
          descuento = precioBruto - (precioBruto * 25) / 100;
          break;
        default:
          descuento = precioBruto - (precioBruto * 15) / 100;
          break;
      }
      break;
    }

    case "África":
    case "Oceania":{
      switch (tarjeta) {
        case "MercadoPago":
        case "Efectivo":
          descuento = precioBruto - (precioBruto * 45) / 100;
          break;
        default:
          descuento = precioBruto - (precioBruto * 30) / 100;
          break;
      }
      break;
    }



    case "Europa": {
      switch (tarjeta) {
        case "Débito":
          descuento = precioBruto - (precioBruto * 35) / 100;
          break;
        case "MercadoPago":
          descuento = precioBruto - (precioBruto * 30) / 100;
          break;
      }
      break;
    }
  }

  alert(descuento);
}
