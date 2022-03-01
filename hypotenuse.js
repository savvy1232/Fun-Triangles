const hypotenuseForm = document.querySelector("#hypotenuse-form");
const adjacentLength = document.querySelector("#adjacent-side");
const baseLength = document.querySelector("#base");
const output = document.querySelector("#output");

function calculateHypotenuse(event) {
  var adjLen = parseInt(adjacentLength.value);
  var baseLen = parseInt(baseLength.value);
  var hypo = Math.sqrt(Math.pow(adjLen, 2) + Math.pow(baseLen, 2));
  output.style.visibility = "visible";
  output.innerText = `Hypotenuse(C) = ${hypo.toFixed(5)}`;
  output.scrollIntoView(true);
  event.preventDefault();
}

hypotenuseForm.addEventListener("submit", calculateHypotenuse);
