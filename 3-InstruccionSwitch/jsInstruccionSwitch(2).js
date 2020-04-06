function mostrar() {
var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		default:
			alert("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el invierno, ahora calor.");
	}
}