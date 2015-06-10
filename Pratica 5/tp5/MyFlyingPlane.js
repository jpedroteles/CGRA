/**
 * MyFlyingPlane
 * @constructor
 */
 function MyFlyingPlane(scene) {
 	CGFobject.call(this,scene);

	this.wallX = 15;
	this.wallY = 4;

 	this.paperPlane = new MyPaperPlane(this.scene);
 	this.paperPlane.setFlightTime(1);
 	
	this.delta = 0;

 	this.initBuffers();
 };

 MyFlyingPlane.prototype = Object.create(CGFobject.prototype);
 MyFlyingPlane.prototype.constructor = MyFlyingPlane;

 MyFlyingPlane.prototype.display = function() {
	
	this.scene.pushMatrix();
	   if (this.paperPlane.flightTime > this.wallX - 1) {
		  if (this.paperPlane.flightTime > this.wallX + this.wallY - 0.5)
		  {  
		  	 this.scene.translate(-this.wallX + 0.5, -this.wallY + 0.01, 0);
	         this.scene.rotate(-180*degToRad,0,0,1); 
		  }
		  else
		  {	
			 this.scene.translate(-this.wallX + 0.5, 2, 0);
			 this.scene.rotate(-90*degToRad,0,0,1)
		     this.scene.translate(this.paperPlane.flightTime - this.wallX + 2.5, 0, 0);
		  }
	   }
	   else
	   {
		  this.scene.translate(-this.paperPlane.flightTime, this.paperPlane.flightTime/10, 0);
	   }
	   this.scene.rotate(-90*degToRad,0,1,0);
	   this.paperPlane.display();
	this.scene.popMatrix();
	
};

 MyFlyingPlane.prototype.update = function(currTime) {
 	if (this.delta == 0){
 	    this.paperPlane.setFlightTime(this.paperPlane.flightTime + 5* (this.delta / 1000));
 	    this.delta = currTime - this.previousTime;
        this.previousTime = currTime;
 	}	
	else
    {
	   this.delta = currTime - this.previousTime;
       this.previousTime = currTime;
 	   this.paperPlane.setFlightTime(this.paperPlane.flightTime + 5* (this.delta / 1000));
	}
};