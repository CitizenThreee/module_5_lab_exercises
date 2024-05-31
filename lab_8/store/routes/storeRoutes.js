const express = require('express');
const storeController = require('../controllers/storeController');
const storeRouter = express.Router();

storeRouter.get('/getProducts', (req, res) => {
    storeController.getProducts(req, res);
});

storeRouter.get('/setup', (req, res) => {
    storeController.setup(req, res);
});

module.exports = storeRouter;