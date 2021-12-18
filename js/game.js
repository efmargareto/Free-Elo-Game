class Game {

    constructor(ctx) {
        this.ctx = ctx

        this.intervalId = undefined
        this.fps = 1000 / 60

        this.background = new Background(ctx)
        this.keyButton = new KeyButton(ctx)

        this.obstacles = []    
        this.obstacleFramesCount = 0

        this.changeColortime = 0
        this.changeActiveTime = 100 + Math.floor(Math.random() * 30)
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {

                if (this.obstacleFramesCount % OBSTACLE_FRAMES === 0) {
                    this.addObstacle()
                    this.obstacleFramesCount = 0
                }

                if (this.changeColortime === 100 + this.changeActiveTime &&
                    this.keyButton.statusKey.global === false ) {

                    const ramdonKey = ['q','w','e','r']
                    this.activeButtons(ramdonKey[Math.floor(Math.random() * 5)])
                    
                    this.changeActiveTime = 100 + Math.floor(Math.random() * 50)
                    this.changeColortime = 0
                }
 
                this.clear()
                this.draw()
                
                this.obstacleFramesCount++
                this.changeColortime++
                
            }, this.fps);
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    
        const now = new Date().getTime()
        this.obstacles = this.obstacles.filter(obstacle => now - obstacle.date <= 2000)
        this.obstacles = this.obstacles.filter(obstacle => obstacle.isClick !== true)
    }

    draw() {
        this.background.draw()
        this.keyButton.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())
    }

    activeButtons(key) {
        this.keyButton.changeStatebyTime(key)
    }

    setupListeners(event) {
        this.keyButton.changeStatebyKey(event)
    }

    clickOnObstacle(x, y) {
        console.log(this.obstacles)
        this.obstacles.forEach( elem => {

            if (elem.x <= x && elem.x + elem.width >= x && 
                elem.y <= y && elem.y + elem.height >= y) {
                elem.isClick = true
            } else{
                console.log('FALSE')
            }
            
            console.log(elem.x + elem.width)
            console.log(elem.y + elem.height)

            console.log('click position X ----> ' + x)
            console.log('click position Y ----> ' + y)
        })
    }

    addObstacle() {
        const maxY = this.ctx.canvas.height - 250
        const y = Math.floor(Math.random() * maxY)

        const maxX = this.ctx.canvas.width - 450
        const x = Math.floor(Math.random() * maxX)

        const date = new Date().getTime()
    
        this.obstacles.push(
          new Obstacle(this.ctx, x, y, date)
        )
    }
}