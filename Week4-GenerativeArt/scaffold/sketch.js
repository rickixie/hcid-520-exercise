var ballArray = [];//create a array for

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create object
  
  //create 40 balls
  for (var i=0; i<40; i++){
    var newBall = new Ball();//create a new ball
    ballArray[i] = newBall;//put into the array

  }
  frameRate(20);
}

function draw() {
  background('black');

  var count = 0;
  for (var i=0; i<ballArray.length; i++){
    ballArray[i].bounce();
    ballArray[i].move();
    ballArray[i].display();
    count++;
  
  }

}

function onKeyDown(e){
   switch(e.keyCode){
     case:49 {//Number: 1
       
       break;
     }
     case: 50 {//Number:2
       
       break;
     }
     case: 51 {//Number:3
       
       break;
     }
     case:52 {//Number: 4
       
       break;
     }
     case:53 {//Number: 5
       
       break;
     }
     case: 54 {//Number: 6
       
       break;
     }
     case:55 {//Number: 7
       
       break;
     }
     case: 56 {//Number: 8
       
       break;
     }
     case: 57 {//Number: 9
       
       break;
     }
      case: 32 {//Number: space
       
       break;
     }
      case: 27 {//Number: escape
       
       break;
     }
     
    
   }
}


function changeAllColor(){
    var r = floor(random(255));
    var g = floor(random(255));  
    var b = floor(random(255));
    fill('rgba('+r+','+g+','+b+',0.5)');
    noStroke();
}


// Ball class
function Ball() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(50, 100);
  var r = floor(random(255));
  var g = floor(random(255));  
  var b = floor(random(255));

  this.color = color('rgba('+r+','+g+','+b+',0.5)');
  
  this.speed = 1;
 

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

  };
    
  this.display = function() {
    fill(this.color);//only fill the color when you create the ball
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };


  var speedY = 20;
  var speedX = 20;

  this.bounce = function(){

  this.x = this.x + speedX;
  this.y = this.y + speedY;
 
  if (this.x > width) {
    speedX = speedX* (-1);
  }
 
  if (this.x < 0) {
    speedX = speedX* (-1);
  }
 
  if (this.y > height) {
    speedY= speedY* (-1);
  }
   
  if (this.y < 0) {
    speedY= speedY*(-1);
  } 
}
  
  
  
  
}