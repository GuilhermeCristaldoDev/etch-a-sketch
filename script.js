const container = document.querySelector(".container");
const column = document.querySelectorAll(".column");

for (let j = 0; j < 16; j++) {
    let column = document.createElement("div");

    column.classList.add("column");

    container.appendChild(column);
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");

        row.classList.add("row");

        column.appendChild(row);
    }
}

container.addEventListener("mouseover", event => {
    let div = event.target;

    if(event.target.classList.value === "row")
    div.style.backgroundColor = "red";
})