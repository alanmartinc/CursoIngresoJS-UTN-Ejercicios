function mostrar() {
	var numero;
	numero = Math.floor((Math.random() * 10) + 1);

	if(numero < 4)
	{
		alert("Nota: " + numero + " - Vamos, la proxima se puede");
	}
	else
	{
		if(numero >= 9)
		{
			alert("Nota: " + numero + " - EXCELENTE");
		}
		else
		{
			alert("Nota: " + numero + " - APROBÓ");
		}
	}
}