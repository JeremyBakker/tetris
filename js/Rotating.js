"use strict";


var Tetris = (function(Rotating) {
	
	//=================================//
	//===========FUNCTIONS=============//
	//=================================//


	Rotating.checkIfClearRotate = (direction) => {

		var copy = [empty1 = {}, empty2 = {}, empty3 = {}, empty4 = {}];

		if (direction === "right") {
			for (var i = 0; i < 4; i++) {
		        copy[i].x = Number(lastLetter[i].y + lastLetter[1].x - lastLetter[1].y);
		        copy[i].y = Number(lastLetter[1].x + lastLetter[1].y - lastLetter[i].x);
	    	};
		} else if (direction === "left") {
			for (var i = 0; i < 4; i++) {
		        copy[i].x = Number(lastLetter[1].x + lastLetter[1].y - lastLetter[i].y);
		        copy[i].y = Number(lastLetter[i].x + lastLetter[1].y - lastLetter[1].x);
		    }
		};
		for (var i = 0; i < 4; i++) {
			var xCoord = copy[i].x;
			var yCoord = copy[i].y;
		    xCoord = (xCoord/20) + 1;
		    yCoord = (yCoord/20);
		    
		    if (gameboard[yCoord][xCoord] === 1) {
		    	collisionRotateRight = true;
		    	return;
		    } else {
		    	collisionRotateRight = false;
		    }
		}
	};

	Rotating.rotateGBRight = () => {
		for (var i = 3; i >= 0; i--) {
			var xCoord = whoseMove.me[i].x
			var yCoord = whoseMove.me[i].y
		    xCoord = (xCoord/20) + 1;
		    yCoord = (yCoord/20);
		    
		    gameboard[yCoord][xCoord] = 2;
		}
	};

	Rotating.rotateGBLeft = () => {
		for (var i = 3; i >= 0; i--) {
			var xCoord = whoseMove.me[i].x
			var yCoord = whoseMove.me[i].y
		    xCoord = (xCoord/20) + 1;
		    yCoord = (yCoord/20);
		    
		    gameboard[yCoord][xCoord] = 2;
		}
	};


	return Rotating;

})(Tetris || {});