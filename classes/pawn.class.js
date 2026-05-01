class Pawn extends Actor{

    constructor(x, y) {
        super(x, y);
    };

    moveUp(){
        this.position.y -= this.speed;
    };

    moveDown(){
        this.position.y += this.speed;
    };

    moveRight(){
        this.position.x += this.speed;
    };

    moveLeft(){
        this.position.x -= this.speed;
    };
    
};