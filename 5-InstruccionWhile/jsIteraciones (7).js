function mostrar() {
	var numeros;
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while(respuesta == 'si')
	{
		numeros = prompt("Dame un número:");
		numeros = parseInt(numeros);
		acumulador += numeros;
		contador++;
		respuesta = prompt("Desea ingresar otro número?");
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}