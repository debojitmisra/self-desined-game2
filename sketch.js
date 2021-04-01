var garden_img,images_img,house_img,diamond_img,car1_img,sec2_img,laser_img,thief_img,cave_img
var images,house,diamond,car1,sec2,laser,thief,cave;
var play;
var end;
function preload () {
  images_img=loadImage("images/images.png")
  house_img=loadImage("images/HOUSE.jpg")
  diamond_img=loadImage("images/diamond.jpg")
  laser_img=loadImage("images/LASER 1.png")
  car1_img=loadImage("images/car1.png")
  sec2_img=loadImage("images/SEC2.jpg")
  thief_img=loadImage("images/THIEF.jpg")
  garden_img=loadImage("images/garden.jpg")
  cave_img=loadImage('images/cave.jpg')
}

function setup() {
  createCanvas(700,500);
  

  diamond = createSprite (590,453,10,10);
  diamond.addImage(diamond_img)
  diamond.scale=0.07
  diamond.setCollider("rectangle",0,0,diamond.width,diamond.height)
  diamond.debug=true
 

  thief = createSprite (10,100,10,10);
  thief.addImage(thief_img)
  thief.scale=0.09
  thief.setCollider("rectangle",0,0,thief.width,thief.height)
  thief.debug=true

  sec2 = createSprite (220,230,10,10);
  sec2.addImage(sec2_img)
  sec2.scale=0.09
  sec2.velocityX=40
  sec2.velocityY=0


  
  car1 = createSprite (300,300,10,10);
  car1.addImage(car1_img)
  car1.scale=0.09
  car1.velocityX=40
  car1.velocityY=0
  
  laser = createSprite (200,200,100,10);
  laser.shapeColor=("red")
  laser.velocityX=10
  laser.velocityY=0

  laser2 = createSprite (400,400,100,10);
  laser2.shapeColor=("red")
  laser2.velocityX=20
  laser2.velocityY=0


  house = createSprite (610,450,10,10);
  house.addImage(house_img)
  house.scale=0.5

  cave = createSprite (10,50,10,10);
  cave.addImage(cave_img)
  cave.scale=0.5
  
  cave.setCollider("rectangle",0,0,cave.width,cave.height)
  cave.debug=true




}

function draw() {
  background(garden_img);
  edges=createEdgeSprites()
  sec2.bounceOff(edges[1])
  sec2.bounceOff(edges[0])
  car1.bounceOff(edges[1])
  car1.bounceOff(edges[0])
  thief.bounceOff(edges[0])
  thief.bounceOff(edges[1])
  thief.bounceOff(edges[2])
  thief.bounceOff(edges[3])
  laser.bounceOff(edges[1])
  laser.bounceOff(edges[0])
  laser2.bounceOff(edges[1])
  laser2.bounceOff(edges[0])
  diamond.bounceOff(thief)
  diamond.bounceOff(edges)


  if (keyDown(DOWN_ARROW) ) {
    thief.velocityX=0
    thief.velocityY=5
  }
  
  if (keyDown(UP_ARROW) ) {
    thief.velocityX=0
    thief.velocityY=-5
  }

  if (keyDown(LEFT_ARROW) ) {
    thief.velocityX=-5
    thief.velocityY=0
  }

  if (keyDown(RIGHT_ARROW) ) {
    thief.velocityX=5
    thief.velocityY=0
  }

//  if(diamond.isTouching(cave)){
//     //trex.velocityY = -12;
//     setVelocityXEach(0)
  
//  if(car1.isTouching(thief)){
//     //trex.velocityY = -12;
      
//     setVelocityXEach(0)
      

    
    

 imageMode(CENTER)
 
  drawSprites();
  }
 
