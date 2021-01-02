
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground;
var dustbin1, dustbin2, dustbin3;
var blank;

function preload(){
  dustbinImg = loadImage("sprites/dustbingreen.png");
  paperImg = loadImage("sprites/paper.png");
}

function setup() {
	createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  blank = createSprite(960,460,120,120);
  blank.addImage(dustbinImg);
  blank.scale = 0.45;

  ground = new Ground(550,550,1300,20);

  paper = new Paper(); 
  
  dustBin1 = new Dustbin(902,465,10,120);
  dustBin2 = new Dustbin(962,530,130,10);
  dustbin3 = new Dustbin(1022,465,10,120);
}


function draw() {
  background("lightgrey");
  drawSprites();
  Engine.update(engine);

   paper.display();
   ground.display();
   dustBin1.display();
   dustBin2.display(); 
   dustbin3.display();

}

function keyPressed() {
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body, paper.body.position,{x:70,y:-70});

  }
}




