var bug1;  // Declare objects
var bug2;
var bug3;
var bug4;

function setup() {
  createCanvas(710, 400);
  // Create object


  bug1 = new Jitter();
  bug1.changeColor();
  // console.log()


  bug2 = new Jitter();

  bug2.changeColor();
 
  bug3 = new Jitter();
  bug4 = new Jitter();
  // noLoop();
}



function draw() {
  background(50, 89, 100);
  // push();
  
  // bug1.changeColor();
  // pop();
  bug1.bounce();
  bug1.display();
  // push();
  bug2.display();
  // bug2.changeColor();
  // pop();
  bug2.bounce();

  bug3.bounce();
 
  bug4.bounce();

}

// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(100, 200);
  this.speed = 1;
  // var r = floor(random(255));
  // var g = floor(random(255));  
  // var b = floor(random(255));
  // stroke('rgba('+r+','+g+','+b+',0.5)');
  // strokeWeight(random(5,50));
  // this.move = function() {
  //   // this.x += random(-this.speed, this.speed);
  //   // this.y += random(-this.speed, this.speed);

  // };
    push();
    this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    // var r = floor(random(255));
    // var g = floor(random(255));  
    // var b = floor(random(255));
    // // console.log(r, g, b);
    // stroke('rgba('+r+','+g+','+b+',0.5)');
    // strokeWeight(random(5,50));
  };
  pop();

  this.changeColor = function(){
    var r = floor(random(255));
    var g = floor(random(255));  
    var b = floor(random(255));

    fill('rgba('+r+','+g+','+b+',0.5)');
    strokeWeight(random(5,50));
    console.log(r,g,b);
  }

  var speedY = 5;
  var speedX = 2;

  this.bounce = function(){

  this.x = this.x + speedX;
  this.y = this.y + speedY;
 
  if (this.x > width) {
    speedX = speedX* -1;
  }
 
  if (this.x < 0) {
    speedX = speedX* -1;
  }
 
  if (this.y > height) {
    speedY= speedY* -1;
  }
   
  if (this.y < 0) {
    speedY= speedY*-1;
  } 



  // ellipse(this.x, this.y, this.diameter, this.diameter);

  }
}