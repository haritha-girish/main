//custom name for a type -> more readable , complex types 
type Point = {
    x: number;
    y : number
}
type Coordinates = {
    latitude : number;
    longitude : number;
}
type location = Coordinates & Point;

type user = {
    name : string
    age : number
};

let admin : user ={
    name : 'Shri',
    age : 25
} ;

console.log(admin);


type ID = string | number;
let amount : ID = 123654;
let data : ID 
console.log(amount);


//GENERICS & TYPE ALIAS 
type Pair<T,S>= {
    first : T;
    second : S;
}


let Apair : Pair<number,string>={first : 100 , second : 'Two Hundred'};
let Bpair : Pair<string,boolean> = {first : 'Yes' , second : true};
console.log(Apair,Bpair);


//EVEN NUMBERS 
type filterFunc<T> = (value : T) => boolean;

function filter<T>(arr : T[] , filterF : filterFunc<T>) : T[] {
    return arr.filter(filterF);
}

let numbers : number[] = [14,51,23,64,78,26];
let evenNum = filter(numbers, item => item%2==0);
console.log(evenNum);


//mapping , reduce 

