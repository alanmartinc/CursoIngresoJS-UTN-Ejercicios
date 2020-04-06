function mostrar() {
	var numeros;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	while(respuesta == 'si')
	{
		numeros = prompt("Dame un número:");
		numeros = parseInt(numeros);
		if(numeros < 0) 
		{
			negativo = negativo * numeros;
		}
		else
		{
			positivo += numeros;
		}
		contador++;
		respuesta = prompt("Desea ingresar otro número?");
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
}