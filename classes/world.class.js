class World{
    canvas;
    ctx;
    input;
    playerCharacter = new PlayerCharacter(0, 0);
    spawnUnset = true;
    worldElements = [];
    renderedElements = [];
    noiseDensity = 40;
    tileSize = 64;
    camera = new Camera;
    currentMousePositionInCanvas = new Vector2D(0, 0);
    currentMousePosition = new Vector2D(0, 0);
    
    constructor(canvas, input) {
        this.canvas = canvas;
        this.input = input;
        this.playerCharacter.world = this;
        this.ctx = canvas.getContext('2d');
        this.worldElements = this.applyCellularAutomaton(this.generateNoiseMap(this.noiseDensity, 128, 128), 5);
        this.renderedElements = this.createArray2D(Math.floor(this.canvas.width/this.tileSize+1), Math.floor(this.canvas.height/this.tileSize+2));
        this.updatingLoop()
    };

    setCharacterSpawn(){
        if(this.spawnUnset){
            this.playerCharacter.position.x = this.canvas.width/2;
            this.playerCharacter.position.y = this.canvas.height/2;
            this.spawnUnset= false;
        };
    };

    gameLoop(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.setCharacterSpawn();
        this.reCalculateGameData();
        this.playerCharacter.updatePosition();
        this.viewportElementsSelector(this.camera.position);
        this.renderedElements.forEach((height, index) => {
            this.renderedElements[index].forEach(tile => {
                if(tile){
                    this.ctx.drawImage(tile.image, Math.round(tile.position.x - this.camera.position.x), Math.round(tile.position.y - this.camera.position.y), this.tileSize, this.tileSize);
                };
            });
        });

        this.playerCharacter.getInput();
        this.ctx.drawImage(this.playerCharacter.image, Math.round(this.getPositionInCanvas(this.playerCharacter.position).x), Math.round(this.getPositionInCanvas(this.playerCharacter.position).y), this.playerCharacter.height, this.playerCharacter.width);
        try{
            
        }catch{

        }
        this.camera.position.x = this.playerCharacter.position.x - this.canvas.width/2;
        this.camera.position.y = this.playerCharacter.position.y - this.canvas.height/2;
        self = this;
        requestAnimationFrame(function(){
            self.gameLoop();
        });
    };

    viewportElementsSelector(position){
        let positionX = Math.floor(position.x / this.tileSize);
        let positionY = Math.floor(position.y / this.tileSize);

        for(let i = 0; i < this.renderedElements.length; i++){
            for(let j = 0; j < this.renderedElements[i].length; j++){
                if(this.isWithinMapBounds(positionX + i, positionY + j, this.worldElements.length, this.worldElements[0].length)){
                    this.renderedElements[i][j] = this.worldElements[positionX + i][positionY + j];
                }else{
                    this.renderedElements[i][j] = null;
                };
            };
        };
    };

    updatingLoop(){
        setInterval( () =>{
            
        }, 100);
    };

    reCalculateGameData(){
        this.recalcMousePositionInsideGameWorld();
        this.getMousePositionInsideGameWorld(this.currentMousePositionInCanvas);
        
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
        return noiseMap;
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
        };
        return grid;
    };

    isWithinMapBounds(y, x, width, height){
        if(y < 0 || y >= width || x < 0 || x >= height){
            return false;
        };
        return true;
    };

    getPositionInCanvas(elementWorldPosition){
        return new Vector2D(elementWorldPosition.x - this.camera.position.x, elementWorldPosition.y - this.camera.position.y);
    };

    //#region Mouse Tracking
    getMousePositionInsideCanvas(event){
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor(event.clientX - rect.left);
        const y = Math.floor(event.clientY - rect.top);
        this.currentMousePositionInCanvas = new Vector2D(x, y);
        return new Vector2D(x, y);
    };

    getMousePositionInsideGameWorld(PositionInCanvas){
        const x = PositionInCanvas.x + this.camera.position.x;
        const y = PositionInCanvas.y + this.camera.position.y;
        return new Vector2D(x, y);
    };

    recalcMousePositionInsideGameWorld(){
        setInterval( () =>{
            this.currentMousePosition = this.getMousePositionInsideGameWorld(this.currentMousePositionInCanvas);
        }, 100);
    };
    //#endregion
};