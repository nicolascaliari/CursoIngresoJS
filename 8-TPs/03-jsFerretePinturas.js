/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
let tempF = parseFloat(document.getElementById("txtIdTemperatura").value );
let tempC = ((tempF - 32) * (5/9));
let mensaje = `${tempF} son ${tempC} en centigrados`
alert(mensaje);
}

function CentigradosFahrenheit() {

let tempC = parseFloat(document.getElementById("txtIdTemperatura").value );
let tempF = ((tempC * (9/5)) + 32);
let mensaje = `${tempC} son ${tempF} en Fahrenheit`
alert(mensaje);

}

