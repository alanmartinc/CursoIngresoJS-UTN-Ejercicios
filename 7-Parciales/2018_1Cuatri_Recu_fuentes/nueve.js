function mostrar() {
	var nombre;
	var peso = 0;
	var temperatura = 0;
	var contador = 0;
	var respuesta = "si";
	//A-
	var tempPares = 0;
	var resto;
	//B-
	var nombrePesado;
	var pesoPesado =0;
	var tempPesado = 0;
	//C-
	var cantCeroGrados = 0;
	//D-
	var promedioTotal = 0;
	var acumuladorPesos = 0;
	//F-
	var pesoMaximo;
	var pesoMinimo;
	while(respuesta != "no")
	{
		nombre = prompt("Nombre de animal del zoológico es: ");
		peso = prompt("El peso del animal es: ");
		peso = parseInt(peso);
		while(isNaN(peso) || peso < 1 || peso >1000)
		{
			peso = prompt("Error. Cuál es el peso?");
			peso = parseInt(peso);
		}
		temperatura = prompt("La temperatura es:");
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt("Error. Cuál es la temperatura?");
			temperatura = parseInt(temperatura);
		}
		//A)
		resto = temperatura % 2;
		if(resto == 0) 
		{
			tempPares++;
		}

		respuesta = prompt("Quiere seguir poniendo más cosas? si o no");
		//B)
		if(contador == 0) 
		{
			pesoPesado = peso;
			pesoMaximo = peso;
			pesoMinimo = peso;
			//nombrePesado = nombre;
		}
		if(peso > pesoPesado)
		{
			nombrePesado = nombre;
			tempPesado = temperatura;
			pesoPesado = peso;
		}
		//C)
		if(temperatura < 0) 
		{
			cantCeroGrados++;
			if(peso > pesoMaximo) 
			{
				pesoMaximo = peso;
			}
			else if(peso < pesoMinimo)
			{
				pesoMinimo = peso;
			}	
		}
		//D)
		acumuladorPesos += peso;

		contador++;

	}
	promedioTotal = acumuladorPesos / contador;
	//A)
	document.write("La cantidad de temperaturas pares es: " + tempPares + "<br>");
	//B)
	document.write("El nombre del animal más pesado es: " + nombrePesado + "<br>");
	document.write("La temperaturas del animal más pesado es: " + tempPesado + "<br>");
	//C)
	document.write("La cantidad de animales que viven en temperaturas de -0 es: " + cantCeroGrados + "<br>");
	//D)
	document.write("El promedio del peso de todos los animales es: " + promedioTotal + "<br>");
	//F)
	document.write("El peso maximo de los animales que viven en temperaturas bajo cero es: " + pesoMaximo + "<br>");
	document.write("El peso manimo de los animales que viven en temperaturas bajo cero es: " + pesoMinimo + "<br>");
}
