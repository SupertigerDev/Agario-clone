export default class Player {
    constructor(x, y) {
      this._x = x;
      this._y = y;
      this._size = 20;
      // move speed
      this.speed = 20;
      this._xSpeed = 0;
      this._ySpeed = 0;

      this.mouseX = window.innerWidth / 2;
      this.mouseY =  window.innerHeight / 2
    }
  

    mouseMoveEvent(event) {
      this.mouseX = event.clientX
      this.mouseY = event.clientY     
    }


    draw(context) {
      context.beginPath();
      context.arc(this._x, this._y, this._size, 0, 2 * Math.PI);
      context.fillStyle = "white"
      context.fill();
    }

  
    update() {

      this._xSpeed = this.mouseX / (window.innerWidth / 2) - 1;
      this._ySpeed = this.mouseY / (window.innerHeight / 2) - 1; 

      this._x+= this._xSpeed * this.speed;
      this._y+= this._ySpeed * this.speed;
    }
  }