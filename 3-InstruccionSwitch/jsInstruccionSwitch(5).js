function mostrar() {
var laHora = document.getElementById('hora').value;
laHora = parseInt(laHora);
alert (laHora);
	
	switch(laHora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
	}
}