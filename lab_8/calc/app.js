const express = require('express')
const calculatorRoutes = require('./routes/calculatorRoutes');
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use( '/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument) );
app.use('/calculator', calculatorRoutes);
app.use('/', express.static('public'));

module.exports = app;