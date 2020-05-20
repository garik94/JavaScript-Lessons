function init(){
	var view = {
		//Metod gets a string message and shows it in 
		//message arrea.
		displayMessage: function(msg){
			var message = document.getElementById("messageArea");
			message.innerHTML = msg;
		},

		displayHit: function(location){
			var cell = document.getElementById(location);
			cell.setAttribute("class", "hit");
		},

		displayMiss: function(location){
			var cell = document.getElementById(location);
			cell.setAttribute("class", "miss");
		}
	};


	var model = {
		boardsize: 7,
		numShips: 3,
		shipLength: 3,
		generateShip: function(){
			var direction = Math.floor(Math.random()*2);
			var col,row;
			if (direction === 1) {
				row = Math.floor(Math.random()* this.boardsize);
				col = Math.floor(Math.random()* this.boardsize-3);
			}else{
				row = Math.floor(Math.random()* this.boardsize-3);
				col = Math.floor(Math.random()* this.boardsize);
			}

			var newShipLocations= [];
			for (var i = 0; i < this.shipLength; i++) {
				if(direction === 1) {
					newShipLocations.push(row + "" + (col+i));
				} else {
					newShipLocations.push((row+i) + "" + col);
				}
			}
			return newShipLocations;
		},
		collision: function(locations) {
			for(var i=0; i<this.numShips; i++){
				var ship = model.ships[i];
				for(var j=0; i<locations.length; i++){
					if (ship.locations.indexOf(locations[j])>=0){
						return true;
					}
				}
			}

			return false;
		},
		generateShipLocations: function(){
			var locations;
			for (var i = 0; i < this.numShips ; i++) {
				do{
					locations = this.generateShip();
				} while(this.collision(locations));
				this.ships[i].locations = locations;
			}
		},
		ships:[{locations: [0,0,0],hits: ["","",""]},
			   {locations: [0,0,0],hits: ["","",""]},
			   {locations: [0,0,0],hits: ["","",""]}],
	    fire: function(guess){
	    	for (var i = 0; i < this.numShips; i++) {
	    		var ship = this.ships[i];
	    		var index = ship.locations.indexOf(guess);
	    		if  (index>=0) {
	    			ship.hits[index] = "hit";
	    			view.displayMessage("Hit !!");
	    			view.displayHit(guess);
	    			if (this.isSunk(ship)) {
	    				this.shipsSunk++;
	    				view.displayMessage("You sank my battleship");
	    			}
	    			return true;
	    		}
	    	}
	    	view.displayMiss(guess);
	    	view.displayMessage("You missed !");
	    	return false;
	    },

	    isSunk: function(ship) {
	    	for (var i = 0; i < this.shipLength; i++) {
	    		if (ship.hits[i]!=="hit") {
	    			return false;
	    		}
	    	}
	    	return true;
	    },
	 	shipsSunk: 0
	};

	function parseGuess(guess){
		var alphabet = ["A","B","C","D","E","F","G",]
		if (guess === null || guess.length !== 2) {
			alert("Oops, please enter a letter and a number on the board");
		}else {
			let firstChar = guess.charAt(0);
			var row = alphabet.indexOf(firstChar);
			var column = guess.charAt(1);
			if (isNaN(row) || isNaN(column)){
				alert("Oops, that isn`t on the board");
			}else if(row <0 || row>= model.boardsize || column<0 || column>= model.boardsize){
				alert("Oops,that`s off the board");
			}else {
				return row + column;
			}
		}
		return null;

	}



	var controller = {
		guesses: 0,
		processGuess: function(guess){
			var location = parseGuess(guess);
			if (location) {
				this.guesses++;
				var hit = model.fire(location);
				if (hit && model.shipsSunk === model.numShips) {
					view.displayMessage("You san all my battleships, in "
										+ this.guesses + "guesses");
				}
			}
		}
		
	}

	function handleFireButton(){
		var guessInput = document.getElementById("guessInput");
		var guess = guessInput.value.toUpperCase();
		controller.processGuess(guess);
		guessInput.value = "";
	}

	function handleKeyPress(e){
		var fireButton = document.getElementById("fireButton");
		if (e.keyCode === 13) {
			fireButton.click();
			return false;
		}
	}

	function initClick(){
		var fireButton = document.getElementById("fireButton");
		fireButton.onclick = handleFireButton;
		var guessInput = document.getElementById("guessInput");
		guessInput.onkeypress = handleKeyPress;
		model.generateShipLocations();
	}


	initClick();

}

window.onload = init;