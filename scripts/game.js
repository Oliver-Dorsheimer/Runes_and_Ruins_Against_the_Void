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
