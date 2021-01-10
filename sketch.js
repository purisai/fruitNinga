var play=1
var end=0
var gameState=1
var sword, swordImg
var fruitsGroup, fruit1, fruit2, fruit3, fruit4,fruit,r
var enemyGroup, enemy_moving
var monster
var gameOver
var score =0


function preload(){
  enemy_moving=loadAnimation("alien1.png","alien2.png")
  gameOver=loadImage("gameover.png")
  swordImg=loadImage("sword.png")
  fruit1Img=loadImage("fruit1.png")
  fruit2Img=loadImage("fruit2.png")
  fruit3Img=loadImage("fruit3.png")
  fruit4Img=loadImage("fruit4.png")
  alien1=loadImage("alien1.png")
  alien2=loadImage("alien2.png")
  
  
  
  fruitsGroup=new Group()
  enemyGroup=new Group()
  
 
}

function setup(){
  createCanvas(600,600)
  sword=createSprite(60,200,20,20)
  sword.addImage(swordImg)
  sword.scale=0.7
}

function draw(){
  
  if(gameState===1){
    background("lightblue");
    sword.x=World.mouseX
    sword.y=World.mouseY
    
    
    
    fruits();
    enemy();
    
  if(sword.isTouching(fruitsGroup)){
      fruitsGroup.destroyEach();
      score=score+2
  }
  text("score:"+score,500,30)
  
  if(sword.isTouching(enemyGroup)){
      gameState=0
    
  
  }
    
  }
  
  if(gameState===0){
    background(0)
    fruitsGroup.destroyEach();
    enemyGroup.destroyEach();
    fruit.velocityX=0
    
    monster.velocityX=0
    score=0
    sword.addImage(gameOver)
    sword.x=300
    sword.y=300
    
  }
  
  drawSprites()
  
}


function fruits(){
  if(frameCount%80===0){
    fruit=createSprite(600,200,20,20)
    fruit.scale=0.2
    r=Math.round(random(1,4))
    if(r===1){
      fruit.addImage(fruit1Img)
    }else if(r===2){
      fruit.addImage(fruit2Img)
    }else if(r===3){
      fruit.addImage(fruit3Img)
    }else if(r===4){
      fruit.addImage(fruit4Img)
    }
    
    fruit.y=Math.round(random(50,540))
    
    fruit.velocityX=-7
    fruit.setLifetime=80
    
    
    fruitsGroup.add(fruit)
  }
}



function enemy(){
  if(frameCount%200===0){
    monster=createSprite(600,200,20,20)
    monster.addAnimation("moving",enemy_moving)
    monster.y=Math.round(random(50,540))
    monster.velocityX=-7
    monster.setLifetime=80
    enemyGroup.add(monster)
  }
}








