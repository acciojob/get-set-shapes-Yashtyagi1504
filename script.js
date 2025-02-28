class Rectangle {
	constructor(height,width){
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

// let rect = new Rectangle(10,20);
// console.log(rect.getArea());
// console.log(rect.width);

// let sqr = new Square(10);
// console.log(sqr.getPerimeter())


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
