class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num2 - this.num1;
    }

    divide() {
        if (this.num1 !== 0)
            return this.num2 / this.num1;
    }

    multiply() {
        return this.num1 * this.num2;
    }
}

module.exports = Calculator;
