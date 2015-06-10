/**
* MyClock
* @constructor
*/

function MyClock(scene) {
	CGFobject.call(this,scene);

	this.cylinder = new MyCylinder(this.scene,12,1);
	this.circle = new MyCircle(this.scene,12);

	this.hours = new MyClockHand(this.scene);
	this.minutes = new MyClockHand(this.scene);
	this.seconds = new MyClockHand(this.scene);
	
	this.hours.setAngle(90);
	this.minutes.setAngle(180);
	this.seconds.setAngle(270);

	this.delta = 0;
};

MyClock.prototype =Object.create(CGFobject.prototype);
MyClock.prototype.constructor=MyClock;

MyClock.prototype.display=function(){
  	// Clock
    this.cylinder.display();
    this.scene.pushMatrix();
        this.scene.translate(0,0,1);
        this.scene.clockAppearence.apply();
        this.circle.display();
    this.scene.popMatrix();

	// Clock hands
	
		//Hours	
	this.scene.pushMatrix();
		this.scene.translate(0, 0, 1.12);
		this.scene.rotate(Math.PI * -this.hours.angle / 180, 0, 0, 1);
    	this.scene.scale(3,0.5,1);
		this.scene.blackClockHand.apply();
		this.hours.display();
	this.scene.popMatrix();

		//Minutes	
	this.scene.pushMatrix();
		this.scene.translate(0, 0, 1.11);
		this.scene.rotate(Math.PI * -this.minutes.angle / 180, 0, 0, 1);
		this.scene.scale(2,0.9,1);
		this.scene.blackClockHand.apply();
		this.minutes.display();
	this.scene.popMatrix();

		//Seconds	
	this.scene.pushMatrix();
		this.scene.translate(0, 0, 1.13);
		this.scene.rotate(-this.seconds.angle * Math.PI / 180, 0, 0, 1);
		this.scene.scale(1,0.9,1);
		this.scene.redClockHand.apply();
		this.seconds.display();
	this.scene.popMatrix();
	this.scene.materialDefault.apply();
}

MyClock.prototype.update = function(currTime) {

 	if (this.delta == 0){
 		this.hours.setAngle(this.hours.angle + (360 * (this.delta / 1000) ) / (60 * 60 * 60));
 		this.minutes.setAngle(this.minutes.angle + (360 * (this.delta / 1000) ) / (60 * 60));
 		this.seconds.setAngle(this.seconds.angle + (360 * (this.delta / 1000) ) / (60));

 	    this.delta = currTime - this.previousTime;
        this.previousTime = currTime;
 	}	
	else
    {
	   	this.delta = currTime - this.previousTime;
       	this.previousTime = currTime;
       	
 	   	this.hours.setAngle(this.hours.angle + (360 * (this.delta / 1000) ) / (60 * 60 * 60));
 		this.minutes.setAngle(this.minutes.angle + (360 * (this.delta / 1000) ) / (60 * 60));
 		this.seconds.setAngle(this.seconds.angle + (360 * (this.delta / 1000) ) / (60));
	}
};