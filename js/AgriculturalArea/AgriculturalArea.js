var AgriculturalArea = Framework.Class(Framework.Level, {
  load: function() {
    var characterPosition;

    var cows = [
      define.imagePath + 'cow_faceLeft.jpg',
      define.imagePath + 'cow_faceRight.jpg',
    ];

    this.isStop = false;
    this.isPlayed = false;

    this.BackGround = new Framework.Sprite(define.imagePath + 'emptyFarm.jpg');
    this.BackGround.position = {
      x: Framework.Game.getCanvasWidth() / 2,
      y: Framework.Game.getCanvasHeight() / 2
    }
    this.BackGround.scale = 0.9;


    this.cow = new Framework.AnimationSprite({
      url: cows,
      loop: true,
      speed: 0.1
    });
    this.cow.position = {
      x: 0,
      y: 0
    };

    this.center = new Framework.Scene();
    this.center.position = {
      x: Framework.Game.getCanvasWidth() / 2,
      y: Framework.Game.getCanvasHeight() / 2
    };

    this.center.attach(this.cow);
    this.rootScene.attach(this.BackGround);
    this.rootScene.attach(this.center);


    this.cow.start();

  }



});
