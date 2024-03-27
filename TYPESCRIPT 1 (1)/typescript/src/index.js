"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(target) {
    console.log(`Class ${target.name} is instantiated`);
}
let ABC = class ABC {
    constructor() {
        console.log('This is my constructor!!');
    }
};
ABC = __decorate([
    Logger
], ABC);
//method 
function log(target, key) {
    console.log(`Method ${key} is called!!`);
}
class XYZ {
    exampleOfMethodDec() {
        console.log('Executing my Method....!!');
    }
}
__decorate([
    log
], XYZ.prototype, "exampleOfMethodDec", null);
