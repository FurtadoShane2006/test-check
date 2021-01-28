const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;

function setup(){
    createCanvas (window.innerWidth, window.innerHeight);
    engine = Engine.create();
	world = engine.world;

    //ground:
    mainGround=new Ground(window.innerWidth*0,window.innerHeight-10,10000,30);
    g1=new Ground(window.innerWidth-260,window.innerHeight-400,500,10);
    g2=new Ground(window.innerWidth-850,window.innerHeight-200,500,10);

    //stone:


    //string:
    sling=new SlingShot(g1,{x:20,y:200});

    //object:
    //b1=new Box(20,20);

    Engine.run(engine);
}

function draw(){
    background("black");
    Engine.update(engine);

    //ground:
    mainGround.display();    
    g1.display();
    g2.display();

    //stone:

    
    //string:
    sling.display();

    //object:
    //b1.display();
}    