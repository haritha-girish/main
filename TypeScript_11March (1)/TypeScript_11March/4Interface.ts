//Interface describes the shape of an object , including its types of its properties & methods 

interface studentDataType {
    name : string,
    age : number ,
    course ?: string ,

}
//extends -> inheritance 

interface SectionAdataType extends studentDataType{
    address : string;
    hobbies: any;
    info : ()=>void
}

let student : studentDataType = {
    name : 'Rohan',
    age : 20,
    course : 'JavaScript'
}
let student1 : studentDataType = {
    name : 'Rohit',
    age : 20,
    course : 'TypeScript'
}

let student2 : studentDataType = {
    name : 'Ankita',
    age : 20,
    course : 'Angular'
}


let student3 : SectionAdataType = {
    name : 'Sheetal',
    age : 21,
    course : 'ReactJS',
    address : 'Gurugram',
    hobbies : ['Reading Books ', 'Cycling', 'Dancing'],
    info : function(){
        console.log('This is my information.....')
    }
}

student3.info();
console.log(student3.name);