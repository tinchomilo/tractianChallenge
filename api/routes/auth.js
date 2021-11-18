const { Router } = require('express');
const router = Router()

const { getUsers, createUser } = require('../controllers/auth');



router.get('/', getUsers)

router.post('/', createUser)







module.exports = router