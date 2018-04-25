function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function multiply (array) {
	return array.reduce((current, total) => total * current, 1);
}

function divide (array) {
  return array.reduce((current, total) => total / current, 1);
}

function sum (array) {
	return array.reduce((current, total) => total + current, 0);
}

function operate (operator, a, b) {
  switch (operator) {
    case "+":
      return add (a, b);
      break;
    case "-":
      return subtract (a, b);
      break;
    case "*":
      return multiply (a, b);
      break;
    case "/":
      return divide (a, b);
      break;
    default:
      return;
  }
}
