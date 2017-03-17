var cow = function(options) {

  var cows = [
    define.imagePath + 'cow_action1.png',
    define.imagePath + 'cow_action2.png'
  ];

  this.sprite = new Framework.AnimationSprite({
    url: cows,
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
    this.sprite.start({
      from: 0,
      to: 1
    });
  };

  this.run();

};
