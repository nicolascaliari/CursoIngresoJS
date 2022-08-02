/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?*/


function mostrar()
{

  let nombre;
  let carrera;
  let estado;
  let genero;
  let nota;
  let flag;
  flag = true;
  let continuar;
  continuar = true;
  let promedio;

  // let unidadesProgramacion = 0;
  // let unidadesPsicologia = 0;
  // let unidadesDiseño = 0;
  let acumuladorProgramacion = 0;
  let acumuladorPsicologia = 0;
  let acumuladorDiseño = 0;


  let acumuladorMujeresProgramacion = 0;
  let acumuladorAlumnosNoBinarios = 0;

  let contadorNotaFinalizado = 0;
  let acumuladorNotaFinalizado = 0;
  let mejorNotaNoBinario;
  let nombreMejorNoBinario;

  while(continuar) {

    nombre = prompt("Ingrese su nombre");

    carrera = prompt("Ingrese la carrera que estudia");
    while(carrera!="programacion" && carrera!= "psicologia" && carrera!= "diseño grafico") {
      carrera = prompt("ERROR, reingrese la carrera que estudia");
    }

    estado = prompt("Ingrese la estado que estudia");
    while(estado!="curso" && estado!= "abandono" && estado!= "finalizado") {
      estado = prompt("ERROR, reingrese la estado que estudia");
    }

    genero = prompt("Ingrese su genero");
    while(genero!="femenino" && genero!= "masculino" && genero!= "nobinario") {
      genero = prompt("ERROR, reingrese su genero");
    }

    nota = prompt("Ingrese su nota 1-10");
    nota= parseInt(nota);
    while(nota < 1 || nota > 10) {
      nota = prompt("ERROR, rengrese su nota 1-10");
      nota= parseInt(nota);
    }

	switch(carrera){
		case "programacion":
			acumuladorProgramacion++;
			break;

		case "psicologia":
			acumuladorPsicologia++
      if(genero == "nobinario"){
        if(mejorNotaNoBinario < nota || flag == true){
          nota = mejorNotaNoBinario;
          nombre = nombreMejorNoBinario;
          flag == false;

        }
      }
			break;

		case "diseño grafico":
			acumuladorDiseño++
			break;
	}

  if(genero == "femenino" && carrera == "programacion"){   
    acumuladorMujeresProgramacion++;
  }
  continuar = confirm("Desea continuar?");
  
  if(genero == "nobinario")
{
acumuladorAlumnosNoBinarios++;
}

if(estado == "finalizado"){
contadorNotaFinalizado++;
acumuladorNotaFinalizado+=nota;
promedio = acumuladorNotaFinalizado / contadorNotaFinalizado;
}

}
document.write(`<br>programacion : ${acumuladorProgramacion}, en psicologia ${acumuladorPsicologia}, en disenio ${acumuladorDiseño}`);
document.write(`<br>las cantidad de mujeres que estudian programacion son: ${acumuladorMujeresProgramacion}`);
document.write(`<br>Cantidad de alumnos no binarios ${acumuladorAlumnosNoBinarios}`);
document.write(`<br> Nombre del mejor alumno: ${nombreMejorNoBinario} no binario en la carrera de psicología y su nota es: ${mejorNotaNoBinario}`)
document.write(`<br>el promedio es : ${promedio}`);
}





// function mostrar()
// {
//   let nombre;
//   let carrera;
//   let EstadoCarrera;
//   let sexo;
//   let nota;
//   let respuesta;
//   let mensaje;
//   let alumnosProgramacion=0;
//   let mejeresProgramacion=0;
//   let alumnosPsicologia=0;
//   let alumnosDiseño=0;
//   let noBinarios=0;
//   let finalizantes=0;
//   let acumuladorFinalizantes=0;
//   let promedioFinalizantes;
//   let bandera=0;
//   let mejorNoBinario=0;
//   let estadoMejor;
//   let nombreMejor;
//   let carreraMayor;

//   do{
//     nombre=prompt("Ingrese nombre real del alumno.");

//     carrera=prompt("Ingrese carrera del mismo: Programación/Psicología/Diseño gráfico");
//     while(!(carrera=="Programación"||carrera=="Psicología"||carrera=="Diseño gráfico"))
//     {
//       carrera=prompt("Por favor,Ingrese carrera del mismo: Programación/Psicología/Diseño gráfico");
//     }

//     EstadoCarrera=prompt("Ingrese estado de la carrera: en curso/abandono/finalizado");
//     while(!(EstadoCarrera=="en curso"||EstadoCarrera=="abandono"||EstadoCarrera=="finalizado")) 
//     {
//       EstadoCarrera=prompt("Por favor,Ingrese estado de la carrera: en curso/abandono/finalizado");
//     }

//     sexo=prompt("Ingrese sexo: femenino/masculino/no binario");
//     while(!(sexo=="femenino"||sexo=="masculino"||sexo=="no binario"))
//     {
//       sexo=prompt("Por favor,Ingrese sexo: femenino/masculino/no binario");
//     }

