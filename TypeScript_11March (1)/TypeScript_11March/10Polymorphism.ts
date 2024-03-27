class Employee{
    //properties
    EmpName : string;
    EmpAge : number;
    EmpSalary : number;

    //constructor
    constructor(name:string,age:number, salary : number){
        this.EmpName = name;
        this.EmpAge = age;
        this.EmpSalary = salary;
        console.log('Constructor Method : Employee Class')
    }

    //method
    info():void{
        console.log(`**Employee Details**
        Employee Name : ${this.EmpName}
        Employee Age : ${this.EmpAge}
        Employee Salary : ${this.EmpSalary}`)
    }
}

class Manager extends Employee{
    //property 
    EmpAddress : string;

    //constructor
    constructor(name:string,age:number,salary:number,address:string){
        //call the constructor method of parent class
        super(name,age,salary);
        this.EmpAddress = address;
    }

     //method-> Overriding -> flexibility in code 
        info():void{
        console.log(`**Manager Details**
        Manager Name : ${this.EmpName}
        Manager Age : ${this.EmpAge}
        Manager Salary : ${this.EmpSalary}
        Manager Address : ${this.EmpAddress}`)
        super.info(); // calling the method of parent class
    }
}

//Object of Manager class(subclass)
let manager1 = new Manager('Aman',45,875421.40,'Banagalore');
console.log(manager1);
// manager1.info();
manager1.info();