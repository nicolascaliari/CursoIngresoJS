/* 1)De 5  personas que ingresan a la farmacia se deben tomar y validar los siguientes datos.
nombre, numero de espera(del 0 al 99),DNI(validar entre 10.000.000 a 99.999.999) 
y monto de la factura emitida (validar que no sea negativo):
a)informar el promedio gastado por persona.
b)La cantidad de personas que su DNI es menor a 80.000.000 
y la cantidad de personas que su DNI es igual o mayor a los 80.000.000
c)el nombre y numero de espera del que más gastó
pedir datos por prompt y mostrar por document.write

*/

function mostrar() {
  let nombre;
  let numeroEspera;
  let dni;
  let factura;
  let i;
  let promedio;
  let facturaMasGasto;
  let nombreMasGasto;
  let numeroEsperaMasGasto;
  let flag;

  flag = true;
  let contadorFactura = 0;
  let acumuladorFactura = 0;

  let contadorPersonasDniMenos = 0;
  let contadorPersonasDniMayor = 0;

  for (i = 0; i < 5; i++) {
    nombre = prompt("Ingrese su nombre ");
    while (isNaN(nombre) == false) {
      nombre = prompt("ERROR, Ingrese su nombre ");
    }

    numeroEspera = prompt("Ingrese numero de espera ");
    numeroEspera = parseInt(numeroEspera);
    while (numeroEspera < 0 || numeroEspera > 99) {
      numeroEspera = prompt("ERROR, Ingrese numero de espera ");
      numeroEspera = parseInt(numeroEspera);
    }

    dni = prompt("Ingrese su dni");
    dni = parseInt(dni);
    while (dni < 10000000 || dni > 99999999) {
      dni = prompt("ERROR, Ingrese su dni");
      dni = parseInt(dni);
    }

    factura = prompt("Ingrese monto de factura ");
    factura = parseInt(factura);
    while (factura < 0) {
      factura = prompt("ERROR, Ingrese monto de factura ");
      factura = parseInt(factura);
    }

    contadorFactura++;
    acumuladorFactura += factura;

    if (dni < 80000000) {
      contadorPersonasDniMenos++;
    } else if // else
    (dni >= 80000000) {
      contadorPersonasDniMayor++;
    }

    if (flag == true) {
      facturaMasGasto = factura;
      numeroEsperaMasGasto = numeroEspera;
      nombreMasGasto = nombre;

      flag = false;
    } //else

    if (factura > facturaMasGasto) {
      facturaMasGasto = factura;
      numeroEsperaMasGasto = numeroEspera;
      nombreMasGasto = nombre;
    }
  }
  promedio = acumuladorFactura / contadorFactura;

  document.write(
    `<br>  el promedio gastado por persona ${promedio.toFixed(2)}`);

  document.write(`<br> La cantidad de personas que su DNI es menor a 80.000.000 es: ${contadorPersonasDniMenos} 
   y la cantidad de personas que su DNI es igual o mayor a los 80.000.000 es ${contadorPersonasDniMenos}`);
  
  
   document.write(
    `<br> el nombre es ${nombreMasGasto} y numero de espera del que más gastó ${numeroEsperaMasGasto}`);
}

/*Ejercicio 1

Ingresar el nombre de los 5 candidatos a presidente de CusCús,  la edad de cada uno y la cantidad
de votos (no menor a cero)  que sacó en las elecciones.
Informar: 
el candidato con más votos
el candidato con menos votos
el promedio de edades de los candidatos
total de votos emitidos.

*/
// function mostrar()
// {
// let nombrePresidente;
// let edad;
// let cantidadVotos;
// let i;

// let cantidadMasVotos;
// let cantidadMenosVotos;
// let nombreMasVotos;
// let nombreMenosVotos;
// let flag;
// let promedio;

// let contadorEdad = 0;
// let acumuladorEdad = 0;
// let totalDeVotos = 0;

// let contadorVotos =0;
// let acumuladorVotos = 0;
// flag = true;

// for (i = 0; i < 2; i++){
//     nombrePresidente = prompt("Ingrese nombre de cantidato a presidente ");
//     edad = prompt("Ingresar la edad ");
//     edad = parseInt(edad);
//     while(isNaN(edad)) {
//         edad = prompt("ERROR, reingresar la edad ");
//         edad = parseInt(edad);
//     }
//     cantidadVotos = prompt("Ingrese la cantidad de votos ");
//     cantidadVotos = parseInt(cantidadVotos);

//     while(isNaN(cantidadVotos) || cantidadVotos < 0) {
//         cantidadVotos = prompt("ERROR, reingrese la cantidad de votos ");
//         cantidadVotos = parseInt(cantidadVotos);
//     }

//     if(flag == true) {
//         cantidadMasVotos = cantidadVotos;
//         cantidadMenosVotos = cantidadVotos;
//         nombreMasVotos = nombrePresidente

//         flag = false;
//     }

//     if( cantidadVotos > cantidadMasVotos) {
//         cantidadMasVotos = cantidadVotos;
//         nombreMasVotos = nombrePresidente
//     }
//     else if(cantidadVotos < cantidadMenosVotos) {
//         cantidadMenosVotos = cantidadVotos;
//         nombreMenosVotos = nombrePresidente;
//     }

//     contadorEdad++;
//     acumuladorEdad += edad;

//     contadorVotos++;
//     acumuladorVotos+=cantidadVotos;
// }

// promedio = acumuladorEdad / contadorEdad;

// document.write(`El nombre del mas votado es ${nombreMasVotos} y su cantidad de votos es ${cantidadMasVotos}`)
// document.write(`<br>El nombre menos votado es ${nombreMenosVotos} y su cantidad de votos es ${cantidadMenosVotos}`)
// document.write(`<br> el promedio de edades es ${promedio}`)
// document.write(`<br> el total de votos es ${acumuladorVotos}`)
// }
