/**
 * MyPaperPlane
 * @constructor
 */
 function MyPaperPlane(scene) {
 	CGFobject.call(this,scene);
	this.flightTime = 0;
 	 	
 	this.initBuffers();
 };

 MyPaperPlane.prototype = Object.create(CGFobject.prototype);
 MyPaperPlane.prototype.constructor = MyPaperPlane;

 MyPaperPlane.prototype.initBuffers = function() {
	
 	this.vertices = [];
	this.indices = [];
 	this.normals = [];
	
	//Right Triangle

		//Top
	this.vertices.push(0.1,0,0)
	this.vertices.push(0,0,1)
	this.vertices.push(0.5,0,0)

	this.normals.push(0,1,0);
	this.normals.push(0,1,0);
	this.normals.push(0,1,0);

	this.indices.push(0,1,2);
	
		//Bottom
	this.vertices.push(0.1,0,0)
	this.vertices.push(0,0,1)
	this.vertices.push(0.5,0,0)
	
	this.normals.push(0,-1,0);
	this.normals.push(0,-1,0);
	this.normals.push(0,-1,0);

	this.indices.push(5,4,3);


	//Left Triangle

		//Top
	this.vertices.push(-0.5,0,0)
	this.vertices.push(0,0,1);
	this.vertices.push(-0.1,0,0);

	this.normals.push(0,1,0);
	this.normals.push(0,1,0);
	this.normals.push(0,1,0);

	this.indices.push(6,7,8);

		//Bottom
	this.vertices.push(-0.5,0,0)
	this.vertices.push(0,0,1);
	this.vertices.push(-0.1,0,0);

	this.normals.push(0,-1,0);
	this.normals.push(0,-1,0);
	this.normals.push(0,-1,0);

	this.indices.push(11,10,9);


	//Inner Right Triangle

		//Top
	this.vertices.push(0.1,0,0);
	this.vertices.push(0,-0.2,0);
	this.vertices.push(0,0,1);
	
	this.normals.push(-0.2,0.1,-0.02);
	this.normals.push(-0.2,0.1,-0.02);
	this.normals.push(-0.2,0.1,-0.02);
	
	this.indices.push(12,13,14);
		
		//Bottom
	this.vertices.push(0.1,0,0);
	this.vertices.push(0,-0.2,0);
	this.vertices.push(0,0,1);

	this.normals.push(0.2,-0.1,0.02);
	this.normals.push(0.2,-0.1,0.02);
	this.normals.push(0.2,-0.1,0.02);
	
	this.indices.push(17,16,15);


	//Inner Left Triangle
		
		//Top
	this.vertices.push(-0.1,0,0);
	this.vertices.push(0,0,1);
	this.vertices.push(0,-0.2,0);

	this.normals.push(0.2,0.1,-0.02);
	this.normals.push(0.2,0.1,-0.02);
	this.normals.push(0.2,0.1,-0.02);

	this.indices.push(18,19,20);

		//Bottom
	this.vertices.push(-0.1,0,0);
	this.vertices.push(0,0,1);
	this.vertices.push(0,-0.2,0);

	this.normals.push(-0.2,-0.1,0.02);
	this.normals.push(-0.2,-0.1,0.02);
	this.normals.push(-0.2,-0.1,0.02);
	
	this.indices.push(23,22,21);

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();

 };

 MyPaperPlane.prototype.setFlightTime = function(flightTime) {
 	this.flightTime = flightTime;
 };