class Slingshot{
    constructor(bodyA, pB){
        var options = {
            bodyA: bodyA,
            pointB: pB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){
    this.sling.bodyA=null;
}
    display(){
        if(this.sling.bodyA===true){
            
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}