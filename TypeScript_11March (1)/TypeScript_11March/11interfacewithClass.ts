//interface 
interface Product{
    name: string;
    price : number;
    getDescription() : string;
}

//class wants to implement interface -> implements -> class name implements interfacename 

class Laptop implements Product{
        //properties 
        name : string;
        price : number;
        screenSize : number;

        constructor(name: string, price : number, screenSize : number){
            this.name= name;
            this.price= price;
            this.screenSize= screenSize;
        }

        getDescription(): string {
            return `Laptop : ${this.name}
        Price :${this.price}
        Screen Size : ${this.screenSize} inches`
        }
}

class SmartPhone implements Product{
     //properties 
     name : string;
     price : number;
     brand : string;

     constructor(name:string,price:number,brand:string){
        this.name= name;
        this.price = price ;
        this.brand = brand;
     }

     getDescription(): string {
         return `Smartphone : ${this.name} 
    Price : ${this.price}  
    Brand :${this.brand}`
     }
}

let laptop = new Laptop('Dell XP',59999,13.3 );
let smartphone = new SmartPhone('iPhone 13', 45000,'Apple');

console.log(laptop);
console.log(smartphone);


console.log(laptop.getDescription());
console.log(smartphone.getDescription());