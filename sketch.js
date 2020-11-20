var monkey , monkey_running;
var banana ,bananaImage; 
var obstacle, obstacleImage;
var ground;
var foodGroup, obstacleGroup;
var score;

function preload()
{
  monkey_running =       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() 
{
  createCanvas(600,300);
  
  ground = createSprite(300,300,1200,30);
  
  monkey = createSprite(30,260,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
}

function draw()   
{
  background("lightBlue");
  
  textSize(20);
  fill(0);
  text("SURVIVAL TIME = " + score,200,30);
  
  score = score + Math.round(getFrameRate()/60);
  
  spawnBananas();
  spawnObstacles();
   
  ground.velocityX = -2;
  if(ground.x < 0)
  {
    ground.x = ground.width/2;
  }   
          
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 100)
   {
   monkey.velocityY = -10;
   }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(monkey.isTouching(foodGroup))
    {
      foodGroup.destroyEach();
    }
      
  drawSprites();  
}

function spawnBananas()   
{
  if(frameCount%80 === 0)
  {
    banana = createSprite(600,Math.round(random(120,200)),20,20);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6; 
    banana.lifetime = 150;
    
    foodGroup.add(banana);
   }
}

function spawnObstacles()
{
  if(frameCount%300 === 0)
  {
     obstacle = createSprite(600,267,20,20);
     obstacle.addImage("obstacle",obstacleImage);
     obstacle.scale = 0.1;
     obstacle.velocityX = -6;
     obstacle.lifetime = 150;
    
     obstacleGroup.add(obstacle);
  }
}


