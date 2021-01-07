class Box{

    constructor(x,y){
    var options=
    {
      restitution:0.8,
      friction:1,
      density:0.04
    }
    this.width=50
    this.height=50
    this.body=Bodies.rectangle(x,y,this.width,this.height,options)
    World.add(world,this.body)
    }
    display()
    {
        var angle=this.body.angle;
        
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}