class Actor {
    world;
    image;
    imageCache = {};
    height;
    width;
    radius;
    scale = 1;

    position = new Vector2D(0, 0);
    lookingDirection = new Vector2D(0, 0);
    rotation = 0;
    physicsVelocity = new Vector2D(0, 0);
    speed;

    constructor(x, y) {
        this.position = new Vector2D(x, y);
        this.rotation = 0;
        this.scale = 1;
    };

    loadImage(path){
        this.image = new Image;
        this.image.src = path;
    };

    loadImages(array){
        array.forEach(path => {
            let img = new Image;
            img.src = path;
            this.imageCache[path] = img;
        });
    };
};