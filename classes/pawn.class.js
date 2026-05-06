class Pawn extends Actor{
    desiredDirectionVelocity = new Vector2D(0, 0);

    constructor(x, y) {
        super(x, y);
    };

    moveUp(){
        this.desiredDirectionVelocity.y -= 1;
    };

    moveDown(){
        this.desiredDirectionVelocity.y += 1;
    };

    moveRight(){
        this.desiredDirectionVelocity.x += 1;
    };

    moveLeft(){
        this.desiredDirectionVelocity.x -= 1;
    };

    updatePosition(){
        let normalizedDesiredVector = this.desiredDirectionVelocity.getNormalizedVector2D(this.desiredDirectionVelocity);
        let totalVelocity = this.physicsVelocity.add(normalizedDesiredVector);
        this.position = this.position.add(totalVelocity.multiply(this.speed));
    };
    
};