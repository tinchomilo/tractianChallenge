const { response } = require('express');
const Asset = require('../models/Asset');

const getAllAssets = async( req, res = response) => {

    try {
        const allAssets = await Asset.find()
        
        res.status(200).json({
            ok: true,
            msg: 'peticion get que retorna los assets',
            allAssets
        })
        
    } catch (error) {
        console.log( error)
        return res.status(400).json({
            ok: false,
            msg: 'algun error sucedio'
        })        
    }
}

const addAsset = async( req, res = response ) => {

    const { 
            name,
            img,
            description,
            model,
            owner,
            status,
            healthLevel,
            unit,
        } = req.body

        
    try {

        let newAsset = await Asset.findOne({ name })

        if( newAsset )
            return res.status(200).json({
                ok: false,
                msg: 'There is an asset with that name'
            })

        if( !name || !img || !description || !model|| !owner || !status || !healthLevel || !unit ) {
            return res.status(400).json({
                ok: false,
                msg: 'Faltan completar datos'
            })
        }

         newAsset = new Asset( req.body )

        await newAsset.save()

        res.status(200).json({
            ok: true,
            msg: 'peticion post que crea un nuevo asset',
            newAsset
        })

        
    } catch (error) {
        console.log( error )
        return res.status(500).json({
            ok: false,
            msg: 'Talk to the admin'
        })
        
    }    
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