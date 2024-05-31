const express = require('express');
const calcController = require('../controllers/calculatorController')
const calculatorRouter = express.Router();


calculatorRouter.get('/add', (req, res) => {
    calcController.add(req, res);
})

calculatorRouter.get('/multiply', (req, res) => {
    calcController.multiply(req, res);
})

calculatorRouter.get('/subtract', (req, res) => {
    calcController.subtract(req, res);
})

calculatorRouter.get('/divide', (req, res) => {
    calcController.divide(req, res);
})

module.exports = calculatorRouter;