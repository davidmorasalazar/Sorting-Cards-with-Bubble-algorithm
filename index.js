let symbol = document.getElementById("span");  // llama a la funcion div del html
let number = document.getElementById("span1") ; // llama a la funcion div del html
let symbol1 = document.getElementById("span2");  // llama a la funcion div del html
let number1 = document.getElementById("span3") ; // llama a la funcion div del html
let symbol2 = document.getElementById("span4");  // llama a la funcion div del html
let number2 = document.getElementById("span5") ; // llama a la funcion div del html
let symbol3 = document.getElementById("span6");  // llama a la funcion div del html
let number3 = document.getElementById("span7") ; // llama a la funcion div del html

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
      let symbolarray = ["&diams;","&spades;","&hearts;","&clubs;"] ;
      var randomsymbol = Math.floor(Math.random()*symbolarray.length);
      symbol.innerHTML = symbolarray[randomsymbol]; 
      symbol1.innerHTML = symbolarray[randomsymbol]; 
      symbol2.innerHTML = symbolarray[randomsymbol]; 
      symbol3.innerHTML = symbolarray[randomsymbol]; 
    //  console.log("Starting Values: \t" + logText);
     console.log(sortMe) 
     sortMeglobal = sortMe;
      number.innerHTML = sortMeglobal[0];
      number1.innerHTML = sortMeglobal[1];
      number2.innerHTML = sortMeglobal[2];
      number3.innerHTML = sortMeglobal[3];
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