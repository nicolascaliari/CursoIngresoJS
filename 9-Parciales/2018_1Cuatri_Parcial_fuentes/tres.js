function mostrar()
{
let precio = prompt('Ingrese el precio');
let descuento =prompt('Ingrese el descuento');

let precioFinal = precio - (precio * descuento/100);


let respuesta;
respuesta = document.getElementById('elPrecioFinal').value = precioFinal;



}
