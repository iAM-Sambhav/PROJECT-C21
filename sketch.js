var bullet,wall;
var speed, weight,thickness;


function setup() {
  createCanvas(800,400);
 
  speed= Math.round(random(55,90));
  weight=Math.round(random(400,1500));
 thickness=Math.round(random(22,83));

 bullet =createSprite(200, 150, 50, 50);
  wall=createSprite(550, 150, thickness, height/2);
  bullet.velocityX=speed
}

function draw() {
  background("black");  
  
  


  if(wall.x - bullet.x < (wall.width + bullet.width)/2){
    bullet.velocityX=0
    var damage= 0.5 * weight * speed *speed/(thickness * thickness * thickness)

  }
if(damage > 10){
  wall.shapeColor=color(255,0,0)
}
if(damage < 10){
  wall.shapeColor=color(0,255,0)
}

  drawSprites();
}