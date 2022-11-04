// Figure:
// •	Should have property units ("m", "cm", "mm") with default value "cm"
// •	Should have a getter area
// •	Has method changeUnits that sets different units for that figure 
// •	Has method toString, which returns: `Figures units: {units}`
// Circle:
// •	Extends Figure
// •	Has a property radius
// •	Overrides area getter to return the area of the Circle (PI * r * r)
// •	toString() - should return a string representation of the figure in the format:
// `Figures units: {type} Area: {area} - radius: {radius}`
// Rectangle:
// •	Extends Figure
// •	Has properties width, height, and units (extended from the class Figure)
// •	Overrides area getter to return the area of the Rectangle (width * height)
// •	toString() - should return a string representation of the figure in the format:
// `Figures units: {type} Area: {area} - width: {width}, height: {height}`

function solve(){
    class Figure{
        constructor(m,cm,mm){
            this.m = m;
            this.cm = cm;
            this.mm = mm;
        }

        get area(){
            
        }
    }
}