//     nota=parseInt(prompt("Ingrese Nota (entre 1 y 10)"));
//     while(isNaN(nota)||(nota<1||nota>10))
//     {
//       nota=parseInt(prompt("Por favor, Ingrese Nota (entre 1 y 10)"))
//     }

//     respuesta=prompt("Desea ingresar los datos de otro alumno: si/no");

//     switch(carrera)
//     {
//       case"Programación":
//       alumnosProgramacion++;
//       if(sexo=="femenino")
//       {
//         mejeresProgramacion++;
//       }
//       break;
//       case"Psicología":
//       alumnosPsicologia++;
//       if(sexo=="no binario")
//       {
//         if(nota>mejorNoBinario||bandera==0)
//         {
//           mejorNoBinario=nota;
//           nombreMejor=nombre;
//           bandera=1;
//         }
//       }
//       break;
//       case"Diseño gráfico":
//       alumnosDiseño++;
//       break;
//     }
//     if(sexo=="no binario")
//     {
//       noBinarios++;
//     }
//     if(EstadoCarrera=="finalizado")
//     {
//       finalizantes++;
//       acumuladorFinalizantes=acumuladorFinalizantes+nota;
//     }


//   }while(respuesta == "si"||respuesta=="Si"||respuesta=="Sí"||respuesta=="sí");

//   promedioFinalizantes=acumuladorFinalizantes/finalizantes;

//   if(alumnosProgramacion>alumnosDiseño&&alumnosProgramacion>alumnosPsicologia)
//   {
//     carreraMayor="programación";
//   }
//   else if(alumnosPsicologia>alumnosDiseño)
//   {
//     carreraMayor="psicología";
//   }
//   else
//   {
//     carreraMayor="diseño gráfico";
//   }
  
//   mensaje="La cantidad total de que ingresaron es:  Programación "+alumnosProgramacion+";  Psicología "+alumnosPsicologia+";  Diseño gráfico "+alumnosDiseño+".<br>"
//   mensaje+="La cantidad total de mujeres en Programación es "+mejeresProgramacion+".<br>";
//   mensaje+="La cantidad total alumnos no binarios es "+noBinarios+".<br>";
//   mensaje+="El promedio de notas de los alumnos finalizantes.es "+promedioFinalizantes+".<br>";
//   mensaje+="El Nombre del mejor alumno no binario de psicología es "+nombreMejor+" su nota es "+mejorNoBinario+" y su estado  en la carrera  es: "+estadoMejor+".<br>"
//   mensaje+="La carrera con mayor cantidad de alumnos es "+carreraMayor+".<br>";
//   document.write(mensaje);
// }


















  //  let productos;
//  let cantidad;
//  let precio;
//  let continuar;
//  let precioTotal;
//  let flag;
//  let precioMasCaro;
//  let productoMasCaro;
//  flag = true;
//  continuar = true;


//  // para saber que tipo hay mas
// let acumuladorArena = 0;
// let acumuladorCal = 0;
// let acumuladorCemento = 0;
// let unidadesArena = 0;
// let unidadesCal= 0;
// let unidadesCemento = 0;

//  while(continuar){

//  productos = prompt("Ingrese arena, cal o cemento");
//  while(productos!="arena" && productos!="cal" && productos!="cemento")
//  {
//   productos = prompt("ERROR, reingrese arena, cal o cemento");
//  }

//  cantidad = prompt("Ingrese la cantidad de bolsas");
//  cantidad = parseInt(cantidad);

//  precio = prompt("Ingrese su precio mayor a 0");
//  precio = parseInt(precio);
//  while(precio < 1)
//  {
//   precio = prompt("ERROR, reingrese su precio mayor a 0");
//   precio = parseInt(precio);
//  }


//  precioTotal = cantidad*precio;


// if(cantidad > 10 && cantidad < 30)
// {
//   precioConDescuento = precioTotal - (precioTotal * 15) / 100
// }else if(cantidad > 30)
// {
//   precioConDescuento = precioTotal - (precioTotal * 25) / 100
// }else {
//   precioConDescuento =`No aplica el descuento, su precio total es de ${precioTotal}`;
// }


// switch(productos){
//   case "arena":
//     unidadesArena+= cantidad;
//     acumuladorArena++
//     break;

//   case "cal":
//     unidadesCal+= cantidad;
//     acumuladorCal++
//     break;

//   case "cemento":
//     unidadesCemento+= cantidad;
//     acumuladorCemento++
//     break;
// }

// if(unidadesArena > unidadesCal && unidadesArena > unidadesCemento)
// {
// productos = "arena";

// }
// else 
// {
// if(unidadesCal > unidadesArena && unidadesCal > unidadesCemento)
// {
//   productos = "cal";
 
// }
// else {
//   productos = "cemento";
  
// }



// if((flag == true || precio < precioMasCaro)){
//   flag = false;
// 	precioMasCaro = precio;
//   productoMasCaro = productos
// }

// }
// continuar = confirm("Desea continuar?");

// }
//  document.write(`<br> ${precioConDescuento}`)

//  document.write(`<br> El tipo con mas unidades es el ${productos}`)

//  document.write(`<br> El tipo mas caro es el ${productos} con un precio de ${precio}`)
 
