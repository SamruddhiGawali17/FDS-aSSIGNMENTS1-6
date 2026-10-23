function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}

function calculate() {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(n1) || isNaN(n2)) {
    resultDiv.textContent = "Result: Please enter valid numbers";
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = add(n1, n2);
      break;
    case '-':
      result = subtract(n1, n2);
      break;
    case '*':
      result = multiply(n1, n2);
      break;
    case '/':
      result = divide(n1, n2);
      break;
    default:
      result = "Invalid Operator";
  }

  resultDiv.textContent = `Result: ${result}`;
}