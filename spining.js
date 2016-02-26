var imagePaths = [
  "1.jpeg","2.jpeg",
  "3.jpeg","4.jpeg",
  "5.png","6.jpeg","7.jpeg",
  "8.jpeg","9.jpeg","10.jpeg"
];

  cancanvas = createCanvas(960, 700);  // Size must be the first statement
  cancanvas.parent('cancan');

var can  = cancanvas;
    ctx  = can.getContext('2d');
    amount = 0;
    loadedImages = []; 

imagePaths.forEach(function(path){
  var img = new Image;
  img.onload = function(){
    loadedImages.push(img);
  }
  // Simulate really slow loading of images
  setTimeout(function(){
    img.src = 'assets/'+path;
  },Math.random()*10000);
});

Math.TAU = Math.PI*2; // http://tauday.com/

setInterval(function(){ animateInCircle(ctx,loadedImages) }, 30);
var timer;

// Dynamically resize the canvas to be its CSS displayed size
(window.onresize = function(){
  can.width  = can.offsetWidth;
  can.height = can.offsetHeight;
})();


function animateInCircle(ctx,images){
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
  var cx = ctx.canvas.width/2,
      cy = ctx.canvas.height/2;

  // Don't let the circle be smaller than the largest image
  var maxDim = Math.max.apply(Math,images.map(function(img){
    return Math.max(img.width,img.height);
  }));
  var radius = Math.max( estimateCircumference()/Math.TAU, maxDim/2 );

  var angleOffset = Math.TAU/images.length;
  images.forEach(function(img,i){
    var x = radius*Math.cos(angleOffset*i - (new Date)/5000 );
    var y = radius*Math.sin(angleOffset*i - (new Date)/5000 );
    ctx.drawImage(img,cx+x-img.width/2,cy+y-img.height/2);
  });

  function estimateCircumference(){
    var c = 0;
    // images.forEach(function(img){
    //   c += Math.sqrt(img.width*img.width+img.height*img.height);
    // })
    return c;
  }
}