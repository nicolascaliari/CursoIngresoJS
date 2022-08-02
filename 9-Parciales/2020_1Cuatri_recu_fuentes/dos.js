function mostrar()
{
  let titulo;
  let genero;
  let material;
  let importe;
  let continuar;
  let flag;
  let libroMasBarato;
  let importeMasBarato;
  let libroMasCaro;
  let importeMasCaro;

  continuar = true;
  flag = true;


  let contadorCienciaFiccion = 0;


  while(continuar){

    titulo = prompt("Ingresa el titulo del libro?");
    while(isNaN(titulo)==false){
      titulo = prompt("ERROR, reingresa el titulo del libro?");
    }

    genero = prompt("Ingrese el genero = ciencia-ficcion / drama / terror");
    while(genero!="ciencia ficcion" && genero!="drama" && genero!="terror"){
      genero = prompt("ERROR, reingrese el genero = ciencia-ficcion / drama / terror");
    }

    material = prompt("Ingrese el material: rustica / tapa dura");
    while(material!="rustica" && material!="tapa dura"){
      material = prompt("ERROR, reingrese el material: rustica / tapa dura");
    }

    importe = prompt("Ingrese el importe, no puede ser menor a 0 ni mayor a 3000");
    while(importe < 0 || importe > 30000){
      importe = prompt("ERROR, reingrese el importe, no puede ser menor a 0 ni mayor a 3000");
    }
    continuar = confirm("Queres seguir?")


    

    if(flag == true) {
      importeMasCaro = importe;
      importeMasBarato = importe;
      libroMasCaro = titulo;

      flag = false;
  }
   if(importe < importeMasBarato && genero == "drama") {
      importeMasBarato = importe;
      libroMasBarato = titulo;
  }


  if( importe > importeMasCaro) {
    importeMasCaro = importe;
    libroMasCaro = titulo;
}

if(genero == "ciencia ficcion" && importe < 700){
  contadorCienciaFiccion++;
}

  }
document.write(`El libro mas barato es  ${libroMasBarato} con el importe de ${importeMasBarato}`);
document.write(`<br>El nombre del libro mas caro es ${libroMasCaro}`);
document.write(`<br>`);
document.write(`<br> cantidad de libros de ciencia ficcion y con importe menor a $700:  ${contadorCienciaFiccion}`)
}
