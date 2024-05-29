const logging = require('./loggingLibrary');
const logger = new logging();

class Calculator {
    add(num1, num2) {
        const value = num1 + num2;
        logger.log(value);
        return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2;
        logger.log(value);
        return value;
    }

    divide(num1, num2) {
        const value = num1 / num2;
        logger.log(value);
        return value;
    }

    multiply(num1, num2) {
        const value = num1 * num2;
        logger.log(value);
        return value;
    }
}

module.exports = Calculator