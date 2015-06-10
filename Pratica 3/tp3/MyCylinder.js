/**
 * MyPrism
 * @constructor
 */
 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {

 	this.vertices = [];
 	this.indices = [];
 	this.normals = [];

	var ang = (360/this.slices) * (Math.PI / 180.0);
	var nVertFace = 2*this.stacks +2;

	for (var i = 0; i < this.slices; i++){	
		for (var k = 0; k <= this.stacks; k++) {
			this.vertices.push(Math.cos(ang*i), Math.sin(ang*i), k* 1/this.stacks);
			this.vertices.push(Math.cos(ang*i+ang), Math.sin(ang*i+ang),k * 1/this.stacks);
			this.normals.push(Math.cos(ang*i),Math.sin(ang*i),0);
			this.normals.push(Math.cos(ang*i+ang),Math.sin(ang*i+ang),0);
			
			if (k != 0) {
				this.indices.push(0 +i*nVertFace+2*(k-1), 1 +i*nVertFace+2*(k-1), 2 +i*nVertFace+2*(k-1));
				this.indices.push(1 +i*nVertFace+2*(k-1), 3 +i*nVertFace+2*(k-1), 2 +i*nVertFace+2*(k-1));
			}			
		}
	}

	
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
