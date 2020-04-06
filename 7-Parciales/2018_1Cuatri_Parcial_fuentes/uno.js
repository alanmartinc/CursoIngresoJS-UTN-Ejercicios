function mostrar() {
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("ingrese el ancho: ");
	largo = prompt("ingrese el largo: ");
	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = (largo + ancho) *2;
	alert("El perimetro es " + perimetro);
}
