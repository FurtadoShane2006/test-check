class Box extends BaseClass{
    constructor(x,y){
        super (this.x,this.y,50,50);
        this.body=loadImage(polygon.png);
    }

    display(){
        super.display();
    }
}