const board = document.querySelector('.container')

const SQUARES_NUMBER = 440;

for (let i = 0; i < SQUARES_NUMBER; i++) {

    const square = document.createElement('div')

    square.className = 'square'

    board.appendChild(square)

    square.addEventListener('mouseover', () => {

        setColor(square)

    })

    square.addEventListener('mouseleave', () => {

        removeColor(square)

    })

}

function setColor(el) {

    let color = `rgb(${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)})`

    el.style.backgroundColor = color

    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(el) {

    el.style.backgroundColor = '#1d1d1d'

    el.style.boxShadow = `0 0 2px #000`

}

function getRandomArbitrary(min, max) {

    return Math.random() * (max - min) + min;

}