class Wall
{
  constructor(x,y,width,height)
  {
    this.x=x 
    this.y=y
    var options ={
        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    
    World.add(world,this.body);
    
  }
  display()
  {
    
    rectMode(CENTER)
  rect(this.x,this.y,this.width,this.height);
  }
}