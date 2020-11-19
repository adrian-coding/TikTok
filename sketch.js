var hr,mn,sc;
hr = hour();
mn = minute();
sc = second();
function setup() {
  createCanvas(800,400);
  

  angleMode(DEGREES);


}

function draw() {
  background(0,0,0);  

  hrAngle = map(hr, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  stroke(255,0,0);
  strokeWeight(7);
  line(400,200,450,150);
  stroke(0,255,0);
  strokeWeight(7);
  line(400,200,480,220);
  stroke(0,0,255);
  strokeWeight(7);
  line(400,200,330,180);





  
  drawSprites();
}

