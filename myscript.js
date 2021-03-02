
const container = document.getElementById("container");
createGrid (); // for start button later

//create 16 x 16 grid
function createGrid () {
    for (columns=0; columns<16; columns++){

        for (rows =0; rows<16; rows++){
            const container = document.querySelector('#container');
            const tile = document.createElement('div');
            tile.className = "etch";
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
    }


//document.getElementById('container').style.height = "700px";
//
// change grid size but not pixel size ? 
}


function toggleColor () {
}