class BaseClass{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            'friction':0.1,
            'restitution':1,
            'density':1.2
        }

        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }

    display(){
        pos=this.body.position;

        push ();
        translate (pos.x,pos.y);
        strokeWeight (2)
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop ();
    }
}