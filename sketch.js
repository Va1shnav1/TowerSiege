const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground, platform, stand1, stand2;
var ablock1, ablock2, ablock3, ablock4, ablock5, ablock6;
var ablock7, ablock8, ablock9, ablock10, ablock11, ablock12;
var ablock13, ablock14, ablock15, ablock16, ablock17, ablock18;
var bblock1, bblock2, bblock3, bblock4, bblock5, bblock6;
var bblock7, bblock8, bblock9, bblock10, bblock11, bblock12;
var bblock13, bblock14, bblock15, bblock16, bblock17, bblock18;
var polygon, slingshot;
var score=0;
function preload(){
    polygonImg = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height,1200,20);
    platform = new Ground(150, 205, 100, 10);
    stand1 = new Ground(505, 330, 220, 10);
    stand2 = new Ground(800, 160, 230, 10);
    ablock1 = new Block(430, 310, 30, 40);
    ablock2 = new Block(460, 310, 30, 40);
    ablock3 = new Block(490, 310, 30, 40);
    ablock4 = new Block(520, 310, 30, 40);
    ablock5 = new Block(550, 310, 30, 40);
    ablock6 = new Block(580, 310, 30, 40);
    
    ablock7 = new Block(460, 270, 30, 40);
    ablock8 = new Block(490, 270, 30, 40);
    ablock9 = new Block(520, 270, 30, 40);
    ablock10 = new Block(550, 270, 30, 40);
    
    ablock11 = new Block(490, 230, 30, 40);
    ablock12 = new Block(520, 230, 30, 40);

    bblock1 = new Block(730, 140, 30, 40);
    bblock2 = new Block(760, 140, 30, 40);
    bblock3 = new Block(790, 140, 30, 40);
    bblock4 = new Block(820, 140, 30, 40);
    bblock5 = new Block(850, 140, 30, 40);
    bblock6 = new Block(880, 140, 30, 40);
    
    bblock7 = new Block(760, 100, 30, 40);
    bblock8 = new Block(790, 100, 30, 40);
    bblock9 = new Block(820, 100, 30, 40);
    bblock10 = new Block(850, 100, 30, 40);
    
    bblock11 = new Block(790, 60, 30, 40);
    bblock12 = new Block(820, 60, 30, 40);

    polygon = Bodies.circle(50, 100, 20, {density:3});
    World.add(world, polygon);
    slingshot = new Slingshot(this.polygon, {x:150, y:150});
}
function draw(){
    background(0);
    Engine.update(engine);

    fill("lightgrey");
    ground.display();
    fill("darkblue")
    platform.display();
    stand1.display();
    stand2.display();
    fill("green");
    ablock1.display();
    ablock2.display();
    ablock3.display();
    ablock4.display();
    ablock5.display();
    ablock6.display();
    ablock7.display();
    ablock8.display();
    ablock9.display();
    ablock10.display();
    ablock11.display();
    ablock12.display();

    fill("pink");
    bblock1.display();
    bblock2.display();
    bblock3.display();
    bblock4.display();
    bblock5.display();
    bblock6.display();
    bblock7.display();
    bblock8.display();
    bblock9.display();
    bblock10.display();
    bblock11.display();
    bblock12.display();
    slingshot.display();
   
    fill("lavender");
    text("Drag and release the shape to knock over the towers", 300, 75);
    text("Score:"+score, 1100, 50);
    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(polygon.body, {x:50, y:100});
        slingshot.attach(polygon.body);
    }
}