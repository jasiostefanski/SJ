function setup()
{
	myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('myContainer');
}

function draw()
{
    background(0);
    stroke(255);
    strokeWeight(5);
    fill(255,0,0);
    if (mouseX < windowWidth * .25)
    {
		fill(0,255,0);
		ellipse(width/2, height/2, 500, 300);
    }
    else if (mouseX < windowWidth * .5)
    {
    	fill(0,0,255);
        rectMode(CENTER);
        rect(width/2, height/2, 400, 400);
    }
    else if (mouseX < windowWidth * .75)
    {
    	rectMode(CENTER);
        rect(width/2, height/2, windowHeight/5, windowHeight/5);
    	fill(0,255,255);
    }
    else if (mouseX > windowWidth * .75)
    {
        ellipse(width/2, height/2, 300, 500);
    } 
    ellipse(width/2, height/2, 200, 200);
}

function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);
}
