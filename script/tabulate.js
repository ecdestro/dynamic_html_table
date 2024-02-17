// copyright 2024 ecdestro

function createTable() {
    const numRows = parseInt(prompt("Number of initial rows:"));
    const numCols = parseInt(prompt("Number of initial colums:"));
    const tableContainer = document.getElementById("table-container");

    let tableHTML = "<table>";
    tableHTML += "<tr>";
    for (let j = 0; j < numCols; j++) {
        tableHTML += `<th><input type="text" id="header-${j}" placeholder="Header ${j+1}"></th>`;
    }
    tableHTML += "</tr>"

    for (let i = 0; i < numRows; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < numCols; j++) {
            tableHTML += `<td><input type="text" id="row-${i}-col-${j}"></td>`;
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    tableContainer.innerHTML = tableHTML;
}

function saveData() {
    const numRows = parseInt(prompt("Number of rows:"));
    const numCols = parseInt(prompt("Number of columns"));
    const data = {};

    for (let i = 0; i < numRows; i++) {
        const rowData = {};
        for (let j = 0; j < numCols; j++) {
            const value = document.getElementById(`row-${i}-col-${j}`).value;
            const header = document.getElementById(`header-${j}`).value;

            rowData[header] = value;
        }
        data[`row-${i}`] = rowData;
    }
    console.log(JSON.stringify(data, null, 2));
}