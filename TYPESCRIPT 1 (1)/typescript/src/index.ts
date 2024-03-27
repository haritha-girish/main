function Logger(target: Function){
    console.log(`Class ${target.name} is instantiated`);
}

@Logger
class ABC{
    constructor(){
        console.log('This is my constructor!!');
    }
}

//method 

function log(target : any, key : string ){
    console.log(`Method ${key} is called!!`);


}

class XYZ{
    @log
    exampleOfMethodDec(){
        console.log('Executing my Method....!!');
    }
}


