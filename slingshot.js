class Slingshot {
    constructor(pointA,bodyB)
    {
        var options = {
            pointA:pointA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this. sling = Constraint.create(options);
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyB = null 



    }




    display(){
        if(this.sling.bodyB){



        

        var pointa = this.sling.pointA;
        var pointb = this.sling.bodyB.position;
        strokeWeight(4);
        line (pointa.x,pointa.y,pointb.x,pointb.y)

    }

}
   

}