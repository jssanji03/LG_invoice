const addFormToList = document.querySelectorAll(".js-addList-Btn")
const tableArea = document.querySelector(".js-itemArea")
const amount = document.querySelectorAll(".js-amount")
addFormToList.forEach((item) => {
  item.addEventListener("click", addTemplate)
})

function addTemplate(e) {
  e.preventDefault()
  let addTr = e.target.getAttribute("data-area")
  if (addTr == "itemArea") {
      const trAdd = tableArea.insertRow()
        let str = `
        <tr>
          <th>
          </th>
          <th></th>
          <td data-th="Lux" class="text-start">
            <input type="text" class="form-control form-control-sm">
          </td>
          <td data-th="AMOUNT">
            <input type="number" class="form-control form-control-sm js-amount" value="">
          </td>
          <td data-th="AC %">
            <div class="input-group input-group-sm flex-nowrap">
              <input type="number" class="form-control">
              <span class="input-group-text" id="basic-addon2">%</span>
            </div>
          </td>
          <td data-th="AC">
            <input type="number" class="form-control form-control-sm js-ac">
          </td>
          <td data-th="Rebate %">
            <div class="input-group input-group-sm flex-nowrap">
              <input type="number" class="form-control">
              <span class="input-group-text" id="basic-addon2">%</span>
            </div>
          </td>
          <td data-th="Rebate">
            <input type="number" class="form-control form-control-sm">
          </td>
          <td data-th="EPD %">
            <div class="input-group input-group-sm flex-nowrap">
              <input type="number" class="form-control">
              <span class="input-group-text" id="basic-addon2">%</span>
            </div>
          </td>
          <td data-th="EPD" class="text-danger">
            <input type="number" class="form-control form-control-sm">
          </td>
          <td data-th="Advanced">
            <input type="number" class="form-control form-control-sm">
          </td>
          <td data-th="Total">
            <input type="number" class="form-control form-control-sm">
          </td>
        </tr>
        `
      trAdd.innerHTML = str;
  }
  const rowsCountLength = tableArea.rows.length;
  const rowsCount = tableArea.rows;
  for (let i = 0; i < rowsCountLength; i++){
    const amountCells = tableArea.rows[i].cells[3]
    const amount = amountCells.children[0];
    
    console.log(amount);
  }
}

function setAmountSum(x) {
  const AmountSum = amount.values
  // console.log(x);
};
