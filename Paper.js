class Paper{
    constructor(x,y,r){
        this.xPos = x;
        this.yPos = y;
        let options = {
            restitution: 0,
            friction: 1,
            density: 1.2
        };
        this.body = Bodies.circle(this.xPos,this.yPos,r/2,options);
        World.add(world,this.body);
        this.radius = r;
        this.image = loadImage("pics/paper.png");
    }
    display(){
        let pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();
    }
    setPosition(x,y){
        this.xPos = x;
        this.yPos = y;
        Body.setPosition(this.body,{
            x: x,
            y: y
        });
        Body.setVelocity(this.body,{
            x:0,
            y:0
        });
    }
}