/**
 * Generates an html table given some data and returns it
 *
 *@param {Array<Object>} data - Array of objects representing rows, objects should have same keys - keys = headers
 *
 * Example:
 *  const data = [{item_sku: "194560", unit_cost: 1.99},
 *                {item_sku: "194561", unit_cost: 11.56}]
 */
function render_table(data, options={}){
    const { styled = true, className = "styled-table" } = options;
    const table = document.createElement("table");
    if (styled) {
        table.classList.add(className);
    }
    const header = table.createTHead();
    const headerRow = header.insertRow();
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });
    const tbody = table.createTBody();
    data.forEach(rowData => {
        const row = tbody.insertRow();
        Object.values(rowData).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });
    return table;
}
