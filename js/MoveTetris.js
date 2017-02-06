"use strict";


var Tetris = (function(MoveTetris) {
	
	//=================================//
	//===========FUNCTIONS=============//
	//=================================//

	MoveTetris.move = (direction) => {
		let batman = Tetris.whoseMove().me;
		for (var i = 0; i < batman.length; i++) {
			switch (direction) {
				case "right": 
					batman[i].x += 20;
					break;
				case "left": 
					batman[i].x -= 20;
					break;
				case "down": 
					batman[i].x += 20;
					break;
			}
		}
	};

	MoveTetris.rotateRight = () => {
		var potato = Tetris.whoseMove().me;
		for (var i = 0; i < potato.length; i++) {
		    potato[i].x = Number(lastLetter[i].y + lastLetter[1].x - lastLetter[1].y);
		    potato[i].y = Number(lastLetter[1].x + lastLetter[1].y - lastLetter[i].x);
		}
	};

	MoveTetris.rotateLeft = () => {
		var potato = Tetris.whoseMove().me;
		for (var i = 0; i < potato.length; i++) {
		    potato[i].x = Number(lastLetter[1].x + lastLetter[1].y - lastLetter[i].y);
			potato[i].y = Number(lastLetter[i].x + lastLetter[1].y - lastLetter[1].x);
		}
	};
	
	// MoveTetris.moveRight = () => {
	// 	var superman = whoseMove.me
	// 	for (var i = 0; i < superman.length; i++) {
	//     	superman[i].x += 20;
	//     }
	// };

	// MoveTetris.moveLeft = () => {
	// 	var spiderman = whoseMove.me
	// 	for (var i = 0; i < spiderman.length; i++) {
	//     	spiderman[i].x -= 20;
	//     }
	// };

	// MoveTetris.moveDown = () => {
	// 	var dontjudgeme = whoseMove.me
	//     for (var i = 0; i < dontjudgeme.length; i++) {
	//     	dontjudgeme[i].y += 20;
	//     }
	// };


	return MoveTetris;

})(Tetris || {});

