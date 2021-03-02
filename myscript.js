
const container = document.getElementById("container");
createGrid (); // for start button later

//create 16 x 16 grid

function createGrid () {
var tileCount = 0; // keep track of tile to change? / give specific ID to each div
for (k=0; k<16; k++){
    // create ID count 
    for (x =0; x<16; x++){
        tileCount ++; 
        const container = document.querySelector('#container');
        const tile = document.createElement('div');
       // content.classList.add('content');
        tile.className = "etch";
        tile.id = tileCount;
        container.appendChild(tile);
                        }
                    } 
}

//create array of all tiles 
const tiles = document.getElementsByClassName('etch');
console.log(tiles);
let tileCount = tiles.length;

drawThings(tiles);

// add event listener for mousenter to every tile 
function drawThings (tile){
    for (k = 0; k < tileCount; k++) {
     tile[k].addEventListener("mouseenter", function(event){
        event.target.style.background = "blue";
        })
    }
}

function reset (){

}


function resize (){

}


function toggleColor () {

}