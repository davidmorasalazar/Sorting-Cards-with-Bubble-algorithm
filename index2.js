var sortMeglobal; //define esta variable global para luego usarla en la otra funcion.
var arrayLengthglobal;
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
      arrayLengthglobal = arrayLength;
    //  console.log(arrayLength);    // processFormData1(sortMe)
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
function iteracion() {
    const container = document.querySelector("#container");
     let symbol = document.getElementById("span");  // llama a la funcion div del html
     let number = document.getElementById("span1"); // llama a la funcion div del html            
     let symbolarray = ["&diams;", "&spades;", "&hearts;", "&clubs;"];
     var randomsymbol = Math.floor(Math.random() * symbolarray.length);
     symbol1 = symbolarray[randomsymbol]; 
    // number.innerHTML = sortMeglobal[i];     
//    var arrayLength = document.getElementById("fnumber").value;  // llama a la funcion div del html
//    let arrayLength1 = arrayLengthglobal;
    //  return(console.log(arrayLength));
    for( let i=0; i < 20; i++) {   
        let card = document.createElement("div");
        card.classList.add("card");
        let p = document.createElement("span");
        p.innerHTML = "&spades;";
        let n = document.createElement("span");
        n.innerHTML = "7";
        card.appendChild(p);
        card.appendChild(n);
        container.appendChild(card);
    //   console.log(document.getElementById("card")); 
    }

 }
iteracion();