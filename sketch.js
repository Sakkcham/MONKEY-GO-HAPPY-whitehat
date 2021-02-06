
    var monkey , monkey_running
    var banana ,bananaImage, obstacle, obstacleImage
    var FoodGroup, obstacleGroup
    var score, ground
    var survivalTime

    function preload(){


      monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

      bananaImage = loadImage("banana.png");
      obstacleImage = loadImage("obstacle.png");

       FoodGroup= new Group();
      obstacleGroup= new Group();
    }



    function setup() {
      createCanvas(700, 400);
        score = 0;
        SurvivalTime=0;

      monkey = createSprite(50,400,20,50);
      monkey.addAnimation("running",monkey_running);
      monkey.scale=0.1;

      ground = createSprite(0,400,1500,10);
      ground.shapeColor=("Brown")


    }


    function draw() {
    background("black");


      if(keyDown("space")&&monkey.y >= 350){
        monkey.velocityY=-10
        }
        monkey.velocityY = monkey.velocityY + 0.3;
        monkey.collide(ground);

        if(World.frameCount%220===0){
         fruits();
         }

        if(World.frameCount%300===0){
         pebbles();
         }

        if(monkey.isTouching(FoodGroup)){
        FoodGroup.destroyEach();
        score=score+1;
        }

        if(monkey.isTouching(obstacleGroup)){
        obstacleGroup.destroyEach();
        // the score may go in negative form, so you have to recover it.
         score=score-1;
         }

      ground.velocityX = -7; 

      ground.x = ground.width/2;


      drawSprites(); 

      fill("white") 
      textFont("Elephant");
      textSize(15);
      text("score: "+ score, 540,70);

      fill("yellow")
      survivalTime = Math.ceil(frameCount/frameRate());
      textFont("Elephant");
      textSize(15);
      text("Survival Time: "+ survivalTime,500,50)

    }

    function fruits(){
      banana=createSprite(670,Math.round(random(170,230)),10,10)
      banana.addImage(bananaImage);
      banana.scale=0.1;
      banana.velocityX=-3; 
      FoodGroup.add(banana);
      banana.lifetime=210;
    }

    function pebbles(){
      obstacle=createSprite(670,380,10,10)
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.2;
      obstacle.velocityX=-4
      obstacleGroup.add(obstacle);
      obstacle.lifetime=155;
    }