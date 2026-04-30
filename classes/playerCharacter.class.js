class PlayerCharacter extends Pawn{
    idleImages = [
            "assets/img/characters/hero/idle/idle/Female-Hero1.png",
            "assets/img/characters/hero/idle/idle/Female-Hero2.png",
            "assets/img/characters/hero/idle/idle/Female-Hero3.png",
            "assets/img/characters/hero/idle/idle/Female-Hero4.png",
            "assets/img/characters/hero/idle/idle/Female-Hero5.png",
            "assets/img/characters/hero/idle/idle/Female-Hero6.png",
            "assets/img/characters/hero/idle/idle/Female-Hero7.png",
            "assets/img/characters/hero/idle/idle/Female-Hero8.png",
            "assets/img/characters/hero/idle/idle/Female-Hero9.png",
            "assets/img/characters/hero/idle/idle/Female-Hero10.png",
            "assets/img/characters/hero/idle/idle/Female-Hero11.png",
            "assets/img/characters/hero/idle/idle/Female-Hero12.png",
            "assets/img/characters/hero/idle/idle/Female-Hero13.png",
            "assets/img/characters/hero/idle/idle/Female-Hero14.png",
            "assets/img/characters/hero/idle/idle/Female-Hero15.png"];
    longIdleImages = [];
    walkImages = [];
    currentImage = 0;

    constructor(x, y) {
        super(x, y);
        this.loadImages(this.idleImages);
        this.animate();
    };

    animate(){
        setInterval( () =>{
            let i = this.currentImage % this.idleImages.length;
            let path = this.idleImages[i];
            this.image = this.imageCache[path];
            this.currentImage++;
        }), 1000;
    };
};