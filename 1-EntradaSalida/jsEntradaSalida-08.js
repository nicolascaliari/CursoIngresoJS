/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroUno;
	let numeroDos;
	
	numeroUno = document.getElementById('txtIdNumeroUno').value 
	numeroDos = document.getElementById('txtIdNumeroDos').value

	alert(`numeroUno/numeroDos ${numeroUno%numeroDos}`)
}
