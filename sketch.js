var y1 = 0;
var x1 = 0;

var y2 = 960;
var x2 = 700;
var xspeed = 18;
var yspeed = 12;
var i = 0;

// The statements in the setup() function 
// execute once when the program begins
function setup() {
  myCanvas = createCanvas(960, 700);  // Size must be the first statement
  myCanvas.parent('myContainer');
  stroke(255);     // Set line drawing color to white
  frameRate(10);
  img = loadImage("assets/kruger.jpg");
  img2 = loadImage("assets/323.jpg");
}
// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
function draw() { 
  background('#ff2400');   // Set the background to red
  move();
  for (i=0;i<10;i++){
    imageMode(CENTER);
    image(img,x1-i*xspeed,y1-i*yspeed,300,450);
    image(img2,x2-i*xspeed,y2-i*yspeed,305,300);
    
  }
  // ellipse(x,y,40,40);
  // imageMode(CENTER);
  // image(img,0, y, width, y);  
} 

function move() {
  x1 = x1 + xspeed;
  x2 = x2 - xspeed;
  if (x1 > (width+300) || x1 < 0-300)  {
    xspeed = -xspeed;
  }

  y1 = y1 + yspeed;
  y2 = y2 - yspeed;
  if (y1 > (height+450) || y1 < 0-450)  {
    yspeed = -yspeed;
  }
}

function windowResized() {
  resizeCanvas(960, 700);
}

// function mousePressed() {
// background(255,0,0);
// }