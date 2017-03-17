var straw = function(image, options){
	this.sprite = new Framework.Sprite('Straw.png');
	
	this.sprite.position = options.position || {
   		x: 0,
    	y: 0
  };
 	this.sprite.scale = options.scale || 1;
 	

};

