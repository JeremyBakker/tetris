var canvas = document.getElementById('myCanvas'); // in your HTML this element appears as <canvas id="mycanvas"></canvas>
var ctx = canvas.getContext('2d');

var w = 19;
var h = 19;


var potato = [
	boxA2 = {
		x: 40,
		y: 30
	},
	boxB2 = {
		x: 40,
		y: 50
	},
	boxC1 = {
		x: 20,
		y: 70
	},
	boxC2 = {
		x: 40,
		y: 70
	}
]

var potatoBox = [];
var lastLetter = [];

function draw(potato, colorOfLetter, moveMe) {
	ctx.fillStyle = colorOfLetter;  
	// lastLetter = [];
	for (var i = 0; i < potato.length; i++) {
	    ctx.fillRect(potato[i].x, potato[i].y, w, h);
	    var potatoBox = {};
	    potatoBox.x = Number(potato[i].x);
	    potatoBox.y = Number(potato[i].y);
	    lastLetter.push(potatoBox);
	}
}

function moveDown(dontjudgeme) {
    for (var i = 0; i < dontjudgeme.length; i++) {
    	dontjudgeme[i].y += 20;
    }
}

function rotateRight(potato, colorOfLetter) {
	console.log("rotateRight");
	ctx.fillStyle = colorOfLetter;  
	for (var i = 0; i < potato.length; i++) {
	    ctx.fillRect((lastLetter[i].y + lastLetter[1].x - lastLetter[1].y), (lastLetter[1].x + lastLetter[1].y - lastLetter[i].x - 19), w, h);
	    var potatoBox = {};
	    potatoBox.x = Number(lastLetter[i].y + lastLetter[1].x - lastLetter[1].y);
	    potatoBox.y = Number(lastLetter[1].x + lastLetter[1].y - lastLetter[i].x - 19);
	    lastLetter.push(potatoBox);
	}
}

function rotateLeft(potato, colorOfLetter) {
	console.log("rotateLeft");
	ctx.fillStyle = colorOfLetter;  
	for (var i = 0; i < 4; i++) {
	    ctx.fillRect((lastLetter[1].x + lastLetter[1].y - lastLetter[i].y - 19), (lastLetter[i].x + lastLetter[1].y - lastLetter[1].x), w, h);
	    var potatoBox = {};
	    potatoBox.x = Number(lastLetter[1].x + lastLetter[1].y - lastLetter[i].x - 19);
	    potatoBox.y = Number(lastLetter[i].y + lastLetter[1].x - lastLetter[1].y);
	    lastLetter.push(potatoBox);
	}
}

document.addEventListener("keyup", function(event){
	console.log("key up");
	if(event.which === 82) {
		console.log("r press");
		rotateRight(potato, "red");
	}
	if(event.which === 87) {
		console.log("w press");
		rotateLeft();
	}
	if(event.which === 32)
		console.log("space press");
		// speed(); 
});

