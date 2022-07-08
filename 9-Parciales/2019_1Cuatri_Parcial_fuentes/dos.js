function mostrar()
{
  
let nombreParejaUno = prompt('Ingrese su nombre');
let pesoParejaUno = prompt('Ingrese cuanto pesan');
pesoParejaUno = parseInt(pesoParejaUno);

let nombreParejaDos = prompt('Ingrese su nombre');
let pesoParejaDos = prompt('Ingrese cuanto pesan');
pesoParejaDos = parseInt(pesoParejaDos);


let sumaPeso;
let promedioPeso;
let respuesta;

sumaPeso = pesoParejaUno + pesoParejaDos;




promedioPeso = (pesoParejaUno + pesoParejaDos) / 2;

respuesta = ` ustedes se llaman  ${nombreParejaUno} y ${nombreParejaDos} pesan ${pesoParejaUno} y ${pesoParejaDos} kilos, que sumados son ${sumaPeso} kilos y el promedio de peso es ${promedioPeso} `
alert(respuesta);
}
