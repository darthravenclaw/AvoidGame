class Bonus {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.size = 10;
  }
  colide() {
    this.x = random(0, width);
    this.y = random(0, height);
  }

  show() {
    fill(255, 255, 0);
    rect(this.x, this.y, this.size, this.size);
  }
}
