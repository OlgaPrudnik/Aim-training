const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#FF1493', '#DC143C', '#FF4500', '#00FA9A', '#006400','#00008B', '#4B0082', '#8B4513', '#FF6347' ]
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
event.preventDefault()
screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
if(event.target.classList.contains('time-btn')) {
time = parseInt(event.target.getAttribute('data-time'))
screens[1].classList.add('up')
startGame()
}

})

board.addEventListener('click', event => {
  if(event.target.classList.contains('circle')) {
score++
event.target.remove()
createRandomCircle()

  }
})

function startGame() {
  setInterval( decreaseTime, 1000)
  createRandomCircle()
  setTime(time)
  
}

function decreaseTime() {
  if(time === 0) {
   finishGame()
  } else {
    let current = --time
    if(current < 10) {
    current = `0${current}`
}
    setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
timeEl.parentNode.classList.add('hide')
board.innerHTML =
`<h1><span class="primary">Cчет: ${score}</span></h1>`
}

function createRandomCircle() {
const circle = document.createElement('div')

const size = getRandomNumber(10, 60)
const {width, height} = board.getBoundingClientRect()
const x = getRandomNumber(0, width - size)
const y = getRandomNumber(0, height - size)

circle.classList.add('circle')
circle.style.width = `${size}px`
circle.style.height = `${size}px`
circle.style.top = `${y}px`
circle.style.left = `${x}px`
circle.style.background = `${getRandomColor()}`

board.append(circle)

}


function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
 }

function getRandomNumber(min, max) {
return Math.round(Math.random() * (max - 
  min) + min)
}