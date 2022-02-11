//to do next:
//displayValue replace console log with something that sends this.value to display and keeps it there.
//function to take displays contents and send to operate function
//let display = document.getElementsByClassName('display');
let buttons = document.querySelectorAll('.input');
    buttons.forEach(buttons => {
    buttons.addEventListener('click', displayValue);
    });

let clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', clearDisplay);


function displayValue() {
    document.getElementsByClassName('input').textContent = this.value;
    let display = document.querySelector('#display');
    display.textContent += this.value
    return this.value
};

function clearDisplay(display) {
    let remove = document.querySelector('#display');
    remove.textContent = null
    }

function add (num1,num2) {
    let sum = num1 + num2;
    return sum;
};

function subtract(num1,num2) {
    let difference = num1 - num2;
    return difference;
};

function multiply(num1,num2) {
    let product = num1 * num2;
    return product;
} ;

function divide(num1,num2) {
    if (num1 === 0 || num2 === 0) {
        alert('Error, dividing by 0 is hard');
    } {
    let quotient = num1/num2;
    return quotient;
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

