/**
 * MyUnitCube
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyUnitCube(scene) {
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyUnitCube.prototype =Object.create(CGFobject.prototype);
MyUnitCube.prototype.constructor=MyUnitCube;

MyUnitCube.prototype.initBuffers = function () {
	this.vertices = [
            0.5, -0.5, -0.5, // Vertice A
            0.5, 0.5, -0.5, //Vertice B	
            -0.5, 0.5, -0.5, // Vertice C
            - 0.5, -0.5, -0.5, //Vertice E
             0.5, -0.5, 0.5, //Vertice F
             0.5, 0.5, 0.5, //Vertice G
             -0.5,0.5,0.5,
             -0.5,-0.5,0.5,
			];

	this.indices = [
            3, 2, 1,
            3, 1, 0, 
            5,6,7,
            4,5,7,
            1,2,6,
            5,1,6,
            3,0,4,
            7,3,4,
            0,1,5,
            4,0,5,
            2,3,7,
            2,7,6,

        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
