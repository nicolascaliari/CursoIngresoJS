/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;

	numeroUno = document.getElementById('txtIdNumeroUno').value
	numeroDos = document.getElementById('txtIdNumeroDos').value

alert ( parseInt(numeroUno) + parseInt(numeroDos))

}

