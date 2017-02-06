"use strict";


var Tetris = (function(LoadJson) {
	
	//=================================//
	//===========JSON UPLOAD===========//
	//=================================//

	//Variable to store all Parsed Json Data Files
	let myData;
	
	
	LoadJson.loadPieces = function(fileName) {

		let updatePiecesData = piecesList => {
			console.log("done loading ");
			myData = piecesList;
			console.log(myData);
		};

		$.ajax({url:fileName})
			.done(updatePiecesData);

	};

	//Function to retrieve stored Json data
	LoadJson.grabJson = () => myData;


	return LoadJson;

})(Tetris || {});

//On load, specified Json files are sent to be parsed and stored with 
//custom variable names
window.onload = Tetris.loadPieces("../pieces.json");















