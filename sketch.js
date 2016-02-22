var x = 0;
var y = 0;
var xspeed = 18;
var yspeed = 12;
var ce;

function setup() {
  myCanvas = createCanvas(960, 700);
  myCanvas.parent('myContainer');
  img = loadImage("assets/kruger.jpg");  // Load the image
}

function draw() {

frameRate(10);
var ce = millis();
  if (millis() > ce + 2000)
  {
    ellipse(20,20,20,20);
    ce = millis();
  }

fill(255,0,0);
  stroke(255);
  strokeWeight(4);
  imageMode(CENTER);
  image(img, x, y, 300, 450);
   
 	 x = x + xspeed;
  	
  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	}

}

function windowResized() {
  resizeCanvas(960, 700);
}

// function mousePressed() {
// background(255,0,0);
// }