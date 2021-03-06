"use strict";


var Tetris = (function(Collision) {
	
	//=================================//
	//===========FUNCTIONS=============//
	//=================================//


	Collision.clearToMove = () => {
		for (var i = 0; i < 4; i++) {
			ctx.clearRect(lastLetter[i].x, lastLetter[i].y, w, h);
		}
	};

	Collision.checkIfClear = () => {
		
		for (var i = 0; i < 4; i++) {
			var xCoord = whoseMove.me[i].x;
			var yCoord = whoseMove.me[i].y;

		    xCoord = (xCoord/20) + 1;
		    yCoord = (yCoord/20);

			let down = gameboard[yCoord + 1][xCoord];
			let right = gameboard[yCoord][xCoord + 1];
			let left = gameboard[yCoord][xCoord - 1];
		    
		    if (down === 1) {
		    	collisionDown = true;
		    } else {
		    	collisionDown = false;
		    };
		    if (right === 1) {
		    	collisionRight = true;
		    } else {
		    	collisionRight = false
		    };
		    if (left === 1) {
		    	collisionLeft = true;
		    } else {
		    	collisionLeft = false;
		    }
		}
	};

	Collision.clearBeforeRotateGBRight = () => {
		for (var i = 3; i >= 0; i--) {
			var xCoord = lastLetter[i].x
			var yCoord = lastLetter[i].y
		    xCoord = (xCoord/20) + 1;
		    yCoord = (yCoord/20);
		    
		    gameboard[yCoord][xCoord] = 0;
		}
	};

	Collision.clearBeforeRotateGBLeft = () => {
		for (var i = 3; i >= 0; i--) {
			var xCoord = lastLetter[i].x
			var yCoord = lastLetter[i].y
		    xCoord = (xCoord/20) + 1;
		    yCoord = (yCoord/20);
		    
		    gameboard[yCoord][xCoord] = 0;
		}
	};

	Collision.checkIfRowIsFull = () => {
		for (var i = 2; i < 22; i++) {
			var fullRow = [];
			for (var n = 0; n < 12; n++) {
				if (gameboard[i][n] === 1) {
					fullRow.push(n);
				}
				if (fullRow.length === 11) {
					console.log("row " + i + " is full");
				}
			}
		}
	};
	
	return Collision;

})(Tetris || {});

