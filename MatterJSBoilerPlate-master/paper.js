class Paper{
    constructor(x,y,radius){
     var options={
         restitution:0.3,
         friction:0.7,
         density:1.2,
         isStatic:false
     }
         this.radius=radius;
         this.x=x;
         this.y=y;
         this.image=loadImage("sprites/paper.png");
         this.body=Bodies.circle(x,y,(this.radius-10),options);  
         World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push ();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        imageMode(CENTER);
        pop();
    }
}