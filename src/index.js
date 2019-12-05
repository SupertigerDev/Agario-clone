import Point from './point'
import Player from './player'
const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById('canvas'))

const context = canvas.getContext('2d');


const player = new Player(window.innerWidth/2, window.innerHeight /2);

const points = []
for (let index = 0; index < 500; index++) {
  const x = Math.floor(Math.random() * window.innerWidth * 5); //width
  const y = Math.floor(Math.random() * window.innerHeight * 5); //height
  points.push(new Point(x, y));
}

function loop () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  context.translate(-player._x + (window.innerWidth / 2), -player._y + (window.innerHeight / 2))

  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height)

  points.forEach(point => {
    point.draw(context)
  })

  player.draw(context)
  player.update()

  
  requestAnimationFrame(loop)
}
canvas.addEventListener('mousemove', event => {
  player.mouseMoveEvent(event)
})

requestAnimationFrame(loop)