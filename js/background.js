class Background {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 0
        this.y = 0

        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height

        this.img = new Image()
        this.img.src = "./img/backgroud-dark.png"
        this.img.isReady = false
    
        this.img.onload = () => this.img.isReady = true

        this.xScore = 826

        this.imgScore = new Image()
        this.imgScore.src = "./img/lolScore.png"
        this.imgScore.isReady = false
    
        this.imgScore.onload = () => this.imgScore.isReady = true
    }

    draw() {
        if (this.img.isReady) {
            this.ctx.drawImage(
                this.img,
                this.x,
                this.y,
                this.width,
                this.height
            )
        }
        if (this.imgScore.isReady) {
            this.ctx.drawImage(
                this.imgScore,
                this.xScore,
                this.y,
                234,
                43
            )
        }
    }
}