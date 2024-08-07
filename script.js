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

initTable();

document.addEventListener("keydown", (event) => { console.log(event.code); });