const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,brick1,brick2,brick3,ball;
var wall1;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,380,1200,20);

    brick1=new Brick(900,300);
    ball=new Ball(100,350,30);
    wall1=new Wall(822,310,20,120);
    wall2=new Wall(970,310,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
    
  

  ground.display();
  brick1.display();
  wall1.display();
  wall2.display();
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


