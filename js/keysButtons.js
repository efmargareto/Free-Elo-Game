class KeyButton {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 0
        this.y = 170

        this.width = 120
        this.height = 30

        this.colorq = '#444'

        this.statusKey = {
            global: false,
            q: {
                active: false,
                keyCode: KEY_Q,
                color: 'blue'
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
        this.ctx.save()
        this.ctx.fillStyle = this.statusKey.q.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.restore()

        this.ctx.save()
        this.ctx.fillStyle = this.statusKey.w.color
        this.ctx.fillRect(this.x, this.y + 60, this.width, this.height)
        this.ctx.restore()

        this.ctx.save()
        this.ctx.fillStyle = this.statusKey.e.color
        this.ctx.fillRect(this.x, this.y + 120, this.width, this.height)
        this.ctx.restore()

        this.ctx.save()
        this.ctx.fillStyle = this.statusKey.r.color
        this.ctx.fillRect(this.x, this.y + 180, this.width, this.height)
        this.ctx.restore()
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
                } 
                break
            
            case KEY_W:
                if (this.statusKey.w.active) {
                    this.statusKey.w.color = '#444'
                    this.statusKey.w.active = false
                    this.statusKey.global = false
                } 
                break
   
            case KEY_E:
                if (this.statusKey.e.active) {
                    this.statusKey.e.color = '#444'
                    this.statusKey.e.active = false
                    this.statusKey.global = false
                } 
                break

            case KEY_R:
                if (this.statusKey.r.active) {
                    this.statusKey.r.color = '#444'
                    this.statusKey.r.active = false
                    this.statusKey.global = false
                } 
                break
        }
    }
          
}



