function mostrar() {
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Dame el número 1: ");
	numeroDos = prompt("Dame el número 2: ");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	if (numeroUno == numeroDos) 
	{
		alert("" + numeroUno + "" + numeroDos);
	}
	if (numeroUno > numeroDos) 
	{
		resultado = numeroUno / numeroDos;
		alert(resultado);
	}else if (numeroUno < numeroDos)
	{
		resultado = numeroUno + numeroDos;
		alert(resultado);
		if (resultado < 50) 
		{
			alert("La suma es: " + resultado + " y es menor a 50.");
		}		
	}
}
