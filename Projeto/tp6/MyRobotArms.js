/**
 * MyRobotArms
 * @constructor
 */
 function MyRobotArms(scene,slices,stack,direction) {
 	CGFobject.call(this,scene);

	this.arm=new MyCylinder(scene,slices,stack);
	this.armTop= new MyLamp(scene,slices,stack);
    
    if (direction == 0)
		this.reverseDirection = false;
	else this.reverseDirection = true;

	this.rotation = 180;
	this.incRotation = 10;
	this.armDrag = 15;

	this.animation = false;
	this.raiseArm = false;
	this.raiseRotation = 180;

	this.waveCount = 0;
	this.waveRotation = 0;
	//Wave motions
	this.out = true;
	this.in = false;
	this.reset = false;
	this.resetArm = false;
 };

 MyRobotArms.prototype = Object.create(CGFobject.prototype);
 MyRobotArms.prototype.constructor = MyRobotArms;

 MyRobotArms.prototype.display = function(){
    
  this.scene.pushMatrix();
    	//Arm position
    	if (!this.animation)
			this.scene.rotate(this.rotation*degToRad,0,0,1);
		else {
			this.scene.rotate(this.raiseRotation*degToRad,0,0,1);
			if(this.raiseRotation == 360){
				this.scene.rotate(this.waveRotation*degToRad,1,0,0)
			}
		}


    	//Arm structure    
    	this.scene.pushMatrix();  
			this.scene.translate(0,1,0);
			this.scene.scale(0.2,0.2,0.2);
			this.scene.rotate(-90*degToRad,1,0,0);
			this.armTop.display();
		this.scene.popMatrix();
	
		this.scene.pushMatrix();  
			this.scene.scale(0.2,1,0.2);
			this.scene.rotate(-90*degToRad,1,0,0);
			this.arm.display();
		this.scene.popMatrix();	

		this.scene.pushMatrix();  
			this.scene.scale(0.2,0.2,0.2);
			this.scene.rotate(90*degToRad,1,0,0);
			this.armTop.display();
		this.scene.popMatrix();

	this.scene.popMatrix();
 }

  MyRobotArms.prototype.moveAnimation = function(){
  	if (this.reverseDirection){
  		if (this.rotation - this.incRotation <= 130){
  			this.rotation = 130;
  			this.reverseDirection = false;
  		}
  		else this.rotation -= this.incRotation;
 	}
 	else {
  		if (this.rotation + this.incRotation >= 230){
  			this.rotation = 230;
  			this.reverseDirection = true;
 		}
		else this.rotation += this.incRotation; 
  	}
 }

  MyRobotArms.prototype.moveAnimation = function(){
  	if (this.reverseDirection){
  		if (this.rotation - this.incRotation <= 130){
  			this.rotation = 130;
  			this.reverseDirection = false;
  		}
  		else this.rotation -= this.incRotation;
 	}
 	else {
  		if (this.rotation + this.incRotation >= 230){
  			this.rotation = 230;
  			this.reverseDirection = true;
 		}
		else this.rotation += this.incRotation; 
  	}
 }

 MyRobotArms.prototype.resetArms = function(){
 	if (this.reverseDirection){
 		if (this.rotation + this.armDrag >= 180){
 			this.rotation = 180;
 		}
 		else	
 			this.rotation += this.armDrag;
 	}
 	else 
 		if (this.rotation - this.armDrag <= 180){
 			this.rotation = 180;
 		}
 		else	
 			this.rotation -= this.armDrag;
 }

 MyRobotArms.prototype.startAnimation = function(){
 	this.animation = true;
 	this.raiseArm = true;
 }

 MyRobotArms.prototype.raiseAnimation = function(){
 	if (this.raiseRotation + 20 <= 360)
 		this.raiseRotation += 20;
 	else {
 		this.raiseRotation = 360;
 		this.waveCount = 1;
 	}
 }

 MyRobotArms.prototype.dropAnimation = function(){
	if (this.raiseRotation - 20 >= 180)
		this.raiseRotation -= 20;
	else {
		this.animation = false;
		this.raiseArm = false;
		this.raiseRotation = 180;
		this.waveCount = 0;
	}
 }

 MyRobotArms.prototype.waveAnimation = function(){
 	//Outwards motion
 	if (this.out){	
 		if (this.waveRotation + 10 <= 40)
 			this.waveRotation += 10;
 		else if (this.waveRotation == 40){
 			this.out = false;
 			this.in = true;
 		}
 	}
 	//Inwards motion
 	else if (this.in) {
 		if (this.waveRotation - 10 >= -10)
 			this.waveRotation -= 10;
 		else if (this.waveRotation == -10){
 			this.in = false;
 			this.reset = true;
 		}
 	}
 	//Reset motion
 	else {
 		if (this.waveRotation + 10 <= 0)
 			this.waveRotation += 10;
 		else if (this.waveRotation == 0){
 			this.reset = false;
 			this.out = true;
 			this.waveCount++;
 		}
 	}
 }
		
 MyRobotArms.prototype.update = function(){
 	if (this.waveCount == 0){
 		this.raiseAnimation();
 	}
 	else if (this.waveCount <= 3)
 		this.waveAnimation();
 	else
 		this.dropAnimation();
 }
