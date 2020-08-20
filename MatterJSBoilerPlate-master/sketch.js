
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,ground,dustbin1,dustbin2,dustbin3,maindustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperball= new Paper(200,300,70);
    ground=new Ground(400,630,800,20);

    dustbin1=new Dustbin2(650,605,150,20);
    dustbin2=new Dustbin2(575,545,20,140);
    dustbin3=new Dustbin2(725,545,20,140);

    maindustbin=new Dustbin(585,415,140,200);

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Engine.update(engine);
  
  drawSprites();
  paperball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  maindustbin.display();
  keyPressed();
}



