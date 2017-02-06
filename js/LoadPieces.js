"use strict";


var Tetris = (function(LoadJson) {
	
	//=================================//
	//===========JSON UPLOAD===========//
	//=================================//

	//Variable to store all Parsed Json Data Files
	let myData;
	
	
	LoadJson.loadPieces = function(fileName) {

		let updateMySongData = songList => {
			console.log("done loading ");
			myData = songList;
			console.log(myData);
		};

		$.ajax({url:fileName})
			.done(updateMySongData);

	};

	//Function to retrieve stored Json data
	LoadJson.grabJson = () => myData;

	return LoadJson;

})(Tetris || {});

//On load, specified Json files are sent to be parsed and stored with 
//custom variable names
window.onload = Tetris.loadPieces("../pieces.json");















