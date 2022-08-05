/*

2)Se requiere el ingreso de datos para un video juego de pokemon en línea hasta que el usuario quiera:
-Necesitaremos: nombre del jugador/a
-Género (validar M/F/X)
-Edad (validar entre 3 a 99 años)
-Pokemon inicial (validar Charmander, Squirtle o Bolbasaur)
Y deberemos mostrar el promedio de edad de los jugadores ingresados.
El nombre y el pokemon elegido del jugador más grande de edad y del jugador más joven.

*/

function mostrar() {
  let nombreJugador;
  let genero;
  let edad;
  let pokemonInicial;
  let promedio;
  let flag;
  let edadMayor;
  let edadMenor;
  let nombreMayor;
  let nombreMenor;
  let pokemonMayor;
  let pokemonMenor;

  let continuar;

  let contadorEdad = 0;
  let acumuladorEdad = 0;

  flag = true;
  continuar = true;

  while (continuar) {
    nombreJugador = prompt("Ingrese nombre de jugador ");
    while (isNaN(nombreJugador) == false) {
      nombreJugador = prompt("ERROR, Ingrese nombre de jugador ");
    }

    genero = prompt("Ingrese su genero m/f/x").toLowerCase();
    while (genero != "m" && genero != "f" && genero != "x") {
      genero = prompt("ERROR, Ingrese su genero m/f/x").toLowerCase();
    }

    edad = prompt("Ingrese su edad");
    edad = parseInt(edad);
    while (isNaN(edad) || edad < 3 || edad > 99) {
      edad = prompt("ERROR, Ingrese su edad");
      edad = parseInt(edad);
    }

    pokemonInicial = prompt(
      "Ingrese pokemon inicial Charmander/Squirtle/Bolbasaur"
    );
    while (
      pokemonInicial != "Charmander" &&
      pokemonInicial != "Squirtle" &&
      pokemonInicial != "Bolbasaur"
    ) {
      pokemonInicial = prompt(
        "ERROR, Ingrese pokemon inicial Charmander/Squirtle/Bolbasaur"
      );
    }

    contadorEdad++;
    acumuladorEdad += edad;

    if (flag == true) {
      edadMayor = edad;
      edadMenor = edad;
      nombreMayor = nombreJugador;
      nombreMenor = nombreJugador;
      pokemonMayor = pokemonInicial;
      pokemonMenor = pokemonInicial;

      flag = false;
    }else {

    if (edad > edadMayor) {
      edadMayor = edad;
      nombreMayor = nombreJugador;
      pokemonMayor = pokemonInicial;
    } else if (edad < edadMenor) {
      edadMenor = edad;
      nombreMenor = nombreJugador;
      pokemonMenor = pokemonInicial;
    }

  }

    continuar = confirm("Desea continuar?");
  }

  promedio = acumuladorEdad / contadorEdad;

  document.write(
    `<br> el promedio de edad de los jugadores ingresados ${promedio}`
  );
  document.write(
    `<br> edad mayor, su nombre es : ${nombreMayor} y su pokemon es ${pokemonMayor}`
  );
  document.write(
    `<br> edad menor, su nombre es : ${nombreMenor} y su pokemon es ${pokemonMenor}`
  );
}

















