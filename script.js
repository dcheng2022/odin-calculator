/* 
create function that populates display when number buttons are hit (DOM event listener)
store display value as variable for further steps 

store first number input when a user presses an operator, save operator chosen, and call operate() function 
when equals button is pressed 

allow for stringing of operators, basically store a running total number for further operations 

round numbers with long decimals to prevent display overflow 

write a clear function that resets all input variables 
*/
function operate(operator, num1, num2) {
    // function return should be passed to display function
    switch (operator) {
        case "+": 
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            break;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "No. Just no.";
    return (a / b).toFixed(2);
}