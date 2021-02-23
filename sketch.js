var database;

var gameState = 0;
var playerCount;
var allPlayers;

var form, game, player;
function setup(){
    
    createCanvas(400,400);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
   

}

function draw(){

    background("pink");

    if(playerCount === 4){
        game.update(1);
    }
    
    if(gameState === 1){
        clear();
        game.play();
    }

    

}