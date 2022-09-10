/*

3)Copa piston
Se deberá generar un programa para registrar las estadísticas de los 10 integrantes de una carrera de autos.
Se pedirá el ingreso de:
nombre, edad y nacionalidad del piloto  - cantidad de carreras ganadas - número del vehículo
se necesita saber :
-Nacionalidad del piloto más joven.
-Cantidad de vehículos con número par.
-Nombre del piloto con menos victorias y el número de auto impar.
-Cantidad de pilotos mayores de 25 años con número de vehículo impar.
-Nombre del piloto más joven con más victorias.
-Nacionalidad del piloto más veterano con menos victorias.
-Promedio de edad de los pilotos que tiene un vehículo con número par.

*/

function mostrar(){
let nombre;
let edad; 
let nacionalidad;
let cantidadCarrerasGanadas;
let numeroVehiculo;
let flag;
let flagMasVictorias;
let flagVeterano;
let promedio;



let pilotoMasJoven;
let nacionalidadMasJoven;
let nombrePilotoMasJovenVictorias;
let masVictorias;
let nacionalidadVeterano;
let nombreMenosVictorias;



let contadorVehiculosPares = 0;
let acumuladorVehihuloPar = 0;
let cantidadPilotosMayores = 0;

flag = true;
flagMasVictorias = true;
flagVeterano = true;


for(i=0 ; i < 2 ; i++){

    nombre = prompt("Ingrese su nombre ");
    while(isNaN(nombre) == false){
    nombre = prompt("ERROR, Ingrese su nombre ");
    }


    edad = prompt("Ingrese su edad");
    edad = parseInt(edad);
    while(isNaN(edad) || edad < 10 || edad > 65) {
    edad = prompt("ERROR, Ingrese su edad");
    edad = parseInt(edad); 
    }

    nacionalidad = prompt("Ingrese su nacionalidad ");
    while(isNaN(nacionalidad) == false){
        nacionalidad = prompt("ERROR, Ingrese su nacionalidad ");
    }

    cantidadCarrerasGanadas = prompt("Ingrese la cantidad de carreras ganadas ");
    cantidadCarrerasGanadas = parseInt(cantidadCarrerasGanadas);
    while(isNaN(cantidadCarrerasGanadas) || cantidadCarrerasGanadas <= 0){
        cantidadCarrerasGanadas = prompt("ERROR, Ingrese la cantidad de carreras ganadas ");
        cantidadCarrerasGanadas = parseInt(cantidadCarrerasGanadas);
    }

    numeroVehiculo = prompt("Ingrese el numero del vehiculo ");
    numeroVehiculo = parseInt(numeroVehiculo);
    while(isNaN(numeroVehiculo) || numeroVehiculo <= 0){
        numeroVehiculo = prompt("ERROR, Ingrese el numero del vehiculo ");
        numeroVehiculo = parseInt(numeroVehiculo);
    }


    if(flag == true) {
        pilotoMasJoven = edad;
        nacionalidadMasJoven = nacionalidad;



        flag = false;
    }else {

     if(edad < pilotoMasJoven) {
        pilotoMasJoven = edad;
        nacionalidadMasJoven = nacionalidad;
    }
    }



    if(numeroVehiculo%2 == 0){
        contadorVehiculosPares++;
        acumuladorVehihuloPar+= edad;
    } else {
        if(numeroVehiculo%2 == 1 && edad > 25){
          cantidadPilotosMayores++;
        }
    }



    if(flagMasVictorias == true) {
        
    masVictorias = cantidadCarrerasGanadas;
    nombrePilotoMasJovenVictorias = nombre;
    nacionalidadVeterano = nacionalidad;


    flagMasVictorias = false;
    }else {

    if(cantidadCarrerasGanadas > masVictorias) {
        masVictorias = cantidadCarrerasGanadas;
        nombrePilotoMasJovenVictorias = nombre;
    }else {
        if(cantidadCarrerasGanadas < masVictorias){
            nacionalidadVeterano = nacionalidad;
        }

        if(cantidadCarrerasGanadas < masVictorias &&numeroVehiculo%2 == 1 ) {
            nombreMenosVictorias = nombre;

        }
    }
}



} 

promedio = acumuladorVehihuloPar / contadorVehiculosPares;


document.write(`<br> Nacionalidad del piloto más joven ${nacionalidadMasJoven}`);
document.write(`<br>-Cantidad de vehículos con número par ${contadorVehiculosPares}`);
document.write(`<br> Cantidad de pilotos mayores de 25 años con número de vehículo impar ${cantidadPilotosMayores}`);
document.write(`<br>Nombre del piloto más joven con más victorias. ${nombrePilotoMasJovenVictorias}`);
document.write(`<br> Nacionalidad del piloto más veterano con menos victorias. ${nacionalidadVeterano}`);
document.write(`<br>Promedio de edad de los pilotos que tiene un vehículo con número par. ${promedio}`);
document.write(`<br> -Nombre del piloto con menos victorias y el número de auto impar. ${nombreMenosVictorias}`);


}






























