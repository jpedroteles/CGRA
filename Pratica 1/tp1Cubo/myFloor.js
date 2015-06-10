function myFloor(scene) {
	CGFobject.call(this,scene);
	this.floor=new MyUnitCubeQuad(this.scene);

};

myFloor.prototype =Object.create(CGFobject.prototype);
myFloor.prototype.constructor=myFloor;

myFloor.prototype.display=function(){
    this.scene.pushMatrix();
    this.scene.translate(0,0.05,0);
    this.scene.scale(8,0.1,6);	
	this.floor.display();
	
};