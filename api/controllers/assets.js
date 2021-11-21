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

const addAsset = ( req, res = response ) => {

    res.status(200).json({
        ok: true,
        msg: 'peticion post que crea un nuevo asset'
    })
}

const modifyAsset = ( req, res = response ) => {

    res.status(200).json({
        ok: true,
        msg: 'peticion modifica un asset'
    })
}

const deleteAsset = ( req, res = response ) => {

    res.status(200).json({
        ok: true,
        msg: 'peticion elimina un asset'
    })
}


module.exports = {
    getAllAssets,
    addAsset,
    modifyAsset,
    deleteAsset
}