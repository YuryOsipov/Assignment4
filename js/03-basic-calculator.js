// IMPORT THE MODULE
import * as calc from "./modules/calculator.js";
console.log(calc.add(100,50));
// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER

let firstNumber = parseFloat(prompt("Please, enter the first number"))
let secondNumber = parseFloat(prompt("Please, enter the second number"))
let answer = prompt("What operation you would like to perform?", "+, -, *, /")
let result;
// CHECK TO SEE WHAT OPERATION THEY'RE USING

    
switch(answer) {
    case '+':
         result = firstNumber + secondNumber;
        alert(`${firstNumber} + ${secondNumber} = ${result}`);
        break;

    case '-':
         result = firstNumber - secondNumber;
        alert(`${firstNumber} - ${secondNumber} = ${result}`);
        break;

    case '*':
         result = firstNumber * secondNumber;
        alert(`${firstNumber} * ${secondNumber} = ${result}`);
        break;

    case '/':
         result = firstNumber / secondNumber;
        alert(`${firstNumber} / ${secondNumber} = ${result}`);
        break;

    default:
        alert('Invalid operator');
        break;
}      
// CALL THE APPROPRIATE FUNCTION



 
  

