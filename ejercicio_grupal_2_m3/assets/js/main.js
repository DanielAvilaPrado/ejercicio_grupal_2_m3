//Se debe validar que al ingresar el año de nacimiento o el año de ingreso a la organización no sea mayor al año actual.

//Se debe validar que los meses estén comprendidos entre 1 y 12


//captura de input de los campos del formulario
// let nombre = document.getElementById("nombre").value;
// let fechaNac = document.getElementById("fechaNacimiento").value;
// let cargaFam = document.getElementById("cargaFamiliar").value;
// let trabajadorAct = document.getElementById("trabajadorActivo").value;
// let fechaIng = document.getElementById("fechaIngreso").value;
// let confirmaInfo = document.getElementById("confirmaInfo");
// let btnEnviar = document.querySelector(".btn-success");

//variables necesarias pero que falta agregar el valor
// var edad = "";
var rangoEtario = "";
var tiempoTrabajado = "";

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

function ingresarFila(){

  let nombre = document.getElementById("nombre").value;
  let fechaNac = document.getElementById("fechaNacimiento").value;
  let cargaFam = document.getElementById("cargaFamiliar").value;
  let trabajadorAct = document.getElementById("trabajadorActivo").value;
  let fechaIng = document.getElementById("fechaIngreso").value;
  // let confirmaInfo = document.getElementById("confirmaInfo");
  // let btnEnviar = document.querySelector(".btn-success");

var fila="<tr><td>"
          +nombre+"</td><td>"
          +fechaNac+"</td><td>"
          +edad+"</td><td>"
          +rangoEtario+"</td><td>"
          +cargaFam+"</td><td>"
          +trabajadorAct+"</td><td>"
          +fechaIng+"</td><td>"
          +tiempoTrabajado+"</td></tr>";

    document.getElementById("tablita").innerHTML = fila;
}
console.log(ingresarFila());
  window.addEventListener("load", function () {

    // btnEnviar.addEventListener("click", function () {
    //     // if (fechaNacimiento.value){
    //     //     alert(`La edad es: ${calcularEdad(fechaNacimiento.value)} años`)   
                                       

    //     // }
    //     document.getElementById("tablita").innerHTML = fila;     
    // })
    
})



//calcular rango etario

//calular tiempo trabajado

//crear arreglo vacío y agregar datos con push

//agregar datos a la tabla con ciclo

//generar informes: Se requiere implementar el script JavaScript que genere un “informe” para los datos ingresados, por ejemplo: “La Persona es un trabajador activo con 2 años y 3 meses en la organización y en 9 meses cumple el próximo año” o bien: “La persona es un Adulto Mayor, carga familiar con 66 años y 6 meses”