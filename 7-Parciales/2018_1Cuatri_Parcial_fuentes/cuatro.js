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
		alert("El número uno es: " + numeroUno + " y el número dos es: " + numeroDos);
	}
	if (numeroUno > numeroDos) 
	{
		resultado = numeroUno - numeroDos;
		alert(resultado);
	}else if (numeroUno < numeroDos)
	{
		resultado = numeroUno + numeroDos;
		alert(resultado);
		if (resultado > 10) 
		{
			alert("La suma es: " + resultado + " y supero el 10.");
		}		
	}
}
