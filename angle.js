const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const anglesForm = document.querySelector("#angles-form");
const output = document.querySelector("#output");
const contentDiv = document.querySelector("#content_body");

function scrollDown() {
  output.scrollIntoView(true);
}

function checkIfTriangle(event) {
  output.style.visibility = "visible";
  if (
    parseInt(angleOne.value) +
      parseInt(angleTwo.value) +
      parseInt(angleThree.value) ===
    180
  )
    output.innerText = "Yayy! These angles can make a triangle!";
  else output.innerText = "Oops! Can't make a triangle with these three :(";
  scrollDown();
  event.preventDefault();
}

anglesForm.addEventListener("submit", checkIfTriangle);
