class Game{

    constructor(){

    }

   getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState =  data.val();
    })
   }

      update(state){

        database.ref('/').update({
            'gameState': state
        });

   }
    


    start(){
        if(gameState == 0){
            player = new Player();
            player.getCount();
/*
        var playerCountRef = database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
        }
     */       form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();

        if(plr === "player" + player.index)
            fill("red")
        
        else
            fill("black")

        textSize(16);
        text("Game Start", 120,100);

        Player.getPlayerInfo();

        if(allPlayers != undefined){
        var displayPosition = 140;

        for(var plr in allPlayers){
        displayPosition = displayPosition + 30;
        textSize(16);
        text(allPlayers[plr].name+" : " +allPlayers[plr].distance,120, displayPosition);
        }
    }
        if(keyDown(UP_ARROW) && player.index != null){
            player.distance += 50;
            player.update();
        }

    }
}
