// calculator buttons
let btn = document.createElement("button");
btn.innerHTML = "Push!";

//let btn2 = document.createElement("button");
//btn2.innerHTML = "No Me!";

// calculator grid
let calcTable = document.createElement("table");
let calcBody = document.createElement("tbody");
let calcRow = document.createElement("tr");
let calcCell = document.createElement("td");
calcCell.appendChild(btn);
calcRow.appendChild(calcCell);
calcBody.appendChild(calcRow);
calcTable.appendChild(calcBody);

document.body.appendChild(calcTable);

document.body.style.backgroundColor = "#12cad6";
