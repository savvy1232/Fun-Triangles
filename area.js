const optionOne = document.querySelector("#base-height");
const optionTwo = document.querySelector("#three-sides");
const optionThree = document.querySelector("#two-sides-angle");
const displayArea = document.querySelector("#area-section");

function clearSection(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function setSpanAttributes(innerText, classs) {
  let ele = document.createElement("span");
  classs ? ele.setAttribute("class", classs) : ele;
  innerText ? (ele.innerText = innerText) : ele;
  return ele;
}

function setDivAttributes(innerText, id, classs) {
  let ele = document.createElement("div");
  id ? ele.setAttribute("id", id) : ele;
  innerText ? (ele.innerText = innerText) : ele;
  classs ? ele.setAttribute("class", classs) : ele;
  return ele;
}

function setButtonAttributes(type, innerText, classs) {
  let ele = document.createElement("button");
  ele.setAttribute("type", type);
  ele.setAttribute("class", classs);
  ele.innerText = innerText;
  return ele;
}

function setLabelAttributes(fr, innerText, classs) {
  let ele = document.createElement("label");
  ele.setAttribute("for", fr);
  ele.setAttribute("class", classs);
  ele.innerText = innerText;
  return ele;
}

function setInputAtrributes(
  type,
  placeHolder,
  name,
  id,
  min,
  max,
  step,
  classs
) {
  let ele = document.createElement("input");
  ele.setAttribute("type", type);
  ele.setAttribute("name", name);
  ele.setAttribute("id", id);
  ele.setAttribute("placeholder", placeHolder);
  ele.setAttribute("min", min);
  ele.setAttribute("max", max);
  ele.setAttribute("step", step);
  ele.setAttribute("required", true);
  ele.setAttribute("class", classs);
  ele.setAttribute("autocomplete", "off");
  return ele;
}

function createTriangle(side3, label1) {
  let container = setDivAttributes("", "", "container");
  container.append(
    setDivAttributes("", "", "side1"),
    setDivAttributes("", "", "side2"),
    side3 ? setDivAttributes("", "", "side3") : "",
    label1 ? setSpanAttributes("C", "label1") : "",
    setSpanAttributes("B", "label2"),
    !label1 ? setSpanAttributes("A", "label3") : "",
    !label1 ? setSpanAttributes("C", "label4") : ""
  );
  return container;
}

function createRightAngleTriangle(labelA) {
  let container = setDivAttributes("", "", "container");
  container.append(
    setDivAttributes("", "", "height-base"),
    setDivAttributes("", "", "hypotenuse"),
    labelA ? setSpanAttributes("A", "labelA") : "",
    setSpanAttributes("B", "labelB"),
    setSpanAttributes("C", "labelC"),
    !labelA ? setSpanAttributes("∠", "labelAngle") : ""
  );
  return container;
}

function calculateAreaOptionOne(event) {
  let base = parseFloat(document.querySelector("#baseLength").value);
  let height = parseFloat(document.querySelector("#height").value);
  let output = document.querySelector("#output");
  output.style.visibility = "visible";
  output.innerText = `Area = ${(0.5 * base * height).toFixed(5)}`;
  output.scrollIntoView(true);
  event.preventDefault();
}

function renderOptionOneDOM() {
  clearSection(displayArea);
  let form = document.createElement("form");
  form.setAttribute("id", "form");
  form.setAttribute("class", "form display-flex-coloumn");

  let div1 = setDivAttributes("", "");
  let div2 = setDivAttributes("", "");
  div1.append(
    setLabelAttributes("baseLength", "B : ", "label"),
    setInputAtrributes(
      "number",
      "length",
      "base",
      "baseLength",
      "1",
      "",
      "0.01",
      "input input-with-label"
    )
  );
  div2.append(
    setLabelAttributes("height", "C : ", "label"),
    setInputAtrributes(
      "number",
      "length",
      "height",
      "height",
      "1",
      "",
      "0.01",
      "input input-with-label"
    )
  );

  form.append(
    div1,
    div2,
    setButtonAttributes("submit", "Calculate", "submit-button")
  );

  displayArea.append(
    createTriangle(true, true),
    form,
    setDivAttributes("Area = (1/2)*base*height", "output", "output-para")
  );
  document.querySelector(".submit-button").scrollIntoView(true);
  document
    .querySelector("#form")
    .addEventListener("submit", calculateAreaOptionOne);
}

function calculateAreaOptionTwo(event) {
  let side1 = parseFloat(document.querySelector("#side1").value);
  let side2 = parseFloat(document.querySelector("#side2").value);
  let side3 = parseFloat(document.querySelector("#side3").value);
  let output = document.querySelector("#output");

  if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1)
    document.querySelector("#warning_div").style.display = "block";
  else {
    document.querySelector("#warning_div").style.display = "none";
    let s = (side1 + side2 + side3) / 2;
    output.style.visibility = "visible";
    output.innerText = `Area = ${Math.sqrt(
      s * (s - side1) * (s - side2) * (s - side3)
    ).toFixed(5)}`;
    output.scrollIntoView(true);
  }
  event.preventDefault();
}

