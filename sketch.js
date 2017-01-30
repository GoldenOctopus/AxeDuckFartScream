
  var axe
  var axex
  var axey
  var quiet = 1
  var duck
  

function preload() {
axe = loadImage("assets/axe.png");
duck = loadImage("assets/DUCK.png")
Fartz = loadSound('assets/Fart.mp3');
yell = loadSound('assets/yell.mp3');
}
  
function setup() {
  Fartz.setVolume(1);
  Fartz.play();
  createCanvas(1000, 600);
  imageMode(CENTER);
  axex = 1000
  axey = -50
}

function draw() {
 yell.setVolume(quiet);
 yell.play()
  background(135, 206, 250);
  fill(247, 230, 150);
  noStroke(0);
  rect(-3, 525, 1006, 100);
  fill(0);
  ellipse(500, 350, 50);
  stroke(0);
  strokeWeight(7);
  line(500, 350, 500, 460);
  line(500, 460, 480, 550);
  line(500, 460, 520, 550);
  line(500, 390, 480, 470);
  line(500, 390, 520, 470);
  image(axe, axex, axey, 100, 100);
  axex = axex - 10;
  axey = axey + 10;
  fill(255, 0, 0);
  image(duck, mouseX, mouseY)
}

function mousePressed() {
  if (quiet = 1) {
   quiet = 0;
  } else {
   quiet = 1;
  }
}
