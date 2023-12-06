"use strict";
class Calculator {
    constructor() {
        this.add = (x, y) => x + y;
        this.sub = (x, y) => x - y;
        this.mul = (x, y) => x * y;
        this.div = (x, y) => {
            if (y === 0) {
                throw new Error("Cannot divide by zero");
            }
            return x / y;
        };
    }
}
const myCalculator = new Calculator();
console.log(myCalculator.add(25, 15));
console.log(myCalculator.sub(25, 15));
console.log(myCalculator.mul(25, 15));
console.log(myCalculator.div(25, 15));
console.log(myCalculator.div(25, 0));