function renderOptionTwoDOM() {
  clearSection(displayArea);
  let form = document.createElement("form");
  form.setAttribute("id", "form");
  form.setAttribute("class", "form display-flex-coloumn");

  let div1 = setDivAttributes("", "", "");
  let div2 = setDivAttributes("", "", "");
  let div3 = setDivAttributes("", "", "");

  div1.append(
    setLabelAttributes("side1", "A : ", "label"),
    setInputAtrributes(
      "number",
      "length",
      "side1",
      "side1",
      "1",
      "",
      "0.01",
      "input input-with-label"
    )
  );
  div2.append(
    setLabelAttributes("side2", "B : ", "label"),
    setInputAtrributes(
      "number",
      "length",
      "side2",
      "side2",
      "1",
      "",
      "0.01",
      "input input-with-label"
    )
  );
  div3.append(
    setLabelAttributes("side3", "C : ", "label"),
    setInputAtrributes(
      "number",
      "length",
      "side3",
      "side3",
      "1",
      "",
      "0.01",
      "input input-with-label"
    )
  );

  let errorDiv = setDivAttributes(
    "Enter valid side lengths such that each side length should be less than sum of other two sides",
    "warning_div",
    "error-div"
  );

  form.append(
    div1,
    div2,
    div3,
    errorDiv,
    setButtonAttributes("submit", "Calculate", "submit-button")
  );

  displayArea.append(
    createTriangle(false, false),
    form,
    setDivAttributes("Area = √s(s-a)(s-b)(s-c)", "output", "output-para")
  );
  document.querySelector(".submit-button").scrollIntoView(true);
  document
    .querySelector("#form")
    .addEventListener("submit", calculateAreaOptionTwo);
}

function calculateAreaOptionThree(event) {
  let side2 = parseFloat(document.querySelector("#side2").value);
  let side3 = parseFloat(document.querySelector("#side3").value);
  let degree = parseFloat(document.querySelector("#degree").value);
  let output = document.querySelector("#output");
  output.style.visibility = "visible";
  output.innerText = `Area = ${(
    (side2 * side3 * Math.sin(degree * (Math.PI / 180))) /
    2
  ).toFixed(5)}`;
  output.scrollIntoView(true);
  event.preventDefault();
}

function renderOptionThreeDOM() {
  clearSection(displayArea);
  let form = document.createElement("form");
  form.setAttribute("id", "form");
  form.setAttribute("class", "form display-flex-coloumn");

  let div1 = setDivAttributes("", "", "");
  let div2 = setDivAttributes("", "", "");
  let div3 = setDivAttributes("", "", "");

  div1.append(
    setLabelAttributes("side2", "B : ", "label"),
    setInputAtrributes(
      "number",
      "length",
      "side2",
      "side2",
      "1",
      "",
      "0.01",
      "input input-with-label"
    )
  );
  div2.append(
    setLabelAttributes("side3", "C : ", "label"),
    setInputAtrributes(
      "number",
      "length",
      "side3",
      "side3",
      "1",
      "",
      "0.01",
      "input input-with-label"
    )
  );
  div3.append(
    setLabelAttributes("degree", "∠ : ", "label"),
    setInputAtrributes(
      "number",
      "degree",
      "degree",
      "degree",
      "1",
      "180",
      "0.01",
      "input input-with-label"
    )
  );

  form.append(
    div1,
    div2,
    div3,
    setButtonAttributes("submit", "Calculate", "submit-button")
  );

  displayArea.append(
    createRightAngleTriangle(false),
    form,
    setDivAttributes("Area= 1/2*b*c*sin(A)", "output", "output-para")
  );
  document.querySelector(".submit-button").scrollIntoView(true);
  document
    .querySelector("#form")
    .addEventListener("submit", calculateAreaOptionThree);
}

optionOne.addEventListener("click", renderOptionOneDOM);
optionTwo.addEventListener("click", renderOptionTwoDOM);
optionThree.addEventListener("click", renderOptionThreeDOM);
