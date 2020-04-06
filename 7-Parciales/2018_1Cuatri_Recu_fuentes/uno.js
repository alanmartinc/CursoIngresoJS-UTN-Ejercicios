function mostrar() {
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var suma;
	var promedio;
	var resta;

	numeroUno = prompt("Dame la nota 1: ");
	numeroDos = prompt("Dame la nota 2:");
	numeroTres = prompt("Dame la notra 3:");
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	numeroTres = parseInt(numeroTres);
	suma = numeroUno + numeroDos + numeroTres;
	promedio = (numeroUno + numeroDos + numeroTres) / 3;
	resta = numeroUno - numeroDos - numeroTres;

	alert("la suma es: " + suma + ", el promedio es: " + promedio + " y la resta es: " + resta);
}
