class Hero {
    constructor(x,y,r) {
      var options = {
          density:1,
          restitution:1,
          friction:2,
          width:360,
          height:640

      };
        this.x=x;
		this.y=y;
		this.r=r
		this.image = loadImage("hero.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
    }
    display(){
        var heropos=this.body.position;		

        push()
        translate(heropos.x, heropos.y);
        rectMode(CENTER)
        //strokeWeight(4);
        fill(255,0,255)
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        
        //ellipse(0,0,this.r, this.r);
        pop()
    }
  }
