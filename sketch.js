const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;

let world;

var ball;

var ground;

var wedge;

var angle=60;

var poly;

var ventilador;

var bloco;

function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var bloco_options = {

    restitution:0.01,
    friction:1,
    frictionAir:0.3

  }

  var ground_options = {
    isStatic : true
  }

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ventilador = Bodies.rectangle(200,200,100,15, {isStatic: true});
  World.add(world, ventilador);

  bloco = Bodies.rectangle(350,20,10,10, bloco_options);
  World.add(world, bloco);

  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 rect(bloco.position.x, bloco.position.y, 50,50)
 
 Body.rotate(ventilador, angle);
 
 push();
 translate(ventilador.position.x, ventilador.position.y);
 rotate(angle);
 rect(0,0,100,15);
 pop();

 angle += 0.1;
}

