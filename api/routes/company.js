/* 
    Rutas de company
    host + /api/company
 */

const { Router } = require('express');
const { addCompany } = require('../controllers/company');

const router = Router()


router.post('/', addCompany)


module.exports = router