function mostrar()
{

    let precio = prompt('Ingrese el precio');
    let descuento = prompt('Ingrese el descuento');
    let respuesta;

    precio = parseInt(precio);
    descuento = parseInt(descuento);
    
    respuesta =  precio  -( precio * descuento/100);
    
    
  document.getElementById('elPrecioFinal').value = respuesta;
    

}
