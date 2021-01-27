
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;
var Hammer;
var plane;
var Rubber;
var Sand;
var Iron;
var Stone;
var S1;
var S2;
var S3;
var S4;
var S5;
var S6;
var S7;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Hammer = new hammer(400,350);
	plane = new ground(400,690);
	Rubber = new rubber(500,600);
	Iron = new iron(100,680);
	Stone = new stone(500,680);
	S1 = new sand(400,680);
	S2 = new sand(410,680);
	S3 = new sand(420,680);
	S4 = new sand(430,680);
	S5 = new sand(440,680);
    S6 = new sand(450,680);
	S7 = new sand(460,680);
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  Hammer.display();
  plane.display();
  Rubber.display();
  Iron.display();
  Stone.display();
  S1.display();
  S2.display();
  S3.display();
  S4.display();
  S5.display();
  S6.display();
  S7.display();
  drawSprites();
 
}



