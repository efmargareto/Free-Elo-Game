const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const game = new Game(ctx)

const startButton = document.getElementById('startGame')
startButton.onclick = () => {
  game.start()
}

window.addEventListener('keydown', (event) => {
  game.setupListeners(event)
})


function getCursorPosition(canvas, event) {
  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  game.clickOnObstacle(x, y)
}
canvas.addEventListener('mousedown', function(event) {
  getCursorPosition(canvas, event)
})


