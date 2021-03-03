
const container = document.querySelector('#container');



createGrid(40);
//create grid
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

drawThings();
function drawThings (){
    //Create list of all the etch tiles
    const tilesList = document.getElementsByClassName('etch');
    let tileCount = tilesList.length;

    for (let tile = 0; tile < tileCount; tile++) {
        tilesList[tile].addEventListener("mouseenter", function(event){
        event.target.style.background = "blue";
        })
    }
}
// clears grid
function cleanTiles (){
    const tilesList = document.getElementsByClassName('etch');
    let tileCount = tilesList.length;

    for (let tile = 0; tile < tileCount; tile++) {
        tilesList[tile].style.background = "grey";
        }
}


function resize (){
var newNumber = prompt("How Many squares per side? (up to 100)");

    if (newNumber == 100){
        alert("Please enter a number under 100");
    }
    else if (newNumber < 1) {
        alert("Please enter a larger number");
    }
    else {
        alert("wicked");
        eraseGrid();
        createGrid(newNumber);
        drawThings();
    }


}

//completely kills grid 
function eraseGrid () {
const parent = document.querySelector('#container');
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function toggleColor () {
}
