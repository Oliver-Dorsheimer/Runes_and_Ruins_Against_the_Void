class World{
    playerCharacter = new PlayerCharacter(150, 160);
    tileSize = 64;
    tiles = [];
    ctx;
    canvas;

    noiseDensity = 50;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.loadTiles();
        this.generateTiles();
    };

    draw(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.tiles.forEach(tile => {
            this.ctx.drawImage(tile.image, tile.position.x, tile.position.y, this.tileSize, this.tileSize);
        });
        this.ctx.drawImage(this.playerCharacter.image, this.playerCharacter.position.x, this.playerCharacter.position.y, 200, 300);
        self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    };
    loadTiles(){
        for(let i = 0; i < this.canvas.width / this.tileSize; i++){
            this.tiles.push(new Tile(0 + i * this.tileSize,0));
            for(let j = 0; j < this.canvas.height / this.tileSize; j++){
                if(Math.random*100 < 30){
                    this.tiles.push(new Tile(0 + i * this.tileSize,j * this.tileSize,45));
                };
                this.tiles.push(new Tile(0 + i * this.tileSize,j * this.tileSize,0));
            };
        };
    };
    generateNoiseMap(density){
        noiseMap = [];
        for(let i = 0; i < this.canvas.width / this.tileSize; i++){
            random = (Math.random() + 0.1) * 100;
            if(random > this.noiseDensity){

            }else{

            }
            for(let j = 0; j < this.canvas.height / this.tileSize; j++){
                if(Math.random*100 < 30){
                    this.tiles.push(new Tile(0 + i * 64,j * 64,45));
                };
                this.tiles.push(new Tile(0 + i * 64,j * 64,0));
            };
        };
    };
    generateTiles(){

    };
};