/*
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro y otros)solo esos tres tipos
raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)
y si es de tipo "otros"  , pedir solo un texto.
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/

// function mostrar() {
//   let animal;
//   let razaPerro;
//   let razaGato;
//   let razaOtro;
//   let edad;
//   let nombre;
//   let razaMasAnimales;
//   let promedio;
//   let i;
//   let flag;
//   let masViejoPerro = 0;
//   let nombreMasViejoPerro;

//   let masViejoGato = 0;
//   let nombreMasViejoGato;

//   let masViejoOtro = 0;
//   let nombreMasViejoOtro;
//   let contadorOtro = 0;
//   let contadorPerros = 0;
//   let contadorGatos = 0;
//   let acumuladorGatos = 0;

//   let contadorSiames = 0;
//   let acumuladorSiames = 0;
//   let contadorTurco = 0;
//   let acumuladorTurco = 0;
//   let contadorMestizo = 0;
//   let acumuladorMestizo = 0;

//   flag = true;

//   for (i = 0; i < 4; i++) {
//     animal = prompt("Ingrese gato, perro, otros");

//     switch (animal) {
//       case "perro":
//         razaPerro = prompt("Ingrese raza pastor, toy, callejero");
//         while (
//           razaPerro != "pastor" &&
//           razaPerro != "toy" &&
//           razaPerro != "callejero"
//         ) {
//           razaPerro = prompt("ERROR, Ingrese raza pastor, toy, callejero");
//         }

//         edad = prompt("Ingrese la edad 1-20");
//         edad = parseInt(edad);
//         while (edad < 1 || edad > 20) {
//           edad = prompt("ERROR, Ingrese la edad 1-20");
//           edad = parseInt(edad);
//         }

//         nombre = prompt("Ingrese nombre del animal");
//         while (!isNaN(nombre)) {
//           nombre = prompt("Ingrese nombre del animal");
//         }

//         contadorPerros++;
//         if (edad >= masViejoPerro) {
//           masViejoPerro = edad;
//           nombreMasViejoPerro = nombre;
//         }
//         break;

//       case "gato":
//         razaGato = prompt("Ingrese raza siames, turco, mestizo");
//         while (
//           razaGato != "siames" &&
//           razaGato != "turco" &&
//           razaGato != "mestizo"
//         ) {
//           razaGato = prompt("ERROR, Ingrese raza siames, turco, mestizo");
//         }
//         edad = prompt("Ingrese la edad 1-20");
//         edad = parseInt(edad);
//         while (edad < 1 || edad > 20) {
//           edad = prompt("ERROR, Ingrese la edad 1-20");
//           edad = parseInt(edad);
//         }
//         nombre = prompt("Ingrese nombre del animal");
//         while (!isNaN(nombre)) {
//           nombre = prompt("ERROR, Ingrese nombre del animal");
//         }

//         contadorGatos++;
//         if (edad > masViejoGato) {
//           masViejoGato = edad;
//           nombreMasViejoGato = nombre;
//         }
//         switch (razaGato) {
//           case "siames":
//             contadorSiames++;
//             acumuladorSiames+= edad;

//             break;
//           case "turco":
//             contadorTurco++;
//             acumuladorTurco+= edad;
//             break;
//           case "mestizo":
//             contadorMestizo++;
//             acumuladorMestizo+= edad;
//             break;
//         }

//         break;

//       case "otro":
//         razaOtro = prompt("Ingrese otra raza");
//         while (!isNaN(razaOtro)) {
//           razaOtro = prompt("ERROR, Ingrese otra raza");
//         }

//         edad = prompt("Ingrese la edad 1-100");
//         edad = parseInt(edad);
//         while (edad < 1 || edad > 100) {
//           edad = prompt("ERROR, Ingrese la edad 1-100");
//           edad = parseInt(edad);
//         }
//         nombre = prompt("Ingrese nombre del animal");
//         while (!isNaN(nombre))
//         {
//            nombre = prompt("Ingrese nombre del animal");
//         }
//         contadorOtro++;

//           if (edad > masViejoOtro) {
//             masViejoOtro = edad;
//             nombreMasViejoOtro = nombre;
//           }

//         break;
//     }
//   }

//   if (contadorSiames > contadorTurco && contadorSiames > contadorMestizo) {
//     razaMasAnimales = "siames";
//     promedio = acumuladorSiames / contadorSiames;
//   } else if (
//     contadorTurco > contadorSiames &&
//     contadorTurco > contadorMestizo
//   ) {
//     razaMasAnimales = "turco";
//     promedio = acumuladorTurco / contadorTurco;
//   } else {
//     razaMasAnimales = "mestizo";
//     promedio = acumuladorMestizo / contadorMestizo;
//   }

//   if (contadorPerros != 0)
//   {
//     document.write(
//       `<br> perro mas viejo: ${nombreMasViejoPerro}, ${masViejoPerro}`
//     );
//   }

//   if (contadorGatos != 0)
//   {
//     document.write(
//       `<br> gato mas viejo: ${nombreMasViejoGato},raza de gatos con mas animales ${razaMasAnimales} y su promedio es ${promedio}`
//     );
//   }

//  if(contadorOtro!=0) {

//   document.write(`<br> otro mas viejo: ${nombreMasViejoOtro}, ${masViejoOtro}`);
//  }
// }

/*Ejercicio 2

Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base
a las ventas de sus productos.
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
a) El libro más barato de drama con su importe.
b) Del libro más caro, el título.
c) Porcentaje de libros de cada género
d) La cantidad de libros que sean de ciencia ficción y cuesten menos de $700.
*/

// function mostrar()
// {
//   let titulo;
//   let genero;
//   let material;
//   let importe;
//   let continuar;
//   let flag;
//   let libroMasBarato;
//   let importeMasBarato;
//   let libroMasCaro;
//   let importeMasCaro;

//   continuar = true;
//   flag = true;

//   let contadorCienciaFiccion = 0;

//   while(continuar){

//     titulo = prompt("Ingresa el titulo del libro?");
//     while(isNaN(titulo)==false){
//       titulo = prompt("ERROR, reingresa el titulo del libro?");
//     }

//     genero = prompt("Ingrese el genero = ciencia-ficcion / drama / terror");
//     while(genero!="ciencia ficcion" && genero!="drama" && genero!="terror"){
//       genero = prompt("ERROR, reingrese el genero = ciencia-ficcion / drama / terror");
//     }

//     material = prompt("Ingrese el material: rustica / tapa dura");
//     while(material!="rustica" && material!="tapa dura"){
//       material = prompt("ERROR, reingrese el material: rustica / tapa dura");
//     }

//     importe = prompt("Ingrese el importe, no puede ser menor a 0 ni mayor a 3000");
//     while(importe < 0 || importe > 30000){
//       importe = prompt("ERROR, reingrese el importe, no puede ser menor a 0 ni mayor a 3000");
//     }
//     continuar = confirm("Queres seguir?")

//     if(flag == true) {
//       importeMasCaro = importe;
//       importeMasBarato = importe;
//       libroMasCaro = titulo;

//       flag = false;
//   }
//    if(importe < importeMasBarato && genero == "drama") {
//       importeMasBarato = importe;
//       libroMasBarato = titulo;
//   }

//   if( importe > importeMasCaro) {
//     importeMasCaro = importe;
//     libroMasCaro = titulo;
// }

// if(genero == "ciencia ficcion" && importe < 700){
//   contadorCienciaFiccion++;
// }

//   }
// document.write(`El libro mas barato es  ${libroMasBarato} con el importe de ${importeMasBarato}`);
// document.write(`<br>El nombre del libro mas caro es ${libroMasCaro}`);
// document.write(`<br>`);
// document.write(`<br> cantidad de libros de ciencia ficcion y con importe menor a $700:  ${contadorCienciaFiccion}`)
// }
