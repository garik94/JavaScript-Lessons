/*for(let a=1;a<=100; a++){
	if (a%3==0 && a%5==0) {
		console.log('FizzBuzz')
	}else if(a%3==0){
		console.log('Fizz');
	} else if(a%5 == 0) {
		console.log('Buzz');
	} else{
		console.log(a);
	}
	
}

let a, b, c=1, size =8;
while(c<=size){
	if (c%2!==0) {
		b='';
		a=1;
		while(a<=size){
			if(a%2!=0){
				b = b + ' ';
			} else {
				b = b + '#';
			}
			a++;
		}
		console.log(b);
	} else{
		b='';
		a=1;
		while(a<=size){
			if(a%2!=0){
				b = b + '#';
			} else {
				b = b + ' ';
			}
			a++;
		}
		console.log(b);
	  }
	  c++;
} - examples of Head-2*/

/*
function min(x,y){
	if(x<=y){
		return x;
	}else{
		return y;
	}
}

function isEven(a){
	if (a===0) return true;
	else if (a === 1) return false;
	else if (a === -1) return false;
	else {
		if (a<0) return isEven(a+2);
		return isEven(a-2);
	}
}

function countBs(text){
	let count = 0;
	for(let c=0;c<text.length; c++){
		if (text[c] == "B") {
			count+=1
		}
	}
	return count;
}

function countChar(text,char){
	let count = 0;
	for(let c=0;c<text.length; c++){
		if (text[c] == char) {
			count+=1
		}
	}
	return count;
}


// rewriting countBs

function countBs(text){
	return countChar(text,"B")
}
// Examples from head-3*(functions)/

/*function makePhases(){
	var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B","win-win"];
	var words2 = ["empowered", "value-added", "oriented", "focused","aligned"];
	var words3 = ["process", "solution", "tipping-point", "strategi","vision"];

	var rand1 = Math.floor(Math.random() * words1.length);
	var rand2 = Math.floor(Math.random() * words2.length);
	var rand3 = Math.floor(Math.random() * words3.length);

	var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
	alert(phrase);
}	

makePhases();

var scores =[60,50,60,58,54,54,
			 58,50,52,54,48,69,
			 34,55,51,52,44,51,
			 69,64,66,55,52,61,
			 46,31,57,52,44,18,
			 41,33,55,61,51,44]


function otchet(massiv){
	var highScore = 0;
	var bestSolutions = [];
	for(let i = 0; i < massiv.length; i++){
		
		if (massiv[i]>=highScore) {
			highScore = massiv[i];
		}
		console.log(`Bubble solution #${i} score: ${massiv[i]}`);
	}


	console.log(`Bubbles tests: ` + massiv.length);
	console.log(`Highest Bubbles score: ` + highScore);

	for (let i = 0; i < massiv.length; i++) {
		if (massiv[i]==highScore) {
			bestSolutions.push(i);
		}
	}

	var outputBestSolutions = "Solutions with the highest score:"

	for (let i = 0; i < bestSolutions.length; i++) {
		outputBestSolutions+= `#${bestSolutions[i]}; `
	}

	console.log(outputBestSolutions);
}	

otchet(scores)*/



//Head-4 - Arrays and Objects 

// exercise - 1;
/*
function range(start,end,step = 1){
	let arrayRange = [];
	if (start <=end) {
		for (let i = start; i <= end; i+=step) {
			arrayRange.push(i);
		} 
	} else{
		for (let i = start ; i >= end; i+=step) {
			arrayRange.push(i);
		}
	} 
	return arrayRange;
}

function sum(numbers){
	let sumNumbers = 0;
	for (let i of numbers) {
		sumNumbers+=i;
	}
	return sumNumbers;
}

console.log(sum(range(1,10,2)));
console.log(range(1,10,2));
console.log(range(5,2,-1))
*/

// exercise - 2;

/*
function reverseArray(massiv){
	reverseMassiv = [];
	for (let i = massiv.length - 1; i >= 0; i--) {
		reverseMassiv.push(massiv[i])
	}
	return reverseMassiv;
}

function reverseArrayInPlace(massiv){
	let massivCopy = massiv.slice(0);
	massiv.length = 0;
	for (let i = massivCopy.length - 1; i >= 0; i--) {
		massiv.push(massivCopy[i]);
	}
	return massiv;
}

let arrayValue = [6,7,8,9,10];
console.log(reverseArray([1,2,3,4,5]));
reverseArrayInPlace(arrayValue);
console.log(arrayValue)
*/

// exercise - 3;
/*
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}


function listToArray(list){
	let array = [];
	for(let node = list;node != True; node = node.rest){
		array.push(node.value);
	}
	return array;

}

function pretend(value,list){
	return{value:value,rest:list}
}

function nth(list, number){
		if (!list.value) return undefined;
		
		else if (n==0 ) return list.value;
		else return nth(list.rest, n-1)
}
*/














