function saludar(){
	alert("Hola");
}

function guardar(){
	localStorage.setItem("nombre","Pepe");
}

function ver(){
	alert(localStorage.getItem("nombre"));
}

if(navigator.onLine){
	alert("Hay señal");
}else{
	alert("No hay señal");
}


$("#saludo").click(saludar);

$("#btn_guardar").click(guardar);
$("#btn_ver").click(ver);

/*function hay(){
	alert("Hay internet...");
}

function noHay(){
	alert("No hay señal...");
}
*/

<!--window.navigator.online
<!--window.addEventListener('online',hay);
<!--window.addEventListener('offline',noHay);




