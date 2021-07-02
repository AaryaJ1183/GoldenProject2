class Player{
    constructor(){
        this.name= null;
        this.distance= 0;
        this.index= null;
        this.rank=0;
    }
    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value", (data)=>{
            playerCount= data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
        "playerCount": count
        })
    }

    update(){
        database.ref("players/player" + this.index).set({
            "name": this.name,
            "distance": this.distance
        })   
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }

    getRank(){
        var playerRankref = database.ref("Rank");
        playerRankref.on("value", (data)=>{
            this.rank= data.val(); 
        })
    }

    static updateRank(R){
        database.ref("/").update({
            "Rank" : R 
        })
    }

}