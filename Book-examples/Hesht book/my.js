/*
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

function Duck(sound){
	this.sound = sound;
	this.quack = function(){console.log(this.sound);}
}

var toy = new Duck("quack quack");

toy.quack();

console.log(typeof toy);
console.log(toy instanceof Duck);