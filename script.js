let currentValue
let equation = {
}


let buttons = document.querySelectorAll('.number');
    buttons.forEach(buttons => {
    buttons.addEventListener('click', displayValueInitial
);
    });

let operatorButton = document.querySelectorAll('.operator');
    operatorButton.forEach(operatorButton => {
    operatorButton.addEventListener('click', initialCalc)
    });

let clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', clearDisplay);

let equalsButton = document.querySelector('.equals');
    equalsButton.addEventListener('click', finalCalc)

function clearDisplay() {
    let remove = document.querySelector('#display');
    remove.textContent = null
}

function initialCalc() {
    let num1 = currentValue
    let operatorSymbol = document.getElementsByClassName('.operator').textContent = this.value
    equation.firstValue = parseInt(num1);
    equation.operator = operatorSymbol;
    clearDisplay()
}

function finalCalc() {
    let num2 = currentValue
    equation.finalValue = parseInt(num2)
    clearDisplay()
    operate(equation.operator, equation.firstValue, equation.finalValue)
}


function displayValueInitial() {
    document.getElementsByClassName('.number').textContent = this.value;
    let display = document.querySelector('#display');
    display.textContent += this.value
    currentValue = display.textContent
    return currentValue
};

function displayValueFinal(answer) {
    equation.firstValue = answer;
    let display = document.querySelector('#display');
    display.textContent = answer;
    currentValue = answer
}


//HELPER FUNCTIONS
function add (num1,num2) {
    let sum = num1 + num2;
    displayValueFinal(sum)
};

function subtract(num1,num2) {
    let difference = num1 - num2;
    displayValueFinal(difference)
};

function multiply(num1,num2) {
    let product = num1 * num2;
    displayValueFinal(product)
} ;

function divide(num1,num2) {
    if (num1 === 0 || num2 === 0) {
        alert('Error, dividing by 0 is hard');
    } {
    let quotient = num1/num2;
    displayValueFinal(quotient)
    }
};

function operate(operator,num1,num2) {
    switch(true) {
        case operator === '+': 
            add(num1,num2);
            break;
        case operator === '-':
            subtract(num1,num2);
            break;
        case operator === '*':
            multiply(num1,num2);
            break;
        case operator === '/':
            divide(num1,num2);
            break;
    }
}

