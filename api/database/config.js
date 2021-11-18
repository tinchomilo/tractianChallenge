const mongoose = require('mongoose');


const dbConnection = async () => {

    try {

        await mongoose.connect( process.env.DB_CNN )

        console.log( 'database online' )
        
    } catch (error) {
        console.log( error )
        throw Error( 'Error al momento de inicializar la BD' )
    }
}

module.exports = {
    dbConnection
}