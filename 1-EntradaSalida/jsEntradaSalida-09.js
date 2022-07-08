/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
// function mostrarAumento()
// {
// 	let ingreso;
// 	let resultado;
// 	let aumento;

// 	aumento = 10;

//     ingreso = document.getElementById('txtIdSueldo').value;
// 	ingreso = parseInt(ingreso);

// 	resultado =  ingreso +( ingreso * aumento/100);

// 	resultado = document.getElementById('txtIdResultado').value = resultado
// }

function mostrarAumento()
{
	let ingreso;
	let resultado;
	let aumento;

	aumento = prompt('Colocar porcentaje')

    ingreso = document.getElementById('txtIdSueldo').value;
	ingreso = parseInt(ingreso);

	resultado =  ingreso +( ingreso * aumento/100);

	resultado = document.getElementById('txtIdResultado').value = resultado
}
