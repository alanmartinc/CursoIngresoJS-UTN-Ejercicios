function mostrar() {
	var planeta;

	planeta = prompt("Dame el planeta del sistema solar PLS: ");

	switch(planeta)
	{
		case "tierra":
			alert("Acá vivimos");
			break;
		case "mercurio":
		case "venus":
			alert("Acá hace más calor");
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			alert("Acá hace más frio");
			break;
		default:
			alert("Esto no es un planeta valido");
	}
}
