/*var x= 5;

switch(x){
	case 5: alert(5);
	break;
	case 3: alert(3);
	break;
	default: alert('There are not any match')
}
*/

var x = prompt('Fill in the first number',100);
var y = prompt('Fill in the second number',100);
var z = prompt('Enter 1 for simbol +, Enter 2 for simbol -, Enter 3 for simbol *, Enter 1 for simbol /');

var x = parseInt(x);
var y = parseInt(y);

var result;

switch(z){
	case '1': result = x + y;
	break;
	case '2': result = x - y;
	break;
	case '3': result = x * y;
	break;
	case '4': result = x / y;
	break;
	default: result = 'You have entered a not valid operator';
}

alert(result)