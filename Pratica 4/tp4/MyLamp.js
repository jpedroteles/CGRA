/**
 * MySemiSphere
 * @constructor
 */
 function MyLamp(scene,slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;
	this.radius=1;

 	this.initBuffers();
 };

 MyLamp.prototype = Object.create(CGFobject.prototype);
 MyLamp.prototype.constructor = MyLamp;

 MyLamp.prototype.initBuffers = function() {
    this.vertices = [];
 	this.indices = [];
 	this.normals = [];
    var tetaInc = (Math.PI/2)/this.stacks;
    var omegaInc= 2*Math.PI/this.slices;
    var omega=0;	
    
    for (var i = 0; i <=this.stacks; i++) { 
     var teta=0;    
      for (var k = 0; k <=this.slices; k++) {  
        this.vertices.push(Math.sin(teta)*Math.cos(omega),Math.cos(teta),Math.sin(teta)*Math.sin(omega));
        this.normals.push(Math.sin(teta)*Math.cos(omega),Math.cos(teta),Math.sin(teta)*Math.sin(omega));        
        teta += tetaInc;
      }
      omega += omegaInc;
    }
  for (var i = 0; i <this.stacks; i++) {     
      for (var k = 0; k <=this.slices; k++) {
      this.indices.push(k+this.slices*i , k+this.slices+this.slices*i  , ((1+k)%this.slices)+this.slices+this.slices*i  ) ;
      this.indices.push((k+1)%this.slices+this.slices*i, (k)%this.slices+this.slices*i , ((1+k)%this.slices)+this.slices+this.slices*i   );

      }}
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
