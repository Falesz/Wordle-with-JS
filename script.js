const table = document.getElementById("guesses-table");

function initTable() {
    for (let i = 0; i < 7; ++i) {
        table.innerHTML += `<tr id=\"guess-row${i+1}\"></tr>`;
        let currentRow = document.getElementById("guess-row" + (i+1));
        for (let j = 0; j < 6; ++j) {
            currentRow.innerHTML += "<td></td>";
        }
    }
}

initTable();