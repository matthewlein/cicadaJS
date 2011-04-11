/*
 * cicadaJS
 * matthewlein.com/cicadajs
 * 
 * Developed by Matthew Lein
 * matthewlein.com
 * 
 * Released under the MIT license.
 * Please leave this license info and author info intact.
 * 
 * Copyright 2011
 */ 

var cicada = {
	
	supportsCanvas : function() {
		var elem = document.createElement( 'canvas' );
		return !!(elem.getContext && elem.getContext('2d'));
	},
	
	// nabbed from http://www.hunlock.com/blogs/Mastering_Javascript_Arrays#quickIDX34
	isArray : function(testObject) {   
	    return testObject && !(testObject.propertyIsEnumerable('length')) && typeof testObject === 'object' && typeof testObject.length === 'number';
	},

	stripe : function(canvas, options) {
		
		var ctx = canvas.getContext('2d'),
			cWidth = canvas.width,
			cHeight = canvas.height;

		for (var j=0; j < options.length; j++) {
	
			var current = options[j],
				
				// default to left
				alignment = current.alignment || 'left',
	
				tile = current.width,
				stripeWidth = Math.ceil(tile/2),
				repeats = cWidth / tile,
				offset = 0;

			if (alignment === 'middle') {
				offset = stripeWidth/2;
			} else if (alignment === 'right') {
				offset = stripeWidth;
			}
	
			for (var i=0; i < repeats; i++) {
		
				if ( cicada.isArray(current.color) ) {
					// I'm hoping its an array of colors
					var lingrad = ctx.createLinearGradient( (tile * i) + offset, 0, (tile * i) + offset + stripeWidth, 0),
						
						//get the number of color stops needed
						stopAmount = 1 / (current.color.length - 1 );
					
					// put in the color stops evenly across the rectangle	
					for (var k=0; k < current.color.length; k++) {
						lingrad.addColorStop( stopAmount * k , current.color[k] );
					}
			
					ctx.fillStyle = lingrad;
		
				} else {
					// its a plain old string color
					ctx.fillStyle = current.color;
				}
				
				ctx.fillRect( (tile * i) + offset , 0, stripeWidth, cHeight);
	
			}
	
		}
	
	}


};

if ( cicada.supportsCanvas ) {
	// prototype the cicada method onto canvas
	HTMLCanvasElement.prototype.cicada = function ( options ) { 
		// pass in the img and options
		cicada.stripe( this, options );
	};
}