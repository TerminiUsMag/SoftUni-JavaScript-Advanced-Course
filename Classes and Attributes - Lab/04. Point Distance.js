//Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the constructor, and a static method for finding the distance between two points, called distance().

class Point{
    static distance(p1,p2){
        let x1 = p1.x;
        let x2 = p2.x;

        let y1 = p1.y;
        let y2 = p2.y;

        let result = Math.sqrt((x2-x1)**2+(y2-y1)**2);
        return result;
    }
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}