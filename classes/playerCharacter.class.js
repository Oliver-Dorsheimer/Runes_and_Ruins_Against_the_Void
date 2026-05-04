class PlayerCharacter extends Pawn{
    idleImages = [
            "assets/img/characters/hero/idle/idle/front/Female-Hero1.png",
            "assets/img/characters/hero/idle/idle/front/Female-Hero2.png",
            "assets/img/characters/hero/idle/idle/front/Female-Hero3.png",
            "assets/img/characters/hero/idle/idle/front/Female-Hero4.png",
            "assets/img/characters/hero/idle/idle/front/Female-Hero5.png",
            "assets/img/characters/hero/idle/idle/front/Female-Hero6.png",
            "assets/img/characters/hero/idle/idle/front/Female-Hero7.png",
            "assets/img/characters/hero/idle/idle/front/Female-Hero8.png",
            "assets/img/characters/hero/idle/idle/front/Female-Hero9.png",
            "assets/img/characters/hero/idle/idle/front/Female-Hero10.png",
            "assets/img/characters/hero/idle/idle/front/Female-Hero11.png",
            "assets/img/characters/hero/idle/idle/front/Female-Hero12.png"];
    longIdleImages = [];
    walkImages = [];
    currentImage = 0;

    constructor(x, y) {
        super(x, y);
        this.loadImage("assets/img/characters/hero/idle/idle/front/Female-Hero1.png");
        this.loadImages(this.idleImages);
        this.animate();
        this.speed = 3;
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
                console.log(this.getDistanceOfVector2D(this.position, this.world.getPositionInCanvas(this.world.currentMousePosition)));
            };
        }, 1000/8);
    };

    setCurrentIdleAnimation(){

    };

    getVector2D(){
        const x = this.getDistanceOfVector2D(this.position.x, this.world.getPositionInCanvas(this.world.currentMousePosition));
        const y = this.getDistanceOfVector2D(this.position.y, this.world.getPositionInCanvas(this.world.currentMousePosition));

        return {x, y}
    };

    getDistanceOfVector2D(VectorA, VectorB){
        let x = Math.abs(VectorA.x - VectorB.x);
        let y = Math.abs(VectorA.y - VectorB.y);
        return {x, y};
    };
};