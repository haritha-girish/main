//var 

function hello():void{
    var msg : string = 'Hello';
    var anotherMsg : string = 'Good Morning!';
    // console.log(msg);
}

// console.log(msg);
// console.log(anotherMsg);

// hello();


//redeclaration 

var myName : string = 'Shipra';
var myName : string = 'Sheetal';

console.log(myName); //redeclaration is allowed in var keyword


//reassignment 

var score: number = 99;
score = 100;

console.log(score); //reassignment is possible in var 

//block scoped keyword 

var color = 'blue';

if(color === 'blue'){
    let say : string = 'This is blue color';
    const msg = 'This is my fav color';
}

// console.log(msg); const and let are block scoped keywords 

//redeclaration 

let myScore :number = 98;
myScore = 100; //reassignment is allowed
console.log(myScore);
// let myScore = 100; //Cannot redeclare block-scoped variable 'myScore'.


const intRate : number = 0.3;
// intRate = 0.5;//reassignment is not allowed
// const intRate = 0.8;
console.log(intRate); //Cannot redeclare block-scoped variable 'intRate'.


