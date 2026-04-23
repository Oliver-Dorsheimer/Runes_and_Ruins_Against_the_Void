class Tile extends Actor {
    size;
    constructor(x, y, rotation) {
        super(x,y)
        this.size = 16;
        this.rotation = rotation;

        this.loadImage("assets/img/tileset/grass-tile-16x16.png");
    };
};