/*Ejercicio 3

UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos, 
se le pide a los pasajeros: nombre, edad (validar 13-85), cantidad de asientos que desea reservar 
(validar minimo 1 maximo 5 asientos), cantidad de kilómetros del viaje (validar 3000 kilómetros 
el mínimo - 18000 kilómetros máximo) y el destino (validar río de janeiro, italia, cancún, japón), 
el precio por asiento es 1500 pesos, informar:
1) la recaudación total bruta del vuelo
2) la cantidad total asientos ocupados
3) la edad promedio por pasajero
4) El precio Final:
Tener en cuenta que:

dependiendo el destino seleccionado se aplican aumentos o descuentos según corresponda:
japón 40% de aumento
rio 10% descuento
italia 25% aumento
cancún 5% descuento

según la cantidad de asientos reservados se aplican ciertos descuentos sobre el PRECIO FINAL:
1 pasajero 10% descuento
2-3 pasajeros 15% descuento
4-5 pasajeros 20% descuento


*/

// function mostrar(){
// let nombre;
// let edad;
// let cantidadAsientos;
// let cantidadKilometros;
// let destino;
// let precioAsiento;
// let promedio;
// let precioFinal;

// let continuar;
// continuar = true;
// precioAsiento = 1500;
// let descuento = 0;
// let aumento = 0;


// let acumuladorTotalBruto = 0;
// let cantidadAsientosOcupados = 0;
// let contadorPromedio = 0;
// let acumuladorEdad = 0;
// let acumuladorPrecioFinal = 0;

// while(continuar){

//     nombre = prompt("Ingrese su nombre ");
//     while(isNaN(nombre) == false){
//     nombre = prompt("ERROR, Ingrese su nombre ");
//     }

//     edad = prompt("Ingrese su edad");
//     edad = parseInt(edad);
//     while(isNaN(edad) || edad < 13 || edad > 85) {
//     edad = prompt("ERROR, Ingrese su edad");
//     edad = parseInt(edad); 
//     }

//     cantidadAsientos = prompt("Ingrese la cantidad de asientos ");
//     cantidadAsientos = parseInt(cantidadAsientos);
//     while(isNaN(cantidadAsientos) || cantidadAsientos < 1 || cantidadAsientos > 5){
//     cantidadAsientos = prompt("ERROR, Ingrese la cantidad de asientos ");
//     cantidadAsientos = parseInt(cantidadAsientos);
//     }

//     cantidadKilometros = prompt("Ingrese la cantidad de kilometros ");
//     cantidadKilometros = parseInt(cantidadKilometros);
//     while(isNaN(cantidadKilometros) || cantidadKilometros < 3000 || cantidadKilometros > 18000 ){
//         cantidadKilometros = prompt("ERROR, Ingrese la cantidad de kilometros ");
//         cantidadKilometros = parseInt(cantidadKilometros);
//     }

//     destino = prompt("Ingrese su destino");
//     while(isNaN(destino) == false || destino!="rio de janeiro" && destino!="italia" && destino!="cancun" && destino!="japon"){
//         destino = prompt("ERROR, Ingrese su destino");
//     }

//     precioBase = precioAsiento * cantidadAsientos;
//     acumuladorTotalBruto+= precioBase;
    
//     cantidadAsientosOcupados+= cantidadAsientos;

