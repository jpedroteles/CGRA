/**
 * MyRobot
 * @constructor
 */
 function MyWall(scene) {
 	CGFobject.call(this,scene);
    
 	this.topWall=new MyQuad(scene, 0.96 , 0.04 , -0.3 , 0.04);
 	this.bottomWall=new MyQuad(scene, 0.96 , 0.04 , 0.96, 1.3);
 	this.leftWall=new MyQuad(scene, 0.96 , 2 , -0.4, 1.4);
	this.rightWall=new MyQuad(scene, - 1, 0.04, -0.4, 1.4);
 };

 MyWall.prototype = Object.create(CGFobject.prototype);
 MyWall.prototype.constructor = MyWall;


 MyWall.prototype.display = function(){

  
   this.scene.pushMatrix();
         this.scene.scale(1/3,1,1);
         this.scene.translate(-1,0,0);
         this.rightWall.display();
    this.scene.popMatrix();

     this.scene.pushMatrix();
         this.scene.scale(1/3,1,1);
         this.scene.translate(1,0,0);
         this.leftWall.display();
    this.scene.popMatrix();

     this.scene.pushMatrix();
         this.scene.scale(1/3,1/4,1);
         this.scene.translate(0,1.5,0);
         this.topWall.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
         this.scene.scale(1/3,1/4,1);
         this.scene.translate(0,-1.5,0);
         this.bottomWall.display();
    this.scene.popMatrix();
  
 };