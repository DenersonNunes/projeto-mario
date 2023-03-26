const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop') 

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

   /* console.log(marioPosition);
    console.log(pipePosition)*/
    const moverMarioEsquerda = () => {
        const marioPosition = +window.getComputedStyle(mario).left.replace('px', '');
        mario.style.left = `${marioPosition - 10}px`;
    }
    
    const moverMarioDireita = () => {
        const marioPosition = +window.getComputedStyle(mario).left.replace('px', '');
        mario.style.left = `${marioPosition + 10}px`;
    }
    

    if (pipePosition <= 85 &&  pipePosition  > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left= `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom= `${pipePosition}px`;

        mario.src ='./images/game-over.png';
        mario.style.width = '100px';
        mario.style.marginLeft = '62px';

        clearInterval(loop)
   }

} , 10);
 
document.addEventListener('touchstart', jump);

document.addEventListener('keydown', jump); 