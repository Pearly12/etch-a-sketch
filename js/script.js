createGrid(80);

const btnReset = document.querySelector("#reset");
btnReset.addEventListener('click', () => {
    let sqares = prompt("How many squares per row?");
    createGrid(sqares);
})


function createGrid(squaresPerRow){
    const container = document.querySelector(".container");
    container.style["width"] = "960px";
    container.style["height"] = "960px";
    container.innerHTML = "";

    for(let i = 0; i < squaresPerRow; i++){
        const row = document.createElement('div');
        row.style["display"] = "flex";
        row.style["justify-content"] = "center";
        container.appendChild(row);
        
        for(let i = 0; i < squaresPerRow; i++){
            const square = document.createElement('div');
            square.classList.add("square");
            square.style["width"] = Math.floor((960/squaresPerRow)).toString() + "px";
            square.style["height"] = Math.floor((960/squaresPerRow)).toString() + "px";
            square.style["border"] = "1px solid black";
            square.style["box-sizing"] = "border-box";
            row.appendChild(square);
            
            square.addEventListener("mouseover", () => {
                square.style["background-color"] = "black";
                console.log("mouseover");
            });
        }
    }
}

