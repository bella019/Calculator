alert("Welcome to Calculator");

alert('Choose an operation:');

var solution = window.prompt('Pick an option:\n1 for addition\n2 for subtraction\n3 for division\n4 for multiplication:');

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (solution == 1){
	var num1 = window.prompt('Enter first Number:');
var num2 = window.prompt('Enter second Number:');
	alert ('The sum is ' + num1 + num2);
} else if (solution == 2){
	var num1 = window.prompt('Enter first Number:');
var num2 = window.prompt('Enter second Number:');
	alert('The answer is ' + num1 - num2);
} else if (solution == 3){
	var num1 = window.prompt('Enter first Number:');
var num2 = window.prompt('Enter second Number:');
	alert('The dividend is '+ num1 / num2);
} else if (solution == 4){
	var num1 = window.prompt('Enter first Number:');
var num2 = window.prompt('Enter second Number:');
	alert('The product is ' + num1 * num2);
} else {
	alert('I do not understand you');
}
