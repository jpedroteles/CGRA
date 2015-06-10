/**
 * MyClockHand
 * @constructor
 */
function MyClockHand(scene) {
	CGFobject.call(this,scene);

	this.quad=new MyQuad(this.scene);
	this.quad.initBuffers();

	this.angle = 0;
};

MyClockHand.prototype = Object.create(CGFobject.prototype);
MyClockHand.prototype.constructor=MyClockHand;


MyClockHand.prototype.display=function(){
    this.scene.pushMatrix();
    	this.scene.translate(0,0.5,0);
    	this.scene.scale(0.02,1,1);
    	this.quad.display();
    this.scene.popMatrix();
}

 MyClockHand.prototype.setAngle = function(angle) {
	this.angle = angle;
};