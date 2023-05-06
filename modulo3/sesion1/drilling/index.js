// Con este metodo muestro un alerta en el navegador
let fechaActual = new Date();
let formatDate = fechaActual.getDate();
let traerMes = fechaActual.getMonth() + 1;
let traerAnio = fechaActual.getFullYear();
let fecha = `${formatDate}-${traerMes}-${traerAnio}`;
let horaActual = fechaActual.getHours();
let minutoActual = fechaActual.getMinutes();
let horaFinal = `${horaActual}:${minutoActual}`;
let nroPuerta = Math.floor(Math.random() * 12);
let nroVuelo = Math.ceil(Math.random() * 1000000);

//document.getElementById("insertTime").innerHTML = horaFinal;
//document.getElementById("terminalNumber").innerHTML = nroPuerta;

//document.getElementById("flightNumber").innerHTML = nroVuelo;


document.getElementById("insertDate").innerHTML = 
'<p class="d-flex justify-content-center">'+fecha+'</p>'
