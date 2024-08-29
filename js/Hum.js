class Hum {
    x;
    y;
    width;
    height;
    canvas;
    ctx;

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        let frameWidth = 50;
        let frameHeight = 61;
        let row = 0;
        let column = 0;
        let x = setInterval(() => {
            if (column >= 4) {
                column = 0;
                clearInterval(x)
            }
            column++;
            const image = new Image();
            image.src = "images/hum.jpg";
            this.ctx.drawImage(image, column * frameWidth, row * frameHeight, frameWidth, frameHeight, this.x, this.y, frameWidth, frameHeight);
        }, 100)
    }

    moveRight() {
        this.x++;
        this.draw();
    }
}