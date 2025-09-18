const container = document.querySelector("#container");
const fragment = document.createDocumentFragment(); //Temporary staging area before adding to the DOM
createGrid(256);

function createGrid(count) {
    container.innerHTML = "" // Clears container before re-creating
    for (let i = 0; i < count; i++) {
        const div = document.createElement("div")
        div.className = "gridItem"
        fragment.appendChild(div)
    }

    container.appendChild(fragment);
}