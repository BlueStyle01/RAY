var game_canvas;
var game_context;

var cloudx;

var startTime;
var currentTime;

var texto = "FPS: ";
var counter = 0;

var initTime;
var currentTime;
var current = 0;
var d = new Date();

initTime = d.getTime();

setInterval(updateGame, 10);

function initGame () {
	game_canvas = document.getElementById("gameCanvas");
	game_context = game_canvas.getContext("2d");

	cloudx = game_canvas.width;
}

function updateGame() {

	current = d.getTime() - initTime;

	game_context.clearRect(0, 0, game_canvas.width, game_canvas.height);

	game_context.fillStyle = "#5768A6";//AZUL CLARO-Statica
	game_context.fillRect(200, 250, 75, 30);

	game_context.fillStyle = "#5457C8";//AZUL - Contador
	game_context.fillRect(390, 0, 90, 30);

	game_context.fillStyle = "#E5E5E5";//BLANCO
	cloudx -= 3;
	game_context.fillRect(cloudx, 150, 75, 30);

	game_context.fillStyle = "#5B5B5B";
	game_context.fillRect(game_canvas.width - cloudx, 150, 75, 30);//GRIS

	game_context.fillStyle = "white";//TEXTO
	game_context.font = "16px Arial";
	counter += 1
	game_context.fillText(texto + counter, game_canvas.width - 75, 19);

	initTime = d.getTime();
}