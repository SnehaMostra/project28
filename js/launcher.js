class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    display(){
        if(this.launch.bodyA){
        
                var pointA = this.launch.bodyA.position;
                var pointB = this.launch.pointB;
                strokeWeight(4);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }
    fly(){
        this.launch.bodyA = null;
    }
    attach(bodyA){
        this.launch.bodyA = bodyA
    }
}