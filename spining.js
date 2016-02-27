// var angle = 0;
// var angleSpeed = Math.PI/180;
// var radius = 200;
// var centerX = 300;
// var centerY = 300;
// var x;
// var y;

// var alpha = 255;
// var alphaDelta = 10;

// function setup() {
//   var myCanv = createCanvas(960, 700);  // Size must be the first statement
//   myCanv.parent('cancan');
//   stroke(255);     // Set line drawing color to white
//   frameRate(30);
// }

// function draw() {
//   background(255,255,255,90);
//   circulate();
//   fill(255,255,0,127);
//   rect(x,y,120,150);

// }

// function circulate() {
//   translate(centerX,centerY);
//   x = radius*cos(angle);
//   y = radius*sin(angle);
//   if(angle>360) angle = 0;
//   angle = angle+angleSpeed;
// }

var img = [];
var centerX;
var centerY;

function setup() {
  var myCanv = createCanvas(960, 700);  // Size must be the first statement
  myCanv.parent('cancan');
  //create img object
  for (var i=0; i<50; i++){
    img.push(new Thing());
  }
  frameRate(30);
}

function draw(){
  background(255,255,255);
  for (var i=0; i<img.length; i++){
    push();
    img[i].circulate();
    img[i].display();
    pop();
  }
}

// Thing class
function Thing(){
  centerX=random(280,320);
  centerY=random(280,320);
  this.angle=0;
  this.angleSpeed=Math.PI/180 * random(1,3);
  this.radius=random(100,250);

  this.circulate = function(){
    translate(centerX,centerY);
    this.x = this.radius * cos(this.angle);
    this.y = this.radius * sin(this.angle);
    if (this.angle >= 360) this.angle = 0;
    this.angle = this.angle + this.angleSpeed;
  }

  this.display = function(){
    fill(255,255,0);
    rect(this.x,this.y,120,150);
  }
}






