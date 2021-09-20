var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX
  rabbit.y = World.mouseY
  edges= createEdgeSprites();
  rabbit.collide(edges);
var select_sprite = Math.round(random(1,2));
if (frameCount % 80 == 0) {
  if(select_sprite == 1) {
    createApples()
  }
 else {
   createOranges()
   
 }
}
  drawSprites();
}

function createOranges() {
  orange = createSprite(random(50, 350),40, 10, 10);
  orange.addImage(leafImg) 
  orange.scale = 0.07
  orange.velocityY = 2
  orange.lifetime - 150
  }

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg) 
apple.scale = 0.07
apple.velocityY = 2
apple.lifetime = 150
}