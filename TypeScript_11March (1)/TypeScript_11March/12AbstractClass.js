//Encapsulation of Common Behaviour (properties / methods ) that are shared among subclasses 
//helps to define a structure or blueprint for subclasses to follow
//Polymorphism
//code more modular / code becomes easier to understand 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//define an abstract class 
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
//create derived/subclasses that extends the abstract class(shape)
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        //Constructors for derived classes must contain a 'super' call.
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    //implementing the abstract method 
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        //Constructors for derived classes must contain a 'super' call.
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    //implementing the abstract method 
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var circle = new Circle(10);
var rectangle = new Rectangle(3, 5);
console.log(circle.calculateArea());
console.log(rectangle.calculateArea());
