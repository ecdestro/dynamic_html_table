// copyright 2024 ecdestro

document.getElementById("table-generator").addEventListener('submit', function(event) {
    event.preventDefault();

    const numCols = parseInt(document.getElementById('numCols').value);
    const numRows = parseInt(document.getElementById('numRows').value);

    createTable(numCols, numRows);
});

document.getElementById("file-generator").addEventListener('submit', function(event) {
    event.preventDefault();

    const numCols = parseInt(document.getElementById('numCols').value);
    const numRows = parseInt(document.getElementById('numRows').value);
    const fileName = document.getElementById('file-name').value;
    
    saveData(numCols, numRows, fileName);
});

function createTable(numCols, numRows) {
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

function saveData(numCols, numRows, fileName) {
    const data = { table: [] };

    for (let i = 0; i < numRows; i++) {
        const rowData = {};
        for (let j = 0; j < numCols; j++) {
            const value = document.getElementById(`row-${i}-col-${j}`).value;
            const header = document.getElementById(`header-${j}`).value;

            rowData[header] = value;
        }
        data.table.push(rowData);
    }
    var jsonData = JSON.stringify(data, null, 2);
    var blob = new Blob([jsonData], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = fileName + '.json';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}