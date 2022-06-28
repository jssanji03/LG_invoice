// const total = document.querySelectorAll(".js-total")

// total.forEach((x) => {
//   const children = x.parentNode.getElementsByClassName("js-subtotal")
//   Object.keys(children).forEach(function (i) {
//     console.log(children[i].innerText);
//     const cal = parseInt(children[i].innerText)
//     console.log(cal);
// });
// })

function printOut(divId) {
  var printOutContent = document.getElementById(divId).innerHTML;
  var originalContent = document.body.innerHTML;
  document.body.innerHTML = printOutContent;
  window.print();
  document.body.innerHTML = originalContent;
}