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

function updateNumber() {
    if (secondNumber == null){
        firstNumber = Number(display.innerText);
    } else {
        secondNumber = Number(display.innerText);
    }
}

function updateDisplay(number) {
    if (firstNumber == null) {
        changeDisplay(number);
        updateNumber();
   } else {
        if (operator == null) {
            concDisplay(number);
            updateNumber();
        } else {
            if (secondNumber == null) {
                changeDisplay(number);
                secondNumber = Number(number);
            } else {
                concDisplay(number);
                updateNumber();
            }
        }
   }
}

numButtons.forEach((button) => {
    button.addEventListener('click', function () {
        updateDisplay(button.innerText);
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
            break;
        }
        default: {
            console.log("no function");
            return;
        }
    }
    firstNumber = ans;
    secondNumber = null;
    operator = null;
}

let backButton = buttonContainer.querySelector(".back");
backButton.addEventListener('click', function() {
    let currString = display.innerText;
    currString = currString.substring(0,currString.length - 1);
    display.innerText = currString;
    updateNumber();
})

document.addEventListener('keypress', function(e) {
    console.log(e.code);
});