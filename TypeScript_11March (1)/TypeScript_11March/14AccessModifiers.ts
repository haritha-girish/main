class Product{
    public brand : string; //brand : string 
    protected price : number;
    private details : string;

    constructor(brand : string, price : number, details : string){
        this.brand = brand;
        this.price = price;
        this.details = details
    }

    public getDescription():void{
            console.log(`This is a product with brand name ${this.brand}`)
    }

}

let product = new Product('iPhone',65000, 'This is a brand new phone');
console.log(product.brand);//can access public property brand
// console.log(product.price);// cannot access protected property via class instance 
// console.log(product.details); // Property 'details' is private and only accessible within class 'Product'.
product.getDescription();// can access public method 

class Stationary extends Product{

    getValue(){
        console.log(`The details are ${this.price}`)
    }//price is accessible but not details
}

let stationary = new Stationary('XYZ',1500,'This is a brand new product');
console.log(stationary.brand);//can access public property brand
console.log(stationary.getValue());
// console.log(stationary.details); //cannot access private property details 
// console.log(stationary.price)// cannot access protected property via class instance 
stationary.getDescription();// can access public method 