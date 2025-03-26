const table = document.getElementById("guesses-table");
let secretWord = "paddy";
let currentGuess = "";
let guessCount = 1;

function initTable() {
    for (let i = 0; i < 6; ++i) {
        table.innerHTML += `<tr id=\"guess-row${i+1}\"></tr>`;
        let currentRow = document.getElementById("guess-row" + (i+1));
        for (let j = 0; j < 5; ++j) {
            currentRow.innerHTML += "<td></td>";
        }
    }
}

function clearTable() {
    [...table.querySelectorAll("tr")].forEach(row => {
        [...row.children].forEach(cell => {
            cell.innerText = "";
        })
    });
}

function updateTableContents() {
    console.log(currentGuess);
    clearTable();
    let currentRow = document.getElementById(`guess-row${guessCount}`);
    for (let i = 0; i < currentGuess.length; ++i) {
        currentRow.children[i].innerText = currentGuess.charAt(i);
    }
}

initTable();

document.addEventListener("keydown", (event) => {
    if (event.code === "Backspace" && currentGuess.length > 0) {
        currentGuess = currentGuess.substring(0, currentGuess.length - 1);
        updateTableContents();
        return;
    }

    if (event.code !== `Key${event.key.toUpperCase()}`) return;

    if (currentGuess.length < 5) {
        currentGuess += event.key;
    }
    updateTableContents();
});