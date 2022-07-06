/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	
	numeroUno = document.getElementById('txtIdNumeroUno').value 
	numeroDos = document.getElementById('txtIdNumeroDos').value

	alert(`La respuesta es ${parseInt(numeroUno) + parseInt(numeroDos)}`)
	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	
	numeroUno = document.getElementById('txtIdNumeroUno').value 
	numeroDos = document.getElementById('txtIdNumeroDos').value

	alert(`La respuesta es ${parseInt(numeroUno) - parseInt(numeroDos)}`)
	
}

function multiplicar()
{ 

	let numeroUno;
	let numeroDos;
	
	numeroUno = document.getElementById('txtIdNumeroUno').value 
	numeroDos = document.getElementById('txtIdNumeroDos').value

	alert(`La respuesta es ${parseInt(numeroUno) * parseInt(numeroDos)}`)
	
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	
	numeroUno = document.getElementById('txtIdNumeroUno').value 
	numeroDos = document.getElementById('txtIdNumeroDos').value

	alert(`La respuesta es ${parseInt(numeroUno) / parseInt(numeroDos)}`)
}

