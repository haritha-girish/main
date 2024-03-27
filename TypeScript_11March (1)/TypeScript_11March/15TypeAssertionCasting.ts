// TYPE ASSERTIONS(AC) -> tells the typescript compiler about the type of value 
// -> effect the runtime behaviour of the code 

// TYPE CASTING (CR)-> converting a value from one data type to another at runtime 

let data;
data = 365478;
//<>-> <datatype> exp
//as

let myOrgName : any = 'Accenture';
let myOrg = <string>myOrgName;
console.log(typeof(myOrg));


let width : any = 15;
// console.log(typeof(width));
// let length : string = <number>width;

let height  = <number>width;
//type annotations -> string throughout the program you can add only string value to the variable height.


let rollNumber : any = 45;
// let studName : string = 'Rohit'; -> type annotations

let newRollNumber : number = rollNumber as number; 
//type assertion from any data type to number using as keyword 


//TYPE CASTING 

let num : any = '101';
let myNum : number = Number(num); // type casting 
console.log(myNum);// string -> number data type 

let myFriend : any;
let mynewFriend : string = String(myFriend);
console.log(typeof(mynewFriend))

