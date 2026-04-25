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
        this.tiles = this.createArray2D(this.canvas.height/this.tileSize, this.canvas.width/this.tileSize);
        this.generateNoiseMap(this.noiseDensity, this.canvas.width/this.tileSize, this.canvas.height/this.tileSize);
        this.applyCellularAutomaton(this.tiles, 20);
    };

    draw(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.tiles.forEach((height, index) => {
            this.tiles[index].forEach(tile => {
                this.ctx.drawImage(tile.image, tile.position.x, tile.position.y, 64, 64);
            });
        });
        this.ctx.drawImage(this.playerCharacter.image, this.playerCharacter.position.x, this.playerCharacter.position.y, 200, 300);
        self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    };

    createArray2D(width, height){
        let tempArray = new Array(width).fill(null);
        for(let i = 0; i < tempArray.length;i++){
            tempArray[i] = new Array(height).fill(null);
        };
        return tempArray;
    };

    generateNoiseMap(density, width, height){
        let noiseMap = this.createArray2D(width, height);
        for(let i = 0; i < width; i++){
            for(let j = 0; j < height; j++){
                let random = getRandomNumber() * 100;
                if(random > density){
                    noiseMap[i][j] = new GrassTile(i * this.tileSize,j * this.tileSize);
                }else{
                    noiseMap[i][j] = new DirtTile(i * this.tileSize,j * this.tileSize);
                };
            };
        };
        this.tiles = noiseMap;
    };

    applyCellularAutomaton(grid, count){
        for (let i = 0; i < count; i++){
            let tempGrid = grid.map(row => row.slice());
            let newGrid = this.createArray2D(tempGrid.length, tempGrid[0].length);

            for(let j = 0; j < tempGrid.length; j++){
                for(let k = 0; k < tempGrid[j].length; k++){
                    let neighboringWallCount = 0;

                    for (let y = j - 1; y <= j + 1; y++){
                        for (let x = k - 1; x <= k + 1; x++){
                            if(this.isWithinMapBounds(y, x, tempGrid.length, tempGrid[0].length)){
                                if(y !== j || x !== k){
                                    if(tempGrid[y][x] instanceof GrassTile){
                                        neighboringWallCount++;
                                    };
                                };
                            }else{
                                neighboringWallCount++;
                            };
                        };
                    };

                    if(neighboringWallCount > 4){
                        newGrid[j][k] = new GrassTile(j * this.tileSize, k * this.tileSize);
                    } else {
                        newGrid[j][k] = new DirtTile(j * this.tileSize, k * this.tileSize);
                    };
                };
            };

            grid = newGrid;
            this.tiles = grid;
        };
    };

    isWithinMapBounds(y, x, width, height){
        if(y < 0 || y >= width || x < 0 || x >= height){
            return false;
        };
        return true;
    };
};