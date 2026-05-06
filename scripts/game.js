let canvas;
let world;
let input = new Input;

function init(){
    canvas = document.getElementById("game_window");
    world = new World(canvas, input);
    world.gameLoop();
};

window.addEventListener("keydown", (event) =>{
    if(event.keyCode == 87){
        input.up = true;
    };
    if(event.keyCode == 83){
        input.down = true;
    };
    if(event.keyCode == 65){
        input.left = true;
    };  
    if(event.keyCode == 68){
        input.right = true;
    };
    if(event.keyCode == 32){
        input.spacebar = true;
    };
});

window.addEventListener("keyup", (event) =>{
    if(event.keyCode == 87){
        input.up = false;
    };
    if(event.keyCode == 83){
        input.down = false;
    };
    if(event.keyCode == 65){
        input.left = false;
    };  
    if(event.keyCode == 68){
        input.right = false;
    };
    if(event.keyCode == 32){
        input.spacebar = false;
    };
});

window.addEventListener("mousedown", (event) =>{
    input.leftMouseButton = true;
});

window.addEventListener("mouseup", (event) =>{
    input.leftMouseButton = false;
});

window.addEventListener("mousemove", (event) =>{
    world.getMousePositionInsideCanvas(event);
});