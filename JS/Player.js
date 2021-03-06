class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }
    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",function (data) {
            PlayerCount = data.val()
        })
    }
    updateCount(count){
        database.ref('/').update(
            {
                'playerCount' : count
            }
        )
    }
    update(){
        var PlayerIndex = "Players/Player" + this.index

        database.ref(PlayerIndex).set(
            {
                name : this.name,
                distance : this.distance
            }
        )
    }
    static getPlayerInfo() {
        var playerInfoRef = database.ref('Players')
        playerInfoRef.on("value",function (data){
                allPlayers = data.val()
            }
        )
    }
}