function Ball(x,y){
	this.r = 25;
	this.pos = createVector(x, y - this.r);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
   
	
	this.show = function(){
		fill(140,10,90);
		ellipse(this.pos.x, this.pos.y, 20, this.r);
		
	}
	
	
	this.collide = function(object){
		for(var j = 0; j < object.length; j++){
			var i = object[j];
			var hit = collideRectCircle(i.x, i.y, i.w, i.h, this.pos.x, this.pos.y, this.r);
			
			if(hit && this.vel.y >= 0){
				if(this.vel.y > 6 && object[j].type != platformTypeEnum.BOOSTER) {
					this.vel.y = 6;
				}
				
				if(object[j].type != platformTypeEnum.BOOSTER) {
					this.vel.y *= -1;
				}
				else {
					if(this.vel.y <= 1){
						this.vel.y = 1.5;
						this.vel.y *= -4;  //Extra boost if to slow already
					}
					else if(this.vel.y < 3) {
						this.vel.y *= -2.2; // Boost has penalty if already fast enough
					}
					else {
						this.vel.y *= -1.75;
					}
					object[j].type = platformTypeEnum.NORMAL;
				}
				
				this.pos.y = i.y - this.r/2;
			}
		}		
	}
	
	
	this.update = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.applyForce = function(force){
		this.acc.add(force); 
	}
	
	this.dampX = function(){
		this.vel.x *= 0.1;
	}

	this.move = function(velx){
		if(abs(this.vel.x + velx) < 3) {
			this.vel.x += velx;
		}
	}
	
	this.checkEdge = function(){
		if (this.pos.x < 0){
			this.pos.x = width;
		}
		
		if (this.pos.x > width){
			this.pos.x = 0;
		}
		
		if(this.pos.y > height){
			gameOver = true;
		}
	}
	
	this.getPos = function(){
		return this.pos;
	}
	
	this.getVel = function(){
		return this.vel;
	}
}