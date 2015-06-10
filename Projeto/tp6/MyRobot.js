/**
 * MyRobot
 * @constructor
 */
 function MyRobot(scene,slices,stack) {
 	CGFobject.call(this,scene);
 	 	
 	this.initBuffers();

	this.armLeft = new MyRobotArms(scene,slices,stack,1);
	this.armRight = new MyRobotArms(scene,slices,stack,0);
	this.body = new MyRobotBody(scene,slices,stack);
  	this.bodyCover = new MyCircle(scene,slices);
  	this.head = new MyLamp(scene, slices, stack);
  	this.wheelsLeft = new MyRobotWheels(scene,slices,stack);
  	this.wheelsRight = new MyRobotWheels(scene,slices,stack);
    
    
 	this.rotation = -150 * degToRad;
 	this.speedBar = 1;
 	this.sizeBar = 1;

 	this.posX = 3;
 	this.posY = 3;
 	this.speed = 0;

 	this.drag = 0.2;
 	this.brakes = 0.5;
 	this.frontAccel = 0.6;
 	this.backAccel = 0.4;

 	this.wave = false;
 	
 };

 MyRobot.prototype = Object.create(CGFobject.prototype);
 MyRobot.prototype.constructor = MyRobot;


 MyRobot.prototype.display = function(){
	//Set size
 	this.scene.pushMatrix()
 		this.scene.scale(this.sizeBar,this.sizeBar,this.sizeBar);
		
		//Robot body
		this.scene.pushMatrix();
			this.body.display();
		this.scene.popMatrix();

   		//Robot head
   		this.scene.pushMatrix();
			this.scene.translate(0,2.35, 0);
			this.scene.rotate(-90*degToRad,1,0,0);
			this.head.display();
		this.scene.popMatrix();

		//Robot arms
	 	this.scene.pushMatrix();
	 		this.scene.rotate(-90*degToRad,0,1,0);  
			this.scene.translate(0,2,-1.25);
			this.armLeft.display();
		this.scene.popMatrix();

	 	this.scene.pushMatrix(); 
	 		this.scene.rotate(-90*degToRad,0,1,0);
			this.scene.translate(0,2,1.25);		
			this.armRight.display();
		this.scene.popMatrix();


		//Robot wheels
		this.scene.pushMatrix();
		 	this.scene.rotate(-90*degToRad,0,1,0);
			this.scene.translate(0,0.3,-1);
			this.wheelsLeft.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
	 		this.scene.rotate(90*degToRad,0,1,0);
			this.scene.translate(0,0.3,-1);
			this.wheelsRight.display();
		this.scene.popMatrix();

	this.scene.popMatrix();
 }

 MyRobot.prototype.MoveW = function(){
 	 //Front acceleration
 	 if (this.speed + this.frontAccel > 2)
 	 	this.speed = 2;
 	 else
 	 	this.speed += this.frontAccel;
 }

 MyRobot.prototype.MoveA = function(){
     if(this.sizeBar < 0.5)
 	 	this.rotation += this.speedBar/2 * 2.5 * 15*degToRad;
     else 
     	this.rotation += this.speedBar/2 * (3-this.sizeBar) * 15*degToRad;
     

     this.wheelsLeft.setRotation(15);
     this.wheelsRight.setRotation(15);
 }

 MyRobot.prototype.MoveS = function(){
 	 //Brake
     if (this.speed > 0 && this.speed - this.brakes < 0)
     	this.speed = 0;
     else if(this.speed > 0)
 	 	this.speed -= this.brakes;
	 
	 //Back acceleration
 	 if(this.speed - this.backAccel < -1.5)
 	 	this.speed = -1.5;
 	 else
 	 	this.speed -= this.backAccel;
 }

 MyRobot.prototype.MoveD = function(){
 	 if(this.sizeBar < 0.5)
 	 	this.rotation -= this.speedBar/2 * 2.5 * 15*degToRad;
     else 
     	this.rotation -= this.speedBar/2 * (3-this.sizeBar) * 15*degToRad;

      	 
     this.wheelsLeft.setRotation(-15);
     this.wheelsRight.setRotation(-15);
 }

 MyRobot.prototype.AnimationH = function(){
     this.armRight.startAnimation();
     this.wave = true;
 }

 MyRobot.prototype.setSpeed = function(newSpeed){
 	this.speedBar = newSpeed;
 }

 MyRobot.prototype.setSize = function(newSize){
 	this.sizeBar = newSize;
 }

 MyRobot.prototype.update = function (){
	//Movement drag
 	if (this.speed > 0 && this.speed - this.drag < 0)
 		this.speed = 0;
 	else if (this.speed > 0)
 		this.speed -= this.drag;
 	if (this.speed < 0 && this.speed + this.drag > 0)
 		this.speed = 0;	
 	else if (this.speed < 0)
 		this.speed += this.drag;
	
	//Wheels and arms rotation
 	if (this.speed > 0){
 		this.wheelsLeft.setRotation(-20 * this.speed);
     	this.wheelsRight.setRotation(20 * this.speed);
 		this.armLeft.moveAnimation();
     	this.armRight.moveAnimation();
 	}
 	else if (this.speed < 0){
 		this.wheelsLeft.setRotation(-20 * this.speed);
    	this.wheelsRight.setRotation(20 * this.speed);
 		this.armLeft.moveAnimation();
     	this.armRight.moveAnimation();
 	}
 	else if (this.speed == 0){
 		this.armLeft.resetArms();
 		this.armRight.resetArms();
 	}	

 	this.posX += this.speedBar/2 * this.speed * Math.sin(this.rotation);
    this.posY += this.speedBar/2 * this.speed * Math.cos(this.rotation);

    if(this.wave){
    	this.armRight.update();
    }
 }
