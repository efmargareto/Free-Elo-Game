class Game {

    constructor(ctx) {
        this.ctx = ctx

        this.intervalId = undefined
        this.fps = 1000 / 60

        this.background = new Background(ctx)
        this.keyButton = new KeyButton(ctx)

        this.startDate = new Date().getTime()

        this.obstacles = []    
        this.obstacleFramesCount = 0

        this.changeColortime = 0
        this.changeActiveTime = 100 + Math.floor(Math.random() * 30)

        window.score = 0
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
                        
                        this.changeActiveTime = 10 + Math.floor(Math.random() * 50)
                        this.changeColortime = 0
                    }
                    
                this.clear()
                this.draw()
                
                this.obstacleFramesCount++
                this.changeColortime++
                
                const nowGAME = new Date().getTime()
                if ( nowGAME - this.startDate >= 50000)  this.gameOver()
    
                
            }, this.fps);
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    
        const now = new Date().getTime()
        this.obstacles = this.obstacles.filter(obstacle => now - obstacle.date <= 800)
        this.obstacles = this.obstacles.filter(obstacle => obstacle.isClick !== true)

        window.score
    }

    draw() {
        this.background.draw()
        this.keyButton.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.drawScore()
    }

    activeButtons(key) {
        this.keyButton.changeStatebyTime(key)
    }

    setupListeners(event) {
        this.keyButton.changeStatebyKey(event)
    }

    clickOnObstacle(x, y) {
        this.obstacles.forEach( elem => {
            if (elem.x <= x && elem.x + elem.width >= x && 
                elem.y <= y && elem.y + elem.height >= y) {
                elem.isClick = true
                window.score += 10
            }
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

    drawScore() {
        this.ctx.save()
    
        this.ctx.fillStyle = '#fff'
        this.ctx.font = ' bold 26px sans-serif'
    
        this.ctx.fillText(`${window.score}`, 867, 45)
    
        this.ctx.restore()
      }


      gameOver() {
        clearInterval(this.intervalId)
    
        this.ctx.save()
        
        this.ctx.fillStyle = 'rgba(1, 64, 62, 0.4)'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.font = 'bold 32px sans-serif'
        this.ctx.fillText(`Tu puntuación es: ${window.score}`, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2)
    
        this.ctx.restore()
      }
}