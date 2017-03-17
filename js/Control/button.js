var button = function(image, options) {
  this.sprite = new Framework.Sprite(image);
  this.sprite.position = options.position || {
    x: 0,
    y: 0
  };
  this.BackIndex = options.BackIndex;
};
