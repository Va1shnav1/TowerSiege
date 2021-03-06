class Slingshot{
    constructor(bodya, pointb){
        var options = {
            bodyA: bodya,
            pointB: pointb,
            length:10,
            stiffness:0.03
        }
        this.pointB=pointb;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    display(){
        if(this.slingshot.bodyA){
            var pointA, pointB;
            pointA=this.slingshot.bodyA.position;
            pointB=this.pointB;
            stroke("grey");
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        } 
    }
    fly(){
        this.slingshot.bodyA=null;
    }
    attach(body){
        this.slingshot.bodyA=body;
    }
}