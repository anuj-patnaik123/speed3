var road , roadImg;
var car , carImg;
var gv , gvImg
var ps,psImg
var box1;
var Play = 1
var End = 0;
var gameState = "Play"
var score = 0
var redcr,silvercr,yellowcr,car1,car2,car3;
var redGroup,yellowGroup,silverGroup;
var sound;
var restart,restartImg;
var win,winImg;
var edge;



function preload(){
  roadImg = loadImage("car.jpeg");
  carImg = loadImage("sport1.jpeg");
  car1 = loadImage("car1.jpeg");
  car2 = loadImage("car2.jpeg");
  car3 = loadImage("car4.jpeg");
  gvImg = loadImage("gv1.jpeg");
  psImg = loadImage("pressstart.jpeg");
  sound = loadSound("Komiku_-_12_-_Bicycle.mp3");
  restartImg = loadImage("rs.jpeg");
  winImg = loadImage("win1.jpeg");
  


}

function setup(){
  createCanvas(600,600);

  

  road = createSprite(200,500,1800,1020);
  road.addImage("moving",roadImg);
  road.scale=1.5
  
  
  

  car = createSprite(200,350);
  car.addImage("moving",carImg);
  car.scale = 0.4
 

  gv = createSprite(300,300,1000,1020);
  gv.addImage(gvImg);
  gv.visible=false;
  gv.scale=2
  

  box1 = createSprite(205,340,100,100);
  box1.visible = false;

  

  restart = createSprite(200,300);
  restart.addImage(restartImg);
  restart.scale=0.2
  restart.visible=false;


  redGroup = new Group();
  yellowGroup = new Group();
  silverGroup = new Group();

  ps = createSprite(200,200);
  ps.addImage(psImg);
  ps.scale = 0.19

  win = createSprite(200,100);
  win.addImage(winImg);
  win.visible = false;
  win.scale = 0.5;

  edge = createEdgeSprites();

  sound.loop();




}
function draw(){
  background(0)

  

 if(mousePressedOver(ps)){
   gameState=Play
  
 }
 


  



  if(gameState===Play){
    road.velocityY=5;

    road.velocityY = (5 + 5* score/50);
    

    if(road.y>400){
        road.y = road.height/4
        
    }

    ps.visible = false;

   

    if(keyDown("LEFT_ARROW")){
        car.x = car.position.x - 5
        
      }
      if(keyDown("RIGHT_ARROW")){
        car.x = car.position.x + 5
        
      }
      if(keyDown("l")){
        car.x = car.position.x - 5
      }
      if(keyDown("r")){
        car.x = car.position.x + 5
      }


      
     


      spawnRedcr();
  spawnSilvercr();
  spawnyellowcr();
 

 


    
    
    
      score = score+Math.round(frameRate()/60);


      if(score>0 && score%1200 === 0){
        win.visible = true;
    
        gameState = End;
        
            
    
            
     }

      if(redGroup.isTouching(car)||yellowGroup.isTouching(car)||silverGroup.isTouching(car)||car.isTouching(edge)){
        gameState=End
      }
      

  }
  else if(gameState===End){

        gv.visible=true;
        restart.visible=true;

        redGroup.destroyEach();
        yellowGroup.destroyEach();
        silverGroup.destroyEach();

        redGroup .setLifetimeEach(-1);
        yellowGroup .setLifetimeEach(-1);
        silverGroup.setLifetimeEach(-1);
     
        redGroup .setLifetimeEach(-1);
        yellowGroup .setLifetimeEach(-1);
        silverGroup.setVelocityYEach(0);
        

        road.setvelocityY = 0

        

        

      

  }


  

  if(mousePressedOver(restart)) {
    reset();
  
  }

  drawSprites();

  textSize(20);
  fill(255);
  text("score: "+ score,150,50);

  

}

function spawnRedcr(){
  if(frameCount%40===0){
    redcr = createSprite(100,0,10,10);
    redcr.addImage("moving",car1);
    redcr.velocityY=17
    redcr.scale=0.3;
    redcr.lifetime = 200
    redcr.x = Math.round(random(0,200))
    redGroup.add(redcr);
  }

  
}
function spawnSilvercr(){
  if(frameCount%40===0){
    silvercr = createSprite(100,0,10,10);
    silvercr.addImage("moving",car2);
    silvercr.scale=0.3;
    silvercr.velocityY=17
    silvercr.lifetime = 200
    silvercr.x = Math.round(random(210,400))
    silverGroup.add(silvercr);
  }
 
  
}

function spawnyellowcr(){
  if(frameCount%40===0){
    yellowcr = createSprite(100,0,10,10);
    yellowcr.addImage("moving",car3);
    yellowcr.scale=0.3;
    yellowcr.velocityY=20

    yellowcr.lifetime = 200
    yellowcr.x = Math.round(random(220,600))
    yellowGroup.add(yellowcr)
  }

  


 

}
function reset(){
  gameState=Play;

  restart.visible = false;
  gv.visible = false;

  win.visible = false;

  score = 0

  car.x = 200;
  car.y = 350;


}




