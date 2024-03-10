const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.querySelector('.score'); 

let score = 0; 
let hasPassedPipe = false; 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`; 
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'mario_jogo/images/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); 
    } else if (pipePosition < 0 && !hasPassedPipe) {
    
        score++;
        hasPassedPipe = true; 
        updateScoreDisplay(); 
    } else if (pipePosition > 120) {
        hasPassedPipe = false; 
    }
}, 10);

document.addEventListener("keydown", jump);
