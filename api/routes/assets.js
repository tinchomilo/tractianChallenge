const { Router } = require('express')
const router = Router()

const { getAllAssets } = require('../controllers/assets');






router.get('/', getAllAssets )


module.exports = router