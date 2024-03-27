//define the function
function sumOfTwoNumbers(a:number,b:number):string{
    return `The sum of two numbers ${a} & ${b} is ${a+b}.`
}
//call the function 
console.log(sumOfTwoNumbers(453678421,36478166));

//Function Expression 

var result = function(a:number,b:number):number{
        return a-b;
}
console.log(result(456987,123456));

//arrow functions 
let result1 = (a:number,b:number):void => console.log(a*b);
result1(789456,12);

//Hoisting -> arrow functions are not hoisted 
//this 

Greeting();

function Greeting():void{
    console.log('Hello,Have a nice day!');
}

// let Greeting = ():void =>  console.log('Hello,Have a nice day!');

//this keyword -> it can vary depending on how a function is called 
interface studentDataType {
    name : string,
    age : number ,
    course ?: string ,

}
//extends -> inheritance 
interface SectionAdataType extends studentDataType{
    address : string;
    hobbies: any;
    info : ()=>void
}
let student3 : SectionAdataType = {
    name : 'Sheetal',
    age : 21,
    course : 'ReactJS',
    address : 'Gurugram',
    hobbies : ['Reading Books ', 'Cycling', 'Dancing'],
    info : function(){
        console.log(`***Student Details***
        Student Name : ${this.name}
        Student Course : ${this.course}
        `)
    }
}
student3.info();
// console.log(student3.name);
let student4 : SectionAdataType = {
    name : 'Shanaya',
    age : 21,
    course : 'Angular',
    address : 'Gurugram',
    hobbies : ['Reading Books ', 'Cycling', 'Singing'],
    info : ()=>{
        console.log(`***Student Details***
        Student Name : ${this.name}
        Student Course : ${this.course}
        `)
    }
}

student4.info();