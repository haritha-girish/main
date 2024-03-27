var Student = /** @class */ (function () {
    //constructor 
    function Student(name, age, address, course) {
        this.StudName = name;
        this.StudAge = age;
        this.StudAddress = address;
        this.Course = course;
        console.log('Constructor Method is always invoked!!');
    }
    Student.prototype.Greeting = function () {
        console.log("Hello ".concat(this.StudName, ", You have successfully enrolled in ").concat(this.Course, " course!!"));
    };
    return Student;
}());
var student1 = new Student('Ankit', 20, 'Pune', 'TypeScript');
console.log(student1);
console.log("The name of the student is ".concat(student1.StudName));
student1.Greeting();
var student2 = new Student('Ankita', 20, 'Gurugram', 'JavaScript');
console.log(student2);
console.log("The name of the student is ".concat(student2.StudName));
student2.Greeting();
var student3 = new Student('Rohan', 20, 'Kolkata', 'Angular');
console.log(student3);
console.log("The name of the student is ".concat(student3.StudName));
student3.Greeting();
