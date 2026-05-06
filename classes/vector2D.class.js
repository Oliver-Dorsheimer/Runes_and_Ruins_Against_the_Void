class Vector2D{
    x;
    y;
    constructor(x, y){
        this.x = x;
        this.y = y;
    };

    getLengthOfVector2D(Vector){
        let length = Math.sqrt(Vector.x * Vector.x + Vector.y * Vector.y);
        return length;
    };

    getLengthOfVector2DSqrt(Vector){
        let length = Vector.x * Vector.x + Vector.y * Vector.y;
        return length;
    };

    getDistanceOfVector2D(VectorA, VectorB){
        let x = VectorA.x - VectorB.x;
        let y = VectorA.y - VectorB.y;
        return this.getLengthOfVector2D(new Vector2D(x, y));
    };

    getDirectionFrom(VectorA, VectorB){
        let x = VectorB.x - VectorA.x;
        let y = VectorB.y - VectorA.y;
        return new Vector2D(x, y);
    };

    getNormalizedDirectionFrom(PositionA, PositionB){
        let x = PositionB.x - PositionA.x;
        let y = PositionB.y - PositionA.y;
        return this.getNormalizedVector2D(new Vector2D(x, y));
    };

    getNormalizedVector2D(VectorA){
        length = this.getLengthOfVector2D(VectorA);
        if(length != 0){
            let x = VectorA.x/length;
            let y = VectorA.y/length;
            return new Vector2D(x, y);
        }
        return new Vector2D(0, 0);
    };

    add(VectorB){
        return new Vector2D(this.x + VectorB.x, this.y + VectorB.y);
    };

    multiply(scalar){
        return new Vector2D(this.x * scalar, this.y * scalar);
    };
};