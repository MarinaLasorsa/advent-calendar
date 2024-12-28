//definisco il container
const gridContainer = document.querySelector(".grid-container");

//per ogni elemento in array source
source.forEach((el, i) => {
    //creo un div
    const gridElement = document.createElement("div");
    //con classe grid-item e num
    gridElement.classList.add("grid-item")
    gridElement.classList.add("num")

    //definisco l'icona e numero da metterci dentro
    let icon = el.icon;
    let num = i + 1;

    //definisco l'elemento img come stringa che ha la variabile icon nel src
    const imgString = `<img class="icon" src="images/icons/${icon}.png" />`
    //aggiungo elemento img dentro al grid element
    gridElement.innerHTML += imgString;

    //aggiungo numero dentro al grid element
    gridElement.innerHTML += num;

    //metto grid element nel grid container
    gridContainer.append(gridElement);
})





