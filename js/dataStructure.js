class myDataStructure {
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }

    createVector(X, Y) {
        return {
            x: X,
            y: Y
        };
    }
}