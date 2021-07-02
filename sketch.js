var player;
var gameState1 = "start";
var playButton, playerCount = 0, gameState = 0;
var home;
var plr1, plr2, plr3, plr4;
var allPlayers, form, game, player;
var playerArray;
var database;
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game()
  game.getState();
  game.start();
}

function draw() { 
  if(playerCount===4){
      game.updateState(1);
  }
  
  if(gameState===1){
      game.play();
  }
  if(gameState===2){
      game.end();
  }
  
}