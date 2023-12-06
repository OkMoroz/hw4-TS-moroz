"use strict";
class Calculator {
    add(x, y) {
        return x + y;
    }
    sub(x, y) {
        return x - y;
    }
    mul(x, y) {
        return x * y;
    }
    div(x, y) {
        if (y === 0) {
            throw new Error("Cannot divide by zero");
        }
        return x / y;
    }
}
const myCalculator = new Calculator();
console.log(myCalculator.add(25, 15));
console.log(myCalculator.sub(25, 15));
console.log(myCalculator.mul(25, 15));
console.log(myCalculator.div(25, 15));
console.log(myCalculator.div(25, 0));
