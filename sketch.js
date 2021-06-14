const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var ground;
var hero
var slingshot;
function preload() {
//preload the images here

}

function setup() {
  createCanvas(1280, 610);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(640,610,1280,20)
  hero = new Hero(50,100,100);
  slingshot = new Fly(hero.body,{x:250,y:225});

  Engine.run(engine);
  
  

}

function draw() {
  background(220);
  x = mouseX;
  y = mouseY;
  ground.display();
  hero.display();
  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
