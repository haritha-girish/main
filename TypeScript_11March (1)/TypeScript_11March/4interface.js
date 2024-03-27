//Interface describes the shape of an object , including its types of its properties & methods 
var student = {
    name: 'Rohan',
    age: 20,
    course: 'JavaScript'
};
var student1 = {
    name: 'Rohit',
    age: 20,
    course: 'TypeScript'
};
var student2 = {
    name: 'Ankita',
    age: 20,
    course: 'Angular'
};
var student3 = {
    name: 'Sheetal',
    age: 21,
    course: 'ReactJS',
    address: 'Gurugram',
    hobbies: ['Reading Books ', 'Cycling', 'Dancing'],
    info: function () {
        console.log('This is my information.....');
    }
};
student3.info();
console.log(student3.name);
