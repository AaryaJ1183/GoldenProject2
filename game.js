class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value", (data)=>{
            gameState = data.val()

        })

    }
    
    updateState(state){
        database.ref("/").update({
            "gameState": state
        })
    }
    start(){
        if(gameState===0){
            form = new Form()
            form.display();
        
            player = new Player()
            player.getCount()
        }
        plr1 = createSprite(200, 400, 20, 20);
        plr1.shapeColor = "green";
        plr2 = createSprite(400, 400, 20, 20);
        plr2.shapeColor = "red";
        plr3 = createSprite(600, 400, 20, 20);
        plr3.shapeColor = "blue";
        plr4 = createSprite(800, 400, 20, 20);
        plr4.shapeColor = "pink";
        playButton = createSprite(400, 300, 100,70);
        playButton.shapeColor = "yellow";
        home = createSprite(400,400,50,50);
        home.shapeColor = "yellow";
        playerArray=[plr1,plr2,plr3,plr4];     
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        player.getRank();

        if(allPlayers!==undefined){
            background("grey");
            var index = 0;
            var x = 200;
            var y = 0;
            for(var plr in allPlayers){
                index++
                x = x+ 200;
                y = displayHeight-allPlayers[plr].distance;
                playerArray[index-1].x= x;
                playerArray[index-1].y= y;
                if(index=== player.index){
                    camera.position.x = playerArray[index-1].x;
                    camera.position.y = playerArray[index-1].y;

                }
                drawSprites();

        if(gameState1==="start"){
            textSize(30);
            fill(0,0,0);
            text("Use the arrow keys to move around", width/2- 200, 150);
            if(mousePressedOver(playButton)){
            gameState1 = "play";
            }
        } else if(gameState1==="play"){
                 playerArray[index-1].velocityX=5;
                 playerArray[index-1].velocityY=5;
            if(keyDown("down")){
                playerArray[index-1].velocityX=0;
                playerArray[index-1].velocityY = 5;
            }
            if(keyDown("up")){
                playerArray[index-1].velocityX=0;
                playerArray[index-1].velocityY = -5;
            }
            if(keyDown("right")){
                playerArray[index-1].velocityX = 5;
                playerArray[index-1].velocityY=0;
            }
            if(keyDown("left")){
                playerArray[index-1].velocityX = -5;
                playerArray[index-1].velocityY=0;
            }
            playButton.visible=false;
        }

            }

        }

    }
    end(){
        background("orange");
        console.log("GAME HAS ENDED");
        fill("yellow");
        textSize(35);
        text("Rank: " + player.rank, displayWidth/2, camera.position.y)
    }
    
    
    
    }