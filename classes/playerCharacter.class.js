class PlayerCharacter extends Pawn{
    frontIdleImages = [
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front1.png",
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front2.png",
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front3.png",
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front4.png",
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front5.png",
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front6.png",
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front7.png",
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front8.png",
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front9.png",
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front10.png",
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front11.png",
            "assets/img/characters/hero/idle/idle/front/Sword_Idle_front12.png"];
    leftIdleImages = [
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left1.png",
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left2.png",
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left3.png",
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left4.png",
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left5.png",
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left6.png",
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left7.png",
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left8.png",
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left9.png",
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left10.png",
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left11.png",
            "assets/img/characters/hero/idle/idle/left_side/Sword_Idle_side_left12.png"];
    rightIdleImages = [
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right1.png",
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right2.png",
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right3.png",
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right4.png",
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right5.png",
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right6.png",
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right7.png",
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right8.png",
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right9.png",
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right10.png",
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right11.png",
            "assets/img/characters/hero/idle/idle/right_side/Sword_Idle_side_right12.png"];
    backIdleImages = [
            "assets/img/characters/hero/idle/idle/back/Sword_Idle_back1.png",
            "assets/img/characters/hero/idle/idle/back/Sword_Idle_back2.png",
            "assets/img/characters/hero/idle/idle/back/Sword_Idle_back3.png",
            "assets/img/characters/hero/idle/idle/back/Sword_Idle_back4.png"];
    longIdleImages = [];
    frontWalkImages = [
            "assets/img/characters/hero/walk/front/Sword_Walk_front1.png",
            "assets/img/characters/hero/walk/front/Sword_Walk_front2.png",
            "assets/img/characters/hero/walk/front/Sword_Walk_front3.png",
            "assets/img/characters/hero/walk/front/Sword_Walk_front4.png",
            "assets/img/characters/hero/walk/front/Sword_Walk_front5.png",
            "assets/img/characters/hero/walk/front/Sword_Walk_front6.png"];
    leftWalkImages = [
            "assets/img/characters/hero/walk/left_side/Sword_Walk_side_left1.png",
            "assets/img/characters/hero/walk/left_side/Sword_Walk_side_left2.png",
            "assets/img/characters/hero/walk/left_side/Sword_Walk_side_left3.png",
            "assets/img/characters/hero/walk/left_side/Sword_Walk_side_left4.png",
            "assets/img/characters/hero/walk/left_side/Sword_Walk_side_left5.png",
            "assets/img/characters/hero/walk/left_side/Sword_Walk_side_left6.png"];
    rightWalkImages = [
            "assets/img/characters/hero/walk/right_side/Sword_Walk_side_right1.png",
            "assets/img/characters/hero/walk/right_side/Sword_Walk_side_right2.png",
            "assets/img/characters/hero/walk/right_side/Sword_Walk_side_right3.png",
            "assets/img/characters/hero/walk/right_side/Sword_Walk_side_right4.png",
            "assets/img/characters/hero/walk/right_side/Sword_Walk_side_right5.png",
            "assets/img/characters/hero/walk/right_side/Sword_Walk_side_right6.png"];
    backWalkImages = [
            "assets/img/characters/hero/walk/back/Sword_Walk_back1.png",
            "assets/img/characters/hero/walk/back/Sword_Walk_back2.png",
            "assets/img/characters/hero/walk/back/Sword_Walk_back3.png",
            "assets/img/characters/hero/walk/back/Sword_Walk_back4.png",
            "assets/img/characters/hero/walk/back/Sword_Walk_back5.png",
            "assets/img/characters/hero/walk/back/Sword_Walk_back6.png"];
    input;
    currentAnimation = this.frontIdleImages;
    currentImage = 0;
    animationChanged = false;
    canDash = true;
    dashSpeed = 10;
    dashRef = this.dash.bind(this);

    constructor(x, y, input) {
        super(x, y);
        this.input = input;
        this.loadImage("assets/img/characters/hero/idle/idle/front/Sword_Idle_front1.png");
        this.loadImages(this.currentAnimation);
        this.setCurrentIdleAnimation();
        this.playCurrentAnimation();
        this.walkingSpeed = 2;
        this.height = 32;
        this.width = 32;
        this.sprintingSpeed = 4;
        this.startListeners();
    };

    startListeners(){
        this.input.on("dashPressed", this.dashRef);
    };

    getInput(){
        this.desiredDirectionVelocity = new Vector2D(0, 0);

        if(this.world.input.up){
            this.moveUp();
        };

        if(this.world.input.down){
            this.moveDown();
        };

        if(this.world.input.right){
            this.moveRight();
        };

        if(this.world.input.left){
            this.moveLeft();
        };

        if(this.world.input.shift){
            this.isSprinting = true;
        };

        if(this.world.input.spacebar){
            this.dash();
        };
    };

    dash(){
        if(this.canDash){
            this.physicsVelocity = new Vector2D(this.lookingDirection.x * this.dashSpeed, this.lookingDirection.y * this.dashSpeed);
            const dashDuration = setTimeout(() => {
                this.physicsVelocity = new Vector2D(0, 0);
                this.canDash = false;
            }, 200);
            const dashCooldown = setTimeout(() => {
                this.canDash = true;
            }, 3000);
        };
        
    };

    setCurrentIdleAnimation(){
        setInterval( () =>{
            if(this.world != undefined){
                this.refreshLookingDirection(this.input.mousePositionInGameWorld);

                if(this.rotation >= 0.875 || this.rotation <= 0.125){
                    if(input.up + input.down + input.left + input.right > 0){
                        if(this.currentAnimation != this.frontWalkImages){
                            this.animationChanged = true;
                            this.currentAnimation = this.frontWalkImages;
                        };

                    }else if (this.currentAnimation != this.frontIdleImages){
                        this.animationChanged = true;
                        this.currentAnimation = this.frontIdleImages;
                    };
                }else if(this.rotation >= 0.125 && this.rotation <= 0.375){
                    if(input.up + input.down + input.left + input.right > 0){
                        if(this.currentAnimation != this.rightWalkImages){
                            this.animationChanged = true;
                            this.currentAnimation = this.rightWalkImages;
                        };

                    }else if (this.currentAnimation != this.rightIdleImages){
                        this.animationChanged = true;
                        this.currentAnimation = this.rightIdleImages;
                    };
                }else if(this.rotation >= 0.375 && this.rotation <= 0.625){
                    if(input.up + input.down + input.left + input.right > 0){
                        if(this.currentAnimation != this.backWalkImages){
                            this.animationChanged = true;
                            this.currentAnimation = this.backWalkImages;
                        };

                    }else if (this.currentAnimation != this.backIdleImages){
                        this.animationChanged = true;
                        this.currentAnimation = this.backIdleImages;
                    };
                }else if(this.rotation >= 0.625 && this.rotation <= 0.875){
                    if(input.up + input.down + input.left + input.right > 0){
                        if(this.currentAnimation != this.leftWalkImages){
                            this.animationChanged = true;
                            this.currentAnimation = this.leftWalkImages;
                        };

                    }else if (this.currentAnimation != this.leftIdleImages){
                        this.animationChanged = true;
                        this.currentAnimation = this.leftIdleImages;
                    };
                }
            };
        }, 1000/60);
    };

    refreshLookingDirection(positionToLookTo){
        this.lookingDirection = this.lookingDirection.getNormalizedDirectionFrom(this.position, positionToLookTo);
        this.rotation = (((Math.atan2(this.lookingDirection.x, this.lookingDirection.y)+ TAU)% TAU)/TAU);
    };

    playCurrentAnimation(){
        setInterval( () =>{
            if(true){
                let i = this.currentImage % this.currentAnimation.length;
                let path = this.currentAnimation[i];
                if(this.animationChanged){
                    i = 0;
                    this.currentImage = 0;
                    this.loadImages(this.currentAnimation);
                    this.animationChanged = false;
                };
                this.image = this.imageCache[path];
                this.currentImage++;
            };
        }, 1000/8);
    };
};