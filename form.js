class Form{
    constructor(){
        this.title = createElement("h1");
        this.input = createInput().attribute("placeHolder", "Enter Your Name");
        this.button = createButton("PLAY")
        this.greeting = createElement("h2")
        this.reset = createButton("Reset")
    }

 display(){
    this.title.html("WELCOME to <this game>");
    this.title.position(displayWidth/2-100,150); 
    this.input.position(displayWidth/2,displayHeight/2-150);
    this.button.position(displayWidth/2,displayHeight/2);
    this.reset.position(displayWidth-100, 50)
    this.button.mousePressed(()=>{   
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount++
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update()
    
            this.greeting.html("HELLO " + player.name);
            this.greeting.position(displayWidth/2,displayHeight/2);
    })
    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.updateState(0);
        Player.updateRank(0);
        window.location.reload();
    })

}
hide(){

    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();

}


}
