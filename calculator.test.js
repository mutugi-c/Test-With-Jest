const Calculator = require('./calculator');

describe('Calculator', () => {
    let calculator = 0;

    beforeEach(() => {
        calculator = new Calculator(2, 3);
    });

    describe('add', () => {
        it('returns the sum of two numbers', () => {
            expect(calculator.add()).toEqual(5);
        });
    });

    describe('subtract', () => {
        it('returns the difference of two numbers', () => {
            expect(calculator.subtract()).toEqual(1);
        });
    });

    describe('divide', () => {
        it('returns the quotient of two numbers', () => {
            expect(calculator.divide()).toEqual(1.5);
        });
    });

    describe('multiply', () => {
        it('returns the product of two numbers', () => {
            expect(calculator.multiply()).toEqual(6);
        });
    });
});
