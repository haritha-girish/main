//Encapsulation of Common Behaviour (properties / methods ) that are shared among subclasses 
//helps to define a structure or blueprint for subclasses to follow
//Polymorphism
//code more modular / code becomes easier to understand 

//define an abstract class 
abstract class Shape{
    abstract calculateArea():number; // abstract method 
}

//create derived/subclasses that extends the abstract class(shape)

class Circle extends Shape{
    radius : number;

    constructor(radius : number){
        //Constructors for derived classes must contain a 'super' call.
        super();
        this.radius = radius;
    }
    //implementing the abstract method 
    calculateArea(): number {
        return Math.PI * this.radius **2;
    }
}

class Rectangle extends Shape{
    width : number;
    height : number;

    constructor(width : number, height : number){
        //Constructors for derived classes must contain a 'super' call.
        super();
        this.width= width;
        this.height=height;
    }

       //implementing the abstract method 
       calculateArea(): number {
           return this.width*this.height;
       }
}


let circle = new Circle(10);
let rectangle = new Rectangle(3,5);

console.log(circle.calculateArea());

console.log(rectangle.calculateArea());