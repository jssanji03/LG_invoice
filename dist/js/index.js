
const previewBtn = document.querySelector(".js-preView")
previewBtn.addEventListener("click",preView)

function preView() {
  const val = $('input:radio[name="list"]:checked').val();
  function defaultPage(grid) {
    console.log(grid);
    // window.location.href='../../amount.html';
    window.location.href=`"../../${grid}.html`;
  }
  
  switch (val) {
      case 'amount': defaultPage (val);
      break;
      case 'amount_ac_EPD': defaultPage (val);
      break;
      case 'amount_ac_Rebate': defaultPage (val);
      break;
      case 'amount_Prebilling': defaultPage (val);
      break;
      case 'amount_ac_Benz': defaultPage (val);
      break;
  }
}