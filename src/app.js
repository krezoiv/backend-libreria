const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


const userRoutes = require('./api/routes/usuarios');
const ventasRoutes = require('./api/routes/ventas');
const negocioRoutes = require('./api/routes/negocio');
app.use('/user', userRoutes);
app.use('/ventas', ventasRoutes);
app.use('/negocio', negocioRoutes);

module.exports = app;