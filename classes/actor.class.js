class Actor {
    world;
    image;
    imageCache = {};
    height;
    width;
    position;
    rotation = 0;
    radius;
    scale = 1;
    speed;
    lookingDirection;
    
    constructor(x, y) {
        this.position = {x, y};
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