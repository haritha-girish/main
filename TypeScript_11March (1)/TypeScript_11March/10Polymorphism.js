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
var Employee = /** @class */ (function () {
    //constructor
    function Employee(name, age, salary) {
        this.EmpName = name;
        this.EmpAge = age;
        this.EmpSalary = salary;
        console.log('Constructor Method : Employee Class');
    }
    //method
    Employee.prototype.info = function () {
        console.log("**Employee Details**\n        Employee Name : ".concat(this.EmpName, "\n        Employee Age : ").concat(this.EmpAge, "\n        Employee Salary : ").concat(this.EmpSalary));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    //constructor
    function Manager(name, age, salary, address) {
        //call the constructor method of parent class
        var _this = _super.call(this, name, age, salary) || this;
        _this.EmpAddress = address;
        return _this;
    }
    //method-> Overriding -> flexibility in code 
    Manager.prototype.info = function () {
        console.log("**Manager Details**\n        Manager Name : ".concat(this.EmpName, "\n        Manager Age : ").concat(this.EmpAge, "\n        Manager Salary : ").concat(this.EmpSalary, "\n        Manager Address : ").concat(this.EmpAddress));
        _super.prototype.info.call(this); // calling the method of parent class
    };
    return Manager;
}(Employee));
//Object of Manager class(subclass)
var manager1 = new Manager('Aman', 45, 875421.40, 'Banagalore');
console.log(manager1);
// manager1.info();
manager1.info();
