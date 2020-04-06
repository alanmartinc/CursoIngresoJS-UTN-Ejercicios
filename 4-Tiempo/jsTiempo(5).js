var miTemporizador ;
var contador=0;

function inicio() {
	alert("function inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);	
}

function SegundosEnElAire() {
    alert("Bienvenido a la UTN FRA"); 
}

function fin() {
	alert("function fin.");
	clearTimeout(miIntervalo);
}