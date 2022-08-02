
function mostrar()
{
let nombrePresidente;
let edad;	
let cantidadVotos;
let i;

let cantidadMasVotos;
let cantidadMenosVotos;
let nombreMasVotos;
let nombreMenosVotos;
let flag;
let promedio;


let contadorEdad = 0;
let acumuladorEdad = 0;
let totalDeVotos = 0;



let contadorVotos =0;
let acumuladorVotos = 0;
flag = true;

for (i = 0; i < 2; i++){
    nombrePresidente = prompt("Ingrese nombre de cantidato a presidente ");
    edad = prompt("Ingresar la edad ");
    edad = parseInt(edad);
    while(isNaN(edad)) {
        edad = prompt("ERROR, reingresar la edad ");
        edad = parseInt(edad);
    }
    cantidadVotos = prompt("Ingrese la cantidad de votos ");
    cantidadVotos = parseInt(cantidadVotos);

    while(isNaN(cantidadVotos) || cantidadVotos < 0) {
        cantidadVotos = prompt("ERROR, reingrese la cantidad de votos ");
        cantidadVotos = parseInt(cantidadVotos);
    }



    if(flag == true) {
        cantidadMasVotos = cantidadVotos;
        cantidadMenosVotos = cantidadVotos;
        nombreMasVotos = nombrePresidente

        flag = false;
    }

    if( cantidadVotos > cantidadMasVotos) {
        cantidadMasVotos = cantidadVotos;
        nombreMasVotos = nombrePresidente
    }
    else if(cantidadVotos < cantidadMenosVotos) {
        cantidadMenosVotos = cantidadVotos;
        nombreMenosVotos = nombrePresidente;
    }

    contadorEdad++;
    acumuladorEdad += edad;


    contadorVotos++;
    acumuladorVotos+=cantidadVotos;
}


promedio = acumuladorEdad / contadorEdad;

document.write(`El nombre del mas votado es ${nombreMasVotos} y su cantidad de votos es ${cantidadMasVotos}`)
document.write(`<br>El nombre menos votado es ${nombreMenosVotos} y su cantidad de votos es ${cantidadMenosVotos}`)
document.write(`<br> el promedio de edades es ${promedio}`)
document.write(`<br> el total de votos es ${acumuladorVotos}`)
}



