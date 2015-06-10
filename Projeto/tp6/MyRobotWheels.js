/**
 * MyRobotWheels
 * @constructor
 */
 function MyRobotWheels(scene,slices,stack) {
 	CGFobject.call(this,scene);

	this.wheel=new MyCylinder(scene,slices,stack);
  	this.wheelsCover= new MyCircle(scene,slices);

  	this.rotation = 0;
 
 };

 MyRobotWheels.prototype = Object.create(CGFobject.prototype);
 MyRobotWheels.prototype.constructor = MyRobotWheels;


 MyRobotWheels.prototype.display = function(){
 	this.scene.pushMatrix();
		this.scene.rotate(this.rotation*degToRad,0,0,1);
    	//tampo das rodas
    	this.scene.pushMatrix();	 
  			this.scene.translate(0,0,-0.3);
			this.scene.scale(0.3,0.3,0.3);
			this.scene.rotate(-180*degToRad,0,1,0);
			this.scene.rimAppearence.apply();
			this.wheelsCover.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();	 
			this.scene.scale(0.3,0.3,0.3);
			this.scene.rimAppearence.apply();
			this.wheelsCover.display();
		this.scene.popMatrix();

 		this.scene.pushMatrix();
			this.scene.rotate(-180*degToRad,0,1,0);
			this.scene.scale(0.3,0.3,0.3);
			this.scene.tireAppearence.apply();
			this.wheel.display();
   	 	this.scene.popMatrix();
 	this.scene.popMatrix();
 };

 MyRobotWheels.prototype.setRotation = function(newRotation){
	this.rotation += newRotation;
 }