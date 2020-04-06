function mostrar() { 
	var edad;
	edad = document.getElementById('edad').value;

	if(edad > 17 || edad < 13)
	{
		alert("Usted es no es adolescente");
	}
}