var hr,mn,sc;

function setup() {
  createCanvas(800,400);
  

  angleMode(DEGREES);


}

function draw() {
  background(0,0,0);  

  translate(200,200);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sc = second();
  
  hrAngle = map(hr%12, 0, 12, 0, 360);
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



  stroke(255,0,255);
  point(0,0);
  //drawing the arcs strokeWeight(10);
  noFill();
  //Seconds stroke(255,0,0);
  arc(0,0,300,300,0,scAngle); 
  //Minutes stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);
  //Hour stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);


  
  drawSprites();
}

