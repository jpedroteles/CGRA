/**
 * MyRobotBody
 * @constructor
 */
 function MyRobotBody(scene,slices,stack) {
 	CGFobject.call(this,scene);

	this.body=new MyCylinder(scene,slices,stack);
  	this.bodyCover= new MyCircle(scene,slices);
 
 };

 MyRobotBody.prototype = Object.create(CGFobject.prototype);
 MyRobotBody.prototype.constructor = MyRobotBody;


 MyRobotBody.prototype.display = function(){
	this.scene.pushMatrix();
  		this.scene.translate(0,0.3,0);
		this.scene.scale(1,2,1);
		this.scene.rotate(-90*degToRad,1,0,0);	 	
		this.body.display();
	this.scene.popMatrix();

   this.scene.pushMatrix();   
		this.scene.translate(0,2.3,0);
		this.scene.rotate(-90*degToRad,1,0,0);
		this.bodyCover.display();	   
   this.scene.popMatrix();
   
    this.scene.pushMatrix();   
		this.scene.translate(0,0.3,0);
		this.scene.rotate(90*degToRad,1,0,0);
		this.bodyCover.display();	   
   this.scene.popMatrix();
 };