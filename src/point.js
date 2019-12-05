export default class Point {
    constructor(x, y) {
      this._x = x;
      this._y = y;
      this._size = 10;
    }
  
    draw(context) {
      context.beginPath();
      context.arc(this._x, this._y, this._size, 0, 2 * Math.PI);
      context.fillStyle = "green"
      context.fill();
    }
  
    update() {
  
    }
  }