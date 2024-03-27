//string - '',""
var fname = 'John';
var lname = "William";
// let showMessage = 'Hello , '+fname+' '+lname+' Welcome to the session on TypeScript';
//template string 
var showMessage = "Hello, ".concat(fname, " ").concat(lname, ", Welcomwe to the session on TypeScript!!");
console.log(showMessage);
console.log(typeof (showMessage)); //data type 
//number -int , float , exp , hexadecimal , octal , binary 
var myScore = 98.5;
var maxScore = 100;
var exp = 2.56e3;
console.log(typeof (exp));
//boolean -true , false 
var agree = true;
//null & undefined 
var x = null;
console.log(typeof (null));
var y;
console.log(typeof (y));
console.log(x == y); //value , not the data type 
console.log(x === y); //value,data type 
// let x1 = 20;
// let x2 = '20';
// console.log(x1==x2);//value , not the data type 
// console.log(x1===x2);//value,data type 
//union 
var amount = 'One Thousand';
amount = 1000;
//any - any value 
var data = [1, 2, 8];
data = 123;
data = 'hfhgfyh';
data = {};
//undefined -> let x; //any data type 
//void 
function hello() {
    console.log('Hello');
}
//never 
// function ErrorMsg(e:string):never{
//     throw new Error(e);
// }
// console.log(ErrorMsg('An error Occured!!'));
//unknown
var userInput;
if (typeof (userInput) === 'string') {
    var strLength = userInput.length;
}
var strValue = userInput;
//array - [ele1,ele2,ele3......eleN]
//access/modify -> indexing method , ele1-0, ele2-1.....eleN=N-1
var numArray = [45, 78, 12, 23, 56, 89];
var strArray = ['a', 'e', 'i', 'o', 'u'];
var boolArray = [true]; //0-true, <3 empty items> ,false
var mixArray = [1, 'htul', true, [12, 45]];
boolArray[4] = false;
console.log(numArray[4]);
console.log(boolArray[2]);
console.log(numArray, strArray, boolArray, mixArray);
//tuples 
var user;
user = ['Rohit', 20, 'Pune'];
console.log("User Details :\n    Username : ".concat(user[0], "\n    Age : ").concat(user[1], "\n    Address : ").concat(user[2]));
//enum 
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 1] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 2] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 3] = "Thursday";
    Weekdays[Weekdays["Friday"] = 4] = "Friday";
})(Weekdays || (Weekdays = {}));
;
var lastWeekDay = Weekdays.Friday;
console.log(lastWeekDay);
function Days(day) {
    console.log('Last Day for completion of XYZ work is : ' + Weekdays[day]);
}
Days(Weekdays.Friday);
var Weekends;
(function (Weekends) {
    Weekends["Sat"] = "Saturday";
    Weekends["Sun"] = "Sunday";
})(Weekends || (Weekends = {}));
var party = Weekends.Sat;
console.log(party);
//object -{key/property : value, key : value}
var user1 = {
    name: 'Arun',
    age: 25,
    address: 'Hyderabad'
};
console.log(user1.name);
console.log(user1['age']);
user1.address = 'Goa';
console.log(user1);
