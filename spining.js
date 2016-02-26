var imagePaths = [
  "1.jpeg","4.jpeg",
  "5.jpeg","8.jpeg",
  "9.png","10.jpeg","12.jpeg",
  "13.jpeg","14.png"
];

var can  = document.querySelector('canvas'),
    ctx  = can.getContext('2d'),
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

// setInterval(function(){ animateInCircle(ctx,loadedImages) }, 30);
var timer;
$("body").mouseup(function(){
	timer = setInterval(function(){ animateInCircle(ctx,loadedImages) }, 30);
});

$("body").mousedown(function(){
	var number = Math.floor(Math.random()*9);
		ctx.drawImage(loadedImages[number],0,0);
	clearInterval(timer);
});

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