//Form

function Auto(pNombre,pDoc,pUbi,pMarca,pNota, pPatente){
  this.nombre= pNombre;
  this.docc= pDoc;
  this.ubi= pUbi;
  this.marca= pMarca;
  this.patente = pPatente
  this.datos= pNombre + " " + pDoc + " " + pUbi + " " + pMarca + " " + pNota + " " + pPatente;
  this.mostrarDatos = function () {
            alert(this.datos);
          };
  }



$(document).ready(function() {
  $("#infoSender").click(function() {
    var input1 = document.getElementById("fname").value
    var input2 = document.getElementById("ldoc").value
    var input3 = document.getElementById("fubi").value
    var input4 = document.getElementById("fmarca").value
    var input5 = document.getElementById("fnota").value
   
    var newCar = new Auto(input1, input2, input3, input4, input5)
   
    var newCarRender = document.createElement("p")
    newCarRender.innerHTML = newCar.datos;
    $("#infoAuto").html("Tus autos: ");
    $("#infoAuto").append(newCar.datos);

    });
});


function miFunc() {
  alert('Se envio correctamente la informacion');
}





//Datos Personales From

const localStorage = window.localStorage;

function allStorage() {

  var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
      values.push(  JSON.parse(localStorage.getItem(keys[i])) );
  }
  console.log(values)
  return values;
}
const getItems = () => {
  let values = allStorage()
  let nodeInsert = document.getElementById("infoAuto")
  if (values.length !== 0){
    nodeInsert.style.display="flex"
  }
  for(let i = 0 ; i<values.length; i++){
    let p = document.createElement("p",[i])
    p.setAttribute("id", [i])
    console.log(p)
  nodeInsert.appendChild(p)
  let newElement = document.getElementById([i])
  newElement.innerHTML = values[i].datos
  }
}
getItems()
const addCar = () => {

  var input1 = document.getElementById("fname").value
  var input2 = document.getElementById("ldoc").value
  var input3 = document.getElementById("fubi").value
  var input4 = document.getElementById("fmarca").value
  var input5 = document.getElementById("fnota").value
  var input6 = document.getElementById("fpatente").value
 
  let values = allStorage()
 
  if( input1 !== "" && input2 !== "" &&input3 !== "" &&input4 !== "" &&input5 !== ""&&input6 !== "" ){
    var newCar = new Auto(input1, input2, input3, input4, input5, input6)
    localStorage.setItem(input6,  JSON.stringify(newCar))
    if (values < 1){
      getItems()
    } else {
      let nodeInsert = document.getElementById("infoAuto")

      let p = document.createElement("p",values.length)
      p.setAttribute("id", values.length)
      console.log(p)
    nodeInsert.appendChild(p)
    let newElement = document.getElementById(values.length)
    newElement.innerHTML = newCar.datos
    }

  } else{
    alert("Faltan completar datos")
  }

   
}




