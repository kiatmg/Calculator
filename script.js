const screen = document.querySelector(".screen");

let currentInput = "";
let currentOperation = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  screen.textContent = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
  screen.textContent = `${previousInput} ${currentOperation}`;
}
function calculate() {
  if (previousInput === "" || currentInput === "") return;
  let result1;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  switch (currentOperation) {
    case "+":
      result1 = prev + current;
      break;
    case "-":
      result1 = prev - current;
      break;
    case "*":
      result1 = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result1 = prev / current;
      break;
    default:
      return;
  }

  currentInput = result1.toString();
  currentOperation = "";
  previousInput = "";
  screen.textContent = currentInput;
}
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperation = "";
  screen.textContent = "";
}
