function add (a, b) {
	return a + b;
}

function subtract (array) {
	return array.reduce((total, current) => total - current);
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

function operate (array, operator) {
  switch (operator) {
    case "+":
      return sum (array);
      break;
    case "-":
      return subtract (array);
      break;
    case "×":
      return multiply (array);
      break;
    case "÷":
      return divide (array);
      break;
    default:
      return;
  }
}

let displayValue;
let mathButtons = ["+", "-", "÷", "×"];
let tempOperation = [];
let tempNumbers = [];
let tempOperands = [];
let pressedButtons = [];
let calculateArray = [];
let nonNumbers = [];



function getValue(e) {
	const buttonValue = e.target.value;
	if (tempOperation.length == 17) return;
	if (isNaN(buttonValue)) {
		let arrayLength = pressedButtons.length;
		let lastInput = pressedButtons[arrayLength - 1];
		if (isNaN(lastInput))
		return;
		pressedButtons.push(buttonValue);
		getNumbers(pressedButtons);

		tempOperation.push(buttonValue);
		tempOperands.push(buttonValue);
		pressedButtons = [];
	} else {
		pressedButtons.push(+buttonValue);
		tempOperation.push(+buttonValue);
	}
}

function getNumbers(array) {
	let arrayLength = array.length;
	let lastInputIndex = arrayLength - 1;
	let lastInput = array[lastInputIndex];
	let numbString = deleteNonNumbers(array).join("");
	tempNumbers.push(+numbString);
	return tempNumbers;
}

function checkNumber(array) {
	let i = 0;
	nonNumbers = [];
	while (i < array.length) {
		let checkedElement = array[i];
		if (isNaN(checkedElement)) {
				nonNumbers.push(array.indexOf(checkedElement));
		}
		i++;
	}
	return nonNumbers;
}

function deleteNonNumbers(array) {
	checkNumber(array);
		let sliceEndPos = nonNumbers[nonNumbers.length - 1];
		let sliceStartPos = (nonNumbers[nonNumbers.length - 2]) + 1;
		let latestNumbers = array.slice(sliceStartPos, sliceEndPos);
		return latestNumbers;
}

function calculate() {
	calculateArray.push(tempOperands[0]);

	let total = calculateArray.join("");
	let finalResult = operate(tempNumbers, total);
	mainDisplay.value = finalResult;

	calculateArray = [];
	tempNumbers = [];
	pressedButtons = [];
	pressedButtons.push(+finalResult);
	tempOperation = [];
	tempOperands = [];
	currentArray = [];
	nonNumbers = [];
}

function showTempOperation() {
	 let currentArray = [];
	 for (i = 0; i < tempOperation.length; i++) {
		 if (isNaN(tempOperation[i])) {
			 currentArray.push(" " + tempOperation[i] + " ");
		 } else {
			 currentArray.push(tempOperation[i]);
		 }
	 }
	let currentOperation = currentArray.join("");
	smallDisplay.value = currentOperation;
}

function clearDisplay() {
	tempOperation = [];
	tempOperands = [];
	tempNumbers = []
	pressedButtons = [];
	currentArray = [];
	nonNumbers = [];
	finalResult = [];
	mainDisplay.value = "0";
}

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('click', getValue));

const smallDisplay = document.querySelector('#display');
window.addEventListener('click', showTempOperation);

const mainDisplay = document.querySelector('#mainDisplay');
const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', clearDisplay);

const equalButton = document.querySelector('#equalButton');
equalButton.addEventListener('click', calculate);
