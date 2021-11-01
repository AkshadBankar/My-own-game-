var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground, invisibleGround, groundImage;
var ninja,ninja_Run_forward,ninja_Run_backward,ninja_jump,idle_ninja;


function preload(){
  

  ninja_Run_forward = loadAnimation("./assests/Run__000.png","./assests/Run__001.png","./assests/Run__002.png","./assests/Run__003.png","./assests/Run__004.png","./assests/Run__005.png","./assests/Run__006.png","./assests/Run__007.png","./assests/Run__008.png","./assests/Run__009.png");
  ninja_Run_backward = loadAnimation("./assests/Run__010.png","./assests/Run__011.png","./assests/Run__012.png","./assests/Run__013.png","./assests/Run__014.png","./assests/Run__015.png","./assests/Run__016.png","./assests/Run__017.png","./assests/Run__018.png","./assests/Run__019.png");
  idle_ninja = loadAnimation("./assests/Idle__000.png","./assests/Idle__001.png","./assests/Idle__002.png","./assests/Idle__003.png","./assests/Idle__004.png","./assests/Idle__005.png","./assests/Idle__006.png","./assests/Idle__007.png","./assests/Idle__008.png","./assests/Idle__009.png");
  groundImage = loadImage("./assests/ground.png");
  ninja_jump = loadAnimation("./assests/Jump__000.png","./assests/Jump__001.png","./assests/Jump__002.png","./assests/Jump__003.png","./assests/Jump__004.png","./assests/Jump__005.png","./assests/Jump__006.png","./assests/Jump__007.png","./assests/Jump__008.png","./assests/Jump__009.png");
}

function setup() {
  createCanvas(1200,700) ;
  
  ninja = createSprite(250,520,20,50);
  ninja.addAnimation("running", idle_ninja);
  ninja.scale = 0.3
  ground = createSprite(width/2,height-50,width,2);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = 0; 
  invisibleGround = createSprite(width/2,height-70,width,125);  
  invisibleGround.visible = false;
  
}

function draw() {
  background(180);
  
  

  if(keyDown(UP_ARROW)&& ninja.y >=350) {
    ninja.velocityY = -20;
    
}

if (keyDown(RIGHT_ARROW)) {

  ninja.addAnimation("running",ninja_Run_forward);
  ground.velocityX = -8;

}

if (keyDown(LEFT_ARROW)) {

  ninja.addAnimation("running",ninja_Run_backward);
  ground.velocityX = 8;

}

ninja.velocityY = ninja.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}


ninja.collide(invisibleGround);

  drawSprites();
}



