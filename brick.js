class Brick
{
  constructor(x,y)
  {
    this.width=140;
    this.height=-140;
    this.x=x 
    this.y=y
    var options ={
        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,this.width,0,options);
    
    World.add(world,this.body);
    this.img=loadImage("sprites/dustbingreen.png")
  }
  display()
  {
    
    imageMode(CENTER)
  image(this.img,this.x,this.y,this.width,this.height)
  }
}