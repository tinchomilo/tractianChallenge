const { response } = require('express');
const Company = require('../models/Company');


const addCompany = async (req, res = response ) => {

    try {
        
        const { name } = req.body
        
        let company = await Company.findOne({ name })

        if( company ){
            return res.status(200).json({
                ok: false,
                msg: 'there is a company with that name'
            })
        }

        company = new Company( req.body )
        await company.save()

        res.status(200).json({
            ok:true,
            company,
            msg:'company pots'
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'contact to the admin'
        })
        
    }


    


}

module.exports = {
    addCompany
}