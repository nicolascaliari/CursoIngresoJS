/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  let largo;
  let ancho;
  let resultado;

  largo = document.getElementById("txtIdLargo").value;
  ancho = document.getElementById("txtIdAncho").value;

  largo = parseInt(largo);
  ancho = parseInt(ancho);

  resultado = (largo + ancho) * 2;
  resultadoFinal = resultado * 3;
  alert(resultadoFinal);
}
function Circulo() {
  let radio;
  let area;
  let resultado;

  radio = document.getElementById("txtIdRadio").value;
  radio = parseInt(radio);

  area = 3.14 * (radio * radio);
  area = parseInt(area);

  resultado = area * 3;
  resultado = parseInt(resultado);
  alert(resultado.toFixed(1));
}



function Materiales() {
  let largo;
  let ancho;
  let resultado;
  let cal;
  let cemento;

  cal = 3;
  cemento = 2;

  largo = document.getElementById("txtIdLargo").value * cal;
  ancho = document.getElementById("txtIdAncho").value * cemento;

  cal = parseInt(cal);
  cemento = parseInt(cemento);
  largo = parseInt(largo);
  ancho = parseInt(ancho);

  resultado = `Se nececita ${largo} de cal y ${ancho} de cemento`;
  alert(resultado);
}
