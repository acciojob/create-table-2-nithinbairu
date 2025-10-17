function createTable() {
  const table = document.getElementById("myTable");
  table.innerHTML = ""; // Clear old content

  const rows = parseInt(prompt("Enter number of rows:"));
  const cols = parseInt(prompt("Enter number of columns:"));

  // Input validation
  if (rows <= 0 || cols <= 0 || isNaN(rows) || isNaN(cols)) {
    alert("Please enter valid positive numbers for rows and columns!");
    return;
  }

  // Create thead and tbody
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const cell = document.createElement(i === 0 ? "th" : "td");
      cell.innerHTML = `Row-${i + 1} Column-${j + 1}`;
      tr.appendChild(cell);
    }

    if (i === 0) {
      thead.appendChild(tr);
    } else {
      tbody.appendChild(tr);
    }
  }

  table.appendChild(thead);
  table.appendChild(tbody);
}
