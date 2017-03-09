var DirectoryListing = function(image, options) {
    this.url = image;
    this.sprite = new Framework.Sprite({
      {
        image
      });

      this.sprite.position = options.position || {
        x: 0,
        y: 0
      };
      this.sprite.scale = options.scale || 1; this.sprite.rotation = (Framework.Util.isUndefined(options.rotation)) ? 0 : options.rotation;

      this.run = function() {
        this.sprite.start({
          from: options.run.from,
          to: options.run.to,
          loop: true
        });
      };

      this.run();

    };
