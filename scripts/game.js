let canvas;
let world;
let input;

function init(){
    canvas = document.getElementById("game_window");
    input = new Input(canvas)
    world = new World(canvas, input);
    world.gameLoop();
};

function createArray2D(width, height){
    let tempArray = new Array(width).fill(null);
    for(let i = 0; i < tempArray.length;i++){
       tempArray[i] = new Array(height).fill(null);
    };
    return tempArray;
};

window.addEventListener("keydown", (event) =>{
    if(event.keyCode == 87){
        input.upPressed = true;
        input.upReleased = false;
    };
    if(event.keyCode == 83){
        input.downPressed = true;
        input.downReleased = false;
    };
    if(event.keyCode == 65){
        input.leftPressed = true;
        input.leftReleased = false;
    };  
    if(event.keyCode == 68){
        input.rightPressed = true;
        input.rightReleased = false;
    };
    if(event.keyCode == 32){
        input.spacebarPressed = true;
        input.spacebarReleased = false;
    };
    if(event.keyCode == 16){
        input.shiftPressed = true;
        input.shiftReleased = false;
    };
});

window.addEventListener("keyup", (event) =>{
    if(event.keyCode == 87){
        input.upPressed = false;
        input.upReleased = true;
    };
    if(event.keyCode == 83){
        input.downPressed = false;
        input.downReleased = true;
    };
    if(event.keyCode == 65){
        input.leftPressed = false;
        input.leftReleased = true;
    };  
    if(event.keyCode == 68){
        input.rightPressed = false;
        input.rightReleased = true;
    };
    if(event.keyCode == 32){
        input.spacebarPressed = false;
        input.spacebarReleased = true;
    };
    if(event.keyCode == 16){
        input.shiftPressed = false;
        input.shiftReleased = true;
    };
});

window.addEventListener("mousedown", (event) =>{
    input.leftMouseButtonPressed = true;
    input.leftMouseButtonReleased = false;
});

window.addEventListener("mouseup", (event) =>{
    input.leftMouseButtonPressed = false;
    input.leftMouseButtonReleased = true;
});

window.addEventListener("mousemove", (event) =>{
    input.getMousePositionInsideCanvas(event);
});