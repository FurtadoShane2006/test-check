class SlingShot{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:4
        }
        this.body=Constraint.create(options);
        pointB=this.pointB;
        
    }

    display(){
        if(this.body=bodyA){
            poA=this.body.bodyA.position;
            poB=pointB;

            fill ("red");
            line (poA.x,poA.y,poB.x,poB.y);
        }
    }
}