const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,brick1,brick2,brick3,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);

  brick2 = createSprite(990,200,50,1000);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,380,1200,20);

    brick1=new Brick(900,300);
      
    ball=new Ball(100,350,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
    
  brick2.shapeColor="white";

  ground.display();
  brick1.display();
  brick2.display(); 
  ball.display();

  
  drawSprites();
 
}

function keyPressed()
  {
    if(keyCode===UP_ARROW)
    {
      Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-45});
      
    }
  }


