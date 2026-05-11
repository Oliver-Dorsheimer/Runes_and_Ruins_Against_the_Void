class World{
    canvas;
    ctx;
    input;
    currentLevel = new WorldSection();
    playerCharacter;
    elementsInCameraView = [];
    camera = new Camera;
    currentMousePosition = new Vector2D(0, 0);
    
    constructor(canvas, input) {
        this.canvas = canvas;
        this.input = input;
        this.playerCharacter = new PlayerCharacter(0, 0, input);
        this.playerCharacter.world = this;
        this.ctx = canvas.getContext('2d');
        this.elementsInCameraView = createArray2D(Math.floor(this.canvas.width/this.currentLevel.tileSize+1), Math.floor(this.canvas.height/this.currentLevel.tileSize+2));
        this.updatingLoop();
        this.setCharacterSpawn();
        this.startRecalculationOfMousePositionInGameWorldLoop();
    };

    setCharacterSpawn(){
        this.playerCharacter.position.x = this.canvas.width/2;
        this.playerCharacter.position.y = this.canvas.height/2;
    };

    gameLoop(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.playerCharacter.getInput();
        this.playerCharacter.updatePosition();
        this.viewportElementsSelector(this.camera.position);
        this.elementsInCameraView.forEach((height, index) => {
            this.elementsInCameraView[index].forEach(tile => {
                if(tile){
                    this.ctx.drawImage(tile.image, Math.round(tile.position.x - this.camera.position.x), Math.round(tile.position.y - this.camera.position.y), this.currentLevel.tileSize, this.currentLevel.tileSize);
                };
            });
        });

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
        let positionX = Math.floor(position.x / this.currentLevel.tileSize);
        let positionY = Math.floor(position.y / this.currentLevel.tileSize);

        for(let i = 0; i < this.elementsInCameraView.length; i++){
            for(let j = 0; j < this.elementsInCameraView[i].length; j++){
                if(this.currentLevel.isWithinMapBounds(positionX + i, positionY + j, this.currentLevel.worldElements.length, this.currentLevel.worldElements[0].length)){
                    this.elementsInCameraView[i][j] = this.currentLevel.worldElements[positionX + i][positionY + j];
                }else{
                    this.elementsInCameraView[i][j] = null;
                };
            };
        };
    };

    updatingLoop(){
        setInterval( () =>{
            
        }, 100);
    };

    getPositionInCanvas(elementWorldPosition){
        return new Vector2D(elementWorldPosition.x - this.camera.position.x, elementWorldPosition.y - this.camera.position.y);
    };

    //#region Mouse Tracking

    startRecalculationOfMousePositionInGameWorldLoop(){
        setInterval( () =>{
            input.mousePositionInGameWorld = this.getMousePositionInsideGameWorld(input.mousePositionInCanvas);
        }, 100);
    };

    getMousePositionInsideGameWorld(PositionInCanvas){
        const x = PositionInCanvas.x + this.camera.position.x;
        const y = PositionInCanvas.y + this.camera.position.y;
        return new Vector2D(x, y);
    };

    //#endregion
};