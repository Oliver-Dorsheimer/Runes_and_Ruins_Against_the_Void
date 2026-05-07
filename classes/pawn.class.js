class Pawn extends Actor{
    desiredDirectionVelocity = new Vector2D(0, 0);
    isSprinting = false;
    sprintingSpeed = 2;

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
        let normalizedDesiredDirectionVelocity = this.desiredDirectionVelocity.getNormalizedVector2D(this.desiredDirectionVelocity);
        let totalVelocity = this.physicsVelocity.add(normalizedDesiredDirectionVelocity);
        let totalSpeed;
        if(this.isSprinting){
            totalSpeed = this.walkingSpeed + this.sprintingSpeed;
        }else{
            totalSpeed = this.walkingSpeed;
        };
        this.position = this.position.add(totalVelocity.multiply(totalSpeed));
    };
    
};