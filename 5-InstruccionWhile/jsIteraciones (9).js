function mostrar() {
	var numeroIngresado;
	/*
	var maximo = -999999;
	var minimo = 999999;
	*/
	var contador=0;
	var respuesta='si';
	var bandera;
	
	bandera = 0;

	while(respuesta!='no')
	{
		contador++;
		numeroIngresado = prompt("Dame el número #" + contador + ":");
		numeroIngresado = parseInt(numeroIngresado);
		if(bandera == 0) 
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			bandera = 1;
		}
		else
		{
			if(numeroIngresado > maximo) 
			{
				maximo = numeroIngresado;
			}
			if(numeroIngresado < minimo) 
			{
				minimo = numeroIngresado;
			}
		}
		respuesta = prompt("ingrese no, para salir");
	}
	
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;
}