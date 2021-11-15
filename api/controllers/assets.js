const { response } = require('express');

const getAllAssets = ( req, res = response) => {

    try {
        
        res.status(200).json({
            ok: true,
            msg: 'peticion get que retorna los assets'
        })
        
    } catch (error) {
        console.log( error)
        return res.status(400).json({
            ok: false,
            msg: 'algun error sucedio'
        })
        
    }

}


module.exports = {
    getAllAssets
}