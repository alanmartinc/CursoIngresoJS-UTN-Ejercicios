function mostrar() {
	var numeros;
	var contador=0;
	var acumulador=0;
	while(contador < 5)
	{
		numeros = prompt("Dame un número:");
		numeros = parseInt(numeros);
		acumulador += numeros;
		contador++;
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
}