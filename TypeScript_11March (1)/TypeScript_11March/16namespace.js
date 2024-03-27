var Calculate;
(function (Calculate) {
    var Arithmetic;
    (function (Arithmetic) {
        function square(a) {
            return a * a;
        }
        Arithmetic.square = square;
        function add(a, b) {
            return a + b;
        }
        Arithmetic.add = add;
        function multiply(a, b) {
            return a * b;
        }
        Arithmetic.multiply = multiply;
        function substract(a, b) {
            return a - b;
        }
        Arithmetic.substract = substract;
        function divide(a, b) {
            return a / b;
        }
        Arithmetic.divide = divide;
    })(Arithmetic = Calculate.Arithmetic || (Calculate.Arithmetic = {}));
})(Calculate || (Calculate = {}));
var squ = Calculate.Arithmetic.square(16870);
console.log(squ);
console.log(Calculate.Arithmetic.add(1452, 6874));
console.log(Calculate.Arithmetic.multiply(12354, 875));
console.log(Calculate.Arithmetic.substract(45263, 12542));
console.log(Calculate.Arithmetic.divide(458754, 16));
