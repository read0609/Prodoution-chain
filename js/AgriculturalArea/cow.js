var cow = function(image, options) {
  this.sprite = new Framework.AnimationSprite({
    url: image,
    loop: true,
    speed: 2
  });

  this.sprite.position = options.position || {
    x: 0,
    y: 0
  };
  this.sprite.scale = options.scale || 1;
  this.sprite.rotation = (Framework.Util.isUndefined(options.rotation)) ? 0 : options.rotation;

  this.run = function() {
    this.sprite.start();
  };

  this.run();

};
