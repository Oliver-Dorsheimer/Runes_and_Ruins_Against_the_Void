class World{
    playerCharacter = new PlayerCharacter(150, 160);
    ctx;
    canvas;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
    };

    draw(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.playerCharacter.image, this.playerCharacter.position.x, this.playerCharacter.position.y, 200, 300);
        self = this;
        requestAnimationFrame(function(){
            self.draw();
        });
    };
};