class Input{
    canvas;
    camera;

    upPressed = false;
    upReleased = false;
    downPressed = false;
    downReleased = false;
    leftPressed = false;
    leftReleased = false;
    rightPressed = false;
    rightReleased = false;
    spacebarPressed = false;
    spacebarReleased = false;
    shiftPressed = false;
    shiftReleased = false;

    leftMouseButtonPressed = false;
    leftMouseButtonReleased = false;

    mousePositionInCanvas = new Vector2D(0, 0);
    mousePositionInGameWorld = new Vector2D(0, 0);
    constructor(canvas){
        this.canvas = canvas;
    };

    getMousePositionInsideCanvas(event){
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor(event.clientX - rect.left);
        const y = Math.floor(event.clientY - rect.top);
        this.mousePositionInCanvas = new Vector2D(x, y);
        return new Vector2D(x, y);
    };
};