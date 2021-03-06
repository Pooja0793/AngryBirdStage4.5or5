class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.sling1,220,120);  //right image
        image(this.sling2,193,80);   //left image
        pop();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position; //bird's point
            var pointB = this.pointB; //constraint point

        push();
        stroke(48, 22, 8);

        if(pointA.x<220){
            strokeWeight(7);
           line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
           line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);   //right string
          
        }
      else{
     strokeWeight(3);
          line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
         line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);   //right string
         //image(this.sling3,pointA.x-25,pointA.y-10,10,30)
       }
       image(this.sling3,pointA.x-25,pointA.y-10,10,30)
           pop();
         
           
        }
    }
    
}
