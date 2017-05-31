function PlatformGenerator(){
	this.platforms = [];
	this.nrOfPlatforms = 0;
	this.w = 40;
	this.h = 5;
	this.chunkSize = 25;
	this.nrOfGenerated = 0;
	
	this.init = function(w, h, nrOfPlatforms){
		this.platforms = [];
		for(var i = height; i >= 0; i -= height/this.chunkSize){
			this.addPlatform(i);
		}
	}
 	
	this.show = function(){
		for (var i = 0; i < this.platforms.length; i++) {
			this.platforms[i].show();
		}		
	}
	
	this.scrollAll = function(dir){
		for (var i = 0; i < this.platforms.length; i++) {
			this.platforms[i].y += dir;
			if(this.platforms[i].y > height + 40){
				this.platforms.splice(i,1);
				this.addPlatform();
				this.nrOfGenerated ++;
			}
		}	
	}
	
	this.addPlatform = function(i){
		x = random(0 - this.w/2, width - this.w/2);	  
		y = random(i, i+ (height / this.chunkSize) - this.h);
		this.platforms.push(new Platform(x, y, random(25,40), this.h));	
		 

	}
	
	this.getObjects = function() {
		return this.platforms;
	}
	
	this.getGenerated = function(){
	return this.nrOfGenerated;
	}
}
	