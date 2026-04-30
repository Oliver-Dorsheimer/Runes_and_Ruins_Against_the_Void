class Actor {
    position = {x:null, y:null};
    rotation = 0;
    scale = 1;
    image;
    imageCache = {};

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