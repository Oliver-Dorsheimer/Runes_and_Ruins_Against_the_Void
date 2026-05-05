class PlayerCharacter extends Pawn{
    idleImages = [
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
    longIdleImages = [];
    walkImages = [];
    currentImage = 0;

    constructor(x, y) {
        super(x, y);
        this.loadImage("assets/img/characters/hero/idle/idle/front/Sword_Idle_front1.png");
        this.loadImages(this.idleImages);
        this.animate();
        this.speed = 3;
        this.height = 32;
        this.width = 32;
    };

    dash(){

    };

    getInput(){
        if(this.speed != undefined){
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
        };
    };

    animate(){
        setInterval( () =>{
            if(true){
                let i = this.currentImage % this.idleImages.length;
                let path = this.idleImages[i];
                this.image = this.imageCache[path];
                this.currentImage++;
            };
        }, 1000/8);
    };

    setCurrentIdleAnimation(){

    };

    refreshLookingDirection(mousePositioninGameWorld){

    };

};