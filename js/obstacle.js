class Obstacle {
    constructor(ctx, x, y, date) {
        this.ctx =  ctx

        this.x = 200 + x
        this.y = 100 + y
        this.date = date

        this.width = 60
        this.height = 60

        this.img = new Image()
        this.img.src = "./img/iconClick.png"
        this.img.isReady = false
    
        this.img.onload = () => this.img.isReady = true
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
    }

    clickOn(x, y) {

        // console.log(this.obstacles)

        // console.log(this.x <= x)

        // const suma = this.x + this.width


        // console.log('lol posicion X --->' + this.x)
        // console.log('lol posicion X + WIDHT --->' + suma)
        // console.log('lol posicion Y --->' + this.y)
        // console.log('CLICK X --->' + x)
        // console.log('CLICK Y --->' + y)

    }
}