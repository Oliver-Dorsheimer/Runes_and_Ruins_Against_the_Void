class WorldSection{
    worldBitmap = [];
    worldElements = [];
    noiseDensity = 45;
    tileSize = 64;

    constructor(){
        this.worldBitmap = this.applyCellularAutomaton(this.generateNoiseMap(this.noiseDensity, 128, 128), 5);
        this.worldElements = this.setTiles(this.worldBitmap);
    };

    generateNoiseMap(density, width, height){
        let noiseMap = createArray2D(width, height);
        for(let i = 0; i < width; i++){
            for(let j = 0; j < height; j++){
                let random = getRandomNumber() * 100;
                if(random > density){
                    noiseMap[i][j] = false;
                }else{
                    noiseMap[i][j] = true;
                };
            };
        };
        return noiseMap;
    };

    applyCellularAutomaton(grid, count){
        for (let i = 0; i < count; i++){
            let tempGrid = grid.map(row => row.slice());
            let newGrid = createArray2D(tempGrid.length, tempGrid[0].length);

            for(let x = 0; x < tempGrid.length; x++){
                for(let y = 0; y < tempGrid[x].length; y++){
                    let neighboringWallCount = 0;

                    for (let j = x - 1; j <= x + 1; j++){
                        for (let k = y - 1; k <= y + 1; k++){
                            if(this.isWithinMapBounds(j, k, tempGrid.length, tempGrid[0].length)){
                                if(j !== x || k !== y){
                                    if(tempGrid[j][k] == false){
                                        neighboringWallCount++;
                                    };
                                };
                            }else{
                                neighboringWallCount++;
                            };
                        };
                    };

                    if(neighboringWallCount > 4){
                        newGrid[x][y] = true;
                    } else {
                        newGrid[x][y] = false;
                    };
                };
            };
            grid = newGrid;
        };
        return grid;
    };

    setTiles(bitMap){
        let elementsArray = createArray2D(bitMap.length, bitMap[0].length);
        for(let x = 0; x < bitMap[0].length; x++){
            for(let y = 0; y < bitMap[x].length; y++){
                if(bitMap[x][y] == true){
                    elementsArray[x][y] = new GrassTile(x * this.tileSize, y * this.tileSize);
                }else{
                    elementsArray[x][y] = new DirtTile(x * this.tileSize, y * this.tileSize);
                };
            };
        };
        return elementsArray;
    };

    isWithinMapBounds(y, x, width, height){
        if(y < 0 || y >= width || x < 0 || x >= height){
            return false;
        };
        return true;
    };

};