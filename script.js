
function add (num1,num2) {
    let sum = num1 + num2;
    return sum;
}

function subtract(num1,num2) {
    let difference = num1 - num2;
    return difference;
}

function multiply(num1,num2) {
    let product = num1 * num2;
    return product;
} 

function divide(num1,num2) {
    if (num1 === 0 || num2 === 0) {
        alert('Error, dividing by 0 is hard')
    } {
    let quotient = num1/num2;
    return quotient
    }
}

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