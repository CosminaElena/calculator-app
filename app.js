const calculator = {
	displayValue: '0',
	firstNumber: '0',
    secondNumber: '0',
    isFirstNumber: true,
    operation: '',
	firstOperand: null,
	waitingForSecondOperand: false
};
  

let digit9 = document.querySelector("#digit9");
let digit8 = document.querySelector("#digit8");
let digit7 = document.querySelector("#digit7");

let digit6 = document.querySelector("#digit6");
let digit5 = document.querySelector("#digit5");
let digit4 = document.querySelector("#digit4");

let digit3 = document.querySelector("#digit3");
let digit2 = document.querySelector("#digit2");
let digit1 = document.querySelector("#digit1");

let digit0 = document.querySelector("#digit0");


let multiply = document.querySelector("#multiply");
let substract = document.querySelector("#substract");
let add = document.querySelector("#add");
let div = document.querySelector("#div");
let equals = document.querySelector("#equals");
let result = document.querySelector(".result");
let dot = document.querySelector("#dot");
let clear = document.querySelector("#digitall-clear");
let del = document.querySelector("#del");


let firstNumber = 0;
let secondNumber = 0;
let isFirstNumber = true;
let operation = '';

function updateDisplay() {
	const display = document.querySelector('.result');
	display.value = calculator.displayValue;
}
  
updateDisplay();


function buildNumber(digit) {
	if (isFirstNumber) {
		firstNumber = firstNumber * 10 + digit;
		result.innerHTML = firstNumber;
	} else {
		secondNumber = secondNumber * 10 + digit;
		result.innerHTML = secondNumber;
	}
}


digit7.addEventListener('click', function() {
	buildNumber(7);
});


digit8.addEventListener('click', function() {
	buildNumber(8);
});


digit9.addEventListener('click', function() {
	buildNumber(9);
});


digit4.addEventListener('click', function() {
	buildNumber(4);
});


digit5.addEventListener('click', function() {
	buildNumber(5);
});


digit6.addEventListener('click', function() {
	buildNumber(6);
});


digit1.addEventListener('click', function() {
	buildNumber(1);
});


digit2.addEventListener('click', function() {
	buildNumber(2);
});


digit3.addEventListener('click', function() {
	buildNumber(3);
});


digit0.addEventListener('click', function() {
	buildNumber(0);
});


multiply.addEventListener("click", function() {
	isFirstNumber = false;
	operation = '*';
	result.innerHTML = operation;
});


substract.addEventListener("click", function() {
	isFirstNumber = false;
	operation = '-';
	result.innerHTML = operation;
});


add.addEventListener("click", function() {
	isFirstNumber = false;
	operation = '+';
	result.innerHTML = operation;
});


div.addEventListener("click", function() {
	isFirstNumber = false;
	operation = '/';
	result.innerHTML = operation;
});


clear.addEventListener("click", function() {
	firstNumber='0'
	result.innerHTML = firstNumber;
});


del.addEventListener('click', function () {
	if (isFirstNumber) {
		firstNumber = firstNumber.toString().slice(0, -1)
		result.innerHTML = firstNumber;
	} else {
		secondNumber = secondNumber.toString().slice(0, -1)
		result.innerHTML = secondNumber;
	}

});


equals.addEventListener("click", function() {
	switch (operation) {
		case "*":
			result.innerHTML = firstNumber * secondNumber;
		break;

		case "-":
			result.innerHTML = firstNumber - secondNumber;
		break;

		case "+":
			result.innerHTML = firstNumber + secondNumber;
		break;

		case "/":
			result.innerHTML = firstNumber / secondNumber;
		break;
	
		default:
			alert("Nu putem evalua aceasta operatie!")
		break;
	}

	firstNumber = 0;
	secondNumber = 0;
	operation = "";
	isFirstNumber = true;

});


updateDisplay();