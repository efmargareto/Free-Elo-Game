const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const game = new Game(ctx)

const startButton = document.getElementById('startGame')
startButton.onclick = () => {
  game.start()
}
