class KeyButton {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 25
        this.y = 38

        this.width = 120
        this.height = 30

        this.keyScore = 0

        this.colorq = '#444'

        this.img = new Image()
        this.img.src = "./img/marcos-loL-1.png"
        this.img.isReady = false
    
        this.img.onload = () => this.img.isReady = true


        this.imgActive = new Image()
        this.imgActive.src = "./img/active-marcos-lol.png"
        this.imgActive.isReady = false
    
        this.imgActive.onload = () => this.imgActive.isReady = true

        this.statusKey = {
            global: false,
            q: {
                active: false,
                keyCode: KEY_Q,
                color: 'blue',
                img: "./img/marcos-loL-1.png",
            },
            w: {
                active: false,
                keyCode: KEY_W,
                color: 'blue'
            },
            e: {
                active: false,
                keyCode: KEY_E,
                color: 'blue'
            },
            r: {
                active: false,
                keyCode: KEY_R,
                color: 'blue'
            }
        }
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            85,
            100
        )

        if(this.statusKey.q.active) {
            this.ctx.drawImage(
                this.imgActive,
                this.x,
                this.y,
                85,
                100
            )
        }

        this.ctx.drawImage(
            this.img,
            this.x,
            this.y + 125,
            85,
            100
        )

        if(this.statusKey.w.active) {
            this.ctx.drawImage(
                this.imgActive,
                this.x,
                this.y + 125,
                85,
                100
            )
        }

        this.ctx.drawImage(
            this.img,
            this.x,
            this.y + 250,
            85,
            100
        )

        if(this.statusKey.e.active) {
            this.ctx.drawImage(
                this.imgActive,
                this.x,
                this.y + 250,
                85,
                100
            )
        }
        

        this.ctx.drawImage(
            this.img,
            this.x,
            this.y + 375,
            85,
            100
        )

        if(this.statusKey.r.active) {
            this.ctx.drawImage(
                this.imgActive,
                this.x,
                this.y + 375,
                85,
                100
            )
        }

    }

    changeStatebyTime(key) {

        if (!this.statusKey.q.active && key == 'q') {
            this.statusKey.q.color = 'red'
            this.statusKey.q.active = true
            this.statusKey.global = true
        } 

        if (!this.statusKey.w.active && key == 'w') {
            this.statusKey.w.color = 'red'
            this.statusKey.w.active = true
            this.statusKey.global = true
        } 

        if (!this.statusKey.e.active && key == 'e') {
            this.statusKey.e.color = 'red'
            this.statusKey.e.active = true
            this.statusKey.global = true
        } 

        if (!this.statusKey.r.active && key == 'r')  {
            this.statusKey.r.color = 'red'
            this.statusKey.r.active = true
            this.statusKey.global = true
        } 
    }

    changeStatebyKey(event) {
    
        switch(event.keyCode) {
            case KEY_Q:
                if (this.statusKey.q.active) {
                    this.statusKey.q.color = '#444'
                    this.statusKey.q.active = false
                    this.statusKey.global = false
                    window.score += 30
                    
                } 
                break
            
            case KEY_W:
                if (this.statusKey.w.active) {
                    this.statusKey.w.color = '#444'
                    this.statusKey.w.active = false
                    this.statusKey.global = false
                    window.score += 30
                    
                } 
                break
   
            case KEY_E:
                if (this.statusKey.e.active) {
                    this.statusKey.e.color = '#444'
                    this.statusKey.e.active = false
                    this.statusKey.global = false
                    window.score += 30
                    
                } 
                break

            case KEY_R:
                if (this.statusKey.r.active) {
                    this.statusKey.r.color = '#444'
                    this.statusKey.r.active = false
                    this.statusKey.global = false
                    window.score += 30
                    
                } 
                break
        }
    }
          
}



