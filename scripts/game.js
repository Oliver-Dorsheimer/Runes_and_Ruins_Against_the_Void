let canvas;
let world;

function init(){
    canvas = document.getElementById("game_window");
    world = new World(canvas);
    world.draw();
};