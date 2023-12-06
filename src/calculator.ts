interface ICalculator {
  add(x: number, y: number): number;
  sub(x: number, y: number): number;
  mul(x: number, y: number): number;
  div(x: number, y: number): number;
}
class Calculator implements ICalculator {
  add(x: number, y: number): number {
    return x + y;
  }

  sub(x: number, y: number): number {
    return x - y;
  }

  mul(x: number, y: number): number {
    return x * y;
  }

  div(x: number, y: number): number {
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
