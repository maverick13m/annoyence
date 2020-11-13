var database,player,form,game;
var gameState =0,playerCount

function setup(){
  database = firebase.database()
  createCanvas(500,500);
game = new Game()
  game.getState()
  game.start()  
}

function draw(){
  
  
}


