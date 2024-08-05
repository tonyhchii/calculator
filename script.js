let firstNumber, operator, secondNumber;
let display = document.querySelector(".display");

function add(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(...numbers) {
    return numbers.reduce((total, number) => total * number, 1);
}

function divide(num1, num2) {
    return num1 / num2;
}

function modulo(num1, num2,) {
    return num1 % num2;
}

function changeDisplay(num) {
    display.innerText = num;
}

function clearDisplay() {
    display.innerText = "0";
}

function concDisplay(num) {
    display.innerText += num;
}

let buttonContainer = document.querySelector('.buttons');
let numButtons = buttonContainer.querySelectorAll('.num');

numButtons.forEach((button) => {
    button.addEventListener('click', function () {
       if (firstNumber == null) {
            firstNumber = Number(button.innerText);
            changeDisplay(firstNumber);
       } else {
            if (operator == null) {
                concDisplay(button.innerText);
                firstNumber = Number(display.innerText);
            } else {
                if (secondNumber == null) {
                    secondNumber = Number(button.innerText);
                    changeDisplay(secondNumber);
                } else {
                    concDisplay(button.innerText);
                    secondNumber = Number(display.innerText);
                }
            }
       }
    });
});

let operButtons = buttonContainer.querySelectorAll('.oper');

operButtons.forEach((button) => {
    button.addEventListener('click', function() {
        if(secondNumber == null) {
        } else {
            calculate();
        }
        operator = button.innerText;
    });
});

let clearButton = buttonContainer.querySelector('.clear');
clearButton.addEventListener('click', function() {
    clearDisplay();
    firstNumber = null;
});

let equalButton = buttonContainer.querySelector('.equal');
equalButton.addEventListener('click', function() {
    if (operator){
        calculate();
        operator = null;
    }
});

function calculate() {
    let ans;
    switch(operator) {
        case "*": {
            ans = multiply(firstNumber, secondNumber);
            changeDisplay(ans);
            break;
        }
        case "/": {
            ans = divide(firstNumber, secondNumber);
            changeDisplay(ans);
            break;
        }
        case "+": {
            ans = add(firstNumber, secondNumber);
            changeDisplay(ans);
            console.log("modulo");
            break;
        }
        case "-": {
            ans = subtract(firstNumber, secondNumber);
            changeDisplay(ans);
            break;
        }
        case "%": {
            ans = modulo(firstNumber, secondNumber);
            changeDisplay(ans);
            console.log("modulo");
            break;
        }
        default: {
            console.log("no function");
            break;
        }
    }
    firstNumber = ans;
    secondNumber = null;
    operator = null;
}