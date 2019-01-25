
'use strict';

class Calculator {

  constructor(){
    console.log('calculator js');
    
    }

    add() {
      console.log('add');
    }

    subtract(){
      console.log('subtract');
    }
  }

const calculator = new Calculator();


  const buttons = document.querySelectorAll('[data-calculator-button]')
  const outputWindow = document.getElementById('output-window')  ;
  let buttonValue;
  let buttonType;
  let method;
  let values = [];
  let isCalculating = false;

  buttons.forEach(element => {
    
    element.addEventListener('click', () => {

      buttonValue = element.getAttribute('data-calculator-button');
      buttonType = element.getAttribute('data-button-type');

      if (buttonType === 'calculation'){
          let method = buttonValue;
          let total = 0;
          isCalculating = true
        
        values.push(parseInt(outputWindow.value));
console.log(values);
        if (method === '+'){
          calculator.add();
            values.forEach(function(element, index){
              total += values[index];
            });
          }
        
          if(method === '-'){
            calculator.subtract();
            values.forEach(function(element, index){
              total -= values[index];
            });
          }
        
        outputWindow.value = total;
      
      } else{

        if(isCalculating) {outputWindow.value = ''}
        outputWindow.value += parseInt(buttonValue);
        isCalculating = false

      }


    });
  });
  
  

