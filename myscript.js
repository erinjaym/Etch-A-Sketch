
const container = document.getElementById("container");

function makeRows () {}


function makeColumns () {}
// make a begin button that turns on grid and starts etch a sketch? 
//create grid
for (k=0; k<16; k++){
    for (x =0; x<16; x++){
        const container = document.querySelector('#container'); // for k of x ?? [x][k]
        const content = document.createElement('div');
        content.classList.add('content');
        content.className = "etch";
        container.appendChild(content);
    }
} 

