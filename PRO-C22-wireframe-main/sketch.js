const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImage;
var tower;
var towerImage;
var cannonBaseImage;
var cannonImage;
var cannon;

function preload() {
backgroundImage = loadImage("./assets/background.gif");
towerImage  = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower = Bodies.rectangle(160,350,160,310,options);
 World.add(world,tower);
 angleMode(DEGREES);
 angle=15;
 cannon =new Cannon(180,110,130,100,angle);
 
}

function draw() {
  image (backgroundImage,0,0,1200,600);
  Engine.update(engine);
 push();
 rect(ground.position.x, ground.position.y,width*2,1);
 pop();


 push();
 image(towerImage,tower.position.x,tower.position.y,160,310);
 pop();
 cannon.display();
   
}
