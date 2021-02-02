var sortMeglobal; //define esta variable global para luego usarla en la otra funcion.
var arrayLengthglobal;
var symbolglobal;
function processFormData() {
    container.innerHTML = "";
    // container1.innerHTML = "";
    var arrayLength = document.getElementById("fnumber").value;  
     var sortMe = new Array();
     var i = 0;
     symbol = [];
     for(; i < arrayLength; i++) {
        sortMe[i] = Math.floor((Math.random()*13)+1);
        let symbolarray = ["&diams;", "&spades;", "&hearts;", "&clubs;"];
        var randomsymbol = Math.floor(Math.random() * symbolarray.length);
        symbol1 = symbolarray[randomsymbol]; 
        symbol.push(symbol1);
        let card = document.createElement("div");
        card.classList.add("card");
        let p = document.createElement("span");
        p.innerHTML = symbol1;
        let n = document.createElement("span");
        n.innerHTML = sortMe[i];
        card.appendChild(p);
        card.appendChild(n);
        container.appendChild(card);
     } 
     
     
     console.log(sortMe) 
      sortMeglobal = sortMe;
      arrayLengthglobal = arrayLength;
    //   card.classList.remove("card")
}

function processFormData1() {
    container1.innerHTML = "";
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
    };    
    while (wall > 0){
        let index = 0;
        while (index < wall) {
          //compare the adjacent positions, if the right one is bigger, we have to swap
          if (sortMe1[index] > sortMe1[index + 1]) { 
            let aux = symbol[index]; 
            symbol[index] = symbol[index + 1];
            symbol[index + 1] = aux;
          }
          index++;
        }
        wall--; //decrease the wall for optimization
    };
    symbolglobal = symbol;
    for(i=0; i < sortMe1.length; i++) {
        let sort = document.createElement("div");
        sort.classList.add("sort");
        let p = document.createElement("span");
        p.innerHTML = symbolglobal[i];
        let n = document.createElement("span");
        n.innerHTML = sortMe1[i];
        sort.appendChild(p);
        sort.appendChild(n);
        container1.appendChild(sort);
        console.log(sortMe1);
}
    };

