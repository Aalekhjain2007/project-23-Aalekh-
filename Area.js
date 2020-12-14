class Area{
    constructor(x,y,width,height)
    {
     var options={
        restitution:0.3,
        friction:1.0,
        density:1.5,     
       }
    this.area=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world,this.area)
    }

    display() 
    {
         var pos=this.area.position
         var angle=this.area.angle
         push()
         translate(pos.x,pos.y)
         rotate(angle)
         fill("yellow")

          rectMode(CENTER)
          rect(0,0,this.width,this.height)
          pop()
          
        }
}