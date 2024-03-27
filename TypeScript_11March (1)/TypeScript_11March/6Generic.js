//allows us to create reusable components that can work with a variety of data types while maintaing type safety
//<T>
function myFunction(arg) {
    return arg;
}
var numBer = 456;
var res = myFunction(numBer);
console.log(res);
var strValue = 'Hello';
console.log(myFunction(strValue));
//first element of an array 
function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
var numArray = [1, 2, 3, 4, 5];
var firstNum = getFirstElement(numArray);
console.log(firstNum);
var strArray = ['red', 'green', 'blue', 'yellow'];
console.log(getFirstElement(strArray));
//function that swaps the position if two elements in an array using generics
//[1,2,3,4] , 0-2 => [3,2,1,4]
function swap(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error('Invalid indices');
    }
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
var numArr = [1, 2, 3, 4];
swap(numArr, 0, 2);
console.log(numArr);
