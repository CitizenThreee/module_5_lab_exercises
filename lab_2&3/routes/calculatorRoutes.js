const express = require('express');
const calculatorRouter = express.Router();

calculatorRouter.get('/add', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 + num2;
    res.status(200);
    res.json({result:sum})
})

calculatorRouter.get('/multiply', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 * num2;
    res.status(200);
    res.json({result:sum})
})

calculatorRouter.get('/subtract', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 - num2;
    res.status(200);
    res.json({result:sum})
})

calculatorRouter.get('/divide', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1 / num2;
    res.status(200);
    res.json({result:sum})
})

module.exports = calculatorRouter;