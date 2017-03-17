var BackGround = function(image, options) {

  this.image = image;
  this.BackIndex = 0;
  this.sprite = new Framework.Sprite(this.image[this.BackIndex]);

  /*this.ControlImage = new Framework.Sprite(define.imagePath + 'all_menu.png');
  this.ControlImage.position = {
    x: Framework.Game.getCanvasWidth() / 2,
    y: Framework.Game.getCanvasHeight() / 2
  }*/

  this.sprite.position = {
    x: Framework.Game.getCanvasWidth() / 2,
    y: Framework.Game.getCanvasHeight() / 2
  };

  this.run = function() {
    this.sprite.draw();
    //this.ControlImage.drow();
  }
};
