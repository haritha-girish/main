//allows us to create reusable components that can work with a variety of data types while maintaing type safety
//<T>

function myFunction<T>(arg : T):T{
        return arg;
}

let numBer : number = 456;
let res = myFunction(numBer);
console.log(res);

let strValue : string = 'Hello';
console.log(myFunction(strValue));

//first element of an array 

function getFirstElement<T>(arr : T[]):T|undefined{
    return arr.length>0 ? arr[0] : undefined
}

let numArray : number[] = [1,2,3,4,5];
let firstNum : number | undefined = getFirstElement(numArray);
console.log(firstNum);

let strArray :string[] = ['red','green','blue','yellow'];
console.log(getFirstElement(strArray));

//function that swaps the position if two elements in an array using generics

//[1,2,3,4] , 0-2 => [3,2,1,4]

function swap<T>(arr: T[], index1:number, index2 : number):void{
    if(index1 <0 || index1 >=arr.length || index2 <0 || index2 >=arr.length){
        throw new Error('Invalid indices');
    }

    const temp = arr[index1];
    arr[index1]= arr[index2];
    arr[index2] = temp;
}

let numArr = [1,2,3,4];
swap(numArr, 0,2);
console.log(numArr);
