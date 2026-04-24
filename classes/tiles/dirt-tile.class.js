class DirtTile extends Tile {
    size;
    constructor(x, y) {
        super(x,y);
        this.loadImage("assets/img/tileset/dirt-tile-64x64.png");
    };
};

class GrassTile extends Tile {
    size;
    constructor(x, y) {
        super(x,y);
        this.loadImage("assets/img/tileset/grass-tile-16x16.png");
    };
};