class Actor {
    position = {x:120, y:250};
    rotation = 0;
    scale = 1;
    image;

    constructor(x, y) {
        this.position = {x, y};
        this.rotation = 0;
        this.scale = 1;
    };

    loadImage(path){
        this.image = new Image;
        this.image.src = path;
    };
};