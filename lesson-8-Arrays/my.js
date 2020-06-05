var makes = ["Chevy","GM","Fiat","Webville Motors","Tucker"];
var models = ["Cadillac","500","Bel-Air","Taxi","Torpedo"];
var years = [1955,1957,1948,1954,1961];
var colours = ["red","blue","tan","yellow","white"];
var convertible = [true, false];



/*
For creating generator of random mobils must we do the following steps;
1.We must create function that dont have parameters;
2.We pick one random element from each veriable above;
3. for step 2 we create veriables that are equal to a random number in diapason from 0 to length of veriables above;
4.We add mentioned elements in new created empty object as properties;
5.we return that object wrom function
*/

function carGenerator(){
	let newCar = {};

	var randNum1 = Math.floor(Math.random()*makes.length);
	var randNum2 = Math.floor(Math.random()*models.length);
	var randNum3 = Math.floor(Math.random()*years.length);
	var randNum4 = Math.floor(Math.random()*colours.length);
	var randNum5 = Math.floor(Math.random()*convertible.length);
	newCar.make = makes[randNum1];
	newCar.model = models[randNum2];
	newCar.year = years[randNum3];
	newCar.colour = colours[randNum4];
	newCar.convertible = convertible[randNum5];
	return newCar;
}

car1 = carGenerator();
car2 = carGenerator();
car3 = carGenerator();
car4 = carGenerator();

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
