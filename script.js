// global variables
const calculatorInput = document.querySelector('.calculator-input');
const calculatorButton = document.querySelector('.calculator-submit');
const calculatorMessage = document.querySelector('.calculator-message');

function calculateTax() {
    // function variables
    const salary = calculatorInput.value;
    const tallage = 35;
    const amount = (salary / 100) * tallage;

    // input.value checking 
    if(calculatorInput.value === '') {
        console.log('NaN');
    } else {
        calculatorMessage.innerText = `Ваш подоходный налог таков: ${amount}$`;
    }
}

// button eventListener for running function
calculatorButton.addEventListener('click', calculateTax);