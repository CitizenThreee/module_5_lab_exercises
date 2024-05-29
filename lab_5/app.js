const express = require('express')
const calculatorRoutes = require('./routes/calculatorRoutes');
const app = express()

app.use('/calculator', calculatorRoutes);
app.use('/', express.static('public'));

module.exports = app;