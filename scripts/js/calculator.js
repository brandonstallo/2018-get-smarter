'use strict';

class Calculator {

  constructor() {
    console.log('calculator js');

  }

  add() {
    console.log('add');
  }

  subtract() {
    console.log('subtract');
  }
}

const calculator = new Calculator();


const buttons = document.querySelectorAll('[data-calculator-button]')

const numberButtons = document.querySelectorAll('[data-button-type=number]');
const operatorButtons = document.querySelectorAll('[data-button-type=calculation]');
const equalButton = document.querySelector('[data-equal-button]');
const clearButton = document.querySelector('[data-clear-button]');
const outputWindow = document.getElementById('output-window');
let buttonValue;
let buttonType;
let method;
let values = [];
let total;
let operation;
let totalHasBeenDisplayed = false;

var displayResults = function () {
  updateTotal();
  outputWindow.value = total;
  total = '';
};

var updateTotal = function () {
  let value = parseInt(outputWindow.value) || 0;

  if (!total) {
    return total = value
  }

  switch (operation) {
    case '+':
      total += value;
      break;

    case '-':
      total -= value
      break;

    case '*':
      total *= value
      break;
    
    case '/':
      total /= value
      break;
    }
}

clearButton.addEventListener('click', () => {
  outputWindow.value = '';
})

equalButton.addEventListener('click', () => {
  displayResults();
  totalHasBeenDisplayed = true;

});

operatorButtons.forEach(element => {

  element.addEventListener('click', () => {
    operation = element.getAttribute('data-calculator-button');

    updateTotal()

    outputWindow.value = '';
  });

});

numberButtons.forEach(element => {
  element.addEventListener('click', () => {

    if (totalHasBeenDisplayed) {
      outputWindow.value = '';
      totalHasBeenDisplayed == false;
    }

    buttonValue = element.getAttribute('data-calculator-button');
    outputWindow.value += buttonValue;
  });
});
