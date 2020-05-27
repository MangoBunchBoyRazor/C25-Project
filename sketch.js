const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,wall1,wall2,wall3,ground;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	wall1 = new Dustbin(600,270,200);
	paper = new Paper(100,100,50);
	ground = Bodies.rectangle(width/2,height,800,50,{isStatic: true});
	World.add(world,ground);

	Engine.run(engine);  
	let render = Render.create({
		engine: engine,
		element: document.body
	});
	Render.run(render);

	gameState = "play";
}
function draw() {
  rectMode(CENTER);
  background(100);
  
  drawSprites();
  paper.display();
  rectMode(CENTER);
  fill(255);
  rect(ground.position.x,ground.position.y,800,50);
  wall1.display();

  if(mouseIsPressed){
	paper.setPosition(mouseX,mouseY);
  }
  let pos = paper.body.position;
  if(pos.x > wall1.body.position.x && pos.x < wall1.body2.position.x && pos.y > wall1.yPos-wall1.size/2)
	  gameState = "done";
	  
  if(gameState === "done"){
	  push();
	  textAlign(CENTER);
	  textSize(20);
	  fill(255,0,0);
	  text("You did it. Press r to restart",200,50);
	  pop();
   }
   //console.log(paper.body.position.y,wall.);
}
function keyPressed(){
	if(keyCode===UP_ARROW)
		Body.applyForce(paper.body,wall1.body.position,{
			x: 93.25,
			y: -110
	});
	if(key === 'r'){
		paper.setPosition(100,100);
		gameState = "play";
	}
}