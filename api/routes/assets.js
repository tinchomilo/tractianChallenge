/* 
    Rutas de assets 
    host + /api/assets
 */

const { Router } = require('express')
const router = Router()

const { getAllAssets, addAsset, modifyAsset, deleteAsset } = require('../controllers/assets');

// obtener assets
router.get('/', getAllAssets )


// crear asset
router.post('/', addAsset )


// modificar assets
router.put('/:id', modifyAsset )


//eliminar asset
router.delete('/:id', deleteAsset )



module.exports = router