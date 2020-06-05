
function init(){
	let planet = document.getElementById("greenplanet");
	console.log(planet);
	console.log(planet.innerHTML);
	console.log(planet.outerHTML);
	planet.innerHTML = "Red Alert: hit by phaser fire";
	console.log(planet.innerHTML);
	planet.setAttribute("class","redtext");
	console.log("the answer is : " + planet.getAttribute("class"));

}

window.onload = init;

/*
var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef":123};
var test8 = ["abcdef",123];
function test9(){return "abcdef"};
var test10 = null;
var test11 = NaN;


console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);
console.log(typeof test11);


console.log(isNaN(test11));
*/

/*
function Duck(sound){
	this.sound = sound;
	this.quack = function(){console.log(this.sound);}
}

var toy = new Duck("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);
*/

/*function createDrinkOrder(passanger){
	var orderFunction;
	if (passanger.ticket === "firstclass") {
		orderFunction = function(){
		alert("Would you like a cocktail or wine?");
		}
	} else if (passanger.ticket === "betterEconomclass"){
		orderFunction = function(){
		alert("Your choise is cola or water or wine.");
	} else {
		orderFunction = function(){
		alert("Your choise is cola or water.");
	}
	return orderFunction;
}

function createLunchOrder(passanger){
	var orderFunction;
	if (passanger.ticket === "firstclass") {
		orderFunction = function(){
		alert("Would you like a chicken or pasta?");
		}
	} else if (passanger.ticket === "betterEconomclass"){
		orderFunction = function(){
		alert("Your choise is zakuska or cheese.");
	} else {
		orderFunction = function(){
		alert("Your choise is oreshki or suxariki.");
	}
	return orderFunction;
}

function serveCustomer(passanger){
	var getDrinkOrderFunction = createDrinkOrder(passanger);
	var getLunchOrderFunction = createLunchOrder(passanger);
	getDrinkOrderFunction();
	//Предложить обед
	getDrinkOrderFunction();
	getDrinkOrderFunction();
	//Включить кино
	getDrinkOrderFunction();
	//забрать мусор
}
*/

function Coffee(roast, ounces){
	this.klir = "klir";
	this.roast = roast;
	this.ounces = ounces;
	this.getSize = function(){
		if (this.ounces=== 8) {return "small";}
		else if (this.ounces=== 12) {return "medium";}
		else if (this.ounces=== 16) {return "large";}
	} 
	this.toString = function(){
		alert("You have ordered a " + this.getSize() + " House Blend coffee")
	}
}

var houseBlend = new Coffee("House Blend", 12);
houseBlend.toString();
var darkRoast = new Coffee("Dark Roast", 16);
darkRoast.toString();

