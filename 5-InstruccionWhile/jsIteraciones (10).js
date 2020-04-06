function mostrar() {
	var numeroIngresado;
	var negativos = 0;
	var numeroNegativo = 0;
	var positivos = 0;
	var numeroPositivo = 0;
	var numeroCeros = 0;
	var numeroPares = 0;
	var promedioPositivo;
	var promedioNegativo;
	var diferencia;
	var resto;
	var contador=0;
	var respuesta="si";
	
	while(respuesta!="no")
	{
		contador++;
		numeroIngresado = prompt("Dame el número #" + contador + ":");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Dame el número #" + contador + ":");
			numeroIngresado = parseInt(numeroIngresado);
		}

		resto = numeroIngresado % 2;

		if (numeroIngresado < 0) 
		{
			numeroNegativo++;
			negativos = negativos + numeroIngresado;
			
		}
		else if (numeroIngresado > 0) 
			{
				numeroPositivo++;
				positivos += numeroIngresado;
			
			}else
			{
				numeroCeros++;
			}
		
		if(resto == 0)
		{
			numeroPares++;
		}
		respuesta = prompt("ingrese no, para salir");
	}
	promedioPositivo = positivos / numeroPositivo;
	promedioNegativo = negativos / numeroNegativo;
	diferencia = positivos - negativos;
	document.write("La suma de los negativos es: " + negativos + "<br>");
	document.write("La suma de los positivos es: " + positivos + "<br>");
	document.write("La cantidad de números positivos es: " + numeroPositivo + "<br>");
	document.write("La cantidad de números negativos es: " + numeroNegativo + "<br>");
	document.write("La cantidad de ceros es: " + numeroCeros + "<br>");
	document.write("La cantidad de números pares es: " + numeroPares + "<br>");
	document.write("El promedio de los numeros positivos es: " + promedioPositivo + "<br>");
	document.write("El promedio de los numeros negativos es: " + promedioNegativo + "<br>");
	document.write("La diferencia es: " + diferencia + "<br>");
}