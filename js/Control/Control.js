var Control = Framework.Class(Framework.Level, {
  load: function() {
    this.isStop = false;
    this.isPlayed = false;

    //背景設定
    this.Control = new Framework.Sprite(define.imagePath + 'all_menu.png');
    this.Control.position = {
      x: Framework.Game.getCanvasWidth() / 2,
      y: Framework.Game.getCanvasHeight() / 2
    }

    //控制鈕的圖片路徑
    var AgriAreaPath = define.imagePath + 'buttomOfCow1.png';
    var BussinessPath = define.imagePath + 'buttomOfCow1.png';
    var FeedingAreaPath = define.imagePath + 'buttomOfCow1.png';
    var RestaurantPath = define.imagePath + 'buttomOfCow1.png';

    //控制鈕的圖片位置
    var AgriAreaPosition = {
      x: -700,
      y: 255
    };
    var FeedingAreaPosition = {
      x: -590,
      y: 295
    };
    var RestaurantPosition = {
      x: -490,
      y: 342
    };
    var BussinessPosition = {
      x: -400,
      y: 415
    };


    //新增按鈕
    this.button_AgriArea = new button(AgriAreaPath, {
      position: AgriAreaPosition,
      BackIndex: 0
    });
    this.button_FeedingArea = new button(FeedingAreaPath, {
      position: FeedingAreaPosition,
      BackIndex: 1
    });
    this.button_Restaurant = new button(RestaurantPath, {
      position: RestaurantPosition,
      BackIndex: 2
    });
    this.button_Bussiness = new button(BussinessPath, {
      position: BussinessPosition,
      BackIndex: 3
    });

    var BackGrounds = [
      define.imagePath + 'emptyFarm.jpg',
      define.imagePath + 'buttomOfCow1.png',
      define.imagePath + 'cow_action1.png',
      define.imagePath + 'growingStraw.png'
    ];


    this.BackGround = new BackGround(BackGrounds);


    //控制鈕的畫布
    this.center = new Framework.Scene();
    this.center.position = {
      x: Framework.Game.getCanvasWidth() / 2,
      y: Framework.Game.getCanvasHeight() / 2
    };

    this.center.attach(this.button_AgriArea.sprite);
    this.center.attach(this.button_FeedingArea.sprite);
    this.center.attach(this.button_Restaurant.sprite);
    this.center.attach(this.button_Bussiness.sprite);

    this.rootScene.attach(this.BackGround.sprite);
    this.rootScene.attach(this.Control);
    //this.BackGround.run();
    this.rootScene.attach(this.center);

    //this.BackGround.sprite.start();

  },

  update: function() {
    this.rootScene.update();
  },

  mousedown: function(e) {
    this.previousTouch = {
      x: e.x,
      y: e.y
    };
    if (this.previousTouch.x > this.button_AgriArea.sprite.upperLeft.x && this.previousTouch.x < this.button_AgriArea.sprite.upperRight.x && this.previousTouch.y > this.button_AgriArea.sprite.upperLeft.y && this.previousTouch.y < this.button_AgriArea.sprite.lowerLeft.y) {
      this.BackGround.BackIndex = this.button_AgriArea.BackIndex;
      //this.BackGround.run();
    }
    if (this.previousTouch.x > this.button_FeedingArea.sprite.upperLeft.x && this.previousTouch.x < this.button_FeedingArea.sprite.upperRight.x && this.previousTouch.y > this.button_FeedingArea.sprite.upperLeft.y && this.previousTouch.y < this.button_FeedingArea.sprite.lowerLeft.y) {
      this.BackGround.BackIndex = this.button_FeedingArea.BackIndex;
    }
    if (this.previousTouch.x > this.button_Restaurant.sprite.upperLeft.x && this.previousTouch.x < this.button_Restaurant.sprite.upperRight.x && this.previousTouch.y > this.button_Restaurant.sprite.upperLeft.y && this.previousTouch.y < this.button_Restaurant.sprite.lowerLeft.y) {
      this.BackGround.BackIndex = this.button_Restaurant.BackIndex;
    }
    if (this.previousTouch.x > this.button_Bussiness.sprite.upperLeft.x && this.previousTouch.x < this.button_Bussiness.sprite.upperRight.x && this.previousTouch.y > this.button_Bussiness.sprite.upperLeft.y && this.previousTouch.y < this.button_Bussiness.sprite.lowerLeft.y) {
      this.BackGround.BackIndex = this.button_Bussiness.BackIndex;
    }
  }

});
