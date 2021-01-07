class Ball{
    constructor(x,y,radius){

        var options={
           density:0.5, 
        }
        this.radius=radius

        this.body=Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)
    }
    display(){

        var pos=this.body.position

        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius*2,this.radius*2)
    }
}