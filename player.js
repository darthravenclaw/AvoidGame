class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.yv = 0;
    this.xv = 0;
    this.size = 10;
    this.speed = 3;
    this.died = 0;
  }

  update() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.xv = this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.xv = -this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.yv = -this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.yv = this.speed;
    }
    this.x += this.xv;
    this.y += this.yv;
    this.yv = 0;
    this.xv = 0;
  }

  checkWall(style) {
    
      if (this.x > width) {
        this.x = 0;
      }
      if (this.x < 0) {
        this.x = width;
      }
      if (this.y > height) {
        this.y = 0;
      }
      if (this.y < 0) {
        this.y = height;
      }
    
  }
  show() {
    fill(255);
    let size = 10;

    if (this.died === 0) {
      rect(this.x, this.y, this.size, this.size);
    } else if (this.died <= 60 && this.died >= 1) {
      this.died += 1;
      this.drawExposion(10, 200, 200, 0);
      this.drawExposion(5, 255, 0, 0);
      this.drawExposion(2, 255, 255, 255);
    } else {
    }
  }
  drawExposion(size, red, green, blue) {
    fill(red, green, blue);
    rect(
      this.x + this.died * size * 2,
      this.y + this.died * size * 2,
      (this.size * 1) / this.died,
      (this.size * 1) / this.died
    );
    fill(red, green, blue);
    rect(
      this.x + this.died * size * 2,
      this.y - this.died * size * 2,
      (this.size * 1) / this.died,
      (this.size * 1) / this.died
    );
    fill(red, green, blue);
    rect(
      this.x - this.died * size * 2,
      this.y - this.died * size * 2,
      (this.size * 1) / this.died,
      (this.size * 1) / this.died
    );
    fill(red, green, blue);
    rect(
      this.x - this.died * size * 2,
      this.y + this.died * size * 2,
      (this.size * 1) / this.died,
      (this.size * 1) / this.died
    );
    fill(red, green, blue);
    rect(
      this.x - this.died * size,
      this.y,
      (this.size * 1) / this.died,
      (this.size * 1) / this.died
    );
    fill(red, green, blue);
    rect(
      this.x + this.died * size,
      this.y,
      (this.size * 1) / this.died,
      (this.size * 1) / this.died
    );
    fill(red, green, blue);
    rect(
      this.x,
      this.y - this.died * size,
      (this.size * 1) / this.died,
      (this.size * 1) / this.died
    );
    fill(red, green, blue);
    rect(
      this.x,
      this.y + this.died * size,
      (this.size * 1) / this.died,
      (this.size * 1) / this.died
    );
  }
}
