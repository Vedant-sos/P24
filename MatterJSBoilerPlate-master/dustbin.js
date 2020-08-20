class Dustbin{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
    this.width=width;
    this.height=height;
    this.image=loadImage("sprites/dustbin.png");
    this.body=Bodies.rectangle(x,y,(this.width-125)/3,(this.height-150)/3,options);
    
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        imageMode(CENTER);
        pop();
    }
}