class Rectangle {
	constructor(width,height){
		this.height = height;
		this.width = width;
	}
	getArea(){
		return this.height*this.width;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side)
		
	}
	getPerimeter(){
		return 2*(this.height + this.width)
	}
}
const rect_w = 7;
const rect_h = 8;
const sq_s = 6;

const rectangle = new Rectangle(rect_w, rect_h);
const square = new Square(sq_s);

// Rectangle
console.log(rectangle.width); // Expected: 7 ✅
console.log(rectangle.height); // Expected: 8 ✅
console.log(rectangle.getArea()); // Expected: 7 * 8 = 56 ✅

// Square
console.log(square.width); // Expected: 6 ✅
console.log(square.height); // Expected: 6 ✅
console.log(square.getArea()); // Expected: 6 * 6 = 36 ✅
console.log(square.getPerimeter()); // Expected: 6 * 4 = 24 ✅

// let rect = new Rectangle(10,20);
// console.log(rect.getArea());
// console.log(rect.width);

// let sqr = new Square(10);
// console.log(sqr.getPerimeter())


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
