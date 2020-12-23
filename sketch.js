
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var dustbin1,dustbin2,dustbin3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    

	ground=new Ground(600,height,1200,20);
	dustbin1=new Dustbin(550,630,200,170);
	//dustbin2=new Dustbin(550,680,280,20);
	//dustbin3=new Dustbin(700,630,20,120);
	paper=new Paper(100,630,50,50);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  paper.display();
}
function keyPressed(){
   if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
   }
}



