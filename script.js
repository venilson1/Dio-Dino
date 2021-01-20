const dino = document.querySelector('.dino');
const bg = document.querySelector('.bg');
let isJumping = false;
let position = 0;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    };
  };
};

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      //descendo
      let downInterval = setInterval(() => {
        if (position <= 10) {
          clearInterval(downInterval);
          isJumping = false
        } else{
          position -= 20;
          dino.style.bottom = position + 'px';
        }
      },20);
    } else {
      //subindo
      position += 40;
      dino.style.bottom = position + 'px';
    };
  }, 20);
};


function createCactus(){
  const cactus = document.createElement('div');
  let cactusPosition = 1200;
  let randomTime = Math.random() * 6000;

  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px';
  bg.appendChild(cactus);

  let leftInterval = setInterval(() => {
    //movendo esquerda
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      bg.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){

      clearInterval(leftInterval);
      document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';

    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  },20);

  setTimeout(createCactus, randomTime);
};



createCactus();
document.addEventListener('keydown', handleKeyUp);
