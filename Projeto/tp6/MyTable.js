function MyTable(scene) {
	CGFobject.call(this,scene);
	this.table=new MyUnitCubeQuad(this.scene);

};

MyTable.prototype =Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;


MyTable.prototype.display=function(){
	//Tampo da mesa
    this.scene.pushMatrix();
    this.scene.translate(0,3.75,0);
    this.scene.scale(5,0.3,3);
    this.scene.tableAppearence.apply();
	this.table.display();
	this.scene.popMatrix();
	this.scene.materialDefault.apply();

	//Perna esquerda da parte de tras
	this.scene.pushMatrix();
    this.scene.translate(-2.35,1.85,-1.35);
    this.scene.scale(0.3,3.5,0.3);	
	this.table.display();
	this.scene.popMatrix();

	//Perna direita da frente
	this.scene.pushMatrix();
    this.scene.translate(2.35,1.85,1.35);
    this.scene.scale(0.3,3.5,0.3);	
	this.table.display();
	this.scene.popMatrix();

	//Perna da direita da parte de tras
	this.scene.pushMatrix();
	this.scene.translate(2.35,1.85,-1.35);
    this.scene.scale(0.3,3.5,0.3);	
	this.table.display();
	this.scene.popMatrix();
	
	//Perna da esquerda da frente
	this.scene.pushMatrix();
    this.scene.translate(-2.35,1.85,1.35);
    this.scene.scale(0.3,3.5,0.3);	
	this.table.display();
	this.scene.popMatrix();
};