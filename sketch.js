var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 650);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true, friction:10.0});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true, friction:10.0} );
 	World.add(world, ground);

    groundSprite_options = {
		isStatic: false
	}

	Engine.run(engine);

	bar1 = new Red(250,600,20,100);
	bar2 = new Red(550,600,20,100);
	bar3 = new Red(400,640,300,15);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  groundSprite.x= ground.position.x
  groundSprite.y= ground.position.y
  drawSprites();
  bar1.display();
  bar2.display();
  bar3.display();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic (packageBody, false);
 }
}




