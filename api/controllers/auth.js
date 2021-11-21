const { response } = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt');



const getUsers = ( req, res = response ) => {


    res.status(200).json({
        ok: true,
        msg: 'get usuarios'
    })

}

const createUser = async ( req, res = response ) => {

    const { email, password } = req.body
    
    try {

        let newUser = await User.findOne({ email })

        if( newUser ){
            return res.status(400).json({
                ok: false,
                msg: 'There exists an email with that name'
            })
        }
        
        newUser = new User( req.body )

        await newUser.save()
        
        res.status(200).json({
            ok: true,
            newUser
        })
    } catch (error) {
        console.log( error )
        return res.status(500).json({
            ok: false,
            msg: 'contact to the admin'
        })        
    }
}

module.exports = {
    getUsers,
    createUser
}


