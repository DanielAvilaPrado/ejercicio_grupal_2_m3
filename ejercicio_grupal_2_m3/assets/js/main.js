var numeroRegistro = 1;
//Se debe validar que al ingresar el año de nacimiento o el año de ingreso a la organización no sea mayor al año actual.

//Se debe validar que los meses estén comprendidos entre 1 y 12


//captura de input de los campos del formulario
let nombre = document.getElementById("nombre");

let fechaActual = new Date();

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

//Se requiere un mensaje para los trabajadores activos que indique la cantidad de meses que faltan para completar el año (siguiente) de permanencia en la organización.

//Calular edad

function calcularEdad() {
    let fechaNac = new Date(Date.parse(document.getElementById("fechaNacimiento").value.split("/").reverse().join("-")));
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    let mes = fechaActual.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNac.getDate())) {
      edad--;
    }
    return edad;
  }

  window.addEventListener("load", function () {

    btnEnviar.addEventListener("click", function () {
        if (fechaNacimiento.value){
            alert(`La edad es: ${calcularEdad(fechaNacimiento.value)} años`)                                      

        }
           
    })
    
})
  



//calcular rango etario

//calular tiempo trabajado

//crear arreglo vacío y agregar datos con push

//agregar datos a la tabla con ciclo

//generar informes: Se requiere implementar el script JavaScript que genere un “informe” para los datos ingresados, por ejemplo: “La Persona es un trabajador activo con 2 años y 3 meses en la organización y en 9 meses cumple el próximo año” o bien: “La persona es un Adulto Mayor, carga familiar con 66 años y 6 meses”


function ejecutar(){


    //Calcular Edad
    let nacimiento = new Date(document.getElementById("fechaNacimiento").value);
    edad = fechaActual.getFullYear() - nacimiento.getFullYear()
    if(nacimiento.getMonth() == fechaActual.getMonth()){
        if(nacimiento.getDate() == fechaActual.getDate())
            edad --;
    }
    else if (nacimiento.getMonth() > fechaActual.getMonth())
        edad --;
    
    let textoNacimiento = `${nacimiento.getDate()}/${nacimiento.getMonth()}/${nacimiento.getFullYear()}`

    edad < 2 ? rangoEtario = "Infante": edad <12 ? rangoEtario = "Niño" : edad < 18 ? rangoEtario = "Adolescente" : edad < 65 ? rangoEtario = "Adulto" : edad < 85 ? rangoEtario = "Adulto Mayor" : rangoEtario = "Años dorados"

    //Calcular tiempo de ingreso

    let ingreso = new Date(fechaIng.value);
    aniosTrabajo = fechaActual.getFullYear() - ingreso.getFullYear();

    if(ingreso.getMonth() > fechaActual.getMonth()){
        aniosTrabajo--;
        mesesTrabajo = fechaActual.getMonth()+12 - ingreso.getMonth()
    }
    else
        mesesTrabajo = fechaActual.getMonth() - ingreso.getMonth()

    let = textotrabajado = `${aniosTrabajo} años y ${mesesTrabajo} meses`

    const tabla = document.getElementById("tabla");
    const fila = tabla.insertRow();

    fila.insertCell(0).textContent = numeroRegistro;
    fila.insertCell(1).textContent = nombre.value;
    fila.insertCell(2).textContent = textoNacimiento;
    fila.insertCell(3).textContent = edad;
    fila.insertCell(4).textContent = rangoEtario;
    fila.insertCell(5).textContent = cargaFam.value;
    fila.insertCell(6).textContent = trabajadorAct.value;
    fila.insertCell(7).textContent = "";
    fila.insertCell(8).textContent = textotrabajado;

    mensaje.innerHTML = `Tu nombre es ${nombre.value} y tienes ${edad} años`;
    numeroRegistro++;
    
}

function chequearCampos(){
    // let todolleno = false;
    // let NOname = document.getElementById("NO-name")
    // nombre.value == "" ? NOname.style = "display: block;" : (NOname.style = "display: none;" , todolleno = true)

    //if(document.querySelector("#confirmaInfo").checked)

    // if(todolleno == true)
        ejecutar()
}