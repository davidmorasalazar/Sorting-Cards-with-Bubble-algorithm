import "index.scss";
var sortMeglobal; //define esta variable global para luego usarla en la otra funcion.
 
 function processFormData() {
    var arrayLength = document.getElementById("fnumber").value;  // llama a la funcion div del html
    //  console.log(arrayLength)
     var sortMe = new Array();
     var i = 0;
     for(; i < arrayLength; i++) {
         sortMe[i] = Math.floor((Math.random()*13)+1);
     }

     var logText = "";
     i = 0;
     for(; i < arrayLength; i++) {
         logText += sortMe[i] + ", ";
     } 
    //  console.log("Starting Values: \t" + logText);
     console.log(sortMe) 
     sortMeglobal = sortMe;
    // processFormData1(sortMe)
// }
//   aleatorios()

 }

function processFormData1() {
    let sortMe1 = sortMeglobal;
    let wall = sortMe1.length - 1; //we start the wall at the end of the array
    while (wall > 0){
        let index = 0;
        while (index < wall) {
          //compare the adjacent positions, if the right one is bigger, we have to swap
          if (sortMe1[index] > sortMe1[index + 1]) { 
            let aux = sortMe1[index]; 
            sortMe1[index] = sortMe1[index + 1];
            sortMe1[index + 1] = aux;
          }
          index++;
        }
        wall--; //decrease the wall for optimization
    }
	console.log(sortMe1);
};
// bubbleSort(sortMe)