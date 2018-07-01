/**
 * food加到頭
 * 移動時，new 的位置給 old，oldest 的位置刪除
 */


class Snake {
    constructor(w, h) {
        this.width = w;
        this.height = h;

        this.x = 0;
        this.y = 0;

        this.xSpeed = 1;
        this.ySpeed = 0;

        this.tail = [];
        this.size = 1;

    }

    changeDirection(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }

    move() {
        if (this.size === this.tail.length) {
            /**
             * no food has been eaten.
             */
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }

        }

        let xStep = this.xSpeed * this.width;
        let yStep = this.ySpeed * this.height;

        this.x = this.x + xStep;
        this.y = this.y + yStep;

        // create new tail
        this.tail[this.size - 1] = ds.createVector(this.x, this.y);

    };

    show() {

        context.fillStyle = 'white';
        for (let i = 0; i < this.tail.length; i++) {
            context.fillRect(this.tail[i].x, this.tail[i].y, this.width - 1, this.height - 1);
        }

        // draw first point
        //context.fillRect(this.x, this.y, this.width - 1, this.height - 1);
    }

    doesEat(foodX, foodY) {

        let d = ds.getDistance(this.x, this.y, foodX, foodY);


        if (d < 1) {
            this.size = this.size + 1;
            console.log("eat");
            return true;
        } else {
            return false;
        }
    }

    isDead() {

        if ((this.x < 0) || (this.x > MAP_W - 1) || (this.y < 0) || (this.y > MAP_H - 1)) {
            console.log("hit wall");
            deadMSG = "hit wall";
            return true;
        } else if (this._doesHitBody()) {
            console.log("hit body");
            deadMSG = "hit body";
            return true;
        }

        return false;
    }

    _doesHitBody() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            let pos = this.tail[i];

            let d = ds.getDistance(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                return true;
            }
        }
        return false;
    }

}