//string - '',""
let fname : string = 'John';
let lname : string = "William";

// let showMessage = 'Hello , '+fname+' '+lname+' Welcome to the session on TypeScript';
//template string 
let showMessage = `Hello, ${fname} ${lname}, Welcomwe to the session on TypeScript!!`;
console.log(showMessage);

console.log(typeof(showMessage)); //data type 

//number -int , float , exp , hexadecimal , octal , binary 
let myScore : number = 98.5;
let maxScore = 100;
let exp = 2.56e3;

console.log(typeof(exp));

//boolean -true , false 
let agree : boolean = true;

//null & undefined 

let x = null;
console.log(typeof(null));
let y;
console.log(typeof(y));

console.log(x==y);//value , not the data type 
console.log(x===y);//value,data type 

// let x1 = 20;
// let x2 = '20';
// console.log(x1==x2);//value , not the data type 
// console.log(x1===x2);//value,data type 

//union 

let amount : string|number ='One Thousand';
amount = 1000;

//any - any value 
let data : any = [1,2,8];
data = 123;
data = 'hfhgfyh';
data ={}

//undefined -> let x; //any data type 

//void 

function hello():void{
    console.log('Hello');
}


//never 

// function ErrorMsg(e:string):never{
//     throw new Error(e);
// }

// console.log(ErrorMsg('An error Occured!!'));

//unknown

let userInput : unknown;
if(typeof(userInput)==='string'){
    let strLength : number= userInput.length;
}

let strValue : string = userInput as string;


//array - [ele1,ele2,ele3......eleN]
//access/modify -> indexing method , ele1-0, ele2-1.....eleN=N-1

let numArray : number[] = [45,78,12,23,56,89];
let strArray : string[] =['a','e','i','o','u'];
let boolArray : boolean[] = [true]; //0-true, <3 empty items> ,false
let mixArray : any[] = [1,'htul',true,[12,45]];

boolArray[4]=false;
console.log(numArray[4]);
console.log(boolArray[2]);
console.log(numArray,strArray,boolArray,mixArray);

//tuples 

let user : [string,number,string];
user = ['Rohit',20,'Pune'];
console.log(`User Details :
    Username : ${user[0]}
    Age : ${user[1]}
    Address : ${user[2]}`);

//enum 
enum Weekdays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
};

let lastWeekDay : Weekdays = Weekdays.Friday;
console.log(lastWeekDay);

function Days(day : Weekdays){
    console.log('Last Day for completion of XYZ work is : '+ Weekdays[day])
}

Days(Weekdays.Friday);

enum Weekends{
    Sat = 'Saturday',
    Sun = 'Sunday'
}
let party : Weekends = Weekends.Sat;
console.log(party);

//object -{key/property : value, key : value}
let user1 : {name : string , age : number , address? : string} = {
    name : 'Arun',
    age : 25,
    address : 'Hyderabad'
};

console.log(user1.name);
console.log(user1['age']);
user1.address = 'Goa';

console.log(user1);