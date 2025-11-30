document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("add");
  const subtractBtn = document.getElementById("subtract");
  const multiplyBtn = document.getElementById("multiply");
  const divideBtn = document.getElementById("divide");
  const calculationResult = document.getElementById("calculation-result");
  console.log("Element found:", calculationResult);

  // arithmetic functions
  function add(number1, number2) {
    return number1 + number2;
  }
  function subtract(number1, number2) {
    return number1 - number2;
  }
  function multiply(number1, number2) {
    return number1 * number2;
  }
  function divide(number1, number2) {
    return number1 / number2;
  }

  // Generic calculate function
  function calculate(operation) {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;

    if (operation === divide && number2 === 0) {
      calculationResult.textContent = "Error: Division by zero";
      calculationResult.style.color = "#dc3545";
      return;
    }

    const result = operation(number1, number1);
    calculationResult.textContent = result.toFixed(2);
    calculationResult.style.color = "#28a745";
  }

  // Event listeners
  addBtn.addEventListener("click", () => calculate(add));
  subtractBtn.addEventListener("click", () => calculate(subtract));
  multiplyBtn.addEventListener("click", () => calculate(multiply));
  divideBtn.addEventListener("click", () => calculate(divide));
});
