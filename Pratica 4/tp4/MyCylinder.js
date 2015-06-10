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
 	this.indices=[];
 	this.normals = []; 	
	this.texCoords = [];


	var ang = (360/this.slices) * (Math.PI / 180.0);
	var nVertFace = 2*this.stacks +2;
	var x = 0, y = 0;

	for (var k = 0; k <= this.stacks; k++){
		for (var i = 0; i < this.slices; i++){	 
			this.vertices.push(Math.cos(ang*i), Math.sin(ang*i), k* 1/this.stacks);
			this.normals.push(Math.cos(ang*i),Math.sin(ang*i),0);

			if (k < this.stacks) {
				this.indices.push(k*this.slices+i, k*this.slices+((i+1)%this.slices), (k+1)*this.slices+(i+1)%this.slices);
				this.indices.push(k*this.slices+i, (k+1)*this.slices+((i+1)%this.slices), (k+1)*this.slices+i);
			}
			
			this.texCoords.push(x,y);
			x = x + 1/this.stacks;
		}
		x = 0;
 		y = y + 1/this.stacks;
	}
	
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
