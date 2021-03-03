
const container = document.querySelector('#container');



createGrid(16); // page load grid
function createGrid (numberOf) {
    
    for (columns=0; columns< numberOf; columns++){

        for (rows =0; rows< numberOf; rows++){
            container.style.gridTemplate = `repeat( ${numberOf} , 1fr) / repeat(${numberOf},  1fr)`; 
            const tile = document.createElement('div');
            tile.classList.add("etch"); 
            tile.style.width = 500 / numberOf;
            tile.style.height = 500 / numberOf; 
            container.appendChild(tile);
        }
    } 
   
}

activateDrawing(); //for initial grid
function activateDrawing (){
    const tilesList = document.getElementsByClassName('etch');
    let tileCount = tilesList.length;

    for (let tile = 0; tile < tileCount; tile++) {
        tilesList[tile].addEventListener("mouseenter", function(event){
        event.target.style.background = randomColor();
        })
    }
}
// clears grid
function cleanTiles (){
    const tilesList = document.getElementsByClassName('etch');
    let tileCount = tilesList.length;

    for (let tile = 0; tile < tileCount; tile++) {
        tilesList[tile].style.background = "#8f8996";
        }
}


function resize (){
var newNumber = prompt("How Many squares per side? (pick a number 1 - 100)");

    if (newNumber == 100){
        alert("Please enter a number under 100");
    }
    else if (newNumber < 1) {
        alert("Please enter a number above 0");
    }
    else {
        eraseGrid();
        createGrid(newNumber);
        activateDrawing();
    }


}

//completely kills grid 
function eraseGrid () {
const parent = document.querySelector('#container');
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

// ranomizes and spits out a color
function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return Color = "rgb(" + x + "," + y + "," + z + ")";
}

function toggleColor () {
}