class Student{
    //Properties 
    StudName : string;
    StudAge : number;
    StudAddress : string;
    Course : string;

    //constructor 
    constructor(name : string, age : number, address : string, course : string){
        this.StudName = name;
        this.StudAge =age ;
        this.StudAddress = address;
        this.Course = course;
        console.log('Constructor Method is always invoked!!');
    }

    Greeting():void{
        console.log(`Hello ${this.StudName}, You have successfully enrolled in ${this.Course} course!!`)
    }
}

let student1 = new Student('Ankit',20,'Pune','TypeScript');
console.log(student1);
console.log(`The name of the student is ${student1.StudName}`);
student1.Greeting();

let student2 = new Student('Ankita',20,'Gurugram','JavaScript');
console.log(student2);
console.log(`The name of the student is ${student2.StudName}`);
student2.Greeting();

let student3 = new Student('Rohan',20,'Kolkata','Angular');
console.log(student3);
console.log(`The name of the student is ${student3.StudName}`);
student3.Greeting();