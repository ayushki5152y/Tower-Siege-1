class Polygon{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.polygon=loadImage("sprites/polygon.png");

        this.pointB = pointB
        this.polygon = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){
        image(this.polygon,200,20);
        if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x<220){
               strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            }
            else{
                strokeWeight(3);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            }
              pop();

        }
    }
    
}