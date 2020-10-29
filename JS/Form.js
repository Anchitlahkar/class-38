class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton('Play')
        this.greeting = createElement('h3')
    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(600,25)

        this.input.position(500,160)
        
        this.button.position(500,200)

        this.button.mousePressed(()=>{
                this.input.hide()
                this.button.hide()

                player.name = this.input.value()
                PlayerCount = PlayerCount + 1
                player.index = PlayerCount

                player.update()
                player.updateCount(PlayerCount)

                this.greeting.html("Hello " + player.name)
                this.greeting.position(600,225)
            }
        )
        
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
}