var canvas = document.getElementById("cvs");
var context = canvas.getContext("2d");

const ds = new myDataStructure();

var snake;
var food;
var gameInterval = null;
var deadMSG;

const BLOCK_W = 20;
const BLOCK_H = 20;

const MAP_W = canvas.width;
const MAP_H = canvas.height;

function main() {
  window.onload = onKeyDown;
  snake = new Snake(BLOCK_W, BLOCK_H);

  let foodPosition = getFoodPosition();

  food = new Food(foodPosition.x, foodPosition.y, BLOCK_W, BLOCK_H);

  startAnimate();
}

function getFoodPosition() {
  let rows = Math.floor(MAP_H / BLOCK_H);
  let cols = Math.floor(MAP_W / BLOCK_W);

  let foodRow = ds.getRandomInt(rows);
  let foodCol = ds.getRandomInt(cols);

  let X = foodRow * BLOCK_H;
  let Y = foodCol * BLOCK_W;

  let pos = ds.createVector(X, Y);

  return pos;
}

function startAnimate() {
  const CHANGE_RATE = 100;

  gameInterval = setInterval(draw, CHANGE_RATE);

  function draw() {
    drawBackground();

    drawFood();

    snake.show();

    if (snake.isDead()) {
      console.log("dead");
      stopAnimate();
      window.location.reload();
      alert(deadMSG);

      return;
    }

    snake.move();

    function drawBackground() {
      context.fillStyle = "black";
      context.fillRect(0, 0, MAP_W, MAP_H);
    }

    function drawFood() {
      if (snake.doesEat(food.x, food.y)) {
        let pos = getFoodPosition();

        food.updatePosition(pos.x, pos.y);
      }

      food.show();
    }
  }

  function stopAnimate() {
    clearInterval(gameInterval);
  }
}

function onKeyDown() {
  document.addEventListener("keydown", function(event) {
    const UP_ARROW = 38;
    const DOWN_ARROW = 40;
    const RIGHT_ARROW = 39;
    const LEFT_ARROW = 37;

    switch (event.keyCode) {
      case UP_ARROW:
        snake.changeDirection(0, -1);
        break;

      case DOWN_ARROW:
        snake.changeDirection(0, 1);
        break;

      case RIGHT_ARROW:
        snake.changeDirection(1, 0);
        break;

      case LEFT_ARROW:
        snake.changeDirection(-1, 0);
        break;
    }
  });
}

// main
main();