//     contadorPromedio++;
//     acumuladorEdad+= edad;

//     switch(destino){
//         case "rio de janeiro":
//             if(cantidadAsientos == 1){
//                 descuento = 20;
//             }else if(cantidadAsientos == 2 || cantidadAsientos == 3){
//                 descuento = 25;
//             }else {
//                 descuento = 30;
//             }
//             break;
//         case "italia":
//             if(cantidadAsientos == 1){
//                 aumento = 15;
//             }else if(cantidadAsientos == 2 || cantidadAsientos == 3){
//                 aumento = 10;
//             }else {
//                 aumento = 5;
//             }
//             break;
//         case "cancun":
//             if(cantidadAsientos == 1){
//                 descuento = 15;
//             }else if(cantidadAsientos == 2 || cantidadAsientos == 3){
//                 descuento =20;
//             }else {
//                 descuento = 25;
//             }
//             break;
//         case "japon":
//             if(cantidadAsientos == 1){
//                 aumento = 30;
//             }else if(cantidadAsientos == 2 || cantidadAsientos == 3){
//                 aumento = 25;
//             }else {
//                 aumento = 20;
//             }
//             break;
//     }

//     if(descuento>0)
//     {
//         precioFinal=precioBase-(precioBase*descuento)/100;
//     }else {

//         if (aumento>0)
//         {
//             precioFinal=precioBase+(precioBase*aumento)/100;
//         }
    
//     }

//     acumuladorPrecioFinal+= precioFinal;


// continuar = confirm("Desea continuar?");
// }

// promedio = acumuladorEdad / contadorPromedio;


// document.write(`<br> la recaudación total bruta del vuelo ${acumuladorTotalBruto}`);
// document.write(`<br>la cantidad total asientos ocupados ${cantidadAsientosOcupados}`);
// document.write(`<br>la edad promedio por pasajero ${promedio}`);
// document.write(`<br>El precio final es: ${acumuladorPrecioFinal}`);

// }


























/*

3)Una distribuidora de bebidas llena 5 comiones con sus productos y necesita guardar ciertos datos de cada una:
-Nombre del conductor
-Cantidad de litros de agua transportada($100 el litro)
-Cantidad de litros de gaseosa transportada ($150 el litro)
-Cantidad de litros de cerveza transportada ($200 el litro)
Y debemos mostrar que tipo de bebida se transportó en mayor cantidad (cerveza,agua o gaseosa)
Además se pide un total de facturación que estará dado por cada litro de gaseosa vendida a $150,
cada litro de agua a $100 y cada litro de cerveza a $200.

*/

// function mostrar(){

// let nombreConductor;
// let cantidadAgua;
// let cantidadGaseosa;
// let cantidadCerveza;
// let mayorCantidad;
// let totalAgua;
// let totalGaseosa;
// let totalCerveza;
// let precioTotal;

// let precioAgua;
// let precioGaseosa;
// let precioCerveza;

// precioAgua = 100;
// precioGaseosa = 150;
// precioCerveza = 200;


// let acumuladorAgua = 0;
// let acumuladorGaseosa = 0;
// let acumuladorCerveza = 0;

//     for(i=0 ; i < 3 ; i++){

//         nombreConductor = prompt("Ingrese nombre del conductor ");
//         while(isNaN(nombreConductor) == false){
//             nombreConductor = prompt("ERROR, Ingrese nombre del conductor ");
//         }

//         cantidadAgua = prompt("Ingrese la cantidad de agua");
//         cantidadAgua = parseInt(cantidadAgua);
//         while(isNaN(cantidadAgua) || cantidadAgua < 0){
//             cantidadAgua = prompt("ERROR, Ingrese la cantidad de agua");
//             cantidadAgua = parseInt(cantidadAgua);
//         }

        
//         cantidadGaseosa = prompt("Ingrese la cantidad de gaseosa");
//         cantidadGaseosa = parseInt(cantidadGaseosa);
//         while(isNaN(cantidadGaseosa) || cantidadGaseosa < 0){
//             cantidadGaseosa = prompt("ERROR, Ingrese la cantidad de gaseosa");
//             cantidadGaseosa = parseInt(cantidadGaseosa);
//         }

