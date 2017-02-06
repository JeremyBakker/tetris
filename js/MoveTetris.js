"use strict";


var Tetris = (function(MoveTetris) {
	
	//=================================//
	//===========FUNCTIONS=============//
	//=================================//

	MoveTetris.rotateRight = () => {
		var potato = whoseMove.me;
		for (var i = 0; i < potato.length; i++) {
		    potato[i].x = Number(lastLetter[i].y + lastLetter[1].x - lastLetter[1].y);
		    potato[i].y = Number(lastLetter[1].x + lastLetter[1].y - lastLetter[i].x);
		}
	};

	MoveTetris.rotateLeft = () => {
		var potato = whoseMove.me;
		for (var i = 0; i < potato.length; i++) {
		    potato[i].x = Number(lastLetter[1].x + lastLetter[1].y - lastLetter[i].y);
			potato[i].y = Number(lastLetter[i].x + lastLetter[1].y - lastLetter[1].x);
		}
	};


	return MoveTetris;

})(Tetris || {});

