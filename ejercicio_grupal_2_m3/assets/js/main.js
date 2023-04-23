var numeroRegistro = 1;
//captura de input de los campos del formulario
const fechaActual = new Date();
let nombre = document.getElementById("nombre");
let cargaFam = document.getElementById("cargaFamiliar");
let trabajadorAct = document.getElementById("trabajadorActivo");
let mensaje = document.getElementById("mensaje");
var edad, rangoEtario, aniosTrabajo, mesesTrabajo, nacimiento, fechaIng;

document.getElementById("trabajadorActivo").addEventListener("input", showDiv)
// ============================================================================FUNCION MOSTRAR DATOS DE TRABAJADOR ACTIVO ==============
function showDiv(){
    //Si es un trabajador activo se habilita el div para mostrar si es carga y la fecha de ingreso, de lo contrario se oculta
    trabajadorAct.value == "Sí" ? document.querySelector("#trabajadorserio").style = "display: flex" : document.querySelector("#trabajadorserio").style = "display: none"
}
// ===============================================================================================FUNCION COMPROBAR DATOS ==============
function comprobarDatos(){
    let todoOK = true; // Si falta algún dato cambia a false y no se ejecuta funcion ejecutar()
    nacimiento = new Date(document.getElementById("fechaNacimiento").value);
    fechaIng = new Date(document.getElementById("fechaIngreso").value);
    confirmaInfo = document.getElementById("confirmaInfo").checked;
    let NOname = document.getElementById("NO-name");
    let Nodate = document.getElementById("NO-nacimiento");
    let NOactive = document.getElementById("NO-activo");
    let NOcheck = document.getElementById("NO-check");
    let NOingreso = document.getElementById("NO-ingreso");

    //Si falta algún dato se muestra mensaje avisando que dato falta
    nombre.value == "" ? (NOname.style = "display: block;", todoOK = false) : NOname.style = "display: none;"
    trabajadorAct.value != "Sí" && trabajadorAct.value != "No" ? (NOactive.style = "display: block;", todoOK = false): NOactive.style = "display: none;"
    isNaN(nacimiento.getTime()) ? (Nodate.style = "display: block;", todoOK = false) : Nodate.style = "display: none;"
    !confirmaInfo ? (NOcheck.style = "display: block;", todoOK = false) : NOcheck.style = "display: none;"

    // Si es trabajador activo, se pide obligatoriamente que se ingrese la fecha de ingreso y si tiene cargas o no
    if(trabajadorAct.value == "Sí"){
        isNaN(fechaIng.getTime()) ? (NOingreso.style = "display: block;", todoOK = false) : NOingreso.style = "display: none;"
    }

    //Compara fechas, nacimiento debe ser inferior a fecha actual - fecha ingreso debe ser posterior a fecha nacimiento y anterior a fecha actual
    fechaActual < nacimiento ? (Nodate.innerHTML = "Fecha nacimiento no puede ser posterior a fecha actual",
    Nodate.style = "display: block;" , todoOK = false) : Nodate.innerHTML = "Debes ingresar una fecha"

    fechaActual < fechaIng ? (NOingreso.innerHTML = "Fecha de ingreso no puede ser posterior a fecha actual",
    NOingreso.style = "display: block;" , todoOK = false) :  nacimiento > fechaIng ? (NOingreso.innerHTML = "Fecha de ingreso no puede ser inferior a fecha de nacimiento", NOingreso.style = "display: block;" , todoOK = false) :  NOingreso.innerHTML = "Debes ingresar una fecha"

    calcularEdad();

    if(edad<18 && trabajadorAct.value == "Sí" ){
        Nodate.innerHTML = "Trabajador no puede ser menor de edad";
        Nodate.style = "display: block;"
        NOingreso.style ="display: block;"
        trabajadorAct.value = "No"
        todoOK = false;
        showDiv()
    } 

    if(todoOK)
        ingresarDatos()
}
// ===================================================================================================FUNCION CALCULAR EDAD ==============
function calcularEdad(){
    nacimiento = new Date(document.getElementById("fechaNacimiento").value);
    
    // cálculo de la edad
    edad = fechaActual.getFullYear() - nacimiento.getFullYear()
    if(nacimiento.getMonth() == fechaActual.getMonth()){ //su se cumple esta condición
        if(nacimiento.getDate() > fechaActual.getDate()) //y además se cumple esta condición
            edad --;  //resta 1 año
    }
    else if (nacimiento.getMonth() > fechaActual.getMonth())
        edad --;
}
// ================================================================================================ FUNCION INGRESAR DATOS===============
function ingresarDatos(){
    
    //Calcular fecha de ingreso=============================================================================================================
    aniosTrabajo = fechaActual.getFullYear() - fechaIng.getFullYear();
    let fechaIngresoFinal = `${fechaIng.getDate()}/${fechaIng.getMonth()+1}/${fechaIng.getFullYear()}`;

    fechaIng.getMonth() > fechaActual.getMonth() ? (aniosTrabajo-- , mesesTrabajo = fechaActual.getMonth()+12 - fechaIng.getMonth()) : mesesTrabajo = fechaActual.getMonth() - fechaIng.getMonth();

    let textotrabajado = `${aniosTrabajo} años y ${mesesTrabajo} meses`

    //Si no es trabajador activo, se ingresan valores por defecto en carga familiar y tiempo trabajado ======================================
    if (trabajadorAct.value == "No"){
        cargaFam.value = "Sí";
        fechaIngresoFinal = "";
        textotrabajado = "";
    }

    //Se calcula cuánto falta para el próximo cumpleaños =====================================================================================
    let restanteCumple;
    fechaActual.getMonth() < nacimiento.getMonth()+1 ? restanteCumple = nacimiento.getMonth() - fechaActual.getMonth() : restanteCumple = nacimiento.getMonth() + 12 -fechaActual.getMonth()

    //Calcular Rango Etario ====================================================================================================================
    let rangoEtario;
    edad < 2 ? rangoEtario = "Infante": edad <12 ? rangoEtario = "Niño" : edad < 18 ? rangoEtario = "Adolescente" : edad < 65 ? rangoEtario = "Adulto" : edad < 85 ? rangoEtario = "Adulto Mayor" : rangoEtario = "Años dorados"

    // Se despliega mensaje con resumen de info ================================================================================================
    if (trabajadorAct.value == "Sí")
    mensaje.innerHTML = `${nombre.value} es un trabajador activo, ingresó el ${fechaIng.getDate()} de ${fechaIng.getMonth()+1} del ${fechaIng.getFullYear()}, tiene ${edad} años. En ${restanteCumple} meses estará de cumpleaños`
    else mensaje.innerHTML = `${nombre.value} pertenece al rango etario:  ${rangoEtario}, nació el ${nacimiento.getDate()} de ${nacimiento.getMonth()+1} de ${nacimiento.getFullYear()}, tiene ${edad} años. Y ${cargaFam.value} es carga familiar`

    // Se añade info a la tabla ================================================================================================================
    const tabla = document.getElementById("tabla");
    const fila = tabla.insertRow();
    fila.insertCell(0).textContent = numeroRegistro; 
    fila.insertCell(1).textContent = nombre.value;
    fila.insertCell(2).textContent = `${nacimiento.getDate()}/${nacimiento.getMonth()+1}/${nacimiento.getFullYear()}`;
    fila.insertCell(3).textContent = edad;
    fila.insertCell(4).textContent = rangoEtario;
    fila.insertCell(5).textContent = cargaFam.value;
    fila.insertCell(6).textContent = trabajadorAct.value;
    fila.insertCell(7).textContent = fechaIngresoFinal;
    fila.insertCell(8).textContent = textotrabajado;

    //Se incrementa número de registro en 1 ==========================================================
    numeroRegistro++;
}