class Particle {
    constructor(x, y, xSpeed, ySpeed) {
      this.x = x;
      this.y = y;
      this.diameter = random(2, 4);
      this.opacity = 100;
      this.ySpeed = xSpeed
      this.xSpeed = ySpeed;
      this.pDiameter = this.diameter;
    }
  
    move() {
        if (this.xSpeed == 15) {
            this.xSpeed = 2;
        }
        if (this.xSpeed == -15) {
            this.xSpeed = -2;
        }

        if (this.ySpeed == 15) {
            this.ySpeed = 2;
        }
        if (this.ySpeed == -15) {
            this.ySpeed = -2;
        }

        if (this.xSpeed == 0) {
            this.xSpeed = 2;
        }
        if (this.xSpeed == -0) {
            this.xSpeed = -2;
        }

        if (this.ySpeed == 0) {
            this.ySpeed = 2;
        }
        if (this.ySpeed == -0) {
            this.ySpeed = -2;
        }

        if (this.xSpeed > 1 && this.xSpeed != 15) {
            this.xSpeed -= 0.01;
        }

        if (this.xSpeed < -1 && this.xSpeed != -15) {
            this.xSpeed += 0.01;
        }
        
        if (this.ySpeed > 1  && this.ySpeed != 15) {
            this.ySpeed -= 0.01;
        }

        if (this.ySpeed < -1  && this.ySpeed != -15) {
            this.ySpeed += 0.01;
        }
        

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x >= width-this.diameter/2){
            this.xSpeed = this.xSpeed * -1;
        } else if (this.x <= this.diameter/2){
            this.xSpeed = this.xSpeed * -1;
        }

        if(this.y >= height-this.diameter/2){
            this.ySpeed = this.ySpeed * -1;
        } else if (this.y <= this.diameter/2){
            this.ySpeed = this.ySpeed * -1;
        }

    }
  
    display() {
        fill(255, 255, 255, this.opacity);
        noStroke();
        ellipse(this.x, this.y, this.diameter, this.diameter);
        noFill();
        stroke(255);
        //ellipse(this.x, this.y, 200);
    }
  }
  