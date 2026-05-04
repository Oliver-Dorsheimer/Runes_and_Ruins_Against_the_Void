class Vector2D{
    origin = {x:0,y:0};
    point = {x:0,y:0};
    constructor(origin, point){

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
        return this.getLengthOfVector2D({x, y});
    };

    getDirectionFrom(VectorA, VectorB){
        let x = VectorB.x - VectorA.x;
        let y = VectorB.y - VectorA.y;
        return {x, y};
    };

    getNormalizedDirectionFrom(VectorA, VectorB){
        let x = VectorB.x - VectorA.x;
        let y = VectorB.y - VectorA.y;
        return this.getNormalizedVector2D({x, y});
    };

    getNormalizedVector2D(VectorA){
        length = this.getLengthOfVector2D(VectorA);
        let x = VectorA.x/length;
        let y = VectorA.y/length;
        return {x, y};
    };
};