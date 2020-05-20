var login = prompt("Please enter your login");

if (login == "Admin") {
	var password = prompt("Please enter your password");
	if (password == "mypassword") {
		alert("Hallo, you are in");
	} else if (password == undefined) {
		alert("Canceled");
	} else {
		alert("Wrong password");
	}
} else if (login == undefined) {
	alert("Canceled");
} else {
	alert("I don't know you");
}