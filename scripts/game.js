let canvas;
let world;
let input = new Input;

function init(){
    canvas = document.getElementById("game_window");
    world = new World(canvas, input);
    world.draw();
};

window.addEventListener("keydown", (event) =>{
    if(event.keyCode == 87){
        Input.up = true;
    };
    if(event.keyCode == 83){
        Input.down = true;
    };
    if(event.keyCode == 65){
        Input.left = true;
    };  
    if(event.keyCode == 68){
        Input.right = true;
    };
});

window.addEventListener("keyup", (event) =>{
    if(event.keyCode == 87){
        Input.up = false;
    };
    if(event.keyCode == 83){
        Input.down = false;
    };
    if(event.keyCode == 65){
        Input.left = false;
    };  
    if(event.keyCode == 68){
        Input.right = false;
    };
});