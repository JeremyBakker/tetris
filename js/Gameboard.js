"use strict";


var Tetris = (function(Gameboard) {
	
	//=================================//
	//===========FUNCTIONS=============//
	//=================================//

	Gameboard.moveGB = (direction) => {
		for (var i = 3; i >= 0; i--) {
			var xCoord = Tetris.whoseMove().me[i].x
			var yCoord = Tetris.whoseMove().me[i].y
		    xCoord = (xCoord/20) + 1;
		    yCoord = (yCoord/20);
		    gameboard[yCoord][xCoord] = 0;

		    switch (direction) {
		    	case "down":
		    		gameboard[yCoord + 1][xCoord] = 2;
		    		break;
		    	case "left": 
		    		gameboard[yCoord][xCoord - 1] = 2;
		    		break;
		    	case "right":
		    		gameboard[yCoord][xCoord + 1] = 2;
		    		break;
		    }
		}
	};

	// Gameboard.moveGBDown = () => {
	// 	for (var i = 3; i >= 0; i--) {
	// 		var xCoord = whoseMove.me[i].x
	// 		var yCoord = whoseMove.me[i].y
	// 	    xCoord = (xCoord/20) + 1;
	// 	    yCoord = (yCoord/20);
		    
	// 	    gameboard[yCoord][xCoord] = 0;
	// 	   	gameboard[yCoord + 1][xCoord] = 2;
	// 	}
	// };

	// Gameboard.moveGBLeft = () => {
	// 	for (var i = 3; i >= 0; i--) {
	// 		var xCoord = whoseMove.me[i].x
	// 		var yCoord = whoseMove.me[i].y
	// 	    xCoord = (xCoord/20) + 1;
	// 	    yCoord = (yCoord/20);
		    
	// 	    gameboard[yCoord][xCoord] = 0;
	// 	   	gameboard[yCoord][xCoord - 1] = 2;
	// 	}
	// };

	// Gameboard.moveGBRight = () => {
	// 	for (var i = 3; i >= 0; i--) {
	// 		var xCoord = whoseMove.me[i].x
	// 		var yCoord = whoseMove.me[i].y
	// 	    xCoord = (xCoord/20) + 1;
	// 	    yCoord = (yCoord/20);
		    
	// 	    gameboard[yCoord][xCoord] = 0;
	// 	   	gameboard[yCoord][xCoord + 1] = 2;
	// 	}
	// };
	
	return Gameboard;

})(Tetris || {});

