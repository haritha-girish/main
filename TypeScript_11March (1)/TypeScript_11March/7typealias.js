var admin = {
    name: 'Shri',
    age: 25
};
console.log(admin);
var amount = 123654;
var data;
console.log(amount);
var Apair = { first: 100, second: 'Two Hundred' };
var Bpair = { first: 'Yes', second: true };
console.log(Apair, Bpair);
function filter(arr, filterF) {
    return arr.filter(filterF);
}
var numbers = [14, 51, 23, 64, 78, 26];
var evenNum = filter(numbers, function (item) { return item % 2 == 0; });
console.log(evenNum);
//mapping , reduce 
