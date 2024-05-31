const express = require('express')
const storeRoutes = require('./routes/storeRoutes');
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument) );
app.use('/store', storeRoutes);
app.use('/', express.static('public'));

module.exports = app;