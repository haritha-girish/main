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
var Product = /** @class */ (function () {
    function Product(brand, price, details) {
        this.brand = brand;
        this.price = price;
        this.details = details;
    }
    Product.prototype.getDescription = function () {
        console.log("This is a product with brand name ".concat(this.brand));
    };
    return Product;
}());
var product = new Product('iPhone', 65000, 'This is a brand new phone');
console.log(product.brand); //can access public property brand
// console.log(product.price);// cannot access protected property via class instance 
// console.log(product.details); // Property 'details' is private and only accessible within class 'Product'.
product.getDescription(); // can access public method 
var Stationary = /** @class */ (function (_super) {
    __extends(Stationary, _super);
    function Stationary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stationary.prototype.getValue = function () {
        console.log("The details are ".concat(this.price));
    }; //price is accessible but not details
    return Stationary;
}(Product));
var stationary = new Stationary('XYZ', 1500, 'This is a brand new product');
console.log(stationary.brand); //can access public property brand
console.log(stationary.getValue());
// console.log(stationary.details); //cannot access private property details 
// console.log(stationary.price)// cannot access protected property via class instance 
stationary.getDescription(); // can access public method 
