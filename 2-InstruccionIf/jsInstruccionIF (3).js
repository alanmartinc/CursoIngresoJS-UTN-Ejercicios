function mostrar() { 
	var edad;
	edad = document.getElementById('edad').value;

	if(edad > 17)
	{
		alert("Usted es mayor de edad");
	}else
	{
		alert("Usted es menor de edad");
	}
}