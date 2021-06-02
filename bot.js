class Bot {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.size = 10;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
  checkWall(style) {
    if (style == "bounce") {
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
  }
  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.size, this.size);
  }
}
