//  creates a square grid with a side of squares length.
const createGrid = function(squares){
    const container = document.getElementById("grid-container");
    for(let i = 0; i < squares * squares; i++){
        const div = document.createElement("div")
        div.setAttribute('class', 'grid-square');
        container.appendChild(div);
    };
};

const destroyGrid = function(){
    const container = document.getElementById("grid-container");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
}

//  function to pass through event listener for newGridBtn.
const newGridBtn = function(){
    let squares = prompt("How many squares would you like?", 0);
    if (Number.isInteger(squares) && squares <= 100){
        destroyGrid();
        createGrid(squares);
    }else if(Number.isInteger(squares) && squares > 100){
        //logic to prompt again, with alert describing error.
        alert("Too many squares! Try again.")
        newGridBtn();
    }else {
        //logic to describe error that input is not valid.
        alert("Not a number. Please try again.");
        newGridBtn();
    };
}

const btn =  document.getElementById("new-grid-btn");

btn.addEventListener("click", newGridBtn);