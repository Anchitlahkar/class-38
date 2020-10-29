var database;
var gameState = 0, PlayerCount = 0;
var form,player,game;
var allPlayers,distance = 0;

function setup(){
    database=firebase.database();
    createCanvas(500,500);

    game = new Game()
    game.getState()
    game.start()
   
}

function draw(){
    background("white");
if(PlayerCount===4){
    game.update(1);
}
if(gameState===1)
    game.play();
}

