
const container = document.getElementById("container");


 createGrid (16);


function createGrid (numberOf) {
    
    for (columns=0; columns< numberOf; columns++){

        for (rows =0; rows< numberOf; rows++){
            const container = document.querySelector('#container');
            container.style.gridTemplate = `repeat( ${numberOf} , 1fr) / repeat(${numberOf},  1fr)`; 
            const tile = document.createElement('div');
            tile.classList.add("etch"); 
            tile.style.width = 500 / numberOf;
            tile.style.height = 500 / numberOf; 
            console.log(500 / numberOf);
            container.appendChild(tile);
        }
    } 
}

//create array of all tiles 
const tilesList = document.getElementsByClassName('etch');
console.log(tilesList);
let tileCount = tilesList.length;

drawThings();
function drawThings (){
    for (let tile = 0; tile < tileCount; tile++) {
        tilesList[tile].addEventListener("mouseenter", function(event){
        event.target.style.background = "blue";
        })
    }
}

function reset (){
    for (let tile = 0; tile < tileCount; tile++) {
        tilesList[tile].style.background = "grey";
        }
}


function resize (){
var newSize = prompt("How Many squares per side? (up to 100", "16");

    if (newSize == 100){
        alert("Please enter a number under 100");
    }
    else if (newSize < 1) {
        alert("Please enter a larger number");
    }
    else {
        alert("wicked");
        document.getElementById('container').style.height = "700px";
        document.getElementById('container').style.width = "700px";
        // Need to create a new grid with ..> etch size = container size / etch number
        // have to make create grid variable fed 
    }


}


function toggleColor () {
}