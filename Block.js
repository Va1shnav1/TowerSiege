class Block{
    constructor(x, y, w, h){
        var options={
            restitution:0.5,
            density:1,
            friction:1
        }
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
        if(this.body.speed>2.3){
            score=score+1;
        }
    }
    display(){
        push();
        var pos=this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}