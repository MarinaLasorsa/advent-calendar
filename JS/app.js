//prendo lo stato di localStorage convertendolo in formato JSON
const clickedElements = JSON.parse(localStorage.getItem("clickedElements")) || [];

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

    //se grid element è già in localStorage
    if (clickedElements.includes(i)) {
        //creo un overlay element
        const overlayElement = document.createElement("div");
        //gli do' la classe overlay
        overlayElement.classList.add("overlay")
        //lo aggiungo a grid element
        gridElement.prepend(overlayElement);

        //tolgo sfondo a grid element
        gridElement.style.backgroundColor = "transparent";
    }

    //quando grid element viene cliccato
    gridElement.addEventListener("click", function () {

        //se grid element non è già in localStorage
        if (!clickedElements.includes(i)) {
            //aggiungilo all'array di localStorage
            clickedElements.push(i)
            //salvo in localStorage convertendolo in una stringa
            localStorage.setItem("clickedElements", JSON.stringify(clickedElements));
        }

        //crea un overlay element
        const overlayElement = document.createElement("div");
        //gli da' la classe overlay
        overlayElement.classList.add("overlay")
        //lo aggiunge a grid element
        gridElement.prepend(overlayElement);

        //toglie sfondo a grid element
        gridElement.style.backgroundColor = "transparent";

        //definisco modale
        const modal = document.querySelector(".modal-bg");
        //definisco container per content
        const modalContent = document.querySelector(".modal-content");

        //ripulisco il contenuto
        modalContent.innerHTML = "";

        //se il type dell'array element è image
        if (el.type === "image") {
            //creo un elemento img
            const modalImage = document.createElement("img");
            //gli assegno l'url dell' array element
            modalImage.src = el.url;
            //gli aggiungo la classe modal-image
            modalImage.classList.add("modal-image");
            //metto elemento img in modale
            modalContent.prepend(modalImage);

            //invece se il type dell'array element è text
        } else if (el.type === "text") {
            //creo un elemento p
            const modalText = document.createElement("p");
            //gli assegno il testo dell'array element
            modalText.textContent = el.text;
            //gli aggiungo la classe modal-text
            modalText.classList.add("modal-text");
            //metto elemento paragrafo in modale
            modalContent.prepend(modalText);
        }

        //cambio il display status di modal in flex
        modal.style.display = "flex"

    })

})

//definisco bottone chiudi
const closeBtn = document.querySelector(".closeBtn");

//al suo click cambio il display status di modal in none
closeBtn.addEventListener("click", function () {

    const modal = document.querySelector(".modal-bg");

    modal.style.display = "none";
});

//definisco bottone reset
const resetBtn = document.querySelector(".resetBtn");

//al suo click rimuovo elementi cliccati da localstorage
resetBtn.addEventListener("click", function () {
    localStorage.removeItem("clickedElements");

    //riavvio la pagina
    location.reload();
})










