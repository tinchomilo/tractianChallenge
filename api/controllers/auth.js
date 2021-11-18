const { response } = require('express')
const User = require('../models/User')



const getUsers = ( req, res = response ) => {


    res.status(200).json({
        ok: true,
        msg: 'get usuarios'
    })

}

const createUser = async ( req, res = response ) => {

    const { name, email } = req.body

    const newUser = new User( req.body )

    await newUser.save()

    res.status(200).json({
        ok: true,
        msg: 'post para crear user',
        name: newUser.name
    })


}



module.exports = {
    getUsers,
    createUser
}


