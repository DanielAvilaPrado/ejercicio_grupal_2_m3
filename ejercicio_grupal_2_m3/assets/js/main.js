var numeroRegistro = 1;
//Se debe validar que al ingresar el año de nacimiento o el año de ingreso a la organización no sea mayor al año actual.

//captura de input de los campos del formulario
let nombre = document.getElementById("nombre");

const fechaActual = new Date();

let cargaFam = document.getElementById("cargaFamiliar");
let trabajadorAct = document.getElementById("trabajadorActivo");
let fechaIng = document.getElementById("fechaIngreso");
let mensaje = document.getElementById("mensaje");

const fila = tabla.insertRow();

//variables necesarias pero que falta agregar el 
var edad;
var rangoEtario;
var aniosTrabajo;
var mesesTrabajo;



document.getElementById("trabajadorActivo").addEventListener("input", showDiv)

function showDiv(){
    if(document.querySelector("#trabajadorActivo").value == "Sí")
        document.querySelector("#trabajadorserio").style = "display: flex"
        else document.querySelector("#trabajadorserio").style = "display: none"
}

//Se requiere un mensaje para los trabajadores activos que indique la cantidad de meses que faltan para completar el año (siguiente) de permanencia en la organización.

//agregar datos a la tabla con ciclo

//generar informes: Se requiere implementar el script JavaScript que genere un “informe” para los datos ingresados, por ejemplo: “La Persona es un trabajador activo con 2 años y 3 meses en la organización y en 9 meses cumple el próximo año” o bien: “La persona es un Adulto Mayor, carga familiar con 66 años y 6 meses”


function ejecutar(){
    nacimiento = new Date(document.getElementById("fechaNacimiento").value);
    confirmaInfo = document.getElementById("confirmaInfo").checked;

    
    let todoOK = true;
    let NOname = document.getElementById("NO-name")
    let Nodate = document.getElementById("NO-nacimiento")
    let NOactive = document.getElementById("NO-activo")
    let NOcheck = document.getElementById("NO-check")

    nombre.value == "" ? (NOname.style = "display: block;", todoOK = false) : NOname.style = "display: none;"
    trabajadorAct.value != "Sí" && trabajadorAct.value != "No" ? (NOactive.style = "display: block;", todoOK = false): NOactive.style = "display: none;"
    isNaN(nacimiento.getTime()) ? (Nodate.style = "display: block;", todoOK = false) : Nodate.style = "display: none;"
    !confirmaInfo ? (NOcheck.style = "display: block;", todoOK = false) : NOcheck.style = "display: none;"
    
    if(todoOK && confirmaInfo){
        // obtenemos la información del formulario
        nacimiento = new Date(document.getElementById("fechaNacimiento").value);
        // dato ingresado en tabla "fecha de nacimiento"
        let fechanac = `${nacimiento.getDate()}/${nacimiento.getMonth()+1}/${nacimiento.getFullYear()}`

        // cálculo de la edad
        edad = fechaActual.getFullYear() - nacimiento.getFullYear()
        if(nacimiento.getMonth() == fechaActual.getMonth()){ //su se cumple esta condición
            if(nacimiento.getDate() > fechaActual.getDate()) //y además se cumple esta condición
                edad --;  //resta 1 año
        }
        else if (nacimiento.getMonth() > fechaActual.getMonth())
            edad --;

            
        //Calcular fecha de ingreso
        let ingreso = new Date(fechaIng.value);
        aniosTrabajo = fechaActual.getFullYear() - ingreso.getFullYear();

        let fechaIngresoFinal = `${ingreso.getDate()}/${ingreso.getMonth()+1}/${ingreso.getFullYear()}`

        if (ingreso.getMonth() > fechaActual.getMonth()){
            aniosTrabajo--;
            mesesTrabajo = fechaActual.getMonth()+12 - ingreso.getMonth()   
        }
        else
            mesesTrabajo = fechaActual.getMonth() - ingreso.getMonth()


        let textotrabajado = `${aniosTrabajo} años y ${mesesTrabajo} meses`

        const tabla = document.getElementById("tabla");
        const fila = tabla.insertRow();

        if(trabajadorAct.value == "No"){
            cargaFam.value = "No"
            fechaIngresoFinal = ""
            textotrabajado = ""
        }

            console.log(trabajadorAct.value);
        //Calcular Rango Etario
        let rangoEtario;
        edad < 2 ? rangoEtario = "Infante": edad <12 ? rangoEtario = "Niño" : edad < 18 ? rangoEtario = "Adolescente" : edad < 65 ? rangoEtario = "Adulto" : edad < 85 ? rangoEtario = "Adulto Mayor" : rangoEtario = "Años dorados"

        mensaje.innerHTML = `El nombre es ${nombre.value}, tiene ${edad} años, siendo ${rangoEtario}`

        fila.insertCell(0).textContent = numeroRegistro; //funcionando
        fila.insertCell(1).textContent = nombre.value; //funcionando
        fila.insertCell(2).textContent = fechanac; //funcionando
        fila.insertCell(3).textContent = edad; //funcionando
        fila.insertCell(4).textContent = rangoEtario; //funcionando
        fila.insertCell(5).textContent = cargaFam.value; //funcionando
        fila.insertCell(6).textContent = trabajadorAct.value; //funcionando
        fila.insertCell(7).textContent = fechaIngresoFinal; //funcionando
        fila.insertCell(8).textContent = textotrabajado; //funcionando

        numeroRegistro++;
    }
}