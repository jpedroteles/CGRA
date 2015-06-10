 function MyCircle(scene, slices) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
 	this.initBuffers();
 };

 MyCircle.prototype = Object.create(CGFobject.prototype);
 MyCircle.prototype.constructor = MyCircle;

 MyCircle.prototype.initBuffers = function() {

 	this.vertices = [0,0,0];
 	this.indices=[];
 	this.normals = [0,0,1];
    this.texCoords = [0.5,0.5]; 	

    var ang = (360/this.slices) * (Math.PI / 180.0);

    for(var i = 0; i < this.slices; i++){
        this.vertices.push(Math.cos(ang*i), Math.sin(ang*i), 0);
        this.normals.push(0,0,1);
        this.texCoords.push(Math.cos(ang*i)/2 + 0.5, -Math.sin(ang*i)/2 + 0.5);
    }

    for (i = 1; i < this.slices; i++){
        this.indices.push(0,i,i+1);
    }
    this.indices.push(0,this.slices,1);
    
    
    this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();

 }