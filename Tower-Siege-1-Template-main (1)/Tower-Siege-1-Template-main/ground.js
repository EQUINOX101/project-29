class Ground{

    constructor(x,y,width,height){
        var ground_options={ 
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,900,20,ground_options)
          this.width = width;
          this.hieght = height;
          World.add(world,this.ground);
    }
    display(){
        var pos =this.body.position;
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}