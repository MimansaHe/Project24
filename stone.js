class stone{ 

    constructor(x,y)
    {
    var options={ 
        'restitution' :0.8 ,
        'friction' :1.9,
        'density': 1.0
    
    }
    this.body=Bodies.rectangle(x,y,40,40,options) 
    this.width=40; this.height=40; 
    World.add(world,this.body); 
    }
    
     display(){ 
     var pos=this.body.position;
    
     var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("grey");
    stroke("black");
    strokeWeight(2);
    rectMode(CENTER); 
    rect(0,0,this.width,this.height);
    pop();
     } 
    }
    