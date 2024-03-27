namespace Calculate {
    export namespace Arithmetic {
        export function square(a:number):number{
            return a*a;
        }
        export function add(a:number,b:number):number{
            return a+b;
        }
        export function multiply(a:number,b:number):number{
            return a*b;
        }
        export function substract(a:number,b:number):number{
            return a-b;
        }
        export function divide(a:number,b:number):number{
            return a/b;
        }

    }
}

let squ = Calculate.Arithmetic.square(16870);
console.log(squ);
console.log(Calculate.Arithmetic.add(1452,6874));
console.log(Calculate.Arithmetic.multiply(12354,875));
console.log(Calculate.Arithmetic.substract(45263,12542));
console.log(Calculate.Arithmetic.divide(458754,16))
