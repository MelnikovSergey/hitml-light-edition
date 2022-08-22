(function(id) {

	'use strict';

	function setup() {
	
		string = 6;
	
		createCanvas(400, 250);
		background(255);
		fill(0);
	
		// Draw staff
		for(i = 1; i <= string; i++) {
			stroke(180);
			line(10, i * 32, 380, i * 32);
		}
	
		render();
	}
	
	function render() {
		//...
	}
	
	function load() {
		//...
		setup();
	}

}(document));