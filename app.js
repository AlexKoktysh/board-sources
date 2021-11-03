const board = document.querySelector('#board')
const colors = ['#DC143C', '#FF1493', '#008B8B', '#00008B', '#A52A2A', '#FF00FF', '#00FF00', '#FFFF00']
const SQUARES_NUMBER = 288

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 500px ${color}, 0 0 500px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000` 
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}