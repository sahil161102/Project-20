var bullet, wall;
var width = 0, weight,speed;


function setup() {
  createCanvas(1600,400);
  width = random(22,83);
  wall=createSprite(1200,200,width, height/2);
  wall.shapeColor="white";
  bullet=createSprite(200,200,20, 20);
  bullet.shapeColor="white";
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
}
function draw() {
  background("black");  
  var deformation = 0.5*speed*speed*weight/(width*width*width);
  if(hasCollided(bullet,wall)){
  if(deformation>10){
    bullet.shapeColor="Red";
  }
  else if(deformation<=10){
    bullet.shapeColor="green";
  }
  bullet.velocityX =0;
}
  drawSprites();
}
