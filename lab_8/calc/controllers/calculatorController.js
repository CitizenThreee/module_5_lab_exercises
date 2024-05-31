const calcLib = require('../libraries/calculatorLibrary') 
const calc = new calcLib();

const add = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = calc.add(num1, num2);
    res.status(200);
    res.json({result:sum});
}

const subtract = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = calc.subtract(num1, num2);
    res.status(200);
    res.json({result:sum});
}

const multiply = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = calc.multiply(num1, num2);
    res.status(200);
    res.json({result:sum});
}

const divide = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = calc.divide(num1, num2);
    res.status(200);
    res.json({result:sum});
}

module.exports = { add, subtract, multiply, divide }