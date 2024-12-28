//definisco il container
const gridContainer = document.querySelector(".grid-container");

//per ogni elemento in array source
source.forEach(el => {
    //creo un div
    const gridElement = document.createElement("div");
    //con classe grid-item
    gridElement.classList.add("grid-item")

    //e lo metto in grid container
    gridContainer.append(gridElement);
})





