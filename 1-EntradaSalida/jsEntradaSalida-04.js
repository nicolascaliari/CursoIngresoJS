/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let dato;

	dato = prompt('ingresa un dato')

	document.getElementById('txtIdNombre').value = dato;
	
    
}

