const answers = [
  "Yes",
  "No",
  "Yes",
  "Yes",
  "Yes",
  "Isosceles",
  "30",
  "Both",
  "5cm",
  "Scalene",
];

const usrAnswers = [],
  usrAnsList = [];

const form = document.querySelector("#form");

function checkAnswers(event) {
  document.querySelector("#submit-button").remove();
  for (let index = 1; index <= 10; index++) {
    usrAnswers.push(
      document.querySelector(`input[name="${index}"]:checked`).value
    );
    usrAnsList.push(document.querySelector(`#list${index}`));
  }
  for (let index = 0; index < answers.length; index++) {
    if (usrAnswers[index] === answers[index]) {
      usrAnsList[index].style.borderColor = "green";
    } else usrAnsList[index].style.borderColor = "red";
  }
  document.querySelector("#quiz_heading").scrollIntoView(true);
  event.preventDefault();
}

form.addEventListener("submit", checkAnswers);
