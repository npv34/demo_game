let hum = new Hum(50, 150, 100, 50);


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function play() {
    hum.moveRight();
    requestAnimationFrame(play);
}

play();

