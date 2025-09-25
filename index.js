const container = document.querySelector('#container');
const fragment = document.createDocumentFragment(); //Temporary staging area before adding to the DOM
const button = document.querySelector('#pop-up');
let gridSize = getComputedStyle(document.documentElement).getPropertyValue("--n"); 
//document.documentElement grabs the "html" doc
//getComputerdStyle() grabs the style after all CSS is applied

createGrid(gridSize);

function createGrid(count) {
  count = count**2
  container.innerHTML = ''; // Clears container before re-creating
  for (let i = 0; i < count; i++) {
    const div = document.createElement('div');
    div.className = 'gridItem';
    fragment.appendChild(div);
  }

  container.appendChild(fragment);
}

button.addEventListener('click', () => {
  gridSize = prompt("Please enter the grid size.");

  if (gridSize > 100) {
    alert("Please enter a value between 1 - 100");
  } else {
    document.documentElement.style.setProperty("--n", gridSize);
    createGrid(gridSize);
  }
});
