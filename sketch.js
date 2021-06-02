let player;
let bots = [];
let botNum = 10;
let frame = 0;
let score = 0;
let scoreLabel;
let bonus;
let run = true;
let highScore = 0;
let bStart;

function setup() {
  createCanvas(600, 600);
  bonus = new Bonus();
  scoreLabel = createP();
  highScoreLabel = createP();
  bStart = createButton("Start");
  bStart.mousePressed(start);
  start();
}

function start() {
  gameOver();
  checkHighScore();
  score = 0;
  run = true;
  player = new Player(100, 100);
  for (let i = 0; i < botNum; i++) {
    let bot = new Bot();
    bots.push(bot);
    noStroke();
    rectMode(CENTER);
  }
}

function draw() {
  background(0, 70);
  fill(20, 50, 50);

  // Draw bot spawn circle
  ellipse(width / 2, height / 2, 40, 40);

  for (let i = 0; i < bots.length; i++) {
    bots[i].update();
    bots[i].checkWall("bounce");
    bots[i].show();
  }
  bonus.show();
  player.update();
  player.checkWall("bounce");
  player.show();

  if (run) {
    if (frame % 50 == 0 && bots.length < 200) {
      score = score + 1;
      let bot = new Bot();
      bots.push(bot);
    }
    frame++;
    if (checkCollision(player, bonus)) {
      score += bots.length;
      bonus.colide();
    }

    for (let i = 0; i < bots.length; i++) {
      if (checkCollision(player, bots[i])) {
        if (player.died == 0) {
          player.died = 1;
        }
        run = false;
        break;
      }
    }
  } else {
    textSize(40);
    text("Game Over", width / 2 - 100, height / 2);
    player.show();
  }

  scoreLabel.html("Score is " + score);
  highScoreLabel.html("High Score is " + highScore);
}

function gameOver() {
  if (parseInt(localStorage.getItem("highScore")) < score) {
    localStorage.setItem("highScore", score);
  }

  for (let i = 0; i < bots.length; i++) {
    bots[i] = null;
  }
  bots = [];
}

function checkHighScore() {
  if (localStorage.getItem("highScore") == undefined) {
    localStorage.setItem("highScore", 0);
  }
  highScore = localStorage.getItem("highScore");
}

function checkCollision(target1, target2) {
  if (
    target1.x < target2.x + target2.size &&
    target1.x + target1.size > target2.x &&
    target1.y < target2.y + target2.size &&
    target1.y + target1.size > target2.y
  ) {
    console.log("collition");
    return true;
  } else {
    return false;
  }
}

function keyPressed() {
  if (keyCode == 13) {
    start();
  }
}
