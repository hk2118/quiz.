let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let nexts = document.getElementById("next");
let count = document.getElementById("score");

let index = 0;
let score = 0;
let arr_len = data.length;

function qs(index) {
  question.innerHTML = `${index + 1}. ${data[index].question}`;
  option1.innerHTML = `<input type='radio' value='${data[index].option1}' name='option'<label>${data[index].option1}</label>`;
  option2.innerHTML = `<input type='radio' value='${data[index].option2}' name='option' <label>${data[index].option2}</label>`;
  option3.innerHTML = `<input type='radio' value='${data[index].option3}' name='option'<label>${data[index].option3}</label>`;
}
qs(index);

function next() {
  const radios = document.getElementsByName("option");
  let selectedValue = "";
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedValue = radios[i].value;
      break;
    }
  }

  if (!selectedValue) {
    alert("Please choose one");
    return;
  } else {
    if (data[index].answer === selectedValue) {
      score++;
    }
  }

  index++;
  if (index === arr_len) {
    // Check if the last question
    localStorage.setItem("quizScore", score); // Store score in Local Storage
    nexts.innerHTML = `<button type='button' onclick="window.location.href='score.html'" class="btn btn-danger">
            Finish Test
          </button>`;
  } else {
    qs(index);
  }
}
