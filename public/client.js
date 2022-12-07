const socket = io();

socket.on('message', message => {
  addRow(message);
})

let mainTable = document.getElementById("table");

function addRow(data) {
  const dataList = data.split(';');
  const newRow = mainTable.insertRow(-1);

  const newCell = newRow.insertCell(0);
  const newCell1 = newRow.insertCell(1);
  const newCell2 = newRow.insertCell(2);
  const newCell3 = newRow.insertCell(3);
  
  //if the row is empty it will give the
  var newID = 1;
  
  console.log(mainTable.rows.length-1);

  if(mainTable.rows.length != 2) {
    const lastRowIndex = mainTable.rows.length-2;
    const lastRow = mainTable.rows[lastRowIndex];
    newID = parseInt(lastRow.cells.item(0).innerHTML) + 1;
  }
  
  newCell.innerHTML = newID.toString();
  newCell1.innerHTML = dataList[0];
  newCell2.innerHTML = dataList[1];
  newCell3.innerHTML = dataList[2];
}