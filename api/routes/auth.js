const { Router } = require('express');
const router = Router()

const { getUsers } = require('../controllers/auth');



router.get('/', getUsers)







module.exports = router