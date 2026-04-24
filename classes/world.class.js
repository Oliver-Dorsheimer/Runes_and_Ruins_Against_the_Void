class World{
    playerCharacter = new PlayerCharacter(150, 160);
    tileSize = 16;
    tiles = [];
    ctx;
    canvas;

    noiseDensity = 40;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.generateNoiseMap(this.noiseDensity);
    };

    draw(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.tiles.forEach(tile => {
            this.ctx.drawImage(tile.image, tile.position.x, tile.position.y, 64, 64);
        });
        this.ctx.drawImage(this.playerCharacter.image, this.playerCharacter.position.x, this.playerCharacter.position.y, 200, 300);
        self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    };

    loadTiles(){
        for(let i = 0; i < this.canvas.width / this.tileSize; i++){
            this.tiles.push(new GrassTile(0 + i * this.tileSize,0));
            for(let j = 0; j < this.canvas.height / this.tileSize; j++){
                this.tiles.push(new DirtTile(0 + i * this.tileSize,j * this.tileSize,0));
            };
        };
    };

    generateNoiseMap(density){
        let noiseMap = [];
        for(let i = 0; i < this.canvas.width / this.tileSize; i++){
            for(let j = 0; j < this.canvas.height / this.tileSize; j++){
                let random = getRandomNumber() * 100;
                if(random > this.noiseDensity){
                    noiseMap.push(new GrassTile(0 + i * this.tileSize,j * this.tileSize,0));
                }else{
                    noiseMap.push(new DirtTile(0 + i * this.tileSize,j * this.tileSize,0));
                };
            };
        };
        this.tiles = noiseMap;
    };

    applyCellularAutomaton(grid, count){
        for (let i = 0; i < count; i++){
            let tempGrid = [];
            for(let j = 0; i < this.canvas.height / this.tileSize; i++){
                for(let k = 0; i < this.canvas.width / this.tileSize; i++){

                };
            };

        };
    };
};