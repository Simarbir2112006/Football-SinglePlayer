var player1,player2,ball,bg_img,reset,reset_img;
 var redge, ledge, tedge, dedge;
 var p_side,p1_side,p2_side;
 var c_side,c1_side,c2_side;
 var p_score=0,c_score=0;
 const play=0;
 const end=1;
 var gameState=play;
 var p_an,p2_an;
 var goal,goal_img;
 var go,go_img;

 function preload(){
  bg_img=loadImage("bg.jpg");

  reset_img=loadImage("RESET.png");

  p_an=loadAnimation("player12.png","player11.png");

  p2_an=loadAnimation("player21.png","player22.png");

  goal_img=loadImage("goal.png");

  go_img=loadImage("game over.png");
 }

 function setup() {
  createCanvas(windowWidth,windowHeight);
 
  player1 = new Player(windowWidth/3,windowHeight/2);
  player1.body.addAnimation("running",p_an);

  player2 = new Player(windowWidth/1.5,windowHeight/2);
  player2.body.addAnimation("run",p2_an);

  ball = new Ball(windowWidth/2,windowHeight/2);

  ledge=createSprite(0,windowHeight/2,10,windowHeight);
  ledge.shapeColor="#91B632";

  redge=createSprite(windowWidth,windowHeight/2,10,windowHeight);
  redge.shapeColor="#91B632";

  tedge=createSprite(windowWidth/2,0,windowWidth,10);
  tedge.shapeColor="#91B632";

  dedge=createSprite(windowWidth/2,windowHeight,windowWidth,10);
  dedge.shapeColor="#91B632";  

  p_side=createSprite(windowWidth/18.5,windowHeight/2+6,15,windowHeight/4);
  p_side.shapeColor="white";

  p1_side=createSprite(windowWidth/32,windowHeight/1.56,windowWidth/18,15);
  p1_side.shapeColor="white";

  p2_side=createSprite(windowWidth/32,windowHeight/2.64,windowWidth/18,15);
  p2_side.shapeColor="white";

  c_side=createSprite(windowWidth/1.05,windowHeight/2+6,15,windowHeight/4);
  c_side.shapeColor="white";

  c1_side=createSprite(windowWidth/1.025,windowHeight/1.56,windowWidth/18,15);
  c1_side.shapeColor="white";

  c2_side=createSprite(windowWidth/1.025,windowHeight/2.64,windowWidth/18,15);
  c2_side.shapeColor="white";

  reset=createSprite(windowWidth/2,windowHeight/1.15,20,20)
  reset.addImage(reset_img);
  reset.scale=0.4;

  goal=createSprite(windowWidth/2,windowHeight/4,10,10);
  goal.addImage(goal_img);

  go=createSprite(windowWidth/2,windowHeight/2.5,10,10);
  go.addImage(go_img);
  go.scale=0.7;
 }

 function draw() {
  background(bg_img);  
 
  reset.visible=false;
  goal.visible=false;
  go.visible=false;

  player1.body.bounce(ball.body);
  player2.body.bounce(ball.body);
  player1.body.collide(player2.body);


  ball.body.bounceOff(p1_side);
  ball.body.bounceOff(p2_side);
  ball.body.bounceOff(c1_side);
  ball.body.bounceOff(c2_side);

  player1.body.collide(p_side);
  player1.body.collide(p1_side);
  player1.body.collide(p2_side);
  player1.body.collide(c_side);
  player1.body.collide(c1_side);
  player1.body.collide(c2_side);

  player2.body.collide(p_side);
  player2.body.collide(p1_side);
  player2.body.collide(p2_side);
  player2.body.collide(c_side);
  player2.body.collide(c1_side);
  player2.body.collide(c2_side);

  ball.body.bounceOff(ledge);
  ball.body.bounceOff(redge);
  ball.body.bounceOff(tedge);
  ball.body.bounceOff(dedge);

  player1.body.collide(ledge);
  player1.body.collide(redge);
  player1.body.collide(tedge);
  player1.body.collide(dedge);

  player2.body.collide(ledge);
  player2.body.collide(redge);
  player2.body.collide(tedge);
  player2.body.collide(dedge);

  if(ball.body.collide(c_side)){
    p_score++

    ball.body.x=windowWidth/2;
    ball.body.y=windowHeight/2;
    ball.body.velocityX=0;
    ball.body.velocityY=0;

    player1.body.x=windowWidth/3;
    player1.body.y=windowHeight/2;
    player1.body.velocityX=0;
    player1.body.velocityY=0;

    player2.body.x=windowWidth/1.5;
    player2.body.y=windowHeight/2;
    player2.body.velocityX=0;
    player2.body.velocityY=0;

    //goal.visible=true;
  };

  if(ball.body.collide(p_side)){
    c_score++

    ball.body.x=windowWidth/2;
    ball.body.y=windowHeight/2;
    ball.body.velocityX=0;
    ball.body.velocityY=0;

    player1.body.x=windowWidth/3;
    player1.body.y=windowHeight/2;
    player1.body.velocityX=0;
    player1.body.velocityY=0;

    player2.body.x=windowWidth/1.5;
    player2.body.y=windowHeight/2;
    player2.body.velocityX=0;
    player2.body.velocityY=0;

    //goal.visible=true;
  };

  console.log(p_score);

  textAlign(CENTER);
  textFont('Showcard Gothic');
  fill(0,0,128);
  textSize(80);
  text(p_score +":" +c_score,windowWidth/2,windowHeight/8);

  if(gameState=play){
    keyPressed();
  }

  if(p_score===3||c_score===3){
    gameState=end; 
  };

  if(gameState===end){

    ball.body.x=windowWidth/2;
    ball.body.y=windowHeight/2;
    ball.body.velocityX=0;
    ball.body.velocityY=0;

    player1.body.x=windowWidth/3;
    player1.body.y=windowHeight/2;
    player1.body.velocityX=0;
    player1.body.velocityY=0;

    player2.body.x=windowWidth/1.5;
    player2.body.y=windowHeight/2;
    player2.body.velocityX=0;
    player2.body.velocityY=0;

    if(mousePressedOver(reset)){
      gameState=play;
      p_score=0;
      c_score=0;
    }

    go.visible=true;

    textSize(50);
    text("Click the reset button to restart the game",windowWidth/2,windowHeight/1.4);

    reset.visible=true;
  };

  console.log(gameState);
  drawSprites();
 }

 function keyPressed(){
   if(keyCode===87){
     player1.body.velocityX=0;
     player1.body.velocityY=-2;
     console.log("up");
   }


   else if(keyCode===83){
     player1.body.velocityX=0;
     player1.body.velocityY=2;
     console.log("down");
   }
  

   else if(keyCode===65){
     player1.body.velocityX=-2;
     player1.body.velocityY=0;
     console.log("left");
   }
  

   else if(keyCode===68){
    player1.body.velocityX=2;
    player1.body.velocityY=0;
    console.log("right");
   }

    //2nd player
   if(keyCode===38){
    player2.body.velocityX=0;
    player2.body.velocityY=-2;
    console.log("up");
   }


   else if(keyCode===40){
    player2.body.velocityX=0;
    player2.body.velocityY=2;
    console.log("down");
   }
 

   else if(keyCode===37){
    player2.body.velocityX=-2;
    player2.body.velocityY=0;
    console.log("left");
   }
 

   else if(keyCode===39){
     player2.body.velocityX=2;
     player2.body.velocityY=0;
     console.log("right");
   }
}

