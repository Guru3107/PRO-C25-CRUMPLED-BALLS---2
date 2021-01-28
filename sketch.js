var paper, groundSprite

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	paperimage = loadImage("sprites/paper.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite = createSprite(width / 2, 650, width, 10);
	groundSprite.shapeColor = color(255, 255, 0)

	paper = Bodies.circle(200, 200, 25, { restitution: 0.5, isStatic: false, friction: 0.5, density: 1.5 });
	World.add(world, paper);

	Engine.run(engine);

	binBottom = new bin(600, 640, 90, 10)
	binLeft = new bin(550, 600, 10, 100)
	binRight = new bin(650, 600, 10, 100)

	rightWall = Bodies.rectangle(650, 580, 10, 120, { isStatic: true });
	World.add(world, rightWall);

	leftWall = Bodies.rectangle(550, 580, 10, 120, { isStatic: true });
	World.add(world, leftWall);

	ground = Bodies.rectangle(width / 2, 660, width, 20, { isStatic: true });
	World.add(world, ground);

}


function draw() {

	rectMode(CENTER);
	background("White");

	binRight.display()
	binBottom.display()
	binLeft.display()

	push();
	translate(paper.position.x, paper.position.y);
	rotate(paper.angle);
	//ellipseMode(RADIUS);
	//fill("red");
	//ellipse(0, 0, 20, 20);
	imageMode(CENTER)
	image(paperimage, 0, 0, 70, 70);
	pop();



	/*rectMode(CENTER);
	fill("red");
	rect(rightWall.position.x, rightWall.position.y, 10, 120);

	rectMode(CENTER);
	fill("red");
	rect(leftWall.position.x, leftWall.position.y, 10, 120);
*/

	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper, paper.position, { x: 110, y: -120 });
	}
}


