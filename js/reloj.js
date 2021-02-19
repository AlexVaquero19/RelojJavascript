var fecha = new Date();
var fecha2 = new Date();

/*fecha2 += fecha.getDate()+"/";
fecha2 += (fecha.getMonth()+1)+"/";
fecha2 += fecha.getFullYear();*/

var dias = new Array( "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado","Domingo");
var meses = new Array( "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

var cadena = dias[fecha.getUTCDay()]+" "+fecha.getDate()+" de "+meses[fecha.getMonth()]+" del "+fecha.getFullYear();

document.getElementById("reloj").innerHTML = cadena;

function reloj(){
    var fecha3 = new Date();
    document.getElementById("digital").innerHTML=(fecha3.getHours()+":"+fecha3.getMinutes());
    document.getElementById("digitalSec").innerHTML = fecha3.getSeconds();
    if(fecha3.getHours() > 12){
        document.getElementById("amPM").innerHTML = "PM";
    }else{
        document.getElementById("amPM").innerHTML = "AM";
    }
}

reloj();

var intervalo;

window.onload = function(){
    intervalo = setInterval(function(){reloj(); }, 1000);
}

function pausar(){
    console.log("Pausa");
    clearInterval(intervalo);
}

function iniciar(){
    console.log("Inicia");
    intervalo = setInterval(function(){reloj(); }, 1000);
}

function asignarEventos(){
    if (document.readyState == 'complete') {    
        document.getElementById('pausa').addEventListener('click', pausar, false);
        document.getElementById('inicia').addEventListener('click', iniciar, false);
    }
}

document.addEventListener('readystatechange', asignarEventos, false);