const { response } = require('express')


const getUsers = ( req, res = response ) => {


    res.status(200).json({
        ok: true,
        msg: 'get usuarios'
    })

}



module.exports = {
    getUsers
}


