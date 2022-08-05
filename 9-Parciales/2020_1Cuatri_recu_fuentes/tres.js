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

function mostrar(){
    let tipoBebida;
    let cantidadLitros;
    let masCantidad;
    let nombreConductor;
    let i;
    let total = 0;
    let totalAgua = 0;
    let totalGaseosa = 0;
    let totalCeveza = 0;

    let cantidadAgua;
    let cantidadGaseosa;
    let cantidadCerveza;

    precioAgua = 100;
    precioGaseosa = 150;
    precioCerveza = 200;


    let acumuladorAgua = 0;
    let acumuladorGaseosa = 0;
    let acumuladorCerveza = 0;



    for(i = 0 ; i < 3 ; i++){

        nombreConductor = prompt("Ingrese el nombre del conductor ");
        while(isNaN(nombreConductor) == false){
            nombreConductor = prompt("ERROR, Ingrese el nombre del conductor ");
        }

        cantidadAgua = prompt("Ingrese los litros de agua");
        cantidadAgua = parseInt(cantidadAgua);
        while(cantidadAgua < 0){
            cantidadAgua = prompt("ERROR, Ingrese los litros de agua");
            cantidadAgua = parseInt(cantidadAgua);
        }
       


        cantidadGaseosa = prompt("Ingrese los litros de gaseosa ");
        cantidadGaseosa = parseInt(cantidadGaseosa);
        while(cantidadGaseosa < 0){
            cantidadGaseosa = prompt("ERROR, Ingrese los litros de gaseosa ");
            cantidadGaseosa = parseInt(cantidadGaseosa);
        }
       

        cantidadCerveza = prompt("Ingrese los litros de cerveza");
        cantidadCerveza = parseInt(cantidadCerveza);
        while(cantidadCerveza < 0){
            cantidadCerveza = prompt("ERROR, Ingrese los litros de cerveza");
            cantidadCerveza = parseInt(cantidadCerveza);
        }
        acumuladorAgua+= cantidadAgua;
        acumuladorGaseosa+= cantidadGaseosa;
        acumuladorCerveza+= cantidadCerveza;

    
    }
    if(acumuladorAgua > acumuladorGaseosa && acumuladorAgua > acumuladorCerveza){
        masCantidad = "agua";
    }else if(acumuladorGaseosa > acumuladorCerveza){
        masCantidad = "gaseosa";
    }else {
        masCantidad = "cerveza"
    }

    
    totalAgua+= acumuladorAgua * precioAgua;
    totalGaseosa+= acumuladorGaseosa * precioGaseosa;
    totalCeveza+= acumuladorCerveza * precioCerveza;

    total = totalAgua + totalGaseosa + totalCeveza;

    document.write(`<br>tipo de bebida se transportó en mayor cantidad ${masCantidad}`);
    document.write(`<br>El total es  ${total}`);
}
