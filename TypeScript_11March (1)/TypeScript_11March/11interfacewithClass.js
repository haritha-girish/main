//class wants to implement interface -> implements -> class name implements interfacename 
var Laptop = /** @class */ (function () {
    function Laptop(name, price, screenSize) {
        this.name = name;
        this.price = price;
        this.screenSize = screenSize;
    }
    Laptop.prototype.getDescription = function () {
        return "Laptop : ".concat(this.name, "\n        Price :").concat(this.price, "\n        Screen Size : ").concat(this.screenSize, " inches");
    };
    return Laptop;
}());
var SmartPhone = /** @class */ (function () {
    function SmartPhone(name, price, brand) {
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
    SmartPhone.prototype.getDescription = function () {
        return "Smartphone : ".concat(this.name, " \n    Price : ").concat(this.price, "  \n    Brand :").concat(this.brand);
    };
    return SmartPhone;
}());
var laptop = new Laptop('Dell XP', 59999, 13.3);
var smartphone = new SmartPhone('iPhone 13', 45000, 'Apple');
console.log(laptop);
console.log(smartphone);
console.log(laptop.getDescription());
console.log(smartphone.getDescription());
