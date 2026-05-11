class Pawn extends Actor{
    desiredDirectionVelocity = new Vector2D(0, 0);
    isSprinting = false;
    sprintingSpeed = 2;

    constructor(x, y) {
        super(x, y);
    };

    walk(){

    };

    startMovingUp(){
        this.desiredDirectionVelocity.y -= 1;
    };

    startMovingDown(){
        this.desiredDirectionVelocity.y += 1;
    };

    startMovingRight(){
        this.desiredDirectionVelocity.x += 1;
    };

    startMovingLeft(){
        this.desiredDirectionVelocity.x -= 1;
    };

    stopMovingUp(){
        this.desiredDirectionVelocity.y += 1;
    };

    stopMovingDown(){
        this.desiredDirectionVelocity.y -= 1;
    };

    stopMovingRight(){
        this.desiredDirectionVelocity.x -= 1;
    };

    stopMovingLeft(){
        this.desiredDirectionVelocity.x += 1;
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