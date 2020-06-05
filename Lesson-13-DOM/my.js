function init(){
	let stroka = "";
	for (let i = 1; i < 13 ; i++) {
		let access = document.getElementById(`code${i}`);
		let code = access.innerHTML;
		stroka = stroka + " " + code;
	}

	let access = document.getElementById(`code12`);
	access.innerHTML = stroka;


	console.log(access.innerHTML);

	myClass = document.getElementsByClassName("some");
	console.log(myClass);
	myClass[0].setAttribute("class", "some greentext");
	console.log(myClass.length);
	
	console.log(typeof(myClass));
	for(let i =0; i< myClass.length; i++){
		myClass[i].setAttribute("class", "some greentext")
		console.log(myClass);

	}

	console.log(myClass);
	



}


window.onload = init;
