const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const gameover = document.querySelector('.gameover')
const jumpButton = document.querySelector('.button')

const keyboardJump = (key) => {

    if (key.code === "Space") {

        mario.classList.add('jump')

        setTimeout(() => {
            mario.classList.remove('jump')
        }, 700)
    }
}

const screenJump = () => {

        mario.classList.add('jump')

        setTimeout(() => {
            mario.classList.remove('jump')
        }, 700)
    
}

const loopPipe = setInterval(() => {

    const pipeLocation = pipe.offsetLeft
    const marioLocation = +window.getComputedStyle(mario).bottom.replace("px", "")

    if (pipeLocation <= 120 && pipeLocation > 0 && marioLocation <= 90) {

        pipe.style.animation = "none"
        pipe.style.left = `${pipeLocation}px`

        mario.style.animation = 'none'
        mario.style.left = `${marioLocation}px`
        
        mario.src = "./assets/game-over.png"
        mario.style.width = "60px"
        mario.marginLeft = "50px" 

        gameover.style.display = "flex"
        
        clearInterval(loopPipe)
    }

}, 10)

document.addEventListener('keydown', keyboardJump)

jumpButton.addEventListener('click', screenJump)