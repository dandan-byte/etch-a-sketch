//  creates a square grid with a side of squares length.
const createGrid = function(squares){
    const container = document.getElementById("grid-container");
    for(let i = 0; i < squares * squares; i++){
        const div = document.createElement("div")
        div.setAttribute('class', 'grid-square');
        container.appendChild(div);
    };
};