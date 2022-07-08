/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let ingreso;
	let resultado;
	let descuento;

	descuento = 25;

    ingreso = document.getElementById('txtIdImporte').value;
	ingreso = parseInt(ingreso);

	resultado =  ingreso -( ingreso * descuento/100);

	resultado = document.getElementById('txtIdResultado').value = resultado;
}
