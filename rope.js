class Rope{

    constructor(bodyA,pointB){

        var options=
        {
            bodyA:bodyA,
            pointB:pointB,
           length:200,
           stiffness:1.5
        }
        this.pointB=pointB;
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
        }

    display(){
     
        
        stroke("blue")
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}