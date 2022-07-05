
const previewBtn = document.querySelector(".js-preView")
const largeImg = document.querySelectorAll(".js-img")
previewBtn.addEventListener("click",preView)

function preView() {
  const val = $('input:radio[name="list"]:checked').val();
  function defaultPage(grid) {
    window.location.href=`"../../${grid}.html`;
  }
  
  switch (val) {
      case 'amount_ac': defaultPage (val);
      break;
      case 'amount_ac_EPD': defaultPage (val);
      break;
      case 'amount_ac_Rebate': defaultPage (val);
      break;
      case 'amount_Prebilling': defaultPage (val);
      break;
      case 'amount_All': defaultPage (val);
      break;
      case 'amount_amount': defaultPage (val);
      break;
      case 'invoice_ac': defaultPage (val);
      break;
  }
}
const preViewImg = (e) => {
  const url = e.target.getAttribute("src");
  const showImg = document.querySelectorAll(".js-lightboxImg");
  const lightBox = document.querySelector(".js-lightbox");
  showImg.forEach((x) => {
    lightBox.style.display = "block";
    x.setAttribute("src", `${url}`);
    
  })
  lightBox.addEventListener("click", () => {
    lightBox.style.display = "none";
  })
}
largeImg.forEach((item) => {
  item.addEventListener("click", preViewImg);
})
