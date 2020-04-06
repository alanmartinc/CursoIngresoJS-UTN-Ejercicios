function mostrar() {
	var nombre;
	var peso = 0;
	var temperatura = 0;
	var contador = 0;
	var respuesta = "si";
	var tempPares = 0;
	var nombrePesado;
	var pesoPesado;
	var cantCeroGrados = 0;
	var promedioTotal = 0;
	var acumuladorPesos = 0;
	var pesoMinimo;

	while(respuesta != "no")
	{
		nombre = prompt("Nombre de la marca es: ");
		peso = prompt("El peso del producto es: ");
		peso = parseInt(peso);
		while(isNaN(peso) || peso < 1 || peso >100)
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

		if(temperatura % 2 == 0) 
		{
			tempPares++;
		}

		if(contador == 0) 
		{
			pesoPesado = peso;
			pesoMinimo = peso;
			nombrePesado = nombre;
		}
		if(peso > pesoPesado)
		{
			nombrePesado = nombre;
			pesoPesado = peso;
		}

		else if(peso < pesoMinimo)
		{
			pesoMinimo = peso;
		}

		if(temperatura < 0) 
		{
			cantCeroGrados++;
		}

		respuesta = prompt("Quiere seguir poniendo más cosas? si o no");
		acumuladorPesos += peso;
		contador++;
	}
	promedioTotal = acumuladorPesos / contador;

	document.write("La cantidad de temperaturas pares es: " + tempPares + "<br>");
	//B)
	document.write("El nombre del producto más pesado es: " + nombrePesado + "<br>");
	//C)
	document.write("La cantidad de productos que se mantienen en temperaturas de -0 es: " + cantCeroGrados + "<br>");
	//D)
	document.write("El promedio del peso de todos los productos es: " + promedioTotal + "<br>");
	//F)
	document.write("El peso maximo de los productos que se mantienen en temperaturas bajo cero es: " + pesoPesado + "<br>");
	document.write("El peso minimo de los productos que se mantienen en temperaturas bajo cero es: " + pesoMinimo + "<br>");
}
