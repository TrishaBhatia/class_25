class Ball
{
  constructor(x,y,radius)
  {
    var options ={
        isStatic: false,
        restitution:0,
        density:0.3
    }
     
    this.body = Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world,this.body);
    this.img=loadImage("sprites/paper.png");
  }
  display()
  {
    var pos=this.body.position;
    var angle=this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
  image(this.img,0,0,this.radius,this.radius)
  pop()
  }
}
