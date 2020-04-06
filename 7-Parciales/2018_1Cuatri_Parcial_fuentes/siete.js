function mostrar() {
	var nombre;
	var sexo;
	var edad;
	var contador = 0; //isNan, < 0, >100
	//1-
	var mujeres = 0;
	var varones = 0;
	var cantMenor = 0;
	var cantMayor = 0;
	//2-
	var cantMJMayores = 0;
	var cantVNMayores = 0;
	var cantMJMenores = 0;
	var cantVNMenores = 0;
	//3-
	var promedioTotal = 0;
	var promedioV = 0;
	var promedioM = 0;
	var edades = 0;
	var edadesV = 0;
	var edadesM = 0;
	//4-
	var edadMayor;
	var edadMenor;
	var edadMJMayor;
	var nombreMayor;
	var nombreMenor;
	var nombreMJMayor;
	//5-
	var sexoMayor;
	var sexoMenor;
	var bandera = 0;
	var sexoMultiplodecinco;

	while(contador < 3)
	{
		nombre = prompt("Cómo es tu nombre?");
		sexo = prompt("Cuál es tu sexo: f o m ");
		while(sexo != "f" && sexo != "m")
		{
			sexo = promt("Error. Cuál es tu sexo: f o m");
		}
		edad = prompt("Cuál es tu edad?");
		edad = parseInt(edad);
		while(isNaN(edad) || edad < 0 || edad >100)
		{
			edad = prompt("Error. Cuál es tu edad?");
			edad = parseInt(edad);
		}
		edades += edad;
		//Pedí los datos.
		//1-
		if(edad%5 == 0 && bandera == 0) 
		{
			sexoMultiplodecinco = sexo;
			bandera = 1;
		}
		if(contador == 0) 
		{
			edadMenor = edad;
			edadMayor = edad;
			sexoMenor = sexo;
			nombreMayor = nombre;
			nombreMenor = nombre;
			sexoMenor = sexo;
			sexoMayor = sexo;
		}
		
		
		if(edad > edadMayor) 
		{
			nombreMayor = nombre;
			edadMayor = edad
			sexoMayor = sexo;
		}
		if(edad < edadMenor) 
		{
			nombreMenor = nombre;
			edadMenor = edad;
			sexoMenor = sexo;
		}

		if(sexo == "f")
		{
			if(contador == 0) 
			{
				edadMJMayor = edad;
				nombreMJMayor = nombre;
			}
			if(edad > edadMJMayor)
			{
				nombreMJMayor = nombre;
				edadMJMayor = edad;
			}
		}
		
		if (edad < 18) 
		{
			cantMenor++;
			//2 y 3 *EJERCICIO*
			if (sexo == "f") 
			{
				mujeres++;	
				edadesM += edad;
				cantMJMenores++;
			}
			else 
			{	
				varones++;
				edadesV += edad;
				cantVNMenores++;
			}
		}
		else 
		{
			cantMayor++;
			//2 y 3 *EJERCICIO*
			if (sexo == "f") 
			{
				mujeres++;
				edadesM += edad;	
			}
			else
			{
				varones++;
				edadesV += edad;
				cantVNMayores++;
			}	
		}	
		contador++;	
	}
	//3 *EJERCICIO*
	promedioV = edadesV / varones;
	promedioM = edadesM / mujeres;
	promedioTotal = edades / 3;

	//1-
	document.write("La cantidad de mujeres es: " + mujeres + "<br>");
	document.write("La cantidad de varones es: " + varones + "<br>");
	document.write("La cantidad de menores es: " + cantMenor + "<br>");
	document.write("La cantidad de mayores es: " + cantMayor + "<br>");
	//2-
	document.write("La cantidad de mujeres mayores es: " + cantMJMayores + "<br>");
	document.write("La cantidad de varones mayores es: " + cantVNMayores + "<br>");
	document.write("La cantidad de mujeres menores es: " + cantMJMenores + "<br>");
	document.write("La cantidad de varones mayores es: " + cantVNMenores + "<br>");
	//3-
	document.write("El promedio total es: " + promedioTotal + "<br>");
	document.write("El promedio de la edad de varones es: " + promedioV + "<br>");
	document.write("El promedio de la edad de mujeres es: " + promedioM + "<br>");
	//4-
	document.write("El nombre de la persona mayor es: " + nombreMayor + "<br>");
	document.write("El nombre de la persona menor es: " + nombreMenor + "<br>");
	document.write("El nombre de la mujer mayor es: " + nombreMJMayor + "<br>");
	//5-
	document.write("El sexo de la persona mayor es: " + sexoMayor + "<br>");
	document.write("El sexo de la persona menor es: " + sexoMenor + "<br>");
	document.write("El sexo de la persona con multiplo de 5 es: " + sexoMultiplodecinco + "<br>");
}
