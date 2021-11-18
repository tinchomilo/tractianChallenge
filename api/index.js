const express = require('express');
const { dbConnection } = require('./database/config');

require('dotenv').config();

const app = express();

// database

dbConnection();

app.use( express.json() );

// rutas
app.use( '/api/auth', require('./routes/auth'))
app.use( '/api/assets', require('./routes/assets'))




app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})