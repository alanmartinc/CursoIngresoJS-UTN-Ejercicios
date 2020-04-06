var miTemporizador ;
var contador=0;

function inicio() {
	document.getElementById("secreto").style.visibility="hidden";
	alert("function inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);	
}

function SegundosEnElAire() {
	document.getElementById("secreto").style.visibility="visible"; 
    alert("Bienvenido a la UTN FRA");
}

function fin() {
	alert("function fin.");
	clearTimeout(miIntervalo);

}