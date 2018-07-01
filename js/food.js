var canvas = document.getElementById("cvs");
var context = canvas.getContext('2d');

class Food {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;

        this.width = w;
        this.height = h;
    }

    show() {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    updatePosition(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}