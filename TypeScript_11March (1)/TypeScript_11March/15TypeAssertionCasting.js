// TYPE ASSERTIONS(AC) -> tells the typescript compiler about the type of value 
// -> effect the runtime behaviour of the code 
// TYPE CASTING (CR)-> converting a value from one data type to another at runtime 
var data;
data = 365478;
//<>-> <datatype> exp
//as
var myOrgName = 'Accenture';
var myOrg = myOrgName;
console.log(typeof (myOrg));
var width = 15;
// console.log(typeof(width));
// let length : string = <number>width;
var height = width;
//type annotations -> string throughout the program you can add only string value to the variable height.
var rollNumber = 45;
// let studName : string = 'Rohit'; -> type annotations
var newRollNumber = rollNumber;
//type assertion from any data type to number using as keyword 
//TYPE CASTING 
var num = '101';
var myNum = Number(num); // type casting 
console.log(myNum); // string -> number data type 
var myFriend;
var mynewFriend = String(myFriend);
console.log(typeof (mynewFriend));
