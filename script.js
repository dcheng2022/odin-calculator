const stringContainer = document.querySelector('.text-container');
let stringArray = [];

function display(string, result=false) {
    // executes upon events from keypad buttons 
    if (!isNaN(string) && !isNaN(stringArray[stringArray.length - 1]) && !result) {
        multiDigitUpdate(string);
    } else {
        stringArray.push(string);
        stringContainer.textContent = string;
    }

    if (stringArray.length > 3) {
        if (isNaN(string)) {
            // this also executes non-sensical arrays which operate() handles
            const operator = stringArray.pop()
            operate(...stringArray); 
            stringArray.push(operator);
        }
        stringArray.splice(0, 1); 
    } 
}

function multiDigitUpdate(num) {
    stringArray.splice(stringArray.length - 1, 1, parseInt(`${stringArray[stringArray.length - 1]}${num}`));
    stringContainer.textContent = stringArray[stringArray.length - 1];
}

function operate(num1, operator, num2) {
    // "=" button event listener executes operate(...stringArray, true);
    switch (operator) {
        case "+": 
            display(add(num1, num2), true);
            break;
        case "-":
            display(subtract(num1, num2), true);
            break;
        case "*":
            display(multiply(num1, num2), true);
            break;
        case "/":
            display(divide(num1, num2), true);
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