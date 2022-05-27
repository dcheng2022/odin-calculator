/* 
store display value as variable for further steps 

store first number input when a user presses an operator, save operator chosen, and call operate() function 
when equals button is pressed 

allow for stringing of operators, basically store a running total number for further operations 

write a clear function that resets all input variables 
*/
function display(string) {
    /* executes upon events from keypad buttons 
    and also the operate() function
    which executes when "=" is pressed */
    const stringContainer = document.querySelector('.text-container');
    stringContainer.textContent = string;
} 

function operate(operator, num1, num2) {
    switch (operator) {
        case "+": 
            display(add(num1, num2));
            break;
        case "-":
            display(subtract(num1, num2));
            break;
        case "*":
            display(multiply(num1, num2));
            break;
        case "/":
            display(divide(num1, num2));
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