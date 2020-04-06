function mostrar() {
	var precio;
	var porcentaje;
	var descuento;
	var precioFinal;

	precio = prompt("Dame el precio ");
	porcentaje = prompt("Dame el porcentaje ");
	precio = parseInt(precio);
	porcentaje= parseInt(porcentaje);
	descuento = precio * porcentaje /100;
	precioFinal = precio - descuento;

	document.getElementById('elPrecioFinal').value = precioFinal;
}
