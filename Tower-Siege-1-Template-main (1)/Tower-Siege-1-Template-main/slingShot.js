class SlingShot{
    constructor(bodyA, pointB) {
        var options = {
              bodyA: bodyA,
              pointB: pointB,
              stiffness: 0.04,
              length: 20
        }
        this.pointB = pointB
        this.SlingShot = Constraint.create(options);
        World.add(world, this.body);
      }

      fly(){
          this.SlingShot.bodyA=null
      }

      display(){
    if(this.SlingShot.bodyA){
        var pointA = this.SlingShot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
      }
}
