function mostrar() {
	var edad;
	var estadoCivil;

	edad = document.getElementById('edad').value;
	estadoCivil = document.getElementById('estadoCivil').value;
	if(edad < 17 && estadoCivil != "Soltero")
	{
		alert("Usted es muy pequeño para NO ser soltero");
	}
}