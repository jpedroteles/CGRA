/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	this.gui.add(this.scene, 'Options');

	this.gui.add(this.scene, 'Clock')	

	// add a group of controls (and open/expand by defult)
	
	var group=this.gui.addFolder("Lights");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	group.add(this.scene, 'Light0');
	group.add(this.scene, 'Light1');
	group.add(this.scene, 'Light2');
	group.add(this.scene, 'Light3');

	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'Speed', 0.1, 2);
	this.gui.add(this.scene, 'Size', 0.1, 2);

	//texturas
	this.gui.add(this.scene, 'Texturas', this.scene.robotAppearancesList);

	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */

MyInterface.prototype.processKeyboard = function(event) {
	

	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp

};

MyInterface.prototype.processKeyDown = function(event) {
	  CGFinterface.prototype.processKeyDown.call(this,event);

	if(event.keyCode == 'W'.charCodeAt(0))
        this.scene.up = true;
    else if(event.keyCode == 'S'.charCodeAt(0))
        this.scene.down = true;

	if(event.keyCode == 'A'.charCodeAt(0))
        this.scene.left = true;
    else if(event.keyCode == 'D'.charCodeAt(0))
        this.scene.right = true;

    if(event.keyCode == 'O'.charCodeAt(0))
		this.scene.animation = true;
};

MyInterface.prototype.processKeyUp = function(event) {
	  CGFinterface.prototype.processKeyUp.call(this,event);

	if(event.keyCode == 'W'.charCodeAt(0))
        this.scene.up = false;
    else if(event.keyCode == 'S'.charCodeAt(0))
        this.scene.down = false;

	if(event.keyCode == 'A'.charCodeAt(0))
        this.scene.left = false;
    else if(event.keyCode == 'D'.charCodeAt(0))
        this.scene.right = false;

    if(event.keyCode == 'O'.charCodeAt(0))
		this.scene.animation = false;
};