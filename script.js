let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    createCanvas(16);

    let grid_select = document.querySelector("#grid-select");
    grid_select.addEventListener("click",function(){
        let size = getSize();
        createCanvas(size);
    })
})

function createCanvas(size){
    let canvas = document.querySelector(".canvas");

    canvas.style.gridTemplateColumns = `repeat(${size},1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numDivs = size * size

    for(let i=0; i< numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        canvas.insertAdjacentElement("beforeend",div);
    }
}

function getSize(){
    let input = prompt("Enter the size of the board: ");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Provide a number";
    }
    else if(input < 1 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100";
    }
    else {
        message.innerHTML = "Selected size is " + input +"x" + input;
        return input;
    }
}

function colorDiv(){
    if (color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetCanvas(){
    let divs  = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white");
}