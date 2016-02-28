var y1 = [];
var x1 = [];

var y2 = [];
var x2 = [];

var x1speed = [];
var y1speed = [];

var x2speed = [];
var y2speed = [];

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
  
  for(i=0;i<10;i++){
  	x1speed[i]=18;
  	y1speed[i]=12;
  	
  	x2speed[i]=10;
  	y2speed[i]=18;
  	
  	if(i==0){
  		x1[i]=0;y1[i]=0;
  		x2[i]=0;y2[i]=0;
  	} else {
  		x1[i]=0-i*x1speed[i]; y1[i]=0-i*y1speed[i];
  		x2[i]=0-i*x2speed[i]; y2[i]=0-i*y2speed[i];
  	}
  }
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
    image(img,x1[i],y1[i],300,450);
    image(img2,x2[i],y2[i],305,300);
    
  }
  // ellipse(x,y,40,40);
  // imageMode(CENTER);
  // image(img,0, y, width, y);  
} 

function move() {
  for(i=0;i<10;i++){
  
    x1[i] = x1[i] + x1speed[i];
    if (x1[i] > (width) || x1[i] < 0)  {
      x1speed[i] = -x1speed[i];
      if ((x1[i]+x1speed[i])<0){
        x1speed[i] = -x1speed[i];
      }
    }

    y1[i] = y1[i] + y1speed[i];
    if (y1[i] > (height) || y1[i] < 0)  {
      y1speed[i] = -y1speed[i];
      if ((y1[i]+y1speed[i])<0){
        y1speed[i] = -y1speed[i];
      }
    }
    
    x2[i] = x2[i] + x2speed[i];
    if (x2[i] > (width) || x2[i] < 0)  {
      x2speed[i] = -x2speed[i];
      if ((x2[i]+x2speed[i])<0){
        x2speed[i] = -x2speed[i];
      }
    }

    y2[i] = y2[i] + y2speed[i];
    if (y2[i] > (height) || y2[i] < 0)  {
      y2speed[i] = -y2speed[i];
      if ((y2[i]+y2speed[i])<0){
        y2speed[i] = -y2speed[i];
      }
    }
    
  }
}