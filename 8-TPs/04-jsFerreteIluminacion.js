/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

 function CalcularPrecio() {
  let lamparas;
  let marca;
  let precioBruto;
  let impuesto;
  let precioFinal;

  let descuento = 0;
  let aumento = 10;

  lamparas = document.getElementById("txtIdCantidad").value;
  lamparas = parseInt(lamparas);
  marca = document.getElementById("Marca").value;
  precioBruto = lamparas * 35;

  switch (lamparas) {
    case 1:
    case 2:
      break;
    case 5:
      if (marca == "ArgentinaLuz") {
        descuento = 40;
      } else {
        descuento = 30;
      }
      break;
    case 4:
      if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
        descuento = 25;
      } else {
        descuento = 20;
      }
      break;
    case 3:
      if (marca == "ArgentinaLuz") {
        descuento = 15;
      } else if (marca == "FelipeLamparas") {
        descuento = 10;
      } else {
        descuento = 5;
      }
      break;
    default:
      if (marca == "ArgentinaLuz") {
        descuento = 50;
      }
  }

  precioFinal= precioBruto-(precioBruto*descuento)/100;

  if(precioFinal >= 120){
    impuesto = precioFinal + (precioFinal * aumento)/100;
    alert(`Usted pago ${impuesto} de IIBB.” `)
  }


  document.getElementById("txtIdprecioDescuento").value = precioFinal;
}





























 

// function CalcularPrecio() {
//   let lamparas;
//   let descuento;
//   let marca;
//   let precioBruto;
//   let impuesto;

//   lamparas = document.getElementById("txtIdCantidad").value;
//   lamparas = parseInt(lamparas);
//   marca = document.getElementById("Marca").value;
//   precioBruto = lamparas * 35;

//   if (lamparas >= 6) {
//     descuento = precioBruto - (precioBruto * 50) / 100;
//   } else {
//     if (lamparas == 5) {
//       switch (marca) {
//         case "ArgentinaLuz":
//           descuento = precioBruto - (precioBruto * 40) / 100;
//           break;
//         default:
//           descuento = precioBruto - (precioBruto * 30) / 100;
//           break;
//       }
//     } else {
//       if (lamparas == 4) {
//         switch (marca) {
//           case "ArgentinaLuz":
//           case "FelipeLamparas":
//             descuento = precioBruto - (precioBruto * 25) / 100;
//             break;
//           default:
//             descuento = precioBruto - (precioBruto * 20) / 100;
//             break;
//         }
//       } else {
//         if (lamparas == 3) {
//           switch (marca) {
//             case "ArgentinaLuz":
//               descuento = precioBruto - (precioBruto * 15) / 100;
//               break;
//             case "FelipeLamparas":
//               descuento = precioBruto - (precioBruto * 10) / 100;
//               break;
//             default:
//               descuento = precioBruto - (precioBruto * 5) / 100;
//               break;
//           }
//         }
//       }
//     }
//   }
//   alert(descuento);

  ///////TERCERA FORMA////////
  //  if (lamparas>=6)
  //      {
  //  descuento=precioBruto-(precioBruto*50/100);

  //      }else{
  //          if (lamparas==5) {
  //              if (marca=="ArgentinaLuz") {
  //              descuento=precioBruto-(precioBruto*40/100);

  //              }else{
  //                  descuento=precioBruto-(precioBruto*30/100);
  //              }
  //          } {}

  //      }if (lamparas==4) {
  //          if (marca=="ArgentinaLuz" || marca=="FelipeLamparas") {
  //              descuento=precioBruto-(precioBruto*25/100);
  //          }else{
  //              descuento=precioBruto-(precioBruto*20/100);
  //          }
  //      }if (lamparas==3) {
  //          if (marca=="ArgentinaLuz") {
  //            descuento=precioBruto-(precioBruto*15/100);
  //          }else if(marca=="FelipeLamparas") {
  //              descuento=precioBruto-(precioBruto*10/100);
  //          }else{
  //              descuento=precioBruto-(precioBruto*5/100);
  //          }
  //      }
  //      if (descuento>=120) {
  //      impuesto=(descuento/100)*10;
  //      descuento= impuesto+descuento;

  //  alert("Usted pago " + descuento +   " de IIBB., siendo " + impuesto + " el impuesto que se pagó");
  //      }

