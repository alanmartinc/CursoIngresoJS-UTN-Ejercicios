function mostrar() {
	var precio;
	var descuento;
	var precioDescontado;
	var precioFinal;
	var IVA;
	var precioFinal;
	var precioFinalMasIVA;

	precio = prompt("Ingrese el precio: ");
	precio = parseInt(precio);
	descuento = prompt("Ingrese el porcentaje de descuento: ");
	descuento = parseInt(descuento);
	precioDescontado = precio * descuento / 100;
	precioFinal = precio - precioDescontado;
	IVA = precioFinal * 0.21;
	precioFinalMasIVA = precioFinal + IVA;
	alert("El descuento es: " + descuento + ", el precio final sin IVA es: " + precioFinal + " y el IVA es: " + IVA);
	document.getElementById('elPrecioFinal').value = precioFinalMasIVA;
}
