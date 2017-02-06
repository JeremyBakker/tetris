"use strict";


var Tetris = (function(NewPiece) {
	
	//=================================//
	//===========JSON UPLOAD===========//
	//=================================//

	NewPiece.resetLetter = () => {
		let shapeReset = (shape, shapeToIterate) => {
			for (var i = 0; i < 4; i++) {
				console.log(Number(Tetris.grabJson()[shapeToIterate][i].x));
				shape[i].x = Number(Tetris.grabJson()[shapeToIterate][i].x);
				shape[i].y = Number(Tetris.grabJson()[shapeToIterate][i].y);
			}
		};
		switch (whoseMove.string) {
			case "square": 
				shapeReset(square, "square");
				break;
			case "L": 
				shapeReset(L, "L");
				break;
			case "J": 
				shapeReset(J, "J");
				break;
			case "Z": 
				shapeReset(Z, "Z");
				break;
			case "S":
				shapeReset(S, "S");
				break;
			case "I":
				shapeReset(I, "I");
				break;
			case "T":
				shapeReset(T, "T");
				break;
		}
	};


	return NewPiece;

})(Tetris || {});
