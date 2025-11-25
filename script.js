const container = document.querySelector(".container");
const btn = document.querySelector(".change-grid-button");
const btnClear = document.querySelector(".clear-button");

function createSquare(size) {
    let squareContainer = document.createElement("div");
    squareContainer.classList.add("square-container")

    container.appendChild(squareContainer);

    for (let j = 0; j < size; j++) {
        let column = document.createElement("div");

        column.classList.add("column");

        squareContainer.appendChild(column);
        for (let i = 0; i < size; i++) {
            let row = document.createElement("div");

            row.classList.add("row");
            row.dataset.opacity = 0;

            column.appendChild(row);
        }
    }

}

function getRandomRgbNumber() {
    return Math.floor(Math.random() * 255);
}

function getRandomRgbColor() {
    r = getRandomRgbNumber();
    g = getRandomRgbNumber();
    b = getRandomRgbNumber();
    return `rgb(${r}, ${g}, ${b})`
}

createSquare(16);

btn.addEventListener("click", () => {
    let size = parseInt(prompt("Enter a new grid size (1-100):"));

    if (isNaN(size) || size < 1 || size > 100) return alert("Erro")

    let squareContainer = document.querySelector(".square-container");
    container.removeChild(squareContainer);
    createSquare(size);
})

btnClear.addEventListener("click", () => {
    let divs = document.querySelectorAll(".row");

    divs.forEach(element => {
        element.style.backgroundColor = "white";
    });
})

container.addEventListener("mouseover", event => {
    let div = event.target;

    if (div.classList.contains("row")) {
        if (div.style.backgroundColor === "white" || !div.style.backgroundColor) {
            div.style.backgroundColor = getRandomRgbColor();
        }

        div.dataset.opacity = Number(div.dataset.opacity) + 0.1;
        div.style.opacity = div.dataset.opacity
    }

})

