class rubber{ 
    constructor(x,y)
    {
    var options={ 
        'restitution' :0.3 ,
        'friction' :5,
        'density': 1.0
    
    }
    this.body=Bodies.circle(x,y,50,options) 
    this.radius=50; 
    World.add(world,this.body); 
    }
    
     display(){ 
     var pos=this.body.position;
    
     var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("blue");
    stroke("green");
    strokeWeight(1);
    //rectMode(CENTER); 
    circle(0,0,this.radius);
    pop();
     } 
    }
    