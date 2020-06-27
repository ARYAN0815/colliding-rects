var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
fixedRect=createSprite(400, 200, 100, 50);
fixedRect.shapeColor="red";
//fixedRect.debug=true;
movingRect=createSprite(100,100,50,100);
movingRect.shapeColor="blue";
//movingRect.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="red";
  }
  drawSprites();
}