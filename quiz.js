function checkAnswer() {
  const feedback = document.getElementById("feedback");
  const correctAnswer = 4;
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "#28a745";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "#dc3545";
  }
}

const submitAnswer = document.getElementById("submit-answer");

submitAnswer.addEventListener("click", checkAnswer);
