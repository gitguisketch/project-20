
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var plane
var options
var block1
var block2
var block3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
  rectMode()
  fill()
  ellipseMode()
	//Crie os Corpos Aqui.
    var plane
	 isStatic=true
	Engine.update(engine);

	var block1_options ={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
  
	var block2_options ={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

    var block3_options ={
        restitution:0.01,
		friction:0.01,
		frictionAir:0.3
	}
		
block1 = bodies.circle(220,10,10,block1_options)
World.add(world,block1)

block2 = bodies.rectangle(110,50,10,10,block2_options)
World.add(world,block2)

block3 = bodies.rectangle(350,50,10,10,block3_options)
World.add(world,block3)

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


}