//         cantidadCerveza = prompt("Ingrese la cantidad de cerveza");
//         cantidadCerveza = parseInt(cantidadCerveza);
//         while(isNaN(cantidadCerveza) || cantidadCerveza < 0){
//             cantidadCerveza = prompt("ERROR, Ingrese la cantidad de cerveza");
//             cantidadCerveza = parseInt(cantidadCerveza);
//         }

//         acumuladorAgua+= cantidadAgua;
//         acumuladorGaseosa+= cantidadGaseosa;
//         acumuladorCerveza+= cantidadCerveza;

//     }
    

//     if(acumuladorAgua > acumuladorGaseosa && acumuladorAgua > acumuladorCerveza){
//         mayorCantidad =  "agua";
//     }else if(acumuladorGaseosa > acumuladorCerveza){
//         mayorCantidad = "gaseosa";
//     }else {
//         mayorCantidad = "cerveza";
//     }
   


// totalAgua = acumuladorAgua * precioAgua;
// totalGaseosa =acumuladorGaseosa * precioGaseosa;
// totalCerveza =acumuladorCerveza * precioCerveza;

// precioTotal = totalAgua + totalGaseosa + totalCerveza;


//     document.write(`mayor cantidad de bebida es: ${mayorCantidad}`);
//     document.write(`precio total es ${precioTotal}`);
// }



















































//     let tipoBebida;
//     let cantidadLitros;
//     let masCantidad;
//     let nombreConductor;
//     let i;
//     let total = 0;
//     let totalAgua = 0;
//     let totalGaseosa = 0;
//     let totalCeveza = 0;

//     let cantidadAgua;
//     let cantidadGaseosa;
//     let cantidadCerveza;

//     precioAgua = 100;
//     precioGaseosa = 150;
//     precioCerveza = 200;


//     let acumuladorAgua = 0;
//     let acumuladorGaseosa = 0;
//     let acumuladorCerveza = 0;



//     for(i = 0 ; i < 3 ; i++){

//         nombreConductor = prompt("Ingrese el nombre del conductor ");
//         while(isNaN(nombreConductor) == false){
//             nombreConductor = prompt("ERROR, Ingrese el nombre del conductor ");
//         }

//         cantidadAgua = prompt("Ingrese los litros de agua");
//         cantidadAgua = parseInt(cantidadAgua);
//         while(cantidadAgua < 0){
//             cantidadAgua = prompt("ERROR, Ingrese los litros de agua");
//             cantidadAgua = parseInt(cantidadAgua);
//         }
       


//         cantidadGaseosa = prompt("Ingrese los litros de gaseosa ");
//         cantidadGaseosa = parseInt(cantidadGaseosa);
//         while(cantidadGaseosa < 0){
//             cantidadGaseosa = prompt("ERROR, Ingrese los litros de gaseosa ");
//             cantidadGaseosa = parseInt(cantidadGaseosa);
//         }
       

//         cantidadCerveza = prompt("Ingrese los litros de cerveza");
//         cantidadCerveza = parseInt(cantidadCerveza);
//         while(cantidadCerveza < 0){
//             cantidadCerveza = prompt("ERROR, Ingrese los litros de cerveza");
//             cantidadCerveza = parseInt(cantidadCerveza);
//         }
//         acumuladorAgua+= cantidadAgua;
//         acumuladorGaseosa+= cantidadGaseosa;
//         acumuladorCerveza+= cantidadCerveza;

    
//     }
//     if(acumuladorAgua > acumuladorGaseosa && acumuladorAgua > acumuladorCerveza){
//         masCantidad = "agua";
//     }else if(acumuladorGaseosa > acumuladorCerveza){
//         masCantidad = "gaseosa";
//     }else {
//         masCantidad = "cerveza"
//     }

    
//     totalAgua+= acumuladorAgua * precioAgua;
//     totalGaseosa+= acumuladorGaseosa * precioGaseosa;
//     totalCeveza+= acumuladorCerveza * precioCerveza;

//     total = totalAgua + totalGaseosa + totalCeveza;

//     document.write(`<br>tipo de bebida se transportó en mayor cantidad ${masCantidad}`);
//     document.write(`<br>El total es  ${total}`);
